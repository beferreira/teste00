import * as db from '../repository/diarioRepository.js'

import {Router} from "express";
import { autenticar } from '../utils/jwt.js';
const endpoints = Router();

endpoints.post('/diario', autenticar, async (req,resp) => {
    try {
        let diario = req.body;
        diario.idUsuario = req.user.id;
        let id = await db.inserirDiario(diario);
        
        resp.send({
            novoId:id
        })
        
        
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario/:id', autenticar, async (req,resp) => {
    try {
        let registros = await db.consultarDiario();
        resp.send(registros)
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario', autenticar, async (req,resp) => {
    try {
        let idUsuario = req.user.id;
        let registros = await db.consultarDiario(idUsuario);
        resp.send(registros)
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/diario/:id', autenticar, async (req,resp) => {
    try {
        let id = req.params.id;
        let diario=req.body;
        let linhasAfetadas=await db.alterarDiario(diario, id);
        
        if(linhasAfetadas==0){
            resp.status(404).send({erro:' Nenhum registro encontrado'})        
        }
        
        else(resp.send())
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/diario/:id', autenticar, async (req,resp) => {
    
    try {
        let id = req.params.id;
        let linhasAfetadas= await db.removerDiario(id);
        
        if(linhasAfetadas==0){
            resp.status(404).send({erro:' Nenhum registro encontrado'})
            
        }
        
        else(resp.send())
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;