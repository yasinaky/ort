import React from 'react'
import { useEdit } from '../contexts/EditContext'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Bold, Italic, Type } from 'lucide-react'

const FontControls = () => {
  const { selectedElement, updateElementStyle } = useEdit()

  if (!selectedElement || selectedElement.type !== 'text') return null

  const currentStyles = selectedElement.styles || {}
  const fontSize = parseInt(currentStyles.fontSize) || 16
  const fontFamily = currentStyles.fontFamily || 'inherit'
  const fontWeight = currentStyles.fontWeight || 'normal'
  const fontStyle = currentStyles.fontStyle || 'normal'

  const fontFamilies = [
    { value: 'inherit', label: 'Default' },
    { value: 'Arial, sans-serif', label: 'Arial' },
    { value: 'Georgia, serif', label: 'Georgia' },
    { value: 'Times New Roman, serif', label: 'Times New Roman' },
    { value: 'Helvetica, sans-serif', label: 'Helvetica' },
    { value: 'Courier New, monospace', label: 'Courier New' }
  ]

  return (
    <div className="flex flex-col gap-3 p-3 bg-white border rounded-lg shadow-lg edit-controls">
      <div className="flex items-center gap-2">
        <Type className="h-4 w-4" />
        <span className="text-sm font-medium">Font</span>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs text-gray-600">Family</label>
        <Select
          value={fontFamily}
          onValueChange={(value) => updateElementStyle('fontFamily', value)}
        >
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontFamilies.map((font) => (
              <SelectItem key={font.value} value={font.value}>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-gray-600">Size: {fontSize}px</label>
        <Slider
          value={[fontSize]}
          onValueChange={([value]) => updateElementStyle('fontSize', `${value}px`)}
          min={8}
          max={72}
          step={1}
          className="w-40"
        />
      </div>

      <div className="flex gap-1">
        <Button
          variant={fontWeight === 'bold' ? 'default' : 'outline'}
          size="sm"
          onClick={() => updateElementStyle('fontWeight', fontWeight === 'bold' ? 'normal' : 'bold')}
        >
          <Bold className="h-3 w-3" />
        </Button>
        <Button
          variant={fontStyle === 'italic' ? 'default' : 'outline'}
          size="sm"
          onClick={() => updateElementStyle('fontStyle', fontStyle === 'italic' ? 'normal' : 'italic')}
        >
          <Italic className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}

export default FontControls
