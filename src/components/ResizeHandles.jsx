import React, { useState, useRef } from 'react'
import { useEdit } from '../contexts/EditContext'

const ResizeHandles = () => {
  const { selectedElement, isEditMode } = useEdit()
  const [isResizing, setIsResizing] = useState(false)
  const startPos = useRef({ x: 0, y: 0 })
  const startSize = useRef({ width: 0, height: 0 })

  if (!isEditMode || !selectedElement) return null

  const handleMouseDown = (direction) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsResizing(true)
    startPos.current = { x: e.clientX, y: e.clientY }
    
    const rect = selectedElement.element.getBoundingClientRect()
    startSize.current = { width: rect.width, height: rect.height }

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startPos.current.x
      const deltaY = e.clientY - startPos.current.y
      
      let newWidth = startSize.current.width
      let newHeight = startSize.current.height

      switch (direction) {
        case 'se':
          newWidth = Math.max(50, startSize.current.width + deltaX)
          newHeight = Math.max(30, startSize.current.height + deltaY)
          break
        case 'sw':
          newWidth = Math.max(50, startSize.current.width - deltaX)
          newHeight = Math.max(30, startSize.current.height + deltaY)
          break
        case 'ne':
          newWidth = Math.max(50, startSize.current.width + deltaX)
          newHeight = Math.max(30, startSize.current.height - deltaY)
          break
        case 'nw':
          newWidth = Math.max(50, startSize.current.width - deltaX)
          newHeight = Math.max(30, startSize.current.height - deltaY)
          break
        case 'e':
          newWidth = Math.max(50, startSize.current.width + deltaX)
          break
        case 'w':
          newWidth = Math.max(50, startSize.current.width - deltaX)
          break
        case 'n':
          newHeight = Math.max(30, startSize.current.height - deltaY)
          break
        case 's':
          newHeight = Math.max(30, startSize.current.height + deltaY)
          break
      }

      selectedElement.onStyleUpdate('width', `${newWidth}px`)
      selectedElement.onStyleUpdate('height', `${newHeight}px`)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const rect = selectedElement.rect
  const handleSize = 8
  const offset = 4

  const handles = [
    { direction: 'nw', style: { top: -offset, left: -offset, cursor: 'nw-resize' } },
    { direction: 'n', style: { top: -offset, left: rect.width / 2 - handleSize / 2, cursor: 'n-resize' } },
    { direction: 'ne', style: { top: -offset, right: -offset, cursor: 'ne-resize' } },
    { direction: 'e', style: { top: rect.height / 2 - handleSize / 2, right: -offset, cursor: 'e-resize' } },
    { direction: 'se', style: { bottom: -offset, right: -offset, cursor: 'se-resize' } },
    { direction: 's', style: { bottom: -offset, left: rect.width / 2 - handleSize / 2, cursor: 's-resize' } },
    { direction: 'sw', style: { bottom: -offset, left: -offset, cursor: 'sw-resize' } },
    { direction: 'w', style: { top: rect.height / 2 - handleSize / 2, left: -offset, cursor: 'w-resize' } }
  ]

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
        zIndex: 1000
      }}
    >
      {handles.map(({ direction, style }) => (
        <div
          key={direction}
          className="absolute bg-blue-500 border border-white pointer-events-auto hover:bg-blue-600"
          style={{
            width: handleSize,
            height: handleSize,
            ...style
          }}
          onMouseDown={handleMouseDown(direction)}
        />
      ))}
    </div>
  )
}

export default ResizeHandles
