import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "pages/data", "data.json");
}
function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export default function handler(req, res) {
  const filePath = buildPath();
  const { event_categories, allEvents } = extractData(filePath);
  const { method } = req;

  if (!allEvents) {
    return res.status(404).json({ message: "No events found" });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email" });
      return;
    }

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(409).json({ message: "You are already registered" });
          return event;
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }
      return event;
    });
    fs.writeFileSync(
      filePath,
      JSON.stringify({ event_categories, allEvents: newAllEvents })
    );

    res
      .status(200)
      .json({ message: `You are now registered with email :${email}` });
  }
}
