// api/new-meetup
// POST  /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    //const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://massimo:fxYlwrFHOjprqkqb@cluster0.4lwho.mongodb.net/meetups?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetupsColl");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
}

export default handler;
