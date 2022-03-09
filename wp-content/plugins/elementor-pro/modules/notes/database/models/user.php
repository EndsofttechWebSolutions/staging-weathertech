<?php

namespace ElementorPro\Modules\Notes\Database\Models;

use ElementorPro\Core\Database\Model_Base;
use ElementorPro\Core\Notifications\Traits\Notifiable;
use ElementorPro\Core\Utils\Collection;
use ElementorPro\Modules\Notes\Database\Query\User_Query_Builder;
use ElementorPro\Modules\Notes\User\Capabilities;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// TODO: Should be in Core.
class User extends Model_Base implements \JsonSerializable {

	use Notifiable;

	/**
	 * User's ID.
	 * Note: Must be uppercase to correspond with the DB naming.
	 *
	 * @var int
	 */
	public $ID;

	/**
	 * User's actual user name.
	 *
	 * @var string
	 */
	public $user_login;

	/**
	 * User's nice name.
	 *
	 * @var string
	 */
	public $user_nicename;

	/**
	 * User's email.
	 *
	 * @var string
	 */
	public $user_email;

	/**
	 * User's URL.
	 *
	 * @var string
	 */
	public $user_url;

	/**
	 * User's status.
	 *
	 * @var int
	 */
	public $user_status;

	/**
	 * User's display name.
	 *
	 * @var string
	 */
	public $display_name;

	/**
	 * Casts array.
	 *
	 * @var array
	 */
	protected static $casts = [
		'ID' => self::TYPE_INTEGER,
	];

	/**
	 * Initialize a new `User` object from a `WP_User` object.
	 *
	 * @param \WP_User $user - WP_User object.
	 *
	 * @return static
	 */
	public static function from_wp_user( \WP_User $user ) {
		return new static( (array) $user->data );
	}

	/**
	 * Override the default Query Builder.
	 *
	 * @param \wpdb|null $connection
	 *
	 * @return \ElementorPro\Modules\Notes\Database\Query\User_Query_Builder()
	 */
	public static function query( \wpdb $connection = null ) {
		return ( new User_Query_Builder( $connection ) )->from( static::get_table() );
	}

	/**
	 * Get the model's table name.
	 *
	 * @return string
	 */
	public static function get_table() {
		return 'users';
	}

	/**
	 * Get the user's avatars.
	 *
	 * @return Collection
	 */
	public function get_avatars() {
		return ( new Collection( [ 24, 48, 96 ] ) )->map_with_keys( function ( $size ) {
			return [
				$size => get_avatar_url( $this->ID, [ 'size' => $size ] ),
			];
		} );
	}

	/**
	 * Return a JSON serialized representation of the User.
	 *
	 * @return array
	 */
	public function jsonSerialize() {
		// TODO: This serialized response might be visible to unauthorized users.
		//  DON'T INCLUDE ANY SENSITIVE DATA.
		return [
			'id' => $this->ID,
			'name' => $this->display_name,
			'url' => $this->user_url,
			'slug' => $this->user_nicename,
			'avatar_urls' => $this->get_avatars(),
			'capabilities' => [
				'notes' => [
					'can_read' => user_can( $this->ID, Capabilities::READ_NOTES ),
				],
			],
		];
	}
}
