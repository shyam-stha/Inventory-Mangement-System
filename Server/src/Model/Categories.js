import {Schema, model} from "mongoose";

const CategorySchema = new Schema ({
    category:{
        type: String,
        required: true,
        unique:true

    },
    status:{
        type:String,
        required:true,
        default: "inactive"
    }
},{
    timestamps:true,
})

export const Category = new model("categorie", CategorySchema)