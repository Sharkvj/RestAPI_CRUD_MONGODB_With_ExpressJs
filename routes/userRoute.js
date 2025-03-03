import express from "express";
import { fetch, create, update, deleteUser, fetchById } from "../controller/userController.js";

const route = express.Router();


route.get("/", fetch);
route.get("/:id", fetchById);
route.post("/", create);
route.put("/:id", update);
route.delete("/:id", deleteUser);




export default route;
