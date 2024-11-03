# Spotify Developer Application

### Features

- [x] Search for Artists: Users can search for music artists by name using a search bar.
- [x] View Artist Albums: After selecting an artist, users can see a list of albums associated with that artist.
- [x] Album Details: Each album displays its name, release date, total number of tracks, and a link to preview it on Spotify.
- [x] Responsive Design: The app is designed to provide a smooth and responsive user experience on both iOS and Android devices.

### Tech Stack

- [x] React Native: For building the mobile application.
- [x] Expo Router: For seamless routing between screens.
- [x] Axios: For making API requests to the Spotify service.
- [x] React Native Paper: For UI components following Material Design guidelines.
- [x] Zustand: For state management, including dark/light mode switching.
- [x] Lucide React Native: For using customizable icons throughout the app.

## Emulator Setup

### iOS Emulator (Xcode)

1.  Install Xcode:

    > Download Xcode from the Mac App Store or Apple's Developer website.
    > Ensure you have the latest version installed to support the latest iOS SDKs.

2.  Set Up Xcode:

    > Open Xcode and go to Preferences.
    > Under the Components tab, install any additional simulators you may need.

3.  Launch the iOS Simulator:

    > You can start the iOS simulator from Xcode:

        Open Xcode and select Xcode > Open Developer Tool > Simulator from the menu bar.

    > Alternatively, you can run the app from the terminal using the following command: `npx expo start --ios`

4.  Run Your App:

    > Once the simulator is running, you can scan the QR code provided by Expo or press `i` in the terminal to launch your app in the iOS simulator.

### Android Emulator (Android Studio)

1. Install Android Studio:

   > Download and install Android Studio from the official website.
   > Follow the setup instructions to complete the installation.

2. Set Up Android Emulator:

   > Open Android Studio and click on Configure > AVD Manager.
   > Click on `Create Virtual Device`.
   > Choose a device definition and click Next.
   > Select a system image (preferably one with Google Play) and click Next.
   > Configure the AVD settings as desired and click Finish.

3. Launch the Android Emulator:

   > In the AVD Manager, click the play button next to your created virtual device to start the emulator.

4. Run Your App:

Once the emulator is running, you can scan the QR code provided by Expo or press a in the terminal to launch your app in the Android emulator.

## Installation

- [1] Clone Repository:
  `git clone https://github.com/your-username/music-artist-search-app.git`
  `cd music-artist-search-app`

- [2] Install dependencies:
  `yarn install`

- [3] Set up your Spotify API credentials:

  > Register your application on the [Spotify Developer Dashboard](#https://developer.spotify.com/dashboard)
  > Obtain your 'client_id' and 'client_secret'.

- [4] Prebuild the project:
  `npx expo prebuild`

- [5] Run the app:
  > Using development build: `yarn ios` or `yarn android`
  > Using Expo Go: `npx expo start`

## Usage

- [x] Launch the app and enter the name of the artist you wish to search for.
- [x] Click on an artist from the search results to view their albums.
- [x] Click on an album to preview it on Spotify.
- [x] Toggle between dark and light modes using the provided button in the login screen.
