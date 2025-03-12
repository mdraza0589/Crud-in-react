import Header from './component/header'
import AddContact from './component/AddContact'
import { useEffect, useState } from 'react'
import ContactList from './component/ContactList'
import uuid4 from 'uuid4'

function App() {
  const [contact, setcontact] = useState(()=>{
    return JSON.parse(localStorage.getItem('contact')) || []
  })
  const AddContactSend = (data) => {
    setcontact([...contact, { id: uuid4(), data }])
  }
  useEffect(()=>{
    localStorage.setItem('contact',JSON.stringify(contact))
  }, [contact])

  const removeContent = (id) => {
    const leftItem = contact.filter ((item) => item.id !== id)
    setcontact(leftItem)
  }

  return (
    <>
      <Header />
      <AddContact AddContactSend={AddContactSend} />
      <ContactList contact={contact} removeContent={removeContent} />
    </>
  )
}

export default App
