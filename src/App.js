import './App.css'
import Modal from 'my-personal-button'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <div className="App">
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <h1>Modal Content</h1>
      </Modal>
    </div>
  )
}

export default App
