import express from "express";
import urlRoutes from "./Routes/url.js";
import connectDB from "./config/dbconnect.js";
import dotenv from "dotenv";
import URL from "./Models/urlModel.js";
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use("/url", urlRoutes);

app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true },
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectURL);
});
app.listen(process.env.PORT);
