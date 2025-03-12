import React from 'react'
import './style.css'

import { useState } from 'react'
function AddContact({AddContactSend}) {
    const [data, setdata] = useState({ name: '', email: '' })
    function handleChange(e) {
        if (e.target.name === 'name') {
            setdata({ ...data, name: e.target.value })
        }
        else {
            setdata({ ...data, email: e.target.value })
        }
    }
    const handleSubmit = (e) => {
        if (data.name === '' || data.email === '') {
            alert('Please fill all the fields')
        }else{
            e.preventDefault();
            AddContactSend(data)
            setdata({name:'',email:''})
        }
    }

    return (
        <>
            <div className='addContact'><h1>AddContact</h1></div>
            <form className='formContainer'>
                <label>Name</label>
                <input type="text" placeholder='Enter your name' name='name' value={data.name} onChange={handleChange} /> <br />
                <label>Email</label>
                <input type="text" placeholder='Enter your mail' name='email' value={data.email} onChange={handleChange} /> <br />
                <button className='addBtn' onClick={handleSubmit}>Add Contact</button>
            </form>
        </>
    )
}

export default AddContact 
