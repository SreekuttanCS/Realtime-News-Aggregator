import express from "express";
import {
  createNews,
  deleteNews,
  getFetchedNews,
  getSingleNews,
  getUserNews,
  updateNews,
} from "../controller/newsController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/fetchednews", getFetchedNews);
router.post("/create", protect, createNews);
router.get("/fetchnews", getUserNews);
router.get("/:id", getSingleNews);
router.put("/:id", protect, updateNews);
router.delete("/:id", protect, deleteNews);
export default router;
