import express from "express";
import { NewGeneUrl } from "../controllers/urlController.js";
import { handleGetAnalytics } from "../controllers/urlController.js";
const router = express.Router();

router.post("/", NewGeneUrl);
router.get("/analytics/:shortId", handleGetAnalytics);
export default router;
