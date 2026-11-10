# Leadzai's Weather App

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/)

## How to install

From the project root, install the dependencies:

```bash
yarn install
```

## How to start

### 1. API Configuration

Create a `.env.local` file in the root directory of the project and add your OpenWeather API key:

```env
VITE_OPENWEATHER_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your actual [OpenWeather API key](https://openweathermap.org/api).

### 2. Run the Development Server

Start the development server:

```bash
yarn start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically when you edit the source files.

## Other scripts

| Command        | Description                                         |
| -------------- | --------------------------------------------------- |
| `yarn dev`     | Same as `yarn start`, runs the Vite dev server.     |
| `yarn build`   | Type-checks and builds the app for production into `dist/`. |
| `yarn preview` | Serves the production build locally.                |
| `yarn test`    | Runs the test suite with Vitest in watch mode.      |
