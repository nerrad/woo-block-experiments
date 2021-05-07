/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { CheckoutActionsBlock } from './checkout-actions-block';
import { CheckoutSubmitBlock } from './checkout-submit-block';
import { ReturnToCartBlock } from './return-to-cart-block';

const checkoutSubmitSettings = {
	title: 'Checkout Submit Block',
	category: 'woocommerce',
	description: 'Checkout Submit for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<CheckoutSubmitBlock>Checkout Submit block</CheckoutSubmitBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/checkout-submit-block', checkoutSubmitSettings );

const returnToCartSettings = {
	title: 'Return To Cart Block',
	category: 'woocommerce',
	description: 'Return to Cart for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => <ReturnToCartBlock>Return to Cart block</ReturnToCartBlock>,

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/return-to-cart-block', returnToCartSettings );

const checkoutActionsSettings = {
	title: 'Checkout Actions Block',
	category: 'woocommerce',
	description: 'Checkout Actions for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<CheckoutActionsBlock>
			<h3>Checkout actions block</h3>
		</CheckoutActionsBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/checkout-actions-block', checkoutActionsSettings );
