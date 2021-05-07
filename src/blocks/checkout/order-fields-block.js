/**
 * Internal dependencies
 */
import { Column } from '../columns';

const ALLOWED_BLOCKS = [
	'wcxp/express-payments-block',
	'wcxp/contact-information-block',
	'wcxp/shipping-address-block',
	'wcxp/billing-address-block',
	'wcxp/payment-methods-block',
	'wcxp/order-note-checkbox-block',
	'wcxp/checkout-actions-block',
];
const TEMPLATE = [
	[ 'wcxp/express-payments-block', {} ],
	[ 'wcxp/contact-information-block', {} ],
	[ 'wcxp/shipping-address-block', {} ],
	[ 'wcxp/billing-address-block', {} ],
	[ 'wcxp/payment-methods-block', {} ],
	[ 'wcxp/order-note-checkbox-block', {} ],
	[ 'wcxp/checkout-actions-block', {} ],
];

export const OrderFieldsBlock = () => {
	return (
		<Column
			allowedBlocks={ ALLOWED_BLOCKS }
			template={ TEMPLATE }
			templateLock="all"
		>
			<h2>Order Fields/Actions</h2>
		</Column>
	);
};
