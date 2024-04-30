import { Workspace } from "../models/workspace.model";
import mongoose from "mongoose";
import { WORKSPACE_SCHEMA } from "../utils/interface";
import { WorkspaceDocument } from "../models/workspace.model";
import logger from "../utils/logger";

export async function CREATE_WORKSPACE(data: WORKSPACE_SCHEMA) {
  try {
    const resp: WorkspaceDocument = await Workspace.create(data);
    return resp;
  } catch (error) {
    logger.error(
      `Caught error in workspace service while creating a workspace => ${error}`
    );
    throw error;
  }
}

export async function FETCH_ALL_WORKSPACES(id: mongoose.Types.ObjectId) {
  // for a particular user
  try {
    const resp = await Workspace.find({ owner: id }).select("name description");
    return resp;
  } catch (error) {
    logger.error(
      `Caught error in workspace service while fetching workspaces => ${error}`
    );
    throw error;
  }
}

export async function DELETE_WORKSPACE(id: string) {
  try {
    await Workspace.deleteOne({ _id: id });
    return {
      message: "Workspace deleted successfully",
    };
  } catch (error) {
    logger.error(
      "Caught error in workspace service while deleting a workspace"
    );
    throw error;
  }
}
