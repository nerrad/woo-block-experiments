/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { Container } from '../../block-components/container';

export const CheckoutActionsBlock = ( { children } ) => {
	return (
		<Container className="checkout-actions-block">
			{ children }
			<p>
				The inner blocks area is configured here so inserting new blocks
				is disabled, but users can still reposition the blocks.
			</p>
			<InnerBlocks
				allowedBlocks={ [
					'wcxp/return-to-cart-block',
					'wcxp/checkout-submit-block',
					'core/paragraph',
				] }
				template={ [
					[ 'wcxp/return-to-cart-block', {} ],
					[ 'wcxp/checkout-submit-block', {} ],
				] }
				templateLock={ 'insert' }
				orientation="horizontal"
			/>
		</Container>
	);
};
