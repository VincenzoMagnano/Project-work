
import Input from '../../Components/Input/Input'
import './AdminPage.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { FC, FormEvent } from 'react'



const AdminPage : FC= () => {


    const navigate = useNavigate();
    const handleSubAdmin = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // previene il comportamento predefinito del form
      const adminEl = event.currentTarget;
      const formData = new FormData(adminEl);

      const title= formData.get('title')?.toString();
      console.log(title);
      if (!title) {
        return alert("It can't be empty");}

      const category = formData.get('category')?.toString();
      console.log(category);
      if (!category) {
        return alert("It can't be empty");}

      const price = formData.get('price')?.toString();
      console.log(price);
      if (!price) {
        return alert("It can't be empty");}

        else { 
         alert('Submitted successfully');
        navigate('/main-page');
    }
       
    };

    
  return (
   <>
   <form onSubmit={handleSubAdmin} className='col border rounded p-3' name ='admin'>
      <div className="d-flex flex-column border p-4  ">

      <h1 className='text-center p-4'>Admin Page</h1>
     
      <Input name='title' type='text' label='name' />
     
      <Input name='category' type='text' label='type'  />

      <Input name='price' type='number' label='price'  />

    

<br />
      <button className="btn btn-primary" name='sub' type='submit'>Submit</button>
    </div>
    </form>
</>
  )
}


export default AdminPage
