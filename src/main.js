// Importamos la clase Producto
import {Producto} from './core/domain/entities/Producto.js';

// Referencias a elementos del DOM
const btnAgregarProducto = document.getElementById('btn-agregar-producto');
const formModal = document.getElementById('form-modal');
const formProducto = document.getElementById('form-producto');
const cerrarForm = document.getElementById('cerrar-form');

// Función para abrir el formulario
btnAgregarProducto.addEventListener('click', () => {
  formModal.style.display = 'block';  // Mostramos el formulario
});

// Función para cerrar el formulario
cerrarForm.addEventListener('click', () => {
  formModal.style.display = 'none';  // Ocultamos el formulario
});

// Función para manejar el envío del formulario
formProducto.addEventListener('submit', (e) => {
  e.preventDefault();  // Evita que se recargue la página

  // Obtenemos los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const imagen = document.getElementById('imagen').value;

  // Creamos una nueva instancia del producto
  const nuevoProducto = new Producto(nombre, descripcion, precio, imagen);

  // Mostramos en consola el producto creado (esto puede ser modificado para agregarlo a una lista o almacenarlo)
  console.log(nuevoProducto);

  // Limpiamos los campos del formulario y cerramos el modal
  formProducto.reset();
  formModal.style.display = 'none';
});

