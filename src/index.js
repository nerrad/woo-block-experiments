/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './style.scss';
import './blocks';
import { Edit, Save } from './blocks/main';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'wcxp/main-block', {
	edit: Edit,
	// just doing null for now - not worrying about frontend for initial part of experiment.
	save: () => null,
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
	},
} );
