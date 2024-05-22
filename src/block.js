import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';

registerBlockType('gutenberg-slideshow-block/main', {
    apiVersion: 2,
    title: 'Slideshow Block',
    icon: 'images-alt2',
    category: 'widgets',
    edit() {
        const blockProps = useBlockProps();
        const [posts, setPosts] = useState([]);
        
        useEffect(() => {
            fetch('https://wptavern.com/wp-json/wp/v2/posts')
                .then(response => response.json())
                .then(data => setPosts(data));
        }, []);
        
        return (
            <div {...blockProps}>
                <div className="slideshow-container">
                    {posts.map(post => (
                        <div className="slide" key={post.id}>
                            <h2>{post.title.rendered}</h2>
                            {post.featured_media && (
                                <img src={post.featured_media_url} alt={post.title.rendered} />
                            )}
                            <p>{post.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
    save() {
        return null; // Dynamic block rendered on the server.
    }
});
