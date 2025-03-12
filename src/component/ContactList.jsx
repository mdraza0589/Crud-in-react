import React from 'react'
import './style.css'
function ContactList({ contact, removeContent}) {
    console.log(contact, 'from contact');
    return (
        <>
            <div className='contactList'>ContactList</div>
            {contact.map((item, index) =>
                <div key={index} className='itemBox'>
                    <div className='nameBox'>{item.data.name}</div>
                    <div className='emailBox'>{item.data.email}</div>
                    <button className='remBtn' onClick={()=>removeContent(item.id)}>Remove</button>
                </div>
            )}

        </>
    )
}

export default ContactList   

