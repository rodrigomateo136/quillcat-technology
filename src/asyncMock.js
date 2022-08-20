const products= [
    {
        id:`1`,
        name: `Iphone 12`,
        price: 327000,
        category:`celular`,
        stock: 25,
        img:`imagenes/iphone12.jpg`,
        descripcion: `El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas .
         Un frente de Ceramic Shield, cuatro veces más resistente a las caídas . Modo Noche en todas
          las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y
           reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic.
            Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone
             y permiten una carga inalámbrica más rápida . Que comience la diversión.`,
    },
    {
        id:`2`,
        name: `Tablet philco TP10F`,
        price: 36000,
        category: `tablet`,
        stock: 15, 
        img:`imagenes/tablet.png`,
        descripcion:`Microprocesador: A133, Quad-core ARM Cortex™-A53
        S.O: Android 11
        Slot de memoria: SDHC/SDXC
        Resolución: 800x1280
        Dimensiones (mm): 244x142x9.2
        Peso (g): 500
        Conectividad: Wi-Fi
        Bluetooth: 4.2
        Conexión micro USB
        Batería: 5000 mAH
        Alimentación: 5V 2A
        Incluye: Funda`,
    },
    {
        id:`3`,
        name: `Notebook HP 15`,
        price: 239.999,
        category:`notebook`,
        stock: 50,
        img:`imagenes/notebookhp.webp`,
        descripcion:`La notebook HP Pavilion 15-EH0009LA es la fusión perfecta entre el máximo desempeño
         y el mejor diseño para tus días más productivos. Con una pantalla de 15,6 pulgadas con micro bordes
          y resolución FHD (1920 x 1080 p) tendrás mayor visualización, con amplios ángulos de visión de 
          178°, y una excelente calidad para disfrutar de todo tu contenido. Además, cuenta con lector de 
          huellas digitales para que puedas iniciar sesión en tu dispositivo solo con el toque de tu dedo.`,
    },
]

export const getProducts =()=>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}


export const getProductsByCategory =(categoryId)=>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById =(id)=>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}