# Getting Started with my payslip App

Below is a basic structure for your React, Capacitor, and TypeScript application. Note that this is a simplified example, and may want to enhance it based on your specific needs.

my-payslip-app/
|-- src/
|   |-- components/
|       |-- PayslipList.tsx
|       |-- PayslipDetails.tsx
|   |-- App.tsx
|   |-- index.tsx
|-- capacitor.config.json
|-- package.json
|-- tsconfig.json

# Setup

Follow the 'Install the Ionic CLI' section.

In your IDE, clone the repo https://github.com/mpcontact456/my-payslip-app.git into a local directory on your machine.

Inside the directory of your cloned project, install the node packages and build the app

### `npm install`
### `npm run build`

Update the Capacitor settings, then open the project on Android Studio

### `npx cap update`
### `ionic capacitor open android`

Deploy the app to an Android device

# Web - In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
