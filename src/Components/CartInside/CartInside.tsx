
import React, { FC, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useAddToCart } from '../../Provider/AddToCartContext'
import { Pokemon } from '../../types/Pokemon';
import Footer from '../Footer/Footer';

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
      <h2 className='text-center m-5' 
      style={{ fontSize: '30px', fontWeight: 'bold' }}>Cart</h2>
      <div className="d-flex mx-1 p-5"
         >
        <div className="d-flex p-3"
          >
          <div className='d-flex justify-content-start flex-column border rounded p-3 ' 
          style={{ width: '800px', height: '500px', overflow: 'scroll' }}>
            {cart.map((pokemon, index) => (
              <div key={index}
              
              className='d-flex align-items-center border rounded-5 p-1 my-1 justify-content-center'>
                <div className=' p-2'>
                <h1 className="mx-1 p-3" 
                style={{ fontSize: '20px' }}>{pokemon.name}</h1>
                </div>
                
                <img className='mx-5' 
                src={pokemon.images.small} 
                alt={pokemon.name} 
                style={{ width: '50px' }} />
                <button 
                onClick={() => removeFromCart(index)} 
                className="btn btn-danger mx-5">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            ))}
          </div>
          
          {/* Riepilogo*/}
          <div className='border rounded mx-5 p-5 d-flex flex-column  justify-content-center' 
          style={{ width: '600px', height: '300px' }}>
            <div className='border rounded d-flex justify-content-center p-5'>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Riepilogo</h2>
            </div>
            <div>
              <h2 className='text-center border bg-body-tertiary p-2' 
              style={{ fontSize: '24px', fontWeight: 'bold' }}>Totale:{cart.length}€ </h2>
            </div>
            <button onClick={() => handleCheckout()} 
            className='btn btn-primary'>Checkout</button>
          </div>
              <div className='border rounded mx-3 p-3'
            style={{ overflow: 'scroll', height: '400px', width: '300px' }}>
              <h2 className='text-center '>Hystory</h2>
              {hystoryCart.map((item, index) => (
                <div key={index} 
                onClick={() => handleHistoryItemClick(index)}
                className='text-center text-success my-3 p-2 border rounded-5 '
                >
                  Hai fatto un acquisto di - {item}€ il {new Date().toLocaleDateString()} alle ore {new Date().toLocaleTimeString()}
                </div>
              ))}
              </div>
        </div>
      </div>
      <div className='space'></div>
      <Footer/>
    </>
  );
};

export default CartInside;
