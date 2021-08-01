import React from 'react';
import {useModal} from "./hooks";

function App() {
    let isOpen = true as boolean
  const { toggleOpen, Modal, isOpen: isOpen2} = useModal<{isOpen: boolean}>('import', {isOpen})

  return (
    <div className="App">
      <button onClick={toggleOpen}>Button</button>
        {isOpen2 && <Modal isOpen/>}
    </div>
  )
}

export default App;
