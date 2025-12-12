// components/StrategyModal.js
import React, { useEffect, useState, useMemo } from "react";
// Assuming this CSS file exists in your project structure
import styles from "./StrategyModal.module.css";

const StrategyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // FIXED: Use jobRole and workExperience for consistency
    jobRole: "",
    workExperience: "",
  });

  const [firstSlotUtc, setFirstSlotUtc] = useState(null);
  const [loading, setLoading] = useState(true); // Start loading immediately on mount/open
  const [isBooking, setIsBooking] = useState(false); // For form submission
  const [success, setSuccess] = useState(false);

  // Memoize the human-readable slot time
  const humanTime = useMemo(() => {
    if (!firstSlotUtc) return null;
    try {
      const date = new Date(firstSlotUtc);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      })}`;
    } catch (e) {
      return "Invalid Time Slot";
    }
  }, [firstSlotUtc]);

  // Effect to fetch the first available slot when the modal opens
  useEffect(() => {
    if (!isOpen) {
      // Reset state when closing
      setLoading(true);
      setSuccess(false);
      setFirstSlotUtc(null);
      return;
    }

    const fetchSlot = async () => {
      setLoading(true);
      try {
        // Updated API path
        const res = await fetch("/api/get-slot");
        const data = await res.json();

        if (data.firstSlotUtc) {
          setFirstSlotUtc(data.firstSlotUtc);
        } else {
          // Handle case where API returns ok but no slots
          setFirstSlotUtc(null);
        }
      } catch (error) {
        console.error("Failed to load slots", error);
        alert("Failed to check for available slots. Please check server logs.");
        setFirstSlotUtc(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSlot();
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstSlotUtc)
      return alert("No time slots available right now. Please reload.");

    setIsBooking(true);

    try {
      // 1. Get user's timezone automatically
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // 2. Call the booking API (Updated API path)
      const res = await fetch("/api/book-slot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // Fixed variable names passed to API
          jobRole: formData.jobRole,
          workExperience: formData.workExperience,
          startTimeUtc: firstSlotUtc,
          timezone: userTimezone,
        }),
      });

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.error || "Booking failed on the server.");

      // 3. Handle Success
      setSuccess(true);

      // Optional: Close modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      alert("Booking failed: " + error.message);
    } finally {
      setIsBooking(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Success Message View */}
        {success ? (
          <div className={styles.successWrapper}>
            <svg
              width="64"
              height="64"
              fill="none"
              stroke="#10B981"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>Booking Confirmed!</h3>
            <p>Check your email for the invite details.</p>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.iconWrapper}>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h2 className={styles.title}>Book Your Strategy Call</h2>
              <p className={styles.subtitle}>
                {loading
                  ? "Checking availability..."
                  : firstSlotUtc
                  ? `Next Available Slot: ${humanTime}`
                  : "No slots available in the next 7 days. Please try again later."}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className={styles.input}
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={loading || !firstSlotUtc || isBooking}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  className={styles.input}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading || !firstSlotUtc || isBooking}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={loading || !firstSlotUtc || isBooking}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Current Job Role</label>
                <input
                  name="jobRole" // FIXED NAME
                  type="text"
                  required
                  className={styles.input}
                  value={formData.jobRole}
                  onChange={handleInputChange}
                  disabled={loading || !firstSlotUtc || isBooking}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Work Experience</label>
                <select
                  name="workExperience" // FIXED NAME
                  required
                  className={styles.select}
                  value={formData.workExperience}
                  onChange={handleInputChange}
                  disabled={loading || !firstSlotUtc || isBooking}
                >
                  <option value="" disabled>
                    Select experience
                  </option>
                  <option value="Fresher / Student">Fresher / Student</option>
                  <option value="1 - 3 Years">1 - 3 Years</option>
                  <option value="4 - 6 Years">4 - 6 Years</option>
                  <option value="7+ Years">7+ Years</option>
                </select>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading || isBooking || !firstSlotUtc} // Disable if loading, booking, or no slot is found
              >
                {loading
                  ? "Checking Slots..."
                  : isBooking
                  ? "Booking..."
                  : "Confirm Booking"}
              </button>

              <p className={styles.footerText}>
                By booking, you agree to receive a calendar invitation.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default StrategyModal;
