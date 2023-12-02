import React from "react";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";

function ToolsCovered({devops, mbldevops}) {
  return (
    <div>
      <div className={styles.toolmain}>
        <h2>Programming Languages & Tools Covered</h2>
        { devops ?(
          <Image 
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-tools-min.webp"
          width={1200}
          height={400}
          loading="lazy"
          alt="tools covered"
        />
        ):(
          <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/toolscover.webp"
          width={1200}
          height={400}
          loading="lazy"
          alt="tools covered"
        />
        )}
        
      </div>
      <div>
        <div className={styles.toolmobile}>
          <div className="imgWrapper">
            {mbldevops ?(
              <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-toolmobile-min.webp"
              width={400}
              height={400}
              loading="lazy"
              alt="tools covered"
            />

            ):(

              <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/tools-cover-mobileview.webp"
              width={400}
              height={400}
              loading="lazy"
              alt="tools covered"
            />
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsCovered;
