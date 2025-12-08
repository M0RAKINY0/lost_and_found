import express from "express";
import { createItem, itemList, updateItem, deleteItem } from "../controllers/item.controller";
import { validateCreateItem, validateUpdateItem, validateItemId, checkItemExists } from "../middleware/item.middleware";

const router = express.Router();


router.post("/items", validateCreateItem, createItem);


router.get("/items", itemList);

router.get("/items/:id", validateItemId, checkItemExists, (req, res) => {
    res.json((req as any).item);
});

router.put("/items/:id", validateItemId, checkItemExists, validateUpdateItem, updateItem);

router.delete("/items/:id", validateItemId, checkItemExists, deleteItem);

export default router;