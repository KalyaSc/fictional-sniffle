/*** [SECTION 0100]: STARTUP / UI tweaks / General behaviour ***/
user_pref("_user.js.parrot", "0100 syntax error: the parrot's dead!");

/** Disable about:config warning **/
user_pref("browser.aboutConfig.showWarning", false);

/** Set startup page
* 0=blank, 1=home, 2=last visited page, 3=resume previous session **/
user_pref("browser.startup.page", 1);

/** Set HOME + NewWindow page 
* about:home=Firefox Home, custom URL, about:blank **/
user_pref("browser.startup.homepage", "about:home");

/** Set NEWTAB page
* true=Firefox Home (default, see 0105), false=blank page  **/
user_pref("browser.newtabpage.enabled", true);

/** Clear default topsites **/
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/** Enable dark mode by default for Firefox (Complement with DarkReader add-on) **/
user_pref("layout.css.prefers-color-scheme.content-override", 0);
user_pref("browser.theme.content-theme", 2);

/** Always ask where to save downloaded files **/
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);

/** Disable auto-update **/
user_pref("app.update.auto", false);

/** Default permission **/
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.desktop-notification", 0);
user_pref("permissions.default.geo", 0);
user_pref("permissions.default.microphone", 0);
user_pref("permissions.default.xr", 0);

/** Disable sponsored content on Firefox Home (Activity Stream) **/
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

/* ****************************************************************************** */

/*** [SECTION 0200]: GEOLOCATION ***/
user_pref("_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");

/** Disable using the OS's geolocation service and Mozilla's geo service **/

user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX] [HIDDEN PREF]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

/* ****************************************************************************** */

/*** [SECTION 0300] Quieter FOX ***/
user_pref("_user.js.parrot", "0300 syntax error: the parrot's not pinin' for the fjords!");

/** Disable recommendation pane in about:addons (uses Google Analytics) **/
user_pref("extensions.getAddons.showPane", false);

/** Disable recommendations in about:addons' Extensions and Themes panes **/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

/** Disable personalised Extension Recommendations in about:addons and AMO **/
user_pref("browser.discovery.enabled", false);

/** Disable shopping experience **/
user_pref("browser.shopping.experience2023.enabled", false);

/** TELEMETRY **/

/** Disable new data submission **/
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/** Disable Health Reports **/
user_pref("datareporting.healthreport.uploadEnabled", false);

/** Disable telemetry **/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

/** Disable Telemetry Coverage **/
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true); 
user_pref("toolkit.coverage.endpoint.base", "");

/** Disable PingCentre telemetry (used in several System Add-ons) **/
user_pref("browser.ping-centre.telemetry", false);

/** Disable Firefox Home (Activity Stream) telemetry **/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false); 

/** STUDIES **/

/** Disable Studies **/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS (I leave them on, this could be useful to Mozilla-Firefox) **/

/** Disable Crash Reports **/
//user_pref("breakpad.reportURL", "");
//user_pref("browser.tabs.crashReporting.sendReport", false);
//user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
//user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** OTHER **/

/** Disable Captive Portal detection **/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

/** Disable Network Connectivity checks **/
user_pref("network.connectivity-service.enabled", false);

/* ****************************************************************************** */

/*** [SECTION 0400]: DNS / DoH / PROXY / SOCKS ***/
user_pref("_user.js.parrot", "0400 syntax error: the parrot's not pinin' for the fjords!");

/** Enable DNS-over-HTTPS (DoH)
0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off **/
user_pref("network.trr.mode", 5);

/** Disable using UNC (Uniform Naming Convention) paths **/
user_pref("network.file.disable_unc_paths", true);

/** disable GIO as a potential proxy bypass vector **/
user_pref("network.gio.supported-protocols", "");

/* ****************************************************************************** */

/*** [SECTION 0500]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
user_pref("_user.js.parrot", "0500 syntax error: the parrot's expired!");

/** Browser recommendation settings **/
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

/** Address Bar suggest **/
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.engines", false);

/** Disable browsing and download history **/
user_pref("places.history.enabled", false);
user_pref("browser.formfill.enable", false);

/** Search suggest **/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

/** Disable location bar contextual suggestions **/
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

/** Disable urlbar suggestions **/
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false); 
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", false);

/** Disable location bar making speculative connections **/
user_pref("browser.urlbar.speculativeConnect.enabled", false);



/* ****************************************************************************** */

/*** [SECTION 0600]: PASSWORDS ***/
user_pref("_user.js.parrot", "0600 syntax error: the parrot is lost in the woods ?");

/** Disable auto-filling username & password form fields **/
user_pref("signon.autofillForms", false);

/** Disable ask to save password & breaches **/
user_pref("signon.rememberSignons", false);
user_pref("signon.management.page.breach-alerts.enabled", false);

/** Disable formless login capture for Password Manager **/
user_pref("signon.formlessCapture.enabled", false);

/** Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
 	* hardens against potential credentials phishing
	* 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
 	* 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
 	* 2 = allow sub-resources to open HTTP authentication credentials dialogs (default) **/

user_pref("network.auth.subresource-http-auth-allow", 1);

/* *******************************************************************************/

/*** [SECTION 0700]: CONTAINERS ***/
user_pref("_user.js.parrot", "0700 syntax error: the parrot's bit the dust!");

/** Enable Container Tabs and its UI setting **/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

/* ****************************************************************************** */

/*** [SECTION 0800]: PLUGINS / MEDIA / WEBRTC ***/
user_pref("_user.js.parrot", "0800 syntax error: the parrot's snuffed it!");

/** Force WebRTC inside the proxy **/
//user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

/** Force a single network interface for ICE candidates generation **/
//user_pref("media.peerconnection.ice.default_address_only", true);

/** Disable WebRTC **/
user_pref("media.peerconnection.enabled", false);

/** Disable GMP (Gecko Media Plugins) **/
user_pref("media.gmp-provider.enabled", false);

/* ****************************************************************************** */

/*** [SECTION 0900]: ETP (ENHANCED TRACKING PROTECTION) ***/
user_pref("_user.js.parrot", "0900 syntax error: the parrot's joined the bleedin' choir invisible!");

/** Enable ETP Strict Mode [FF86+] **/
user_pref("browser.contentblocking.category", "strict");

/* ****************************************************************************** */

/*** [SECTION 1000]: SHUTDOWN & SANITIZING ***/
user_pref("_user.js.parrot", "1000 syntax error: the parrot's bleedin' demised!");

/** Enable Firefox to clear items on shutdown IGNORES "ALLOW" SITE EXCEPTIONS **/
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true); 
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", false);

/** Set "Cookies" and "Site Data" to clear on shutdown RESPECTS "ALLOW" SITE EXCEPTIONS **/
user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data

/** Manual sanitize IGNORES "ALLOW" SITE EXCEPTIONS **/
user_pref("privacy.cpd.cache", true); 
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true); 
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.openWindows", true);
user_pref("privacy.cpd.siteSettings", false);

/** Reset default "Time range to clear" for "Clear Recent History" **/
user_pref("privacy.sanitize.timeSpan", 0);

/* ****************************************************************************** */

/*** [SECTION 1100]: RFP (resistFingerprinting) overrides Finger print protection (FPP)
	* [WARNING] DO NOT USE extensions to alter RFP protected metrics
	* RFP also has a few side effects: mainly timezone is UTC, and websites will prefer light theme  ***/
user_pref("_user.js.parrot", "1100 syntax error: the parrot's popped 'is clogs");

/** Enable RFP **/
user_pref("privacy.resistFingerprinting", true);

/** Set new window size rounding max values **/
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);

/** Disable mozAddonManager Web API **/
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

/** Enable RFP letterboxing **/
user_pref("privacy.resistFingerprinting.letterboxing", true);

/** Disable using system colors **/
user_pref("browser.display.use_system_colors", false);

/** Enforce non-native widget theme **/
user_pref("widget.non-native-theme.enabled", true);

/** Enforce links targeting new windows to open in a new tab instead **/
user_pref("browser.link.open_newwindow", 3);

/** Set all open window methods to abide by "browser.link.open_newwindow" **/
user_pref("browser.link.open_newwindow.restriction", 0);

/** Disable WebGL (Web Graphics Library) **/
user_pref("webgl.disabled", true);

/** RFP daily reset **/
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true)

/* ****************************************************************************** */

/*** [SECTION 1200]: OPTIONAL OPSEC (Disk avoidance, application data isolation...) ***/
user_pref("_user.js.parrot", "1200 syntax error: the parrot's taken 'is last bow");

/** Disable disk cache **/
user_pref("browser.cache.disk.enable", false);

/** Disable storing extra session data
* 0=everywhere, 1=unencrypted sites, 2=nowhere **/
user_pref("browser.sessionstore.privacy_level", 2);

/** Disable memory cache
* capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes **/
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.memory.capacity", 0);

/** Disable "open with" in download dialog **/
user_pref("browser.download.forbid_open_with", true);

/** Disable location bar autofill **/
user_pref("browser.urlbar.autoFill", false);

/** Disable Form Autofill **/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/** Enable location bar using search **/
user_pref("keyword.enabled", true);

/* ****************************************************************************** */

/*** [SECTION 1300]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
user_pref("_user.js.parrot", "1300 syntax error: the parrot's a stiff!");

/** Https Only mode **/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);
//user_pref("dom.security.https_only_mode.upgrade_local", true);

/** Require safe negotiation **/
user_pref("security.ssl.require_safe_negotiation", true);

/** Disable TLS1.3 0-RTT (round-trip time) **/
user_pref("security.tls.enable_0rtt_data", false);

/** OCSP (Online Certificate Status Protocol) **/

/** Enforce OCSP fetching to confirm current validity of certificates
0=disabled, 1=enabled (default), 2=enabled for EV certificates **/
user_pref("security.OCSP.enabled", 1);

/** Set OCSP fetch failures to hard-fail **/
user_pref("security.OCSP.require", true);

/** CERTS / HPKP (HTTP Public Key Pinning) **/

/** Enable strict PKP (Public Key Pinning)
0=disabled, 1=allow user MiTM (default; such as your antivirus), 2=strict **/
user_pref("security.cert_pinning.enforcement_level", 2);

/** Enable CRLite **/
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** MIXED CONTENT **/

/** Disable insecure passive content (such as images) on https pages **/
user_pref("security.mixed_content.block_display_content", true);

/** Disable HTTP background requests **/
user_pref("dom.security.https_only_mode_send_http_background_request", false);

/** Display warning on the padlock for "broken security" **/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

/** Display advanced information on Insecure Connection warning pages **/
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/* ****************************************************************************** */

/*** [SECTION 1400]: REFERERS ***/
user_pref("_user.js.parrot", "1400 syntax error: the parrot rests in peace!");

/** Control the amount of cross-origin information to send
* 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port **/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/* ****************************************************************************** */

/*** [SECTION 1500]: DOM (DOCUMENT OBJECT MODEL) ***/
user_pref("_user.js.parrot", "1500 syntax error: the parrot's kicked the bucket!");

/** Prevent scripts from moving and resizing open windows **/
user_pref("dom.disable_window_move_resize", true);

/* ****************************************************************************** */

/*** [SECTION 1600]: MISCELLANEOUS ***/
user_pref("_user.js.parrot", "1600 syntax error: the parrot's run down the curtain!");

/** Remove temp files opened from non-PB windows with an external application **/
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);

/** Disable UITour backend so there is no chance that a remote page can use it **/
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

/** Reset remote debugging to disabled **/
user_pref("devtools.debugger.remote-enabled", false);

/** Disable websites overriding Firefox's keyboard shortcuts
* 0 (default) or 1=allow, 2=block 
* to add site exceptions: Ctrl+I>Permissions>Override Keyboard Shortcuts **/
user_pref("permissions.default.shortcuts", 2);

/** Remove special permissions for certain mozilla domains **/
user_pref("permissions.manager.defaultsUrl", "");

/** Remove webchannel whitelist **/
user_pref("webchannel.allowObject.urlWhitelist", "");

/** Use Punycode in Internationalized Domain Names to eliminate possible spoofing **/
user_pref("network.IDN_show_punycode", true);

/** Enforce PDFJS, disable PDFJS scripting **/
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);

/** Disable middle click on new tab button opening URLs or searches using clipboard **/
user_pref("browser.tabs.searchclipboardfor.middleclick", false); 


/* ****************************************************************************** */
/* ****************************************************************************** */
/* ****************************************************************************** */
user_pref("_user.js.parrot", "9000 syntax error: Nope everything is fine ! You damn parrot !");
/*** [SECTION 5500, 6000, 7000, 8000, 9000]: OPTIONAL HARDENING ***/
/*** Needs more investigation if I can implement them... Like Ion / Baseline JIT 
Again JS exploits, disable webAssembly... Those settings could cause breakage and 
Performance issues
TODO 
disable non-modern cipher suites
control TLS versions
disable SSL session IDs [FF36+]
...
 ***/


/* ****************************************************************************** */
/* ****************************************************************************** */
/* ****************************************************************************** */
