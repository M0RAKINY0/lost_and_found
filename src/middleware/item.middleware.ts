import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

// Middleware to validate item creation
export const validateCreateItem = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, description } = req.body;

    // Check if name is provided
    if (!name || typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({
            error: "Name is required and must be a non-empty string",
        });
    }

    // Check if description is provided
    if (!description || typeof description !== "string" || description.trim().length === 0) {
        return res.status(400).json({
            error: "Description is required and must be a non-empty string",
        });
    }

    next();
};

// Middleware to validate item update
export const validateUpdateItem = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, description } = req.body;

    // Check if name is provided
    if (!name || typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({
            error: "Name is required and must be a non-empty string",
        });
    }

    // Check if description is provided
    if (!description || typeof description !== "string" || description.trim().length === 0) {
        return res.status(400).json({
            error: "Description is required and must be a non-empty string",
        });
    }

    next();
};

// Middleware to validate item ID in params
export const validateItemId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
        return res.status(400).json({
            error: "Item ID is required in the URL parameters",
        });
    }

    next();
};

// Middleware to check if item exists before update/delete
export const checkItemExists = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id || req.body.id;

        if (!id) {
            return res.status(400).json({
                error: "Item ID is required",
            });
        }

        const item = await prisma.item.findUnique({
            where: { id },
        });

        if (!item) {
            return res.status(404).json({
                error: "Item not found",
            });
        }

        // Attach item to request for use in controller if needed
        (req as any).item = item;
        next();
    } catch (error) {
        return res.status(500).json({
            error: "Error checking item existence",
        });
    }
};

