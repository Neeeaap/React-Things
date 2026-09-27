import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://joenepnep_db_user:wzBxjeEdkUvBrpB2@cluster0.gj3bqtn.mongodb.net/meetups",
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  if (req.method === "POST") {
    const data = req.body;
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
