<?php
namespace ElementorPro\Core\Database;

use Elementor\Core\Utils\Collection;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Migration {
	/*
	 * @see https://github.com/WordPress/WordPress/blob/d2694aa46647af48d1bcaff48a4f6cac7f5cf470/wp-admin/includes/schema.php#L49
	 */
	const MAX_INDEX_LENGTH = 191;

	/**
	 * @var \wpdb
	 */
	protected $wpdb;

	/**
	 * @param \wpdb|null $wpdb_instance
	 */
	public function __construct( \wpdb $wpdb_instance = null ) {
		if ( ! $wpdb_instance ) {
			global $wpdb;

			$this->wpdb = $wpdb;
		} else {
			$this->wpdb = $wpdb_instance;
		}
	}

	/**
	 * Runs when upgrading the database
	 *
	 * @return void
	 */
	abstract public function up();

	/**
	 * Runs when downgrading the database.
	 *
	 * @return void
	 */
	abstract public function down();

	/**
	 * A util to run SQL for creating tables.
	 *
	 * @param       $table_name
	 * @param array $columns
	 */
	protected function create_table( $table_name, array $columns ) {
		$table_name = "{$this->wpdb->prefix}{$table_name}";

		$columns_sql = ( new Collection( $columns ) )
			->map( function( $definition, $col_name ) {
				return "`{$col_name}` {$definition}";
			} )
			->implode( ', ' );

		$query = "CREATE TABLE `{$table_name}` ({$columns_sql}) {$this->wpdb->get_charset_collate()};";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		$this->run_db_delta( $query );
	}

	/**
	 * A util to run SQL for dropping tables.
	 *
	 * @param $table_name
	 */
	protected function drop_table( $table_name ) {
		$table_name = "{$this->wpdb->prefix}{$table_name}";

		$query = "DROP TABLE IF EXISTS `{$table_name}`;";

		// Safe query that shouldn't be escaped.
		$this->wpdb->query( $query ); // phpcs:ignore
	}

	/**
	 * A util to run SQL for creating indexes.
	 *
	 * @param       $table_name
	 * @param array $column_names
	 */
	protected function create_indexes( $table_name, array $column_names ) {
		$max_index_length = static::MAX_INDEX_LENGTH;
		$table_name = "{$this->wpdb->prefix}{$table_name}";

		// Safe query that shouldn't be escaped.
		$current_columns = $this->wpdb->get_results( "show columns from `{$table_name}`;", ARRAY_A ); // phpcs:ignore

		if ( ! $current_columns ) {
			return;
		}

		$should_set_max_length_index = ( new Collection( $current_columns ) )
			->filter( function ( $value ) {
				preg_match( '/\((\d+)\)/', $value['Type'], $match );

				return ( isset( $match[1] ) && intval( $match[1] ) > Base_Migration::MAX_INDEX_LENGTH )
					|| in_array( strtolower( $value['Type'] ), [ 'text', 'longtext' ], true );
			} )
			->pluck( 'Field' )
			->values();

		$indexes_sql = ( new Collection( $column_names ) )
			->map( function( $col_name ) use ( $should_set_max_length_index, $max_index_length ) {
				$max_index_length_sql = '';

				if ( in_array( $col_name, $should_set_max_length_index, true ) ) {
					$max_index_length_sql = " ({$max_index_length})";
				}

				return "ADD INDEX `{$col_name}_index` (`{$col_name}`{$max_index_length_sql})";
			} )
			->implode( ', ' );

		$query = "ALTER TABLE `{$table_name}` {$indexes_sql};";

		// Safe query that shouldn't be escaped.
		$this->wpdb->query( $query ); // phpcs:ignore
	}

	/**
	 * Runs global dbDelta function (wrapped into method to allowing mock for testing).
	 *
	 * @param $query
	 *
	 * @return array
	 */
	protected function run_db_delta( $query ) {
		return dbDelta( $query );
	}
}
