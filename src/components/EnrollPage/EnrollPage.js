import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./EnrollPage.module.css";

const products = [
  { name: "Data Science and AI Master Certification Program", price: 129000 },
  { name: "Advanced AI and ML Certification Program", price: 110000 },
  {
    name: "Data Science & AI Certification Program For Managers and Leaders",
    price: 110000,
  },
  { name: "Business Analytics Master Certification Program", price: 90000 },
  { name: "Advanced Data Science and AI Certification", price: 99000 },
  { name: "Data Analytics Certification Program", price: 80000 },
  { name: "HR Analytics Certification Program", price: 75000 },
  { name: "Marketing Analytics Certification Program", price: 75000 },
  {
    name: "Data Science & AI Certification Program for BFSI Professionals",
    price: 90000,
  },
  { name: "Master's Degree in CS: Data Science and AI", price: 250000 },
  { name: "Data Science and AI Program for Freshers", price: 70000 },
  { name: "Data Science Foundation Program", price: 70000 },
  { name: "Cloud Computing & DevOps Certification Program", price: 80000 },
  { name: "Software Developer Certification", price: 115000 },
];

const coupons = {
  "10OFF": 0.1,
  "20OFF": 0.2,
  "30OFF": 0.3,
  "40OFF": 0.4,
};

function EnrollPage() {
  const [mobile, setMobile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCoupon, setSelectedCoupon] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let width = window.innerWidth;
    setMobile(width < 481);
  }, []);

  const handleProductChange = (e) => {
    const selectedProductIndex = e.target.value;
    setSelectedProduct(products[selectedProductIndex]);
    setTotalPrice(products[selectedProductIndex].price * 1.18);
  };

  const handleCouponChange = (e) => {
    const enteredCoupon = e.target.value.toUpperCase();
    setSelectedCoupon(enteredCoupon);
    if (coupons.hasOwnProperty(enteredCoupon) && selectedProduct) {
      const discount = coupons[enteredCoupon];
      setTotalPrice(selectedProduct.price * (1 - discount) * 1.18);
    }
  };

  const handlePayment = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice }),
    };

    try {
      const response = await fetch("/api/razorpay", requestOptions);
      if (!response.ok) {
        throw new Error("Failed to create Razorpay order");
      }
      const data = await response.json();
      window.location.href = data.checkout_url;
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment. Please try again.");
    }
  };
  const makePayment = async () => {
    try {
      const res = await initializeRazorpay();
      if (!res) {
        throw new Error("Razorpay SDK failed to load");
      }

      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalPrice,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Razorpay details");
      }

      const data = await response.json();
      console.log(data.amount, "fsas");
      const options = {
        key: process.env.RAZORPAY_KEY,
        name: "Learnbay",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your purchase",
        image: "https://example.com/your_logo.png", // Update with your logo URL
        handler: function (response) {
          // Handle successful payment
          alert(
            "Payment successful! Payment ID: " + response.razorpay_payment_id
          );
          // Redirect to Razorpay dashboard
          window.location.href = "/enroll";
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error making payment:", error);
      alert("Error making payment. Please try again.");
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <section className={styles.MainDiv}>
      <div className={styles.logoImage}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
          alt="Learnbay"
          quality={100}
          priority
          style={{ objectFit: "contain" }}
          width={mobile ? "135" : "230"}
          height={60}
        />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formLeft}>
          <div className="imgWrapper">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbay-main.webp"
              width="580"
              height="450"
              priority
              quality={40}
              alt="data science course"
            />
          </div>
        </div>
        <div className={styles.formRight}>
          <h4 className={styles.Text}>Enroll Now</h4>
          <form>
            <div className={styles.divInput}>
              <label className={styles.Label}>
                Name<span className={styles.star}> *</span>
              </label>
              <input
                type="text"
                className={styles.InputField}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.divInput}>
              <label className={styles.Label}>
                Email<span className={styles.star}> *</span>
              </label>
              <input
                type="email"
                value={email}
                className={styles.InputField}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.divInput}>
              <label className={styles.Label}>
                Phone<span className={styles.star}> *</span>
              </label>
              <input
                type="tel"
                value={phone}
                className={styles.InputField}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.divInput}>
              <label className={styles.Label}>
                Select Product<span className={styles.star}> *</span>
              </label>
              <select
                onChange={handleProductChange}
                className={styles.InputField}
              >
                <option>Select Product</option>
                {products.map((product, index) => (
                  <option key={index} value={index}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            {selectedProduct && (
              <div className={styles.divInput}>
                <label className={styles.Label}>
                  Price (Including 18% GST)
                  <span className={styles.star}> *</span>
                </label>
                <span className={styles.price}>
                  {"₹" + (selectedProduct.price * 1.18).toFixed(2)}
                </span>
              </div>
            )}
            <div className={styles.divInput}>
              <label className={styles.Label}>Coupon Code</label>
              <input
                type="text"
                className={styles.InputField}
                value={selectedCoupon}
                onChange={handleCouponChange}
              />
            </div>
            <div className={styles.divInput}>
              <label className={styles.Label}>Total Price</label>
              <span className={styles.price}>
                {"₹" + totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              type="button"
              onClick={makePayment}
              className={styles.button}
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EnrollPage;
