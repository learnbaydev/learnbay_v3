export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { CALENDLY_PAT, CALENDLY_EVENT_TYPE_URI } = process.env;

  if (!CALENDLY_PAT || !CALENDLY_EVENT_TYPE_URI) {
    return res
      .status(500)
      .json({ error: "Server misconfiguration: Missing env vars" });
  }

  try {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 1); // Start looking from 1 min in future
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
      throw new Error(`Calendly API error: ${response.statusText}`);
    }

    const data = await response.json();
    const availableTimes = data.collection || [];

    return res.status(200).json({
      firstSlot:
        availableTimes.length > 0 ? availableTimes[0].start_time : null,
      availableTimes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch slots" });
  }
}
