/**
 * Internal dependencies
 */
import { Column } from '../columns';

const ALLOWED_BLOCKS = [ 'wcxp/totals-block' ];
const TEMPLATE = [ [ 'wcxp/totals-block', {} ] ];

export const OrderTotalsBlock = () => {
	return (
		<Column
			allowedBlocks={ ALLOWED_BLOCKS }
			template={ TEMPLATE }
			templateLock="all"
		>
			<h2>Order Totals</h2>
		</Column>
	);
};
