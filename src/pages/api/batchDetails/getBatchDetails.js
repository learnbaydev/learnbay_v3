import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
  const { daysInfo, dateInfo, timeInfo, page } = req.body;
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    try {
      const result = await db.collection("BatchDetails").insertOne({
        daysInfo: daysInfo,
        dateInfo: dateInfo,
        timeInfo: timeInfo,
        page: page,
      });
    } catch (error) {
      console.log("cccc", error);
    }
  }
}
