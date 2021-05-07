/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { OrderNoteCheckboxBlock } from './order-note-checkbox-block';
import { TextField } from './text-field';

const orderNoteCheckboxSettings = {
	title: 'Order note checkbox Block',
	category: 'woocommerce',
	description: 'Order Note Checkbox for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<OrderNoteCheckboxBlock>
			<h3>Order note checkbox block</h3>
		</OrderNoteCheckboxBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType(
	'wcxp/order-note-checkbox-block',
	orderNoteCheckboxSettings
);

const textFieldSettings = {
	title: 'Text Field Block',
	category: 'woocommerce',
	description: 'Text Field block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	attributes: {},
	edit: () => <TextField />,

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/text-field', textFieldSettings );
