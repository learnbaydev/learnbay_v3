import { useEffect, useState, useMemo } from "react";
import styles from "./ThankYouAds.module.css";
const ThankYouAds = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobRole: "",
    workExperience: "",
  });

  const [firstSlotUtc, setFirstSlotUtc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  // Email regex (simple & safe)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Indian mobile number regex
  const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!emailRegex.test(value)) {
        error = "Please enter a valid email address";
      }
    }

    if (name === "phone") {
      if (!phoneRegex.test(value)) {
        error = "Enter a valid 10-digit mobile number";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

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

  useEffect(() => {
    // if (!isOpen) {
    //   setLoading(true);
    //   setSuccess(false);
    //   setFirstSlotUtc(null);
    //   return;
    // }

    const fetchSlot = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/get-slot");
        const data = await res.json();

        if (data.firstSlotUtc) {
          setFirstSlotUtc(data.firstSlotUtc);
        } else {
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
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Run validation for email & phone
    if (name === "email" || name === "phone") {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Final validation check
    if (errors.email || errors.phone) {
      return;
    }

    if (!firstSlotUtc)
      return alert("No time slots available right now. Please reload.");

    setIsBooking(true);

    try {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const res = await fetch("/api/book-slot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          jobRole: formData.jobRole,
          workExperience: formData.workExperience,
          startTimeUtc: firstSlotUtc,
          timezone: userTimezone,
        }),
      });

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.error || "Booking failed on the server.");

      setSuccess(true);

      setTimeout(() => {
        // onClose();
      }, 3000);
    } catch (error) {
      alert("Booking failed: " + error.message);
    } finally {
      setIsBooking(false);
    }
  };

  //   if (!isOpen) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px",
      }}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
              <h2 className={styles.title}>Book Your Demo Call</h2>
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
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={loading || !firstSlotUtc || isBooking}
                />
                {errors.phone && (
                  <span className={styles.errorText}>{errors.phone}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Current Job Role</label>
                <input
                  name="jobRole"
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
                  name="workExperience"
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
                disabled={
                  loading ||
                  isBooking ||
                  !firstSlotUtc ||
                  errors.email ||
                  errors.phone
                }
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

export default ThankYouAds;
