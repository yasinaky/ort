import React from 'react'
import { useEdit } from '../contexts/EditContext'
import { Button } from '@/components/ui/button'
import { Copy, Trash2 } from 'lucide-react'
import FontControls from './FontControls'
import ColorControls from './ColorControls'

const EditingControls = () => {
  const { selectedElement, copyElement, deleteElement, isEditMode } = useEdit()

  if (!isEditMode || !selectedElement) return null

  const rect = selectedElement.rect
  const controlsStyle = {
    position: 'fixed',
    top: rect.bottom + window.scrollY + 10,
    left: rect.right + window.scrollX - 100,
    zIndex: 1001
  }

  return (
    <div style={controlsStyle} className="edit-controls">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 p-2 bg-white border rounded-lg shadow-lg">
          <Button
            size="sm"
            variant="outline"
            onClick={copyElement}
            className="flex items-center gap-1"
          >
            <Copy className="h-3 w-3" />
            Copy
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={deleteElement}
            className="flex items-center gap-1 text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-3 w-3" />
            Delete
          </Button>
        </div>
        
        <FontControls />
        <ColorControls />
      </div>
    </div>
  )
}

export default EditingControls
