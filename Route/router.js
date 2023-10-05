const express = require('express');
const router = express.Router();

const conexion = require('../BaseDatos/db');
//consulta de publicaciones 
router.get('/Api', (req, res) => {
    conexion.query('select u.Usuario,p.Comentario,p.url from Publicaciones p, Usuarios u where p.idUsuarios=u.idUsuarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.json(results);
        }
    })
});
//llama los usuarios 
router.get('/Usuarios', (req, res) => {
    conexion.query('select *from Usuarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.json(results);
        }
    })
});
router.use(express.json());

router.post("/insertar", (req, res) => {
    const {comen, imgs,idUsuarios } = req.body;
  
    // Realizar la inserción en la base de datos
    const insertQuery = "insert into Publicaciones(Comentario,url,idUsuarios)value(?,?,?)";
    conexion.query(insertQuery, [comen,imgs,idUsuarios], (error, results) => {
      if (error) {
        console.log("Erro al insertar datos ", error);
        return;
      }
  
      res.json({ mensaje: "Publicación realizada con éxito" });
    });
  });
router.get('/create',(req,res)=>{
    res.render('create');
})
const crud = require('../crud')

router.post('/save',crud.save)

module.exports = router;