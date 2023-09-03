const ImageOption = ({ image, selected, onSelect }) => {
	return (
		<div
			className={`flex items-center space-x-4 cursor-pointer p-2 rounded hover:bg-gray-100 ${
				selected ? "bg-gray-100" : ""
			}`}
			onClick={onSelect}
		>
			{/* Nombre de la imagen */}
			<div className='font-medium'>{image?.name}</div>
			{/* Descripción de la imagen */}
			<div className='text-sm text-gray-500'>{image?.description}</div>
			{/* Características de la imagen */}
			<div className='text-sm text-gray-500'>{image?.features.join(" | ")}</div>
		</div>
	)
}

export default ImageOption
