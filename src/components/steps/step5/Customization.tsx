// const customizationData = {
//   name: 'my-image',
//   description: 'An image for my React app',
//   version: '1.0.0',
//   maintainer: {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//   },
//   labels: {
//     'com.example.vendor': 'ACME Incorporated',
//     'com.example.license': 'MIT',
//   },
// }

export default function Customization({ onNext, setCustomizationData }: any) {
  return null
  // const [tags, setTags] = useState(customizationData.tags || "")
  // const [description, setDescription] = useState(customizationData.description || "")
  // const [maintainer, setMaintainer] = useState(customizationData.maintainer || "")

  // const handleTagsChange = event => {
  // 	setTags(event.target.value)
  // }

  // const handleDescriptionChange = event => {
  // 	setDescription(event.target.value)
  // }

  // const handleMaintainerChange = event => {
  // 	setMaintainer(event.target.value)
  // }

  // const handleNext = () => {
  // 	setCustomizationData({
  // 		tags,
  // 		description,
  // 		maintainer,
  // 	})
  // 	onNext()
  // }

  // const Input = ({ label, type, value, onChange }) => {
  // 	return (
  // 		<div className='mb-4'>
  // 			<label className='block text-gray-700 font-bold mb-2' htmlFor={label}>
  // 				{label}
  // 			</label>
  // 			<input
  // 				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  // 				id={label}
  // 				type={type}
  // 				value={value}
  // 				onChange={onChange}
  // 			/>
  // 		</div>
  // 	)
  // }

  // return (
  // 	<div className='flex flex-col items-center'>
  // 		<h2 className='text-xl font-bold mb-4'>Paso 5: Personalización de la imagen</h2>
  // 		<div className='w-1/2'>
  // 			<Input label='Etiquetas' placeholder='Ej. latest, v1.0, development' value={tags} onChange={handleTagsChange} />
  // 			<Input
  // 				label='Descripción'
  // 				placeholder='Ej. Imagen base para una aplicación de comercio electrónico en React'
  // 				value={description}
  // 				onChange={handleDescriptionChange}
  // 			/>
  // 			<Input
  // 				label='Mantenedor'
  // 				placeholder='Ej. Nombre Apellido <correo@dominio.com>'
  // 				value={maintainer}
  // 				onChange={handleMaintainerChange}
  // 			/>
  // 		</div>
  // 		<button className='bg-blue-500 text-white rounded-md px-4 py-2 mt-4' onClick={handleNext}>
  // 			Siguiente
  // 		</button>
  // 	</div>
  // )
}
