
import React, { FC, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useAddToCart } from '../../Provider/AddToCartContext'
import { Pokemon } from '../../types/Pokemon';

const CartInside = () => {
  const { cart, removeFromCart, handleCheckout, hystoryCart} = useAddToCart();
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState<number | null>(null);

  const handleHistoryItemClick = (index: number) => {
    setSelectedHistoryIndex(index);
  };


  ;
  return (
    <>
      <Navbar />
      <h2 className='text-center m-5' style={{ fontSize: '30px', fontWeight: 'bold' }}>Cart</h2>
      <div className="d-flex ">
        <div className="d-flex">
          <div className='d-flex justify-content-start flex-column border p-3 ' style={{ width: '800px' }}>
            {cart.map((pokemon, index) => (
              <div key={index} className='d-flex align-items-center border p-5 justify-content-center'>
                <h1 className="mx-5 p-3" style={{ fontSize: '20px' }}>{pokemon.name}</h1>
                <img className='mx-5' src={pokemon.images.small} alt={pokemon.name} style={{ width: '100px' }} />
                <button onClick={() => removeFromCart(index)} className="btn btn-danger mx-5">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className='border mx-3 d-flex flex-column  justify-content-center' style={{ width: '600px', height: '300px' }}>
            <div className='border d-flex justify-content-start p-5'>
              <h2 className='text-center m-2' style={{ fontSize: '20px', fontWeight: 'bold' }}>Riepilogo</h2>
            </div>
            <div>
              <h2 className='text-center border rounded bg-body-tertiary p-2' style={{ fontSize: '24px', fontWeight: 'bold' }}>Totale:{cart.length}€ </h2>
            </div>
            <button onClick={() => handleCheckout()} className='btn btn-primary'>Checkout</button>
              <div>
              {hystoryCart.map((item, index) => (
                <div key={index} onClick={() => handleHistoryItemClick(index)}>
                  Hai fatto un acquisto di - {item}€ il {new Date().toLocaleDateString()} alle ore {new Date().toLocaleTimeString()}
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartInside;
