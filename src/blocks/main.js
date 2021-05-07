// export const Main = ( props ) => {
// 	return (
// 		<Columns>
// 			<Column>
// 				<ExpressPaymentsBlock />
// 					<ContactInformationBlock />
// 					<ShippingAddressBlock />
// 					<BillingAddressBlock />
// 					<ShippingOptionsBlock />
// 					<PaymentMethodsBlock />
// 				<OrderNoteCheckboxBlock />
// 				<CheckoutActionsBlock>
// 					<ReturnToCartBlock />
// 					<CheckoutSubmitBlock />
// 				</CheckoutActionsBlock>
// 			</Column>
// 			<Column>
// 				<TotalsBlock />
// 			</Column>
// 		</Columns>
// 	);
// };

/**
 * External dependencies
 */
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { Columns } from './columns';

const ALLOWED_BLOCKS = [ 'wcxp/order-fields-block', 'wcxp/order-totals-block' ];

const TEMPLATE = [
	[ 'wcxp/order-fields-block', {} ],
	[ 'wcxp/order-totals-block', {} ],
];

const Main = () => {
	return (
		<>
			<InspectorControls>Main Block controls</InspectorControls>
			<Columns>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock="all"
				/>
			</Columns>
		</>
	);
};

export const Edit = () => <Main isEditor={ true } />;
export const Save = () => <Main isEditor={ false } />;
