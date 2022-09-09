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
