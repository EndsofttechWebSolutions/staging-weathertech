<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'weather_tech');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Sn$GkB_c~3i+s!7 6gMi5e,p8:|w_OC|kuWgD+_x2:J!,,7m+wF7(MxM%oK}B}up');
define('SECURE_AUTH_KEY',  'n@*vVQRH6r45AkkVRya5yZhEEY/W}D7zrb`UC2xi+5Q6=BIej+cxg]Q]Q(o%286M');
define('LOGGED_IN_KEY',    '[,I0 .JzJCYMOBZ&_?.Mfb:?,ePJaQ[Ew.0`)PW:4@`sB==$s3EJv,ba>8J*a9Q,');
define('NONCE_KEY',        'Xy2~C~Ej2Hzsz5sFI]txm?l<obQl3+N{x!ijP${vMp[.9|klV6|GG)8PRC_ON#b7');
define('AUTH_SALT',        'XX[J{2_VGDLy/+%P*cNh_pWZY.u|Ray=+9(W/cWlp]*n8NgJ:cFv~6;`yK>KX6 A');
define('SECURE_AUTH_SALT', 'PPk;=SMmXbLRz505m~uEue2hKb2{l|8L7z/!NS3K>(-5Uf =/Q}|P~7y(&dqQFrj');
define('LOGGED_IN_SALT',   '%.xTZA.yrYzp=I29R$|9M!y-0W>KLWBZ2PA#+aDUvd,L*GoTyR?{di}jVK QC}L*');
define('NONCE_SALT',       '4MPR^d>D l2*58&j_1-}r+^9V49m%_-2A5}F&^~yJDK0 7>*yJM(OfVS*{X,L4,L');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
