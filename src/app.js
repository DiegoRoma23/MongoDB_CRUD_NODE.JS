import path from "path";
import express from "express";
import morgan from "morgan";
import { create } from "express-handlebars";

import indexRouter from "./routes/index.routes";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set('view engine', '.hbs');

// middLewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

//Rutas
app.use(indexRouter);

//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

export default app;
