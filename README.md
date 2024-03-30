Personal `user.js` based on Arkenfox's, with some personal tweaks, mostly 'cosmetics' (Default dark mode, always ask where to download, everything deleted on every firefox quit...)

All security features are based on [arkenfox's](https://github.com/arkenfox/user.js/blob/master/user.js) recommendation and fits my personal needs (selfhosted services, self-signed ceritifcates with OCSP, container isolation...)

While this `user.js` is more readable and less cluttered, I HIGHLY recommened you to go through the official [arkenfox user.js](https://github.com/arkenfox/user.js/blob/master/user.js), to understand what every entrie does.

# How to use
1) BACKUP your main profile. 
2) Open firefox, type `about:profiles` in the search bar.
3) Create a new Test profile.
4) Open the root directory folder of the newly created profile and put the `user.js` in there.
5) Launch profile in a new browser
6) If happy with the testing, give it a try on your main profile !

!!!! This could potentially break your main profile depending your addons, user preferences, tweaks, installed themes... ALWAYS make a safe BACKUP !!!!

# Recommendation
- Depending your workflow, make a new profile based on the `user.js` and import your bookmarks from your old profile. 
- If you wan't to make manual changes, keep in mind you have to delete the `user.js` file first, else they will be overwritten.
- Do not install plugin's like [Chameleon](https://addons.mozilla.org/en-US/firefox/addon/chameleon-ext/) to spoof your browser profile. This will work against resist finger print (RFP) and create unpredictables outcomes. ([[SECTION 4500]: RFP (resistFingerprinting)](https://github.com/arkenfox/user.js/blob/33a84b608c8a1f871c6ce9c4d2b932dc57078fae/user.js#L713C1-L713C48))
- Change the default search engine (Changing the default engine with user.js is not possible anymore, tampering protection)
- Install
  - [uBlock Origin](https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/)
  - [LocalCDN](https://addons.mozilla.org/en-GB/firefox/addon/localcdn-fork-of-decentraleyes/)
  - [Privacy Badger](https://addons.mozilla.org/en-GB/firefox/addon/privacy-badger17/)
  - [NoScript](https://addons.mozilla.org/en-GB/firefox/addon/noscript/)
- Have a proper configured DNS sinkhole in your home networking infrastructure [pi-hole](https://pi-hole.net/)
- Have a well configured router and Learn about VLANs and how you can benefit from a segmented network.
- Use a trusted VPN vendor and learn how to install/use a WireGuard tunnel.

# Features
- All the recommended privcy entries from Arkenfox's user.js
- Resist Finger Print
- No telemetry (except for crash reports)
- No url bar browser search suggestion
- No sponsored suggestion
- Every cookie (except those allowed by the user), hisotry, cache, form, download deleted on every Firefox shutdown (clearOnShutdown).
- No disk cache, extra session data
- Firefox Dark mode theme by default (still need [Dark Reader](https://addons.mozilla.org/en-GB/firefox/addon/darkreader/) for web pages)
- User.js in a more readable format (downside, less documentation)
# FAQ
**Why is DoH off in your user.js configuration file ?**

Because I use a personal VPN with an upstream DoH resolver. In case you want to use the default Firefox DoH upstream you need to change/add the following lines:
```
## [SECTION 0400]: DNS / DoH / PROXY / SOCKS 
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://example.dns");
```
**Video calling, meetings, video chats do not work anymore ?**

I completely disabled WebRTC with the following line
```
user_pref("media.peerconnection.enabled", false);
```
Comment out this line with `//user_pref("media.peerconnection.enabled", false);` and uncomment the following lines:
```
//user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
//user_pref("media.peerconnection.ice.default_address_only", true);
```
And maybe comment out the following line (Not sure didn't tested it with calling, meetings and video chats...):
```
user_pref("media.gmp-provider.enabled", false);
```

# Credits

Credits
https://github.com/arkenfox/user.js
https://github.com/pyllyukko/user.js/
https://wiki.archlinux.org/title/Firefox/Privacy
