import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

const SEOLLogsPage = () => {
  const { data: session } = useSession();
  const [seoLogs, setSeoLogs] = useState(null);

  useEffect(() => {
    if (session) {
      fetch("/api/seo-logs")
        .then((res) => res.json())
        .then((data) => setSeoLogs(data))
        .catch((error) => console.error("Error fetching SEO logs:", error));
    }
  }, [session]);

  if (!session) {
    return (
      <div>
        <h1>Login to view SEO logs</h1>
        <button onClick={() => signIn()}>Sign in with Google</button>
      </div>
    );
  }

  return (
    <div>
      <h1>SEO Logs</h1>
      <pre>{JSON.stringify(seoLogs, null, 2)}</pre>
    </div>
  );
};

export default SEOLLogsPage;
