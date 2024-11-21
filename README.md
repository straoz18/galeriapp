# TECNOW - React App

TECNOW es una tienda ficticia de teléfonos celulares, laptops y tablets.
Este proyecto fue creado usando [Vite](https://vitejs.dev/) para el [curso de ReactJS de Coderhouse](https://www.coderhouse.com/online/reactjs), conforme a sus consignas. Adicionalmente, se han agregado características como gestión de stocks, localStorage, reCAPTCHA y envío de correos al cliente vía EmailJS.

## Instrucciones para inicializar el proyecto

### 1) Descargar Node.js
Instala [Node.js](https://nodejs.org/) en tu sistema operativo.

### 2) Descarga y navega al directorio
[Descarga el proyecto](https://github.com/alexiscirmi/react-ecommerce-coderhouse/archive/refs/heads/main.zip), descomprímelo y navega al directorio con la terminal o consola usando `cd /ruta/del/proyecto`. También se puede clonar o abrir con GitHub Desktop.

### 3) Instala los módulos necesarios
Para poder inicializar el proyecto, primero hay que instalar los módulos de Node.js necesarios con `npm install`.

### 4) Inicializa el proyecto
Una vez instalados los módulos, usa el comando `npm run dev` para inicializar la app en modo de desarrollo, pudiendo visualizarla y probarla en [http://localhost:3000](http://localhost:3000).

## Sobre la app

### Barra de navegación
La app cuenta con una barra de navegación que muestra el logo de la marca, un selector de categoría de productos y el ícono de un carrito que aparece al agregar algún producto. La página muestra por defecto todos los productos, y siempre se puede acceder a esta vista por defecto haciendo clic en el logo de TECNOW.

### Agregar productos al carrito
Al ingresar al detalle de algún producto, se puede seleccionar la cantidad de productos deseados y luego hacer clic en "Agregar al carrito". Automáticamente, aparece en su lugar el botón "Terminar mi compra", que llevará al usuario a la sección de revisión del estado del carrito. También se puede acceder a dicha sección haciendo clic en el ícono de carrito que aparece en la barra de navegación. Por supuesto, se pueden agregar más productos antes de revisar el carrito y terminar la compra.

### Estado del carrito
Al revisar el carrito, se pueden ver los datos de los productos elegidos, con los subtotales correspodientes y el total a pagar. Se pueden quitar o agregar más unidades de cada producto desde aquí mismo, e incluso hay un botón para limpiar el carrito. Con el botón "Continuar" se accede al formulario final.

### Checkout
Aquí, el comprador completa el formulario con su nombre, número de teléfono y correo electrónico. Al hacer clic en "Crear orden" se genera el pedido, se envía al comprador vía correo electrónico y se le muestra el número de referencia, mientras el vendedor lo almacena en Firebase y en la bandeja de salida de correos electrónicos. Además, la cantidad pedida se resta del stock mostrado en la página.

GNU General Public License v3.0

![Coderhouse_Frontend_certificate_en](https://github.com/alexiscirmi/react-ecommerce-coderhouse/assets/1320538/8286616c-0dc6-4f2f-985d-1b4593d6dd51)
