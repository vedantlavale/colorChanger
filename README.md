# ChangeTheColor

This project is a simple React application that allows users to change the background color of the page using a color picker. It is built using Vite, React, and Tailwind CSS.

## Features

- Change the background color of the page using a color picker
- Responsive design
- Fast development with Vite
- ESLint configured for code quality

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/vedantlavale/changethecolor.git
   cd changethecolor
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

To start the development server, run:
```sh
npm run dev
```
This will start the Vite development server and you can view the application at `http://localhost:3000`.

### Building for Production

To build the project for production, run:
```sh
npm run build
```
The production-ready files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build, run:
```sh
npm run preview
```
This will start a local server to preview the production build.

### Linting

To lint the code, run:
```sh
npm run lint
```

## Project Structure

```
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/
README.md
src/
  App.css
  App.jsx
  assets/
  ColorChanger.jsx
  index.css
  main.jsx
tailwind.config.js
vite.config.js
```

- 

src

: Contains the source code of the application
  - 

App.jsx

: Main application component
  - 

ColorChanger.jsx

: Component for changing the background color
  - 

index.css

: Global styles
  - 

main.jsx

: Entry point of the application
- 

index.html

: HTML template
- 

tailwind.config.js

: Tailwind CSS configuration
- 

vite.config.js

: Vite configuration
- 

postcss.config.js

: PostCSS configuration
- 

eslint.config.js

: ESLint configuration

## License

This project is licensed under the MIT License.