import React from 'react'
import  styles from "./ToolsCovered.module.css"
import Image from 'next/image'

function ToolsCovered() {
  return (
    <div>
      <div className={styles.toolmain}>
        <h2>Programming Languages & Tools Covered</h2>
        <Image
        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/toolscover.webp"
        width={1200}
        height={400}
        loading='lazy'
        
        
        />


      </div>
      <div>
      
      <div className={styles.toolmobile}>
        <Image
        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tools-cover-mobileview.webp"
        width={400}
        height={400}
        loading='lazy'
        
        
        />


      </div>
      </div>


      
    </div>
  )
}

export default ToolsCovered
