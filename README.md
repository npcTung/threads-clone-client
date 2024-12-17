# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# File env config

```js
// https://ipinfo.io/json?token=[your-token]
VITE_IP_TOKEN=...
// hosting your server
VITE_API_URI=...
// google id
VITE_GOOGLE_CLIENT_ID=...
// giphy api key
VITE_API_GIPHY=...
// stringee api key
VITE_API_KEY_STRINGEE=...
VITE_API_SECRET_KEY_STRINGEE=...
```

# Setup logging to google, api key giphy, stringee api key

- [@google cloud console](https://cloud.google.com/cloud-console) to get client id
- [@api key giphy](https://developers.giphy.com/docs/) logging and click to button [Create an API Key]
- [@api key stringee](https://asia-1.console.stringee.com/project) login and click on new project button to create new project to get api key
