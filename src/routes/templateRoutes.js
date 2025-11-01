const express = require("express");
const router = express.Router();
const templateController = require("../controllers/templateController");
const templateMiddleware = require("../middlewares/templateMiddleware");

router.get("/", templateController.listarTemplates);
router.post("/", templateMiddleware.validateFields, templateController.criarTemplate);
router.get('/:id', templateController.obterTemplatePorId);
//router.put("/:id",);
router.delete("/:id", templateMiddleware.validateId, templateController.excluirTemplate);

module.exports = router;