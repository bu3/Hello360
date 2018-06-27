// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        ...options,
    });

    // Render your app content to the default cylinder surface
    r360.renderToSurface(
        r360.createRoot('Hello360', {/* initial props */}),
        r360.getDefaultSurface()
    );

    // Load the initial environment
    // r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

    const player = r360.compositor.createVideoPlayer('myplayer');

    player.setSource('static_assets/video.mp4', '2D');
    // player.setSource('https://github.com/bemarble/react360-samples/blob/ce17496888488c9460269d65566c974dd2d91252/panorama-video/static_assets/video.mp4', '2D');

    r360.compositor.setBackgroundVideo('myplayer');
}

window.React360 = {init};
