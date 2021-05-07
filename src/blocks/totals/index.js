/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { TotalsBlock } from './totals-block';

const settings = {
	title: 'Totals Block',
	category: 'woocommerce',
	description: 'Totals block for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<TotalsBlock>
			<h3>Totals Block</h3>
		</TotalsBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/totals-block', settings );
