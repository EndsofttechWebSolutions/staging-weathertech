<?php
/**
 * @var \ElementorPro\Modules\Notes\Database\Models\Note    $note
 * @var \ElementorPro\Modules\Notes\Database\Models\User    $notifiable
 * @var string                                              $site_name
 * @var string                                              $date
 */
?>
<h1>
	<?php
		echo sprintf(
			esc_html__( '%1$s replied to a note, "%2$s"', 'elementor-pro' ),
			esc_html( $note->author->display_name ),
			esc_html( $note->content )
		);
		?>
</h1>

<div>
	<p>
		<?php
			echo sprintf(
				esc_html__( 'Howdy %s,', 'elementor-pro' ),
				esc_html( $notifiable->display_name )
			); ?>
	</p>

	<p>
		<?php
			echo sprintf(
				esc_html__( 'On %1$s, %2$s replied to the following note on %3$s - %4$s:', 'elementor-pro' ),
				esc_html( $date ),
				esc_html( $note->author->display_name ),
				esc_html( $site_name ),
				esc_html( $note->route_title )
			);
			?>
	</p>

	<blockquote><?php echo esc_html( $note->content ); ?></blockquote>

	<a href="<?php echo esc_attr( $note->get_url() ); ?>" target="_blank" rel="noopener noreferrer">
		<?php echo esc_html__( 'Take me there', 'elementor-pro' ); ?>
	</a>
</div>

<?php require __DIR__ . '/footer.php';
