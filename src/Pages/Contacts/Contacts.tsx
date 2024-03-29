import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Contact.css'
const Contacts = () => {
    return (
        <>
            <Navbar />
            <div>
                <h2 className='text-center my-5'
                    style={{ fontSize: '30px', fontWeight: 'bold' }}>Contacts</h2>
                <div className='d-flex justify-content-center flex-column'>

                    <div className='d-flex justify-content-center flex-column my-3 des'>
                        <h4 className='text-center my-2'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                                alt="pokeball"
                                style={{ width: '30px', height: '30px' }} />   Vincenzo Magnano</h4>
                        <ul className='text-center '>
                            <li className='deco'>Indirizzo: 123 Main St, City, Country</li>
                            <li className='deco'>Telefono: +39 123 456 7890</li>
                        </ul>
                    </div>
                    <div className='d-flex justify-content-center flex-column my-3 des'>
                        <h4 className='text-center my-2'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                                alt="pokeball"
                                style={{ width: '30px', height: '30px' }} />   Stefania Deliso</h4>
                        <ul className='text-center'>
                            <li className='deco'>Indirizzo: 123 Main St, City, Country</li>
                            <li className='deco'>Telefono: +39 123 456 7890</li>
                        </ul>
                    </div>
                    <div className='d-flex justify-content-center flex-column my-3 des'>
                        <h4 className='text-center my-2'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                                alt="pokeball"
                                style={{ width: '30px', height: '30px' }} />   Valentina Di Fazio</h4>
                        <ul className='text-center'>
                            <li className='deco'>Indirizzo: 123 Main St, City, Country</li>
                            <li className='deco'>Telefono: +39 123 456 7890</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contacts
