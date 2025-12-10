// lib/calendly.js

const CALENDLY_PAT = process.env.CALENDLY_PAT;
const CALENDLY_EVENT_TYPE_URI = process.env.CALENDLY_EVENT_TYPE_URI;

/**
 * Fetches the first available slot in the next 7 days
 */
export async function getFirstAvailableSlot() {
  if (!CALENDLY_PAT || !CALENDLY_EVENT_TYPE_URI) {
    throw new Error("Missing required Calendly environment variables");
  }

  const now = new Date();
  now.setMinutes(now.getMinutes() + 1);

  // Look ahead 7 days
  const endTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  const params = new URLSearchParams({
    event_type: CALENDLY_EVENT_TYPE_URI,
    start_time: now.toISOString(),
    end_time: endTime.toISOString(),
  });

  console.log("Fetching available times...");

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
    const error = await response.text();
    console.error("Calendly API error:", error);
    throw new Error("Failed to fetch available times from Calendly");
  }

  const data = await response.json();
  const availableTimes = data.collection || [];

  if (availableTimes.length === 0) {
    throw new Error("No available time slots found in the next 7 days");
  }

  return availableTimes[0].start_time;
}

/**
 * Books the invitee into a specific slot
 */
export async function bookInvitee(params) {
  if (!CALENDLY_PAT || !CALENDLY_EVENT_TYPE_URI) {
    throw new Error("Missing required Calendly environment variables");
  }

  // NOTE: Ensure your question positions match your actual Calendly event setup
  const requestBody = {
    event_type: CALENDLY_EVENT_TYPE_URI,
    start_time: params.startTimeUtc,
    invitee: {
      name: params.name,
      email: params.email,
      timezone: params.timezone,
    },
    location: {
      kind: "custom",
      location: "https://zoom.us/meeting/register/PH079oUGT_GqtPqozmYK4g", // Your hardcoded zoom link
    },
    questions_and_answers: [
      {
        question: "Current Job Role",
        answer: params.jobRole,
        position: 0,
      },
      {
        question: "Work Experience",
        answer: params.workExperience,
        position: 1,
      },
      {
        question: "Phone Number ",
        answer: params.phone,
        position: 2,
      },
    ],
  };

  console.log("Booking invitee...");

  const response = await fetch("https://api.calendly.com/scheduled_events", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CALENDLY_PAT}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Calendly booking error:", error);
    throw new Error("Failed to book the meeting with Calendly");
  }

  const data = await response.json();

  return {
    name: data.resource.name,
    email: data.resource.email,
    timezone: data.resource.timezone || params.timezone,
    cancel_url: data.resource.cancel_url,
    reschedule_url: data.resource.reschedule_url,
  };
}

/**
 * Main orchestrator function
 */
export async function autoBookCalendly(params) {
  // 1. Get the slot
  const startTimeUtc = await getFirstAvailableSlot();

  // 2. Book the slot
  const booking = await bookInvitee({
    name: params.name,
    email: params.email,
    timezone: params.timezone,
    startTimeUtc,
    phone: params.phone,
    jobRole: params.jobRole,
    workExperience: params.workExperience,
  });

  // 3. Format date for human readability
  const startDate = new Date(startTimeUtc);
  const humanDate = startDate.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: params.timezone,
  });

  return {
    name: booking.name,
    email: booking.email,
    start_time_utc: startTimeUtc,
    start_time_human: humanDate,
    timezone: booking.timezone,
    cancel_url: booking.cancel_url,
    reschedule_url: booking.reschedule_url,
  };
}
