import mongoose from "mongoose"

export interface CATEGORY_SCHEMA{
    name: string;
    description: string;

}


export interface WORKSPACE_SCHEMA{

    name:string,
    description: string,
    categories: CATEGORY_SCHEMA[];
    owner: mongoose.Schema.Types.ObjectId

}