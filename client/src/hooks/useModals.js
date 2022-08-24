import {useState} from 'react'

const useModals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({image: "", message: ""});

  const closeModal = () => {
    setIsOpen(false);
  }

  const modalContent = (image, message) => {
    setIsOpen(true);
    setContent({image, message});
  }

  return {
    closeModal, isOpen, modalContent, content
  }
}

export default useModals