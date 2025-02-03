# App E-Commerce con React Native
Es una app de mercado digital con una experiencia de usuario llamativa y de facil uso.

## Flujo de la aplicacion
Al abrir la aplicacion, veremos una pantalla de login, donde tendremos que ingresar nuestros datos de cuenta para asi poder acceder a la app.
Una vez dentro veremos una pantalla de categorias, donde se muestran generos de videojuegos. Al acceder a uno, veremos los juegos disponibles para esa categoria,
si escogemos uno, se muestra una foto del mismo, el nombre, una breve descripción, el stock con el que se dispone y el precio.
Luego de comprar el producto, pasamos a la pantalla del carrito, donde podemos ver los productos que vamos acumulando en nuestro pedido.
Al finalizar, procedemos con la compra y nos desplazamos a la pantalla de ordenes, donde veremos el numero de orden y la cantidad en dolares del pedido.

También contamos con una pantalla de Perfil, donde vemos una foto de perfil y dos opciones de cambiar la foto de perfil y cambiar nuestra ubicación.

# Categorías
- Muestra una selección de categorías en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

### Productos
- Lista todos los productos en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

### Detalles del producto
- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

- **Pestaña 1 - Productos:** Categorías y productos.
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Órdenes:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, ubicación y carga de imagen de perfil.

# Autenticación de usuarios con Firebase
- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.

# Función de Cerrar sesión
- Se implementa un boton de logout para poder cerrar sesión.

## Tecnologías Utilizadas
- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la app.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación
1. Clonar el repositorio usando: `git clone https://github.com/DiegoQurioga/ProyectoCH`
2. Instalar las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`