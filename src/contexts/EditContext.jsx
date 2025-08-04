import React, { createContext, useContext, useState } from 'react'

const EditContext = createContext()

export const useEdit = () => {
  const context = useContext(EditContext)
  if (!context) {
    throw new Error('useEdit must be used within an EditProvider')
  }
  return context
}

export const EditProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedElement, setSelectedElement] = useState(null)
  const [clipboard, setClipboard] = useState(null)
  const [showControls, setShowControls] = useState(false)

  const selectElement = (element) => {
    setSelectedElement(element)
    setShowControls(true)
  }

  const deselectElement = () => {
    setSelectedElement(null)
    setShowControls(false)
  }

  const copyElement = () => {
    if (selectedElement) {
      setClipboard({
        type: selectedElement.type,
        content: selectedElement.content,
        styles: selectedElement.styles
      })
    }
  }

  const deleteElement = () => {
    if (selectedElement && selectedElement.onDelete) {
      selectedElement.onDelete()
      deselectElement()
    }
  }

  const updateElementStyle = (property, value) => {
    if (selectedElement && selectedElement.onStyleUpdate) {
      selectedElement.onStyleUpdate(property, value)
    }
  }

  const value = {
    isEditMode,
    setIsEditMode,
    selectedElement,
    selectElement,
    deselectElement,
    clipboard,
    copyElement,
    deleteElement,
    showControls,
    updateElementStyle
  }

  return (
    <EditContext.Provider value={value}>
      {children}
    </EditContext.Provider>
  )
}
