import React, { useEffect, useState } from "react";
import styles from "./StrategyModal.module.css";

const StrategyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
  });

  const [firstSlot, setFirstSlot] = useState(null);
  const [loading, setLoading] = useState(false); // For checking slots
  const [booking, setBooking] = useState(false); // For submitting form
  const [success, setSuccess] = useState(false); // Success state

  // Reset state when modal opens
  useEffect(() => {
    if (!isOpen) return;
    setSuccess(false);

    const fetchSlot = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/get-slot");
        const data = await res.json();
        if (data.firstSlot) setFirstSlot(data.firstSlot);
      } catch (error) {
        console.error("Failed to load slots", error);
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
    if (!firstSlot) return alert("No time slots available right now.");

    setBooking(true);

    try {
      // 1. Get user's timezone automatically
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // 2. Call our Next.js API
      const res = await fetch("/api/book-slot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          startTimeUtc: firstSlot, // The slot we fetched earlier
          timezone: userTimezone,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Booking failed");

      // 3. Handle Success
      console.log("Booking Successful:", data);
      setSuccess(true);

      // Optional: Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          experience: "",
        });
      }, 3000);
    } catch (error) {
      alert("Booking failed: " + error.message);
    } finally {
      setBooking(false);
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
                  : firstSlot
                  ? `Next Available: ${new Date(
                      firstSlot
                    ).toLocaleDateString()} ${new Date(
                      firstSlot
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`
                  : "Cloud & DevOps Roadmap: 2026 Job Roles"}
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
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Current Job Role</label>
                <input
                  name="role"
                  type="text"
                  required
                  className={styles.input}
                  value={formData.role}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Work Experience</label>
                <select
                  name="experience"
                  required
                  className={styles.select}
                  value={formData.experience}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select experience
                  </option>
                  <option value="fresher">Fresher / Student</option>
                  <option value="1-3">1 - 3 Years</option>
                  <option value="4-6">4 - 6 Years</option>
                  <option value="7+">7+ Years</option>
                </select>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={loading || booking || !firstSlot}
              >
                {booking ? "Booking..." : "Confirm Booking"}
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
