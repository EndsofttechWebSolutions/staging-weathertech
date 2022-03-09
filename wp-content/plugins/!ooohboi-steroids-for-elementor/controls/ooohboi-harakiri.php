<?php
use Elementor\Controls_Manager;
use Elementor\Controls_Stack;
use Elementor\Element_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Main OoohBoi Harakiri
 *
 * The main class that initiates and runs the plugin.
 *
 * @since 1.0.0
 */
class OoohBoi_Harakiri {

	static $should_script_enqueue = false;

	/**
	 * Initialize 
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public static function init() {

		add_action( 'elementor/element/heading/section_title_style/before_section_end',  [ __CLASS__, 'add_section' ] );
        add_action( 'elementor/element/text-editor/section_style/before_section_end',  [ __CLASS__, 'add_section' ] );
        add_action( 'elementor/element/after_add_attributes',  [ __CLASS__, 'add_attributes' ] );

        /* should enqueue? */
        add_action( 'elementor/frontend/widget/before_render', [ __CLASS__, 'should_script_enqueue' ] );
        /* add script */
        add_action( 'elementor/preview/enqueue_scripts', [ __CLASS__, 'enqueue_scripts' ] );

    }

    /* enqueue script JS */
    public static function enqueue_scripts() {

        $extension_js = plugin_dir_path( __DIR__ ) . 'assets/js/harakiri-min.js'; 

        if( file_exists( $extension_js ) ) {
            wp_add_inline_script( 'elementor-frontend', file_get_contents( $extension_js ) );
        }

    }
    /* should enqueue? */
    public static function should_script_enqueue( $element ) {

        if( self::$should_script_enqueue ) return;

        if( 'inherit' != $element->get_settings_for_display( '_ob_harakiri_writing_mode' ) ) {

            self::$should_script_enqueue = true;
            self::enqueue_scripts();

            remove_action( 'elementor/frontend/section/before_render', [ __CLASS__, 'should_script_enqueue' ] );
        }
    }

    public static function add_attributes( Element_Base $element ) {

        if( ! in_array( $element->get_name(), [ 'heading', 'text-editor' ] ) ) return;
		$settings = $element->get_settings();
        $does_harakiri = isset( $settings[ '_ob_harakiri_writing_mode' ] ) ? $settings[ '_ob_harakiri_writing_mode' ] : '';
        
        if( 'inherit' !== $settings[ '_ob_harakiri_writing_mode' ] ) 
            $element->add_render_attribute( '_wrapper', 'class', 'ob-harakiri' );

    }
    
	public static function add_section( Element_Base $element ) {

		//  create panel section
		$element->add_control(
			'_ob_harakiri_plugin_title',
			[
				'label' => 'H A R A K I R I', 
				'type' => Controls_Manager::HEADING,
				'separator' => 'before', 
			]
        );
		// --------------------------------------------------------------------------------------------- CONTROL: Text COLOR Regular
		$element->add_control(
			'_ob_harakiri_color_hover',
			[
				'label' => __( 'Color - HOVER', 'ooohboi-steroids' ),
				'type' => Controls_Manager::COLOR,
				'separator' => 'before', 
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-heading-title:hover' => 'color: {{VALUE}};',
				],
			]
		);
        $element->add_responsive_control(
			'_ob_harakiri_writing_mode',
			[
				'label' => __( 'Writing Mode', 'ooohboi-steroids' ),
				'type' => Controls_Manager::SELECT,
                'default' => 'inherit', 
				'prefix_class' => 'ob-harakiri-', 
				'frontend_available' => true, 
				'options' => [
					'vertical-lr' => __( 'Vertical LR', 'ooohboi-steroids' ),
					'vertical-rl' => __( 'Vertical RL', 'ooohboi-steroids' ),
					'inherit' => __( 'Normal', 'ooohboi-steroids' ),
                ],
				'selectors' => [
					'{{WRAPPER}}.ob-harakiri' => 'writing-mode: {{VALUE}};', 
                    '{{WRAPPER}}.ob-harakiri .elementor-heading-title' => 'writing-mode: {{VALUE}};', 
					'{{WRAPPER}}.ob-harakiri .elementor-widget-container > div' => 'writing-mode: {{VALUE}};', 
                ],
			]
        );
		/* 1.8.2 - UPD !!! */
        $element->add_responsive_control(
			'_ob_harakiri_make_inline',
			[
				'label' => __( 'Flip', 'ooohboi-steroids' ),
				'type' => Controls_Manager::SELECT,
                'default' => 'no', 
				'options' => [
					'yes' => __( 'Yes', 'ooohboi-steroids' ), 
					'no' => __( 'No', 'ooohboi-steroids' ),
				],
				'selectors_dictionary' => [
					'yes' => 'rotate(180deg)', 
					'no' => 'rotate(0deg)',
				],
				'selectors' => [
                    '{{WRAPPER}}.ob-harakiri .elementor-heading-title' => 'transform: {{VALUE}};', 
                    '{{WRAPPER}}.ob-harakiri .elementor-widget-container > div' => 'transform: {{VALUE}};',
				],
			]
		);


        $element->add_responsive_control(
			'_ob_harakiri_height',
			[
				'label' => __( 'Height', 'ooohboi-steroids' ),
				'type' => Controls_Manager::SELECT,
                'default' => '', 
				'options' => [
					'' => __( 'Default', 'ooohboi-steroids' ),
					'auto' => __( 'Inline', 'ooohboi-steroids' ) . ' (auto)', 
					'initial' => __( 'Custom', 'ooohboi-steroids' ),
				],
				'selectors_dictionary' => [
					'inherit' => '100%',
				],
				'selectors' => [
					'{{WRAPPER}}.ob-harakiri' => 'inline-size: {{VALUE}}; width: unset;', 
					'{{WRAPPER}}.ob-harakiri .elementor-heading-title' => 'inline-size: {{VALUE}};', 
                    '{{WRAPPER}}.ob-harakiri .elementor-widget-container > div' => 'inline-size: {{VALUE}};',
				],
				'condition' => [
					'_ob_harakiri_writing_mode!' => 'inherit', 
                ],
			]
		);
        $element->add_responsive_control(
			'_ob_harakiri_height_custom',
			[
				'label' => __( 'Custom Height', 'ooohboi-steroids' ),
				'description' => __( 'NOTE: [%] unit works properly only if Column height is a fixed value!', 'ooohboi-steroids' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 1000,
						'step' => 1,
					],
					'%' => [
						'max' => 100,
						'step' => 1,
					],
					'vh' => [
						'max' => 100,
						'step' => 1,
					],
                ],
                'default' => [
					'unit' => '%',
					'size' => 100,
                ],
				'size_units' => [ 'px', '%', 'vh' ],
				'selectors' => [
					'{{WRAPPER}}.ob-harakiri' => 'inline-size: {{SIZE}}{{UNIT}}; width: unset;', 
                ],
                'device_args' => [
					Controls_Stack::RESPONSIVE_TABLET => [
						'condition' => [
							'_ob_harakiri_height_tablet' => [ 'initial' ], 
							'_ob_harakiri_writing_mode!' => 'inherit', 
						],
					],
					Controls_Stack::RESPONSIVE_MOBILE => [
						'condition' => [
							'_ob_harakiri_height_mobile' => [ 'initial' ], 
							'_ob_harakiri_writing_mode!' => 'inherit', 
						],
					],
				],
                'condition' => [
					'_ob_harakiri_height' => [ 'initial' ], 
					'_ob_harakiri_writing_mode!' => 'inherit', 
				],
			]
		);

		/* Textender alter-ego since v 1.7.0 */
		$element->add_responsive_control(
			'_ob_harakiri_mix_blend',
			[
				'label' => __( 'Mix Blend Mode', 'ooohboi-steroids' ),
				'description' => sprintf(
                    __( 'Learn more about this CSS property: %sMozilla.org%s', 'ooohboi-steroids' ),
                    '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode" target="_blank">',
                    '</a>'
				),
				'type' => Controls_Manager::SELECT,
                'default' => 'inherit', 
				'options' => [
					'inherit' => __( 'Default', 'ooohboi-steroids' ), 
					'multiply' => __( 'Multiply', 'ooohboi-steroids' ), 
					'screen' => __( 'Screen', 'ooohboi-steroids' ), 
					'overlay' => __( 'Overlay', 'ooohboi-steroids' ), 
					'darken' => __( 'Darken', 'ooohboi-steroids' ), 
					'lighten' => __( 'Lighten', 'ooohboi-steroids' ), 
					'color-dodge' => __( 'Color-dodge', 'ooohboi-steroids' ), 
					'color-burn' => __( 'Color-burn', 'ooohboi-steroids' ), 
					'hard-light' => __( 'Hard-light', 'ooohboi-steroids' ), 
					'soft-light' => __( 'Soft-light', 'ooohboi-steroids' ), 
					'difference' => __( 'Difference', 'ooohboi-steroids' ), 
					'exclusion' => __( 'Exclusion', 'ooohboi-steroids' ), 
					'hue' => __( 'Hue', 'ooohboi-steroids' ), 
					'saturation' => __( 'Saturation', 'ooohboi-steroids' ), 
					'color' => __( 'Color', 'ooohboi-steroids' ), 
					'luminosity' => __( 'Luminosity', 'ooohboi-steroids' ), 
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-widget-container' => 'mix-blend-mode: {{VALUE}};', 
				],
				'device_args' => [
                    Controls_Stack::RESPONSIVE_TABLET => [
                        'selectors' => [
                            '{{WRAPPER}} .elementor-widget-container' => 'mix-blend-mode: {{VALUE}};', 
                        ],
                    ],
                    Controls_Stack::RESPONSIVE_MOBILE => [
                        'selectors' => [
                            '{{WRAPPER}} .elementor-widget-container' => 'mix-blend-mode: {{VALUE}};', 
                        ],
                    ],
                ],
			]
		);

		/* since 1.8.2 - cutt bottom margin */
		$element->add_control(
			'_ob_harakiri_cut_bottom_margin',
			[
				'label' => __( 'Cut off the bottom margin', 'ooohboi-steroids' ), 
				'description' => __( 'NOTE: Only the last child P(aragraph) shall be cut off!', 'ooohboi-steroids' ), 
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Yes', 'ooohboi-steroids' ),
				'label_off' => __( 'No', 'ooohboi-steroids' ), 
				'return_value' => 'inherit', 
                'selectors' => [
                    '{{WRAPPER}} .elementor-widget-container p:last-child' => 'margin-bottom: 0px;', 
                ],
			]
		);

	}

}