const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const template = require("../models/templateModel");

exports.validateId = async (req, res, next) => {
    const { id } = req.params;

    try {
        const template = await prisma.template.findUnique({
            where: { id: Number(id) }
        });

        if (!template) {
            return res.status(404).json({ error: "template não existe" });
        }

        res.template = template;
        next();
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.validateFields = (req, res, next) => {

const { name, description, fields } = req.body;

  if (!name || !description || !fields) {
    return res.status(400).json({ error: "você deve informar todos os campos" });
  }

  next();
};
