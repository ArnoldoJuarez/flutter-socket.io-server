//Mesnajes de socket
//expotsramos index js
const {io}=require("../Index.js");
io.on('connection', client => {
    console.log("Cliente Conectado");
   // client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ 
        console.log("Cliente desconetado");
    });

    //recibimos mesnaje del fromn end
    client.on("mensaje",(payload)=>{
        console.log("Mensaje",payload);

        io.emit('mensaje',{admin:'Nuevo mensaje'});

    });
    
  });
