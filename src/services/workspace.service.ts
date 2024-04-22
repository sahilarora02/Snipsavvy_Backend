import { Workspace } from "../models/workspace.model";
import mongoose from "mongoose";
import { WORKSPACE_SCHEMA } from "../utils/interface";
import { WorkspaceDocument } from "../models/workspace.model";



 export async function CREATE_WORKSPACE(data : WORKSPACE_SCHEMA){
    try {
        const resp : WorkspaceDocument = await Workspace.create(data);
        return resp;
    } catch (error) {
        return error
    }
}

 export async function FETCH_ALL_WORKSPACES(id : mongoose.Types.ObjectId){   // for a particular user
    try {
        const resp = await Workspace.find({owner : id});
        return resp;
    } catch (error) {
        return error
    }
}

