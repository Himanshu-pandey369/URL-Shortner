import express from "express";
import { NewGeneUrl } from "../controllers/urlController.js";
const router = express.Router();

router.post("/", NewGeneUrl);

export default router;
