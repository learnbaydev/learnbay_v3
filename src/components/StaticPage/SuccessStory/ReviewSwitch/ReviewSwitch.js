import React from 'react'
import Styles from './ReviewSwitch.module.css'
import Image from "next/image";
function ReviewSwitch() {
  return (
   <section className={Styles.container}>
    <h4>Switchup review</h4>
    <div className={Styles.BoxDiv}>
        <div className="imgWrapper">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Switch-review-1png-min.webp"
          width={562}
          height={538}
        />
        </div>
        <div className="imgWrapper">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Switch-review-2-min.webp"
          width={562}
          height={538}
        />
        </div>
        <div className="imgWrapper">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Switch-review-3-min.webp"
          width={562}
          height={538}
        />
        </div>
    </div>
   </section>
  )
}
export default ReviewSwitch