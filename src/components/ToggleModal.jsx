import React, { useState } from 'react'

const ToggleModal = () => {
    

    const [isOn, setIsOn] = useState(modal)
    const openModal = () => {
        setIsOn((prev) => !prev)
    }
  return (
    <dialog className='bg-red-300'>
      this is a modal
    </dialog>
  )
} 

export default ToggleModal
