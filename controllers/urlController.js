import { nanoid } from "nanoid";
import URL from "../Models/urlModel.js";

export const NewGeneUrl = async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const srtID = nanoid();
  await URL.create({
    shortID: srtID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: srtID });
};
