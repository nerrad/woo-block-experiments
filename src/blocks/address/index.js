/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { BillingAddressBlock } from './billing-address-block';
import { ShippingAddressBlock } from './shipping-address-block';
import { ContactInformationBlock } from './contact-information-block';

const contactInformationSettings = {
	title: 'Contact Information Block',
	category: 'woocommerce',
	description: 'Contact Information for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<ContactInformationBlock>
			<h3>Contact Information block</h3>
		</ContactInformationBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType(
	'wcxp/contact-information-block',
	contactInformationSettings
);

const billingSettings = {
	title: 'Billing Address Block',
	category: 'woocommerce',
	description: 'Billing address fields for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<BillingAddressBlock>
			<h3>Billing address block</h3>
		</BillingAddressBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/billing-address-block', billingSettings );

const shippingSettings = {
	title: 'Shipping Address Block',
	category: 'woocommerce',
	description: 'Shipping address fields for the checkout block',
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
	attributes: {},
	edit: () => (
		<ShippingAddressBlock>
			<h3>Shipping address block</h3>
		</ShippingAddressBlock>
	),

	//Save the props to post content.
	save: () => null,
};

registerBlockType( 'wcxp/shipping-address-block', shippingSettings );
