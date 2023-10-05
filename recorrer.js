
const cargar=document.getElementById("mostrar");

function Apis(){
const url='http://localhost:3000/Api';

fetch(url)
.then(res=> res.json())
.then((json)=>{
    console.log(json,'RES.JSON')
    //recorrer la api
    let i=0, html="";
    let Usuario=[],Comentario=[],Img=[];


    for(i=0;i<json.length;i++){
        Usuario[i]=json[i].Usuario;
        Comentario[i]=json[i].Comentario;
        Img[i]=json[i].url;
        html=html+`
        <div class="principal">
        <div class="cons">
        <div class="perfiles">
        <i id="perfil" class='bx bxs-user-circle'></i>
            <h2>${Usuario[i]}</h2>
           </div>
            <h3>${Comentario[i]}</h3>
            <img src="${Img[i]}" alt="">
        </div>
    </div>
        
        `;
        cargar.innerHTML=html;

    }
    
})
}
document.addEventListener("DOMContentLoaded",function(){
let Comentarios=document.getElementById('Comentario');
let urls=document.getElementById('url');
let boton=document.getElementById('boton');
let usuarios=document.getElementById('idUsuarios');
  
    fetch('http://localhost:3000/Usuarios')
    .then(res=> res.json())
    .then((json)=>{
        console.log(json,'RES.JSON')
        //recorrer la api
        let i=0, html="";
        let Usuario=[],idUsuarios=[];
    
        html=html+`<option value="0">Cambiar cuenta</option>`; 
        for(i=0;i<json.length;i++){
            Usuario[i]=json[i].Usuario;
            idUsuarios[i]=json[i].idUsuarios;
            html=html+`

            
            <option value="${idUsuarios[i]}">${Usuario[i]}</option>
            `;
            usuarios.innerHTML=html;
    
        }
        
    })
    

    boton.addEventListener("click",function(){
        const idUsuarios=usuarios.value;
        const comen=Comentarios.value;
        const imgs=urls.value;
        if(!comen|| !imgs|| idUsuarios==0){
            alert(
                "Complete todo los campos y seleccione su cuenta"
            );
            return;
        }

        fetch('http://localhost:3000/insertar',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({comen,imgs,idUsuarios}),
        })
        .then((res)=>res.json())
        .then((json)=>{
            urls.value="";
            Comentarios.value="";
                })
                .catch((error)=>{
                    console.error("Error al querer publicar",error);
                })
        
    });
});



document.addEventListener("DOMContentLoaded",ev=>Apis())