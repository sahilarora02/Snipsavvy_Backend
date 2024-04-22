import mongoose, { Document, Schema } from "mongoose";

export interface IShared extends Document {
  email: string;
  workspace_id?: mongoose.Schema.Types.ObjectId;
  category_id?: mongoose.Schema.Types.ObjectId;
  status: "invited" | "accepted";
}

const SharedSchema = new Schema<IShared>({
  email: {
    type: String,
    required: true,
  },
  workspace_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  status: {
    type: String,
    enum: ["invited", "accepted"],
    default: "invited",
  },
});

const SharedDb = mongoose.model<IShared>("Shared", SharedSchema);
export default SharedDb;
