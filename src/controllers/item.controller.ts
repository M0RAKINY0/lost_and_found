import { Request, Response } from "express";
import prisma from "../prisma";

export const createItem = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const item = await prisma.item.create({
        data: {
            name,
            description,
        },
    });
    res.status(201).json(item);
}
export const itemList = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const items = await prisma.item.findMany({
        where: {
            name,
            description,
        },
    });
    res.json(items);
}

export const updateItem = async (req: Request, res: Response) => {
    const { id, name, description } = req.body;
    const item = await prisma.item.update({
        where: { id },
        data: {
            name,
            description,
        },
    });
    res.json(item);
};