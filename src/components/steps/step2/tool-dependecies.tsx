export default function ToolDependecies({ onNext, onBack }: any) {
  return null
  // const [selectedTools, setSelectedTools] = useState([])

  // // Una lista de herramientas y dependencias comunes
  // const tools = [
  //   { id: 1, name: 'Node.js' },
  //   { id: 2, name: 'Python' },
  //   { id: 3, name: 'MySQL' },
  //   { id: 4, name: 'MongoDB' },
  // ]

  // const handleToolSelection = tool => {
  //   // Agrega o elimina herramientas de la lista seleccionada
  //   if (selectedTools.includes(tool)) {
  //     setSelectedTools(selectedTools.filter(t => t !== tool))
  //   } else {
  //     setSelectedTools([...selectedTools, tool])
  //   }
  // }

  // const handleNext = () => {
  //   if (selectedTools.length > 0) {
  //     onNext(selectedTools)
  //   } else {
  //     alert('Debe seleccionar al menos una herramienta o dependencia.')
  //   }
  // }

  // return (
  //   <div>
  //     <h2 className='text-xl font-bold mb-4'>Selección de herramientas y dependencias</h2>
  //     <p className='mb-4'>Seleccione las herramientas y dependencias necesarias para su aplicación Docker.</p>

  //     <div className='mb-4'>
  //       <input
  //         type='text'
  //         placeholder='Buscar herramientas y dependencias'
  //         className='border border-gray-400 p-2 rounded-lg w-full'
  //       />
  //     </div>

  //     <div className='grid grid-cols-2 gap-4'>
  //       {tools.map(tool => (
  //         <div
  //           key={tool.id}
  //           className='flex items-center'
  //         >
  //           <input
  //             type='checkbox'
  //             id={tool.id}
  //             name={tool.name}
  //             className='mr-2'
  //             checked={selectedTools.includes(tool)}
  //             onChange={() => handleToolSelection(tool)}
  //           />
  //           <label htmlFor={tool.id}>{tool.name}</label>
  //         </div>
  //       ))}
  //     </div>

  //     <div className='mt-8'>
  //       <button
  //         onClick={onBack}
  //         className='bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-lg mr-4'
  //       >
  //         Atrás
  //       </button>
  //       <button
  //         onClick={handleNext}
  //         className='bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg text-white'
  //       >
  //         Siguiente
  //       </button>
  //     </div>
  //   </div>
  // )
}
