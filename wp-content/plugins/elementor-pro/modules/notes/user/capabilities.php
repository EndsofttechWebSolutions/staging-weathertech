<?php
namespace ElementorPro\Modules\Notes\User;

use ElementorPro\Modules\Notes\Database\Models\Note;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Capabilities {
	const CREATE_NOTES = 'create_notes_elementor-pro';
	const EDIT_NOTES = 'edit_notes_elementor-pro';
	const EDIT_OTHERS_NOTES = 'edit_others_notes_elementor-pro';
	const DELETE_NOTES = 'delete_notes_elementor-pro';
	const DELETE_OTHERS_NOTES = 'delete_others_notes_elementor-pro';
	const READ_NOTES = 'read_notes_elementor-pro';
	const READ_OTHERS_PRIVATE_NOTES = 'read_others_private_notes_elementor-pro';

	/**
	 * @return string[]
	 */
	public static function all() {
		return [
			static::CREATE_NOTES,
			static::EDIT_NOTES,
			static::EDIT_OTHERS_NOTES,
			static::DELETE_NOTES,
			static::DELETE_OTHERS_NOTES,
			static::READ_NOTES,
			static::READ_OTHERS_PRIVATE_NOTES,
		];
	}

	/**
	 * Register actions and hooks
	 */
	public function register() {
		add_filter( 'map_meta_cap', function ( $caps, $cap, $user_id, $args ) {
			return $this->map_meta_cap( $caps, $cap, $user_id, $args );
		}, 10, 4 );
	}

	/**
	 * Handle the capabilities of the notes
	 *
	 * @param string[] $caps
	 * @param string $cap
	 * @param int $user_id
	 * @param array $args
	 *
	 * @return array
	 */
	private function map_meta_cap( array $caps, $cap, $user_id, array $args ) {
		if (
			! in_array( $cap, static::all(), true ) || // Handle only elementor notes capabilities.
			empty( $args[0] ) // Checking for capability without provide a specific note id.
		) {
			return $caps;
		}

		$note = $args[0] instanceof Note
			? $args[0]
			: Note::query()->find( $args[0] );

		// When note not found don't let the user do nothing.
		if ( ! $note ) {
			$caps[] = 'do_not_allow';

			return $caps;
		}

		// If the current user is the author of the notes there are
		// no extra caps to add.
		if ( $note->author_id === $user_id ) {
			return $caps;
		}

		// If the note is private and the current user is not the author of the note
		// It adds "read others private notes" capability.
		// Note: when $args[0] is provided on "create note" it refers to the "parent_id" and not
		// to the actual new note.
		if (
			! $note->is_public
			&& in_array( $cap, [ static::READ_NOTES, static::CREATE_NOTES ], true )
		) {
			$caps[] = static::READ_OTHERS_PRIVATE_NOTES;
		}

		// When trying to edit a note, and the current user is not the author of the note.
		if ( static::EDIT_NOTES === $cap ) {
			$caps[] = static::EDIT_OTHERS_NOTES;
		}

		// When trying to delete a note, and the current user is not the author of the note.
		if ( static::DELETE_NOTES === $cap ) {
			$caps[] = static::DELETE_OTHERS_NOTES;
		}

		return $caps;
	}
}
