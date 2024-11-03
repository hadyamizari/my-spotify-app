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
