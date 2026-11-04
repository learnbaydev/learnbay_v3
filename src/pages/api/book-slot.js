// pages/api/slots/book.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { CALENDLY_PAT, CALENDLY_EVENT_TYPE_URI } = process.env;

  if (!CALENDLY_PAT || !CALENDLY_EVENT_TYPE_URI) {
    return res
      .status(500)
      .json({ error: "Missing Calendly environment variables" });
  }

  // FIXED VARIABLE NAMES: jobRole and workExperience
  const {
    name,
    email,
    phone,
    jobRole,
    workExperience,
    startTimeUtc,
    timezone,
  } = req.body;

  // Basic server-side validation
  if (!name || !email || !startTimeUtc || !timezone) {
    return res.status(400).json({
      error: "Missing required fields (name, email, startTimeUtc, timezone)",
    });
  }

  const requestBody = {
    event_type: CALENDLY_EVENT_TYPE_URI,
    start_time: startTimeUtc,
    invitee: {
      name: name,
      email: email,
      timezone: timezone,
    },
    location: {
      kind: "custom",
      location: "https://zoom.us/meeting/register/DXYhp98PQwaLA9qI79McaA",
    },
    questions_and_answers: [
      {
        question: "Current Job Role",
        answer: jobRole, // FIXED
        position: 0,
      },
      {
        question: "Work Experience",
        answer: workExperience, // FIXED
        position: 1,
      },

      {
        question: "Phone Number",
        answer: phone,
        position: 2,
      },
    ],
  };

  try {
    const response = await fetch("https://api.calendly.com/invitees", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CALENDLY_PAT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Calendly booking error:", errorText);
      throw new Error(`Failed to book meeting: ${response.statusText}`);
    }

    const data = await response.json();

    return res.status(200).json({
      success: true,
      booking: {
        name: data.resource.name,
        email: data.resource.email,
        cancel_url: data.resource.cancel_url,
        reschedule_url: data.resource.reschedule_url,
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
}
