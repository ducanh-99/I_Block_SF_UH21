/*
 * Define default environment variables of the application.
 * You can customize these values by overriding them to public/configs/env-local.js (create this file if not exist).
 * Don't forget to uncomment the env-local.js <script> tag in index.html.
 * To enable tracking, replace tracker.appId with your app ID in env-local.js.
 */

window.config = {
  iam: {
    clientId: 'Btpqj8LTR0avbWABn0nudDLBEb411h7o', // Change to your client ID
    oauthDomain: 'https://oauth.dgl-dev.tekoapis.net',
  },
  tracker: {
    appId: '',
    host: 'https://tracking.develop.tekoapis.net',
    jsFile: 'https://tracker-js.dev.teko.vn/v2/tracker.full.min.js',
  },
  apiServices: {
    catalog: 'https://catalog.develop.tekoapis.net',
  },
};
