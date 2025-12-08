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
    const { name, description } = req.query;
    const items = await prisma.item.findMany({
        where: {
            ...(name && { name: name as string }),
            ...(description && { description: description as string }),
        },
    });
    res.json(items);
}

export const updateItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const item = await prisma.item.update({
        where: { id },
        data: {
            name,
            description,
        },
    });
    res.json(item);
};
export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const item = await prisma.item.delete({
        where: { id },
    });
    res.json(item);
}