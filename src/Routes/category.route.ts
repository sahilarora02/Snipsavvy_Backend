import express, { Router } from "express";
import { createCategory, fetchCategoriesByWorkspace, updateCategory } from "../controllers/category.controller";
const categoryRouter: Router = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/:workspace_id",fetchCategoriesByWorkspace)
categoryRouter.put("/:workspace_id/:category_id",updateCategory)

module.exports = categoryRouter;
