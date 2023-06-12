import mongoose from "mongoose";

const { Schema } = mongoose;

const AvatarSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

export default mongoose.models.Avatar || mongoose.model("Avatar", AvatarSchema);