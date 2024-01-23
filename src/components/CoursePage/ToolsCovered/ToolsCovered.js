import React from "react";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";

function ToolsCovered({ devops, mbldevops, foundation, MarketingHR }) {
  return (
    <div>
      <div className={styles.toolmain}>
        <h2>Programming Languages & Tools Covered</h2>
        {MarketingHR ? (
          <Image
            src="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/frame_278_1x.webp"
            width={1200}
            height={400}
            loading="lazy"
            alt="tools covered"
          />
        ) : (
          <>
            {foundation ? (
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/group_796.webp"
                width={1200}
                height={400}
                loading="lazy"
                alt="tools covered"
              />
            ) : (
              <>
                {devops ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-tools-min.webp"
                    width={1200}
                    height={400}
                    loading="lazy"
                    alt="tools covered"
                  />
                ) : (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/toolscover.webp"
                    width={1200}
                    height={400}
                    loading="lazy"
                    alt="tools covered"
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
      <div>
        <div className={styles.toolmobile}>
          <div className="imgWrapper">
            {MarketingHR ? (
              <Image
              src="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/Group+798.webp"
              width={400}
              height={400}
              loading="lazy"
              alt="tools covered"
            />
            ) : (
              <>
                {foundation ? (
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/group_797+(1).webp"
                    width={400}
                    height={400}
                    loading="lazy"
                    alt="tools covered"
                  />
                ) : (
                  <>
                    {mbldevops ? (
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/devops-toolmobile-min.webp"
                        width={400}
                        height={400}
                        loading="lazy"
                        alt="tools covered"
                      />
                    ) : (
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/tools-cover-mobileview.webp"
                        width={400}
                        height={400}
                        loading="lazy"
                        alt="tools covered"
                      />
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsCovered;
