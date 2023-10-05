const conexion = require('./BaseDatos/db');

exports.save = (req,res)=>{
    const Comentario = req.body.Comentario;
    const url = req.body.url;
    const idUsuarios=req.body.idUsuarios;
   conexion.query(`INSERT INTO Publicaciones (Comentario, url, idUsuarios) VALUES ('${Comentario}', '${url}', ${idUsuarios})`,(error,results)=>{
    if(error){
        console.log(error);

    }else{
        res.redirect('/');
    }
   })
}

