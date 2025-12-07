import Joi from "joi";

export const createItemSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
});
export const updateItemSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
});
export const deleteItemSchema = Joi.object({
    id: Joi.string().required(),
});