import { Schema, model } from "mongoose";

const producSchema = new Schema(
{
    nombre: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contenido:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    disponibles:{
        type: Number,
        required: true
    },
    vendidos: Number,
},
{
    timestamps: true,
    versionKey: false
}
);

export default model("Produc", producSchema);
