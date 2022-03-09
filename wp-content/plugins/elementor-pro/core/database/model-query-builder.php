<?php
namespace ElementorPro\Core\Database;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Model_Query_Builder extends Query_Builder {
	/**
	 * The Query Builder associated model.
	 *
	 * @var string
	 */
	public $model;

	/**
	 * Model_Query_Builder constructor.
	 *
	 * @param string $model_classname - Model to use inside the builder.
	 * @param \wpdb|null $connection - MySQL connection.
	 */
	public function __construct( $model_classname, \wpdb $connection = null ) {
		$this->set_model( $model_classname );

		parent::__construct( $connection );
	}

	/**
	 * Set the model the generated from the query builder.
	 *
	 * @param $model_classname
	 *
	 * @return $this
	 */
	public function set_model( $model_classname ) {
		$this->model = $model_classname;

		return $this;
	}

	/**
	 * Override the parent `get()` and make Models from the results.
	 *
	 * @return \ElementorPro\Core\Utils\Collection
	 */
	public function get() {
		$items = parent::get();
		$model = $this->model;

		// Convert the SQL results to Model instances.
		return $items->map( function ( $comment ) use ( $model ) {
			return new $model( $comment );
		} );
	}
}
