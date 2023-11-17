import React from 'react'
import Styles from './ReviewCourse.module.css'
import Image from "next/image";
function ReviewCourse() {
  return (
   <section className={Styles.container}>
    <h4>Course Report review</h4>
    <div className={Styles.BoxDiv}>
        <div className="imgWrapper">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/course-report-1-min.webp"
          width={798}
          height={542}
        />
        </div>
        <div className="imgWrapper">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/course-report-2-min.webp"
          width={798}
          height={542}
        />
        </div>
    </div>
   </section>
  )
}
export default ReviewCourse;