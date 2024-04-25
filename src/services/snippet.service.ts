import mongoose from "mongoose";
import { SNIPPET_SCHEMA } from "../utils/interface";
import Snippet from "../models/snippet.model";
import logger from "../utils/logger";

export async function ADD_SNIPPET(body: SNIPPET_SCHEMA) {
  try {
    const snippetData = await Snippet.create(body);

    return snippetData;
  } catch (error) {
    logger.error(`Caught in snippet service => ${error}`);
    throw error;
  }
}

export async function FETCH_ALL_SNIPPETS(c_id: mongoose.Types.ObjectId) {
  try {
    const snippetsData = await Snippet.find({ category_id: c_id });

    return snippetsData;
  } catch (error) {
    logger.error(
      `Caught error in snippet service while fetching snippets => ${error}`
    );
    throw error;
  }
}
