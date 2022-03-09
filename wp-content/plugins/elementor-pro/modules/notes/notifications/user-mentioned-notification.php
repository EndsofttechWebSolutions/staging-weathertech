<?php
namespace ElementorPro\Modules\Notes\Notifications;

use ElementorPro\Core\Integrations\Actions\Email\Email_Message;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class User_Mentioned_Notification extends Base_Notes_Notification {

	protected function create_email_message( $notifiable ) {
		$subject = sprintf(
			esc_html__( 'New mention in Note #%1$s on %2$s - %3$s', 'elementor-pro' ),
			$this->note->get_thread_id(),
			get_bloginfo( 'name' ),
			$this->note->route_title
		);

		return ( new Email_Message() )
			->from( ...$this->get_sender() )
			->to( $notifiable->user_email, $notifiable->display_name )
			->subject( $subject )
			->view( __DIR__ . '/views/user-mentioned.php', [
				'note' => $this->note,
				'date' => $this->get_date(),
				'notifiable' => $notifiable,
				'site_name' => get_bloginfo( 'name' ),
			] );
	}
}
