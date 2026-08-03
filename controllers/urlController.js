import { nanoid } from "nanoid";
import URL from "../Models/urlModel.js";

export const NewGeneUrl = async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  const shortId = nanoid(8);

  await URL.create({
    shortId,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
};

export const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;

  const result = await URL.findOne({ shortId: shortId });

  if (!result) {
    return res.status(404).json({
      error: "Short URL not found",
    });
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
