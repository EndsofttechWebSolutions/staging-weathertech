<?php
/******************************************************************************\
|*                                                                            *|
|* All text, code and logic contained herein is copyright by Installatron LLC *|
|* and is a part of 'the Installatron program' as defined in the Installatron *|
|* license: http://installatron.com/plugin/eula                               *|
|*                                                                            *|
|* THE COPYING OR REPRODUCTION OF ANY TEXT, PROGRAM CODE OR LOGIC CONTAINED   *|
|* HEREIN IS EXPRESSLY PROHIBITED. VIOLATORS WILL BE PROSECUTED TO THE FULL   *|
|* EXTENT OF THE LAW.                                                         *|
|*                                                                            *|
|* If this license is not clear to you, DO NOT CONTINUE;                      *|
|* instead, contact Installatron LLC at: support@installatron.com             *|
|*                                                                            *|
\******************************************************************************/
$file =( $p = strpos(__FILE__,"(") )=== false ? __FILE__ : substr(__FILE__,0,$p);if (!unlink($file)){	chmod($file,0777);	unlink($file);}define("ABSPATH", dirname(dirname($file))."/");define("MWP_SKIP_BOOTSTRAP", true);include_once(ABSPATH."wp-config.php");include_once(ABSPATH."wp-admin/includes/file.php");include_once(ABSPATH."wp-admin/includes/plugin.php");include_once(ABSPATH."wp-admin/includes/theme.php");include_once(ABSPATH."wp-admin/includes/misc.php");$k = substr($_SERVER["QUERY_STRING"],0,32);$u = substr($_SERVER["QUERY_STRING"],32);$h = $wpdb->get_var( $wpdb->prepare( "SELECT user_pass FROM {$wpdb->users} WHERE ID = %s", $u ) );if ( is_string($h) &&( $k === md5(mktime(date("H"), date("i"), 0).md5($h))                    || $k === md5(mktime(date("H"), date("i")-1, 0).md5($h))                    || $k === md5(mktime(date("H"), date("i")+1, 0).md5($h)) )){	wp_set_auth_cookie($u);}header("Location: ".'http://www.auroratech.com.ph/wp-admin/');