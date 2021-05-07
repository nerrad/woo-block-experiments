/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { ExpressPaymentsBlock } from './express-payments-block';
import { PaymentsBlock } from './payments-block';

const expressPaymentsSettings = {
	title: 'Express Payments Block',
	category: 'woocommerce',
	description: 'Express Payments Block for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<ExpressPaymentsBlock>
			<h3>Express payments block</h3>
		</ExpressPaymentsBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/express-payments-block', expressPaymentsSettings );

const paymentsSettings = {
	title: 'Payment Methods Block',
	category: 'woocommerce',
	description: 'Payments Block for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<PaymentsBlock>
			<h3>Payment Methods Block</h3>
		</PaymentsBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/payment-methods-block', paymentsSettings );
