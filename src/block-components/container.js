/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export const Container = ( { shouldUseBlockProps = true, ...props } ) => {
	const blockProps = useBlockProps( props );
	const containerProps = shouldUseBlockProps
		? { ...blockProps }
		: { ...props };
	let { className, ...restProps } = containerProps;
	className = `${ className } wc-exp-block`;
	return <div className={ className } { ...restProps } />;
};
