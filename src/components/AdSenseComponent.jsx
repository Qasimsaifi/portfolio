// AdSenseComponent.js
import React, { useEffect } from 'react';

const AdSenseComponent = () => {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4963448477339119';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* AdSense ad unit */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4963448477339119"
        data-ad-slot="YOUR_ADSENSE_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseComponent;
