/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { Container, TextInput } from '../../block-components';

const ALLOWED_BLOCKS = [ 'wcxp/text-field' ];

const TEMPLATE = [ [ 'wcxp/text-field', {} ] ];

export const BillingAddressBlock = ( { children, ...props } ) => {
	return (
		<Container className="billing-address-block" { ...props }>
			{ children }
			<p>
				This block is configured with a static text input that is not a
				block and an inner block area that allows for multiple
				insertion/repositioning of a text input block.
			</p>
			<TextInput
				label="Example Non-editable Field"
				name="sample-text-input"
			/>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				templateLock={ false }
			/>
		</Container>
	);
};
