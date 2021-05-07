/**
 * External dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { Container } from '../../block-components/container';

export const Column = ( {
	allowedBlocks = [],
	template = [],
	templateLock = 'all',
	isEditor = true,
	children,
} ) => {
	const content = isEditor ? (
		<InnerBlocks
			allowedBlocks={ allowedBlocks }
			template={ template }
			templateLock={ templateLock }
		/>
	) : (
		<InnerBlocks.Content />
	);
	return (
		<Container className="column-block" shouldUseBlockProps={ false }>
			{ children }
			{ content }
		</Container>
	);
};
