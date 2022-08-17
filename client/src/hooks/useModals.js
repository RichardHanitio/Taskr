import React, {useState} from 'react'

const useModals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({image: "", message: ""});

  const closeModal = () => {
    setIsOpen(false);
  }
  const openModal = () => setIsOpen(true);
  const modalContent = (image, message) => {
    setContent({image, message});
  }

  return {
    closeModal, openModal, isOpen, modalContent, content
  }
}

export default useModals