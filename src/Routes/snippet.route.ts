import { addSnippet, getSnippets } from "../controllers/snippet.controller";
import express, { Router } from "express";
const snippet: Router = express.Router();

snippet.post("/", addSnippet);
snippet.get("/", getSnippets);

module.exports = snippet;
