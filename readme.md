# BackEnd Entrega

Proyecto de API para ecommerce.


## Consignas:
 Inicializar servidor en puerto 8080
 El servidor responde a las solicitudes:

- GET localhost:8080/api/products
- GET localhost:8080/api/products?limit=# (reemplazar el numeral por el numero deseado)
- GET localhost:8080/api/products/:pid
- POST localhost:8080/api/products/ (se verifica que el producto cumpla con los campos obligatorios y se genera Id unico y status or defecto automaticamente)
- PUT localhost:8080/api/products/:pid (al actualizar se verifica que el ID no se cambie)
- DELETE localhost:8080/api/products/:pid
- GET localhost:8080/api/carts/:cid
- POST localhost:8080/api/carts/
- POST localhost:8080/api/carts/:cid/product/:pid (se verifica si el producto yaexiste e incrementa la propiedad quantity en caso de ser necesario)


## Aclaro:
- **products.json** y **carts.json** están creados en el repositorio, armando el código pude verificar que funcione. En caso de eliminarlos, se crean luego de enviar una solicitud post. Son ejemplares para probar límite y búsqueda por id sin necesidad de cargar productos y/o carritos.
