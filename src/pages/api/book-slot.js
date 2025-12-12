// pages/api/book-slot.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { CALENDLY_PAT, CALENDLY_EVENT_TYPE_URI } = process.env;

  if (!CALENDLY_PAT || !CALENDLY_EVENT_TYPE_URI) {
    return res
      .status(500)
      .json({ error: "Missing Calendly environment variables" });
  }

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
  if (!name || !email || !startTimeUtc) {
    return res.status(400).json({ error: "Missing required fields" });
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
        question: "Work Experience",
        answer: workExperience,
        position: 0,
      },
      {
        question: "Current Job Role",
        answer: jobRole,
        position: 1,
      },

      {
        question: "Phone Number ", // Note: Ensure this matches your Calendly config exactly (including space if present)
        answer: phone,
        position: 2,
      },
    ],
  };

  try {
    console.log("Booking invitee...", JSON.stringify(requestBody, null, 2));

    // NOTE: Ensure this endpoint matches your specific Calendly API use case.
    // Standard V2 often uses POST /scheduled_events to create one-off events
    // or requires specific UUIDs to add invitees.
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
      throw new Error("Failed to book meeting");
    }

    const data = await response.json();

    // Return sanitized data to frontend
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
