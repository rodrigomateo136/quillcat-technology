#Hola mi nombre es Rodrigo Mateo, estudiante de frontend de coderhouse,
este es mi proyecto de e-commerce.
este e-commerce esta basado en las clases de react js. del profesor
Sebastian Zuviria y tutora Romina S. Bocon.


#incio el proyecto se utiliza reat js

##En la terminar poner npm start para visualizar el proyecto

###Route path='/' element={<ItemListContainer greeting='Listado de productos'/>
muestra el listado completo de los productos.

###Route path='/category/:categoryId' element={<ItemListContainer greeting='Filtrado de productos'/>
muestra el listado filtrado de los productos por categoria.

###Route path='/detail/:productId' element={<ItemDetailContainer/>
muetra el detalle de la descripcion del producto seleccionado.

###Route path='/cart' element={<Cart/>}/>
te lleva al carrito de compras con el producto seleccionado.
###Route path='/carrito' element={<Cart/>}/>
te llev al carrito de compras.

###Route path='/checkout' element={<Checkout/>}/>
te lleva al formulario de compras y al chequeo final para terminr la orden de compra.

la aplicacion utiliza la base de datos traida de firebase y la orden de compra tambien se almacena en ella.

El proyecto tiene la fucion de mostrar un grupo de productos, elegir uno de ellos por categoria,
al elegir un solo productor con un boton poder ver su detalle y elegir la cantidad requerida, 
al confirmar que se quiere comprar se dirije al carrito de compras donde se visualizan todos los productos elegidos, y se puede remover si se arrepiente . al seguir el proceso se dirije al checkout mediante un boton; donde al llenar un formulario y tocar l boton agregar orden, se envian a la base de datos de firestore los datos del formulario y los productos elegidos,
al mismo tiempo se descuentan del stock los productos seleccionados,
esta e-commerce tiene el pago en efectivo asi esta estipulado.