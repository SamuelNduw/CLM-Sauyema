import React, { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.instgrm){
      window.instgrm.Embeds.process();
    }
  });

  return (
    <div>
      <blockquote
        className="instagram-media"
        // data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/C1tZo3NMBRI/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '99.375%',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a
            href="https://www.instagram.com/reel/C1tZo3NMBRI/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: '#FFFFFF',
              lineHeight: '0',
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
