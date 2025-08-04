import React from 'react'
import { useEdit } from '../contexts/EditContext'
import { Palette } from 'lucide-react'

const ColorControls = () => {
  const { selectedElement, updateElementStyle } = useEdit()

  if (!selectedElement) return null

  const currentStyles = selectedElement.styles || {}
  const textColor = currentStyles.color || '#000000'
  const backgroundColor = currentStyles.backgroundColor || 'transparent'

  const handleColorChange = (property, color) => {
    updateElementStyle(property, color)
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-white border rounded-lg shadow-lg edit-controls">
      <div className="flex items-center gap-2">
        <Palette className="h-4 w-4" />
        <span className="text-sm font-medium">Colors</span>
      </div>
      
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs text-gray-600">Text Color</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={textColor}
              onChange={(e) => handleColorChange('color', e.target.value)}
              className="w-8 h-8 rounded border cursor-pointer"
            />
            <input
              type="text"
              value={textColor}
              onChange={(e) => handleColorChange('color', e.target.value)}
              className="flex-1 px-2 py-1 text-xs border rounded"
              placeholder="#000000"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-600">Background</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={backgroundColor === 'transparent' ? '#ffffff' : backgroundColor}
              onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
              className="w-8 h-8 rounded border cursor-pointer"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
              className="flex-1 px-2 py-1 text-xs border rounded"
              placeholder="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorControls
