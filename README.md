<!-- BADGES -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![codecov][codeCov-shield]][codeCov-url]

# Lofi-Music 🎵

> A React 18 + NextJS project, created for fun. I was tired of opening YouTube for some lo-fi music while working 🤭.

## ✨ [Click here for a live demo!](https://www.lofimusic.dev/)

![alt text][demo-screenshot]

## 💡 About

Lofi-Music is a web application that allows you to create custom music while working or studying! Simply click any sounds you like from the wide selection to overlay them into a custom mix.

### Built With

- ![Next][Next.js]
- ![React][React.js]
- ![Typescript][typescript-icon]
- Styled Components
- Components/Layout based
- Prettier for better readability

<br />
  
## ✅ Getting Started

First, clone the repo to your device using the command:

```
git clone https://github.com/riccardobertolini/lofi-music.git
```

Then, change directories into `lofi-music` with the command:

```sh
cd lofi-music
```

Next, run the following command to install all modules and their dependencies:

```sh
npm install
```

<br />
  
## 🚀 Usage
To run the app in development mode, run the following command:
```sh
npm run dev
```
Then, open http://localhost:3000 (default port) to view it in the browser.

To build the app for production to the `build` folder, run:

```sh
npm run build
```

<br />

## ❓ Instructions

- To create a _sound mix_, click on an image to add it to your active sounds.
- To adjust the _volume_ of an _individual sound_, drag the slider underneath the sound.
- To adjust the _volume_ of _all active sounds_, drag the slider at the bottom of the screen under `Sounds active: `.
- To _stop all sounds_, click `Stop all`.
- To enter _fullscreen mode_, click the `window icon` at the top left of the icon bar. To _exit_, click the icon again.
- To get a _random mix of sounds_, click the `arrow icon` in the icon bar.
- To change the _background colors_ of the app, click the `gear icon` in the icon bar and select a color.
- To get a _random mix_ of sounds based on your _mood_, click the `face icon` in the icon bar and select your mood.

<br />
  
## 🔧 Run tests
To run the tests, run the following command:
```sh
npm test
```

To check the test coverage (minimum required global 70%), run the following command:

```sh
npm test -- --coverage
```

Once the command is run, search for the `/coverage` folder, then `/lcov-report`, and open `index.html` in a browser.

<br />

## 📂 Project Structure

```
.
├── components // All app components (MusicTiles, Shuffler, etc.)
├── constants // Enum of colors
├── contexts // Accessibility Context
├── data // Music list with corresponding image and mp3 sources
├── pages // The app
├── public // Audio and image files
├── styles // CSS file
└── utils // Fullscreen mode
```

<br />

## 🤝 Contributing

Please feel free to open issues, pull requests, and refactor/fix! This is a living project and any help is welcome. Thanks!

> To see current issues, check out the [issues page](https://github.com/riccardobertolini/lofi-music/issues).

To contribute, follow the steps below:

1. Create a [fork](https://github.com/riccardobertolini/lofi-music/fork) of this repo.
2. Create a folder on your device and clone the forked repo into it.

```
git clone https://github.com/[YOUR-USERNAME-HERE]/lofi-music.git
```

3. Create a feature branch.

```
git checkout -b new-feature
```

4. Commit your changes.

```
git commit -m 'Added feature'
```

5. Push to the branch.

```
git push origin new-feature
```

6. Submit a pull request.
   <br />

<!-- LICENSE -->

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/riccardobertolini/lofi-music.svg?style=for-the-badge
[contributors-url]: https://github.com/riccardobertolini/lofi-music/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/riccardobertolini/lofi-music.svg?style=for-the-badge
[forks-url]: https://github.com/riccardobertolini/lofi-music/network/members
[stars-shield]: https://img.shields.io/github/stars/riccardobertolini/lofi-music.svg?style=for-the-badge
[stars-url]: https://github.com/riccardobertolini/lofi-music/stargazers
[issues-shield]: https://img.shields.io/github/issues/riccardobertolini/lofi-music.svg?style=for-the-badge
[issues-url]: https://github.com/riccardobertolini/lofi-music/issues
[license-shield]: https://img.shields.io/github/license/riccardobertolini/lofi-music.svg?style=for-the-badge
[license-url]: https://github.com/riccardobertolini/lofi-music/blob/main/LICENSE
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[codeCov-shield]: https://img.shields.io/codecov/c/github/riccardobertolini/lofi-music.svg?style=for-the-badge
[codeCov-url]: https://codecov.io/github/riccardobertolini/lofi-music
[demo-screenshot]: https://raw.githubusercontent.com/riccardobertolini/lofi-music/master/public/github_image.png
[typescript-icon]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge
