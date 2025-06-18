
import { Router } from "express";
import { buscarUsuarioPorId, buscarUsuarios, criarUsuario, deletarUsuarios, editarUsuarios } from "../controller/usuariosController.js";
import { verificarToken } from "../src/utils/index.js";
const router = Router();

router.get('/', verificarToken, async (req, res) => {
    res.send(await buscarUsuarios());
});
router.get('/:id', verificarToken, async (req, res) => {
    res.send(await buscarUsuarioPorId(req.params.id));
});
router.post('/', async (req, res) => {
    await criarUsuario(req, res);
});

router.put('/:id', verificarToken,async (req, res) => {
    res.send(await editarUsuarios(req.params.id, req.body));
});
router.delete('/:id',verificarToken, async (req, res) => {
    res.send(await deletarUsuarios(req.params.id));
});


export { router as usuariosRoutes };

