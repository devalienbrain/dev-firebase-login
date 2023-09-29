/***************************************************************
 *React Router- Tailwind - DaisyUI - Firebase project init setup
 ***************************************************************
 *
 * cd \projects
 * npm create vite@latest name-of-your-project -- --template react
 * cd name-of-your-project
 * npm install react-router-dom localforage match-sorter sort-by
 * code .
 * npm install -D tailwindcss postcss autoprefixer
 * npx tailwindcss init -p
  
  //-------------------
  // tailwind.config.js
  //-------------------
  //  
  // content: [
  //  "./index.html",
  //  "./src/**.........",
  // ], 
  //
  //-------------------

  //----------
  // index.css
  //----------
  //
  // @tailwind base;
  // @tailwind components;
  // @tailwind utilities;
  //
  //----------

 * npm i -D daisyui@latest
  
  //-------------------
  // tailwind.config.js
  //-------------------
  //
  // plugins: [require("daisyui")],
  //
  //-------------------

  //-------------------
  // .eslintrc.cjs
  //-------------------
  //
  // env: { node: true },
  //
  //-------------------

  //-------------------
  // main.jsx
  //-------------------
  //
  // import {
  //   createBrowserRouter,
  //   RouterProvider,
  // } from "react-router-dom";

  //
  // const router = createBrowserRouter([
  // {
  // path: "/",
  // element: <div>Intro to react router home!</div>,
  // },
  // ]);

  //
  // <RouterProvider router={router} />
  //
  //---------------------

 * npm run dev
  
    -------------------
    * Deploy To SURGE *
    -------------------
 * npm run build
 * Surge
 
  // Create CNAME file at public folder
  // save-> deploy-domain.surge.sh

  // Everytime to re-deploy
  
 * npm run build
 * cd dist
 * copy index.html 200.html
 * cd ..
 * surge dist
 //------------------------

    ---------------------
    * INTRO TO FIREBASE *
    ---------------------
  // 1. Create project in console.firebase.google.com (skip google analytics)
  // 2. Register app (create config)
  // 3. install firebase:
 
    * npm install firebase
 
  // 4. add config file to your project (firebase.config.js)

  //
  // import { initializeApp } from "firebase/app";
  // import { getAuth } from "firebase/auth";
  //
  // const firebaseConfig = {
  //   apiKey: "...",
  //   authDomain: "...",
  //   projectId: "...",
  //   storageBucket: "...",
  //   messagingSenderId: "...",
  //   appId: "..." 
  // };

  // 
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  // 
  // export default auth;
  //
  // ** DANGER: Do not publish or make firebase config to public by pushing to github
 
 //
 // Visit: Go to Docs > Build > Authentication > Web > Get Started
 //
 * ----------------------
 *     PROVIDER SETUP
 * ----------------------
 * import googleAuthProvider and create a new provider 
 * use signInWithPopUp and pass auth and provider 
 * activate sign-in method (google, facebook, github, etc.)
 * [vite]: change 127.0.0.1 to localhost
 * 
 * ----------------------
 *   More Auth Provider
 * ----------------------
 * activate the auth provider (create app, provide redirect url, client id, client secret)
 * 
 * */
