import { useState } from 'react'
import ImageOption from './image-option'

interface Props {
  step: number
  setStep: (value: number) => void
}

const BaseImageSelection = ({ step, setStep }: Props) => {
  const [imageOptions] = useState([
    {
      name: 'node:14',
      description: 'La imagen oficial de Node.js versión 14.',
      features: ['Node.js 14', 'Alpine Linux', 'Tamaño: 69MB'],
    },
    {
      name: 'node:16',
      description: 'La imagen oficial de Node.js versión 16.',
      features: ['Node.js 16', 'Alpine Linux', 'Tamaño: 72MB'],
    },
    {
      name: 'node:latest',
      description: 'La última versión de la imagen oficial de Node.js.',
      features: ['Última versión de Node.js', 'Alpine Linux', 'Tamaño: 75MB'],
    },
  ])

  // Estado de la opción de imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null)

  // Función para manejar la selección de una opción de imagen
  const handleImageSelection = image => {
    setSelectedImage(image)
  }

  return (
    <div className=' rounded-md shadow p-4'>
      <h2 className='text-lg font-medium mb-4'>Paso 1: Seleccionar la base de la imagen</h2>
      <div className='flex flex-col space-y-4'>
        {/* Lista de opciones de imagen */}
        {imageOptions.map(image => (
          <ImageOption
            key={image.name}
            image={image}
            selected={selectedImage?.name === image.name}
            onSelect={() => handleImageSelection(image)}
          />
        ))}
      </div>
      {/* Botón Siguiente */}
      <button
        className='bg-blue-500 text-white py-2 px-4 rounded mt-4 disabled:bg-gray-400 disabled:pointer-events-none'
        disabled={!selectedImage}
        onClick={() => setStep(step + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default BaseImageSelection
