import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

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
export const updateItem = async ()
export const itemList = async (req: Request, res: Response) => {
    const {item, description} = req.body
    const itemList = await prisma.findMany({
        where: {
            data:{ 
                item: item,
                description: description
            }
        }
    });
}