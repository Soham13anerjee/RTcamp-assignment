<?php
/**
 * Plugin Name: Gutenberg Post Carousel Block
 * Description: A custom Gutenberg block that displays a slideshow of the latest posts. It is a fun assignment to sharpen my skills and increase hands-on working with wordpress
 * Version: 1.0.0
 * Author: Soham Banerjee
 * Github : https://github.com/Soham13anerjee
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function gutenberg_slideshow_block_register_block() {
    // Register block editor script
    wp_register_script(
        'gutenberg-slideshow-block',
        plugins_url( 'dist/block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );

    // Register block editor styles
    wp_register_style(
        'gutenberg-slideshow-block-editor',
        plugins_url( 'src/editor.css', __FILE__ ),
        array( 'wp-edit-blocks' )
    );

    // Register front-end styles
    wp_register_style(
        'gutenberg-slideshow-block',
        plugins_url( 'src/style.css', __FILE__ )
    );

    register_block_type( 'gutenberg-slideshow-block/main', array(
        'editor_script' => 'gutenberg-slideshow-block',
        'editor_style' => 'gutenberg-slideshow-block-editor',
        'style' => 'gutenberg-slideshow-block',
    ) );
}

add_action( 'init', 'gutenberg_slideshow_block_register_block' );
?>
