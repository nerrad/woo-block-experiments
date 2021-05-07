/**
 * Internal dependencies
 */
import { Container, TextInput } from '../../block-components';

export const TextField = ( props ) => {
	return (
		<Container className="text-field-block" { ...props }>
			<TextInput label="Another Input" name="another-input" />
		</Container>
	);
};
