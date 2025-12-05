import express, { Request, Response } from "express";
const router = express.Router();
const app = express();
router.get("/", (req: Request, res: Response) => {
    res.send("root");
});
router.post("items", (req: Request, res: Response) => {
    res.send("item created");
});
router.get("items", (req: Request, res: Response) => {
    res.send("items");
});
router.get("items/:id", (req: Request, res: Response) => {
    res.send("item");
});
router.put("items/:id", (req: Request, res: Response) => {
    res.send("item updated");
});
router.delete("items/:id", (req: Request, res: Response) => {
    res.send("item deleted");
});

export default router;