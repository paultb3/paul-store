// src/ui/pages/CartPage.js
import React, { useState } from 'react';
import Modal from '../components/Modal';

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProduct = (product) => {
    console.log("Producto agregado:", product);
    // Aquí puedes agregar la lógica para agregar el producto al carrito
  };

  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={handleOpenModal}>Agregar Producto</button>
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddProduct}
      />
    </div>
  );
};

export default CartPage;
