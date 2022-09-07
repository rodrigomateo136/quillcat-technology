import {  doc, updateDoc } from "firebase/firestore"

//en este componente podra sumarle o restar stock a su base de datos de firebase//
//lo unico que debe hacer es cambiar el id del poducto Ej "S9j7BgKKMHg7PzbLi3LW" ,//
//cambiarlo por el id del producto a cambiar y luego poner la cantidad de stock en en lugar 
//correspondiente ej"{stock:50}"//


const sumStock = doc(baseDato, 'products', 'S9j7BgKKMHg7PzbLi3LW')
     updateDoc(sumStock, {stock:30}).then(response=>{
        console.log(response);
    })