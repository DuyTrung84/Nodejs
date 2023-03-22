import express from "express";
import { create, get, getAll, remove, update } from "../controllers/products";

const router = express.Router();

router.post("/products", create);
router.get("/products", getAll);
router.get("/products/:id", get);
router.delete("/products/:id", remove);
router.patch("/products/:id", update);


export default router;