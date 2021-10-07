import express, { request } from "express";
import morgan from "morgan";
import { proxy } from "./proxy";

const app = express();

app.use(express.json());

app.use(morgan("combined"));

app.use(proxy);

app.listen(3333);