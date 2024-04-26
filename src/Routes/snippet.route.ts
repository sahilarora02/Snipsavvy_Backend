import {
  addSnippet,
  getSnippets,
  shareSnippet,
} from "../controllers/snippet.controller";
import express, { Router } from "express";
const snippet: Router = express.Router();

snippet.post("/", addSnippet);
snippet.get("/", getSnippets);
snippet.put("/share", shareSnippet);

module.exports = snippet;
