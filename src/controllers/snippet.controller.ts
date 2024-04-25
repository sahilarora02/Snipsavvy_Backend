import { Request, Response } from "express";
import { ADD_SNIPPET, FETCH_ALL_SNIPPETS } from "../services/snippet.service";
import mongoose from "mongoose";
import logger from "../utils/logger";

export async function addSnippet(req: Request, res: Response) {
  const BODY = req.body;
  let data;

  logger.info(`REQ : add a snippet in a category with data => ${BODY}`);
  try {
    data = await ADD_SNIPPET(BODY);
    logger.info("RES : a snippet has been added successfully");
    return res
      .status(201)
      .json({ message: "Snippet added successfully", data: data });
  } catch (error) {
    logger.info(`RES : an error occured in adding an snippet => ${error}`);
    return res.status(500).json({
      message: "Snippet added successfully",
      error: error,
    });
  }
}

export async function getSnippets(req: Request, res: Response) {
  let data;

  try {
    const cat_id = req.query.cat_id; // user id

    if (cat_id && typeof cat_id == "string") {
      const objectId = new mongoose.Types.ObjectId(cat_id);
      logger.info(
        `REQ : Fetch all snippets for a particular category => ${objectId}`
      );
      data = await FETCH_ALL_SNIPPETS(objectId);
    } else {
      logger.error("cat_id is required or is in the wrong format");
      return res.status(500).json({
        message: "cat_id is required or is in the wrong format",
      });
    }

    logger.info(`RESP : Snippets fetched => ${data}`);
    return res.status(200).json({
      message: "Snippets fetched successfully",
      data: data,
    });
  } catch (error) {
    logger.error(`Error in fetching Snippets => ${error}`);
    return res.status(500).json({
      message: "Error in fetching Snippets",
      error: error,
    });
  }
}
