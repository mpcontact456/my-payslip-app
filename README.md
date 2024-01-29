# Getting Started with My Payslip App

The application contains
Two Views: View Payslips:
• Display a list of payslips on the main screen.
• Each list item should show the period (from date to date).
• Clicking on an item should redirect to the Individual payslip details page
Individual payslip details page
• Should show the entire payslips information, id, and period (from date to date). 
• A download payslip button the download should initiate the download of the file associated with the selected payslip Bonus Points (Optional):
• For native platforms, download file task using a Capacitor plugin.

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


