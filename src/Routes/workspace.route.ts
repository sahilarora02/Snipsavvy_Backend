import { createWorkspace, fetchWorkspaces } from "../controllers/workspace.controller";
import express, { Router } from "express"
const workspace : Router = express.Router()


workspace.post("/" , createWorkspace)
workspace.get("/" , fetchWorkspaces)

module.exports = workspace