import { Request, Response } from "express";
import {
  CREATE_WORKSPACE,
  FETCH_ALL_WORKSPACES,
} from "../services/workspace.service";
import logger from "../utils/logger";
import { WorkspaceDocument } from "../models/workspace.model";
import mongoose from "mongoose";

export async function createWorkspace(req: Request, res: Response) {
  try {
    logger.info(`REQ : Create a workspace with the given data ${req.body}`);
    const data = await CREATE_WORKSPACE(req.body);
    logger.info(`RESP : Workspace created => ${data}`);
    return res.status(201).json({
      message: "Workspace created successfully",
      data,
    });
  } catch (error) {
    logger.error(`Error in creating a workspace => ${error}`);
    return res.status(500).json({
      message: "Error in creating a workspace",
      error,
    });
  }
}

export async function fetchWorkspaces(req: Request, res: Response) {
  // logger.info("Fetching workspacing ....")
  try {
    logger.info(`Fetch all workspaces ........`);
    const id = req.query.user_id; // user id
    let data;

    if (id && typeof id == "string") {
      const objectId = new mongoose.Types.ObjectId(id);
      logger.info(
        `REQ : Fetch all workspaces for a particular user => ${objectId}`
      );
      data = await FETCH_ALL_WORKSPACES(objectId);
    } else {
      logger.error("user id is required or is in the wrong format");
      return res.status(500).json({
        message: "user id is required or is in the wrong format",
      });
    }

    logger.info(`RESP : Workspaces fetched => ${data}`);
    return res.status(201).json({
      message: "Workspaces fetched successfully",
      data,
    });
  } catch (error) {
    logger.error(`Error in fetching workspaces => ${error}`);
    return res.status(500).json({
      message: "Error in fetching a workspaces",
      error,
    });
  }
}
