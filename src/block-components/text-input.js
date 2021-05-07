export const TextInput = ( { label, name } ) => {
	return (
		<>
			<label htmlFor={ `text-input-${ name }` }>{ label }</label>:
			<input type="text" disabled id={ `text-input-${ name }` } />
		</>
	);
};
