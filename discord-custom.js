/*
* Hold Up!
* Pasting anything in here could give attackers access to your Discord account.
* Unless you understand exactly what you are doing, close this document and stay safe.
*/

// Make this array empty to not load the core plugin. (If you delete it, it will still load it.) I don't recommend removing this as it will remove all GUI functionality!
global.plugins = [ 'https://raw.githubusercontent.com/justinoboyle/mydiscord/master/core.js' ];

if(global.config.plugins)
    for(let plugin of global.config.plugins)
        global.loadPlugin(plugin);

// To load more plugins (below) -- don't recreate the array! **use global.loadPlugin(link)**

// Colored text based on a users role color.

global.loadPlugin('https://raw.githubusercontent.com/ConnerItayi/Personal-MyDiscord-Plugin-List/master/GlobalJS/colortext.js')

// Background loading

global.loadPlugin('https://raw.githubusercontent.com/ConnerItayi/Personal-MyDiscord-Plugin-List/master/GlobalJS/rotatingbackground.js')

// You probably don't actually need to touch this file if you're using the proper plugin installation system through core.js
