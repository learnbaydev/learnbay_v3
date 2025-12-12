// pages/api/slots/first.js

export default async function handler(req, res) {
  if (req.method !== "GET") {
    // Correct file name /api/slots/first to handle GET requests
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { CALENDLY_PAT, CALENDLY_EVENT_TYPE_URI } = process.env;

  if (!CALENDLY_PAT || !CALENDLY_EVENT_TYPE_URI) {
    return res
      .status(500)
      .json({ error: "Server misconfiguration: Missing Calendly env vars" });
  }

  try {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 1);
    const endTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // Look ahead 7 days

    const params = new URLSearchParams({
      event_type: CALENDLY_EVENT_TYPE_URI,
      start_time: now.toISOString(),
      end_time: endTime.toISOString(),
    });

    const response = await fetch(
      `https://api.calendly.com/event_type_available_times?${params}`,
      {
        headers: {
          Authorization: `Bearer ${CALENDLY_PAT}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Calendly API error:", errorText);
      throw new Error(`Calendly API error: ${response.statusText}`);
    }

    const data = await response.json();
    const availableTimes = data.collection || [];

    // Return only the first slot time (UTC ISO string)
    return res.status(200).json({
      firstSlotUtc:
        availableTimes.length > 0 ? availableTimes[0].start_time : null,
      message:
        availableTimes.length > 0
          ? "Slot fetched successfully"
          : "No slots available",
    });
  } catch (error) {
    console.error("Failed to fetch slots:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch available slots from Calendly" });
  }
}
