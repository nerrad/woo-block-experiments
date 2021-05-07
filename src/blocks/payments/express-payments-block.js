/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { Container } from '../../block-components/container';

const ALLOWED_BLOCKS = [ 'core/buttons' ];

const TEMPLATE = [ [ 'core/buttons', {} ] ];

export const ExpressPaymentsBlock = ( { children, ...props } ) => {
	return (
		<Container className="express-payments-block" { ...props }>
			{ children }
			<p>
				This block is configured with inner blocks that allow insertion
				of multiple buttons blocks (which in turn allow for inserting
				multiple buttons).
			</p>
			<p>
				We definitely won't have something <em>exactly</em> like this in
				the Express Payment methods area but it does illustrate how we
				could potentially dynamically wrap payment method buttons here
				as blocks and thus allow for payment methods to have in context
				settings in this area.
			</p>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				templateLock={ false }
			/>
		</Container>
	);
};
