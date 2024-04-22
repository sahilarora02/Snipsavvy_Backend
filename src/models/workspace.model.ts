import mongoose, {Document , Schema} from "mongoose";

export interface ICategory extends Document{
    name: string,
    description : string
}

export interface IWorkspace extends Document{
    name : string,
    description : string,
    category : ICategory,
    owner : string
}

const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

const workspaceSchema = new Schema<IWorkspace>({
    name : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        trim : true
    },
    category: {
        type: categorySchema, 
    },
    owner: {
        type: String,
        required: true
    }
})

export const Category = mongoose.model<ICategory>("Category", categorySchema);
export const Workspace = mongoose.model<IWorkspace>("Workspace", workspaceSchema);

