import {
  addSnippet,
  delete_snippet,
  getSnippets,
  shareSnippet,
} from "../controllers/snippet.controller";
import express, { Router } from "express";
const snippet: Router = express.Router();

snippet.post("/", addSnippet);
snippet.get("/", getSnippets);
snippet.put("/share", shareSnippet);
snippet.delete("/", delete_snippet);

module.exports = snippet;
