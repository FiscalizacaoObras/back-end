const express = require("express");
const router = express.Router();
const templateController = require("../controllers/templateController");

router.get("/", templateController.listarTemplates);
router.post("/", templateController.criarTemplate);
router.get('/:id', templateController.obterTemplatePorId);
//router.put("/:id",);
router.delete("/:id", templateController.excluirTemplate);

module.exports = router;