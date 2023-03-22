import Products from "../models/produtcs";
import joi from "joi";

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    status: joi.boolean(),
})

export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const product = await Products.create(req.body);
        if (!product) {
            res.status(404).json({
                message: "Product not foud",
            })
        }
        return res.status(200).json({
            message: "Tạo sản phẩm thành công",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
};
export const getAll = async (req, res) => {
    try {
        const product = await Products.find();
        if (!product) {
            res.status(404).json({
                message: "Product not foud",
            })
        }
        return res.status(200).json({
            message: "Tất cả sản phẩm",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
};
export const get = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                message: "Product not foud",
            })
        }
        return res.status(200).json({
            message: "Sản phẩm theo id",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Products.findOneAndDelete();
        if (!product) {
            res.status(404).json({
                message: "Product not foud",
            })
        }
        return res.status(200).json({
            message: "Xóa thành công",
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
};
export const update = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message
            })
        }
        const product = await Products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!product) {
            res.status(404).json({
                message: "Product not foud",
            })
        }
        return res.status(200).json({
            message: "Sửa sản phẩm thành công",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
};
