// src/ui/components/Modal.js
import React, { useState } from 'react';
import './Modal.css'; // Asegúrate de tener el archivo CSS para el estilo del modal.

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = e.target.product.value;
    onSubmit(product);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <h2>Agregar Producto</h2>
          <label>
            Producto:
            <input type="text" name="product" required />
          </label>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
