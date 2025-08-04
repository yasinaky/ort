import React, { useState, useRef, useEffect } from 'react'
import { useEdit } from '../contexts/EditContext'
import { cn } from '@/lib/utils'

const EditableElement = ({ 
  children, 
  type = 'text', 
  className = '',
  style = {},
  onDelete,
  ...props 
}) => {
  const { isEditMode, selectedElement, selectElement, deselectElement } = useEdit()
  const [elementStyles, setElementStyles] = useState(style)
  const elementRef = useRef(null)
  const elementId = useRef(`element-${Math.random().toString(36).substr(2, 9)}`)

  const isSelected = selectedElement?.id === elementId.current

  const handleClick = (e) => {
    if (!isEditMode) return
    
    e.stopPropagation()
    
    const rect = elementRef.current.getBoundingClientRect()
    
    selectElement({
      id: elementId.current,
      type,
      element: elementRef.current,
      rect,
      content: elementRef.current.textContent || elementRef.current.innerHTML,
      styles: elementStyles,
      onDelete: onDelete || (() => {
        if (elementRef.current && elementRef.current.parentNode) {
          elementRef.current.parentNode.removeChild(elementRef.current)
        }
      }),
      onStyleUpdate: (property, value) => {
        setElementStyles(prev => ({
          ...prev,
          [property]: value
        }))
      }
    })
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isEditMode && isSelected && elementRef.current && !elementRef.current.contains(e.target)) {
        const isControlClick = e.target.closest('.edit-controls')
        if (!isControlClick) {
          deselectElement()
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isEditMode, isSelected, deselectElement])

  const combinedStyles = {
    ...elementStyles,
    ...(isEditMode && isSelected ? {
      outline: '2px solid #3b82f6',
      outlineOffset: '2px',
      position: 'relative'
    } : {})
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        className,
        isEditMode && 'cursor-pointer',
        isSelected && 'z-10'
      )}
      style={combinedStyles}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  )
}

export default EditableElement
