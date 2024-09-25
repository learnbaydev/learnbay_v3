import { getSession } from "next-auth/react";
import axios from "axios";
import dbConnect from "../../utils/dbConnect"; // Create a dbConnect.js file to handle DB connection
import SEOLog from "../../models/SEOLog"; // Import the model

const SEO_LOGS_API_URL = "https://searchconsole.googleapis.com/v1/sites/https://www.learnbay.co"; // Update with your site URL

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const accessToken = session.accessToken;

  try {
    // Connect to the database
    await dbConnect();

    // Fetching crawled URLs from Google Search Console
    const crawledUrlsResponse = await axios.get(`${SEO_LOGS_API_URL}/searchAnalytics/query`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        dimensions: ["page"],
        rowLimit: 10,
      },
    });

    const crawledUrls = crawledUrlsResponse.data.rows || []; // Safeguard against undefined

    // Save the crawled URLs to MongoDB
    const newLog = new SEOLog({ crawledUrls });
    await newLog.save();

    // Respond with the fetched crawled URLs
    res.status(200).json({ crawledUrls });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching SEO logs", error: error.message });
  }
}
