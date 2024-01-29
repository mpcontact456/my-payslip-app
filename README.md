# Getting Started with My Payslip App

The application contains

1. Display a list of payslips on the main screen.
2. Each list item should show the period (from date to date).
3. Clicking on an item should redirect to the Individual payslip details page
4. Should show the entire payslips information, id, and period (from date to date).
5. Download payslip button the download should initiate the download of the file associated with the selected payslip
6. For native platforms, download file task using a Capacitor plugin.(Download file task using a Capacitor plugin for both Android and iOS. Capacitor plugin called FileDownload and then use it in a React component)
7. The handleDownload function creates an <a> element, sets its href attribute to the payslip file URL, and triggers a click event on it. This approach essentially simulates a user clicking on a link to download the file.

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

Follow the 'Install the Ionic CLI - https://ionicframework.com/docs/installation/cli' section.

In your IDE, clone the repo https://github.com/mpcontact456/my-payslip-app.git into a local directory on your machine.

Inside the directory of your cloned project, install the node packages and build the app

### `npm install`
### `npm run build`

# Web - In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Sync your web code to your native project:

Once you've created your native projects, you can sync your web application to your native project by running the following command.

### `npx cap sync`


# To run the project on a device or simulator, run:

### `npm start`

### `npx cap open ios` # Open Xcode for iOS
or
### `npx cap run ios`


### `npx cap open android` # Open Android Studio for Android
or
### `npx cap run android`


