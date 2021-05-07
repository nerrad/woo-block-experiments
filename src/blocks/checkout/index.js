/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { OrderFieldsBlock } from './order-fields-block';
import { OrderTotalsBlock } from './order-totals-block';

const orderFieldsSettings = {
	title: 'Order fields Block',
	category: 'woocommerce',
	description: 'Wrapper block for order fields',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: OrderFieldsBlock,

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/order-fields-block', orderFieldsSettings );

const orderTotalsSettings = {
	title: 'Order Totals Block',
	category: 'woocommerce',
	description: 'Wrapper block for order totals',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: OrderTotalsBlock,

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/order-totals-block', orderTotalsSettings );
