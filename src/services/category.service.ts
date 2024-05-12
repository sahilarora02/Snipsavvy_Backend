import { Workspace, WorkspaceDocument } from "../models/workspace.model";
import mongoose from "mongoose";
import { CATEGORY_SCHEMA } from "../utils/interface";
import logger from "../utils/logger";

export async function CREATE_CATEGORY(
  data: CATEGORY_SCHEMA,
): Promise<WorkspaceDocument | null> {
  try {
    const workspace_id = new mongoose.Types.ObjectId(data._id);
    const existingWorkspace = await Workspace.findById({_id: workspace_id});

    if (!existingWorkspace) {
      logger.error("Workspace not found");
      return null;
    }

    const newCategory = {
      name: data.name,
      description: data.description,
    };

    existingWorkspace.categories?.push(newCategory);

    const updatedWorkspace = await existingWorkspace.save();


    return updatedWorkspace;
  } catch (error) {
    logger.error("Error creating category:", error);
    throw error;
  }
}

export async function FETCH_CATEGORIES_BY_WORKSPACE(workspace_id: mongoose.Types.ObjectId): Promise<any> {
    try {
        const workspace = await Workspace.findById({_id:workspace_id});
        if (!workspace) {
            throw new Error("Workspace not found");
        }

        return workspace.categories;
    } catch (error) {
        throw error;
    }
}
export async function UPDATE_CATEGORY(
  workspace_id: string,
  category_id: string,
  updatedData: {
    name: string;
  description: string;}
){
  try {
    const workspace = await Workspace.findOne({_id : workspace_id});
    if (typeof workspace === "undefined" || !workspace) {
      logger.error("Workspace not found");
      return null;
    }
    if (!workspace.categories) {
      logger.error("Categories not found in workspace");
      return null;
    }

    // Find the index of the category within the categories array
    // const categoryIndex = workspace.categories?.map(
    //   (category:CATEGORY_SCHEMA) => {
    //     return (
    //       category?._id.toString() === category_id.toString()
    //     )
    //   }
    // );

    const matchingCategory = workspace.categories.find(
      (category:any) => category._id.toString() === category_id.toString()
    );
    
    if (matchingCategory) {
      // Yahan pe matching category ka pura data hai
      console.log(matchingCategory);
    } else {
      console.log("Matching category not found");
    }
    

    if (!matchingCategory) {
      logger.error("Category not found");
      return null;
    }

    
    matchingCategory.name = updatedData.name;

    // Save the updated workspace
    const updatedWorkspace = await workspace.save();

    return updatedWorkspace;
  } catch (error) {
    logger.error("Error updating category:", error);
    throw error;
  }
}
