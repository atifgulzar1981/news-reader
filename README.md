# Hacker news clone

Single page app.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

## Prerequisites

- [Node.js 12.0+](http://nodejs.org)

## Getting Started

The easiest way to get started is:

```bash
# Get the latest files

# Change directory
cd myproject

#install create react app
npm i create-react-app

# Install NPM dependencies
npm install

# Then simply start your app
npm start

# Access the application
http://localhost:3000

# Test
npm test

# Coverage
npm run coverage

```

## Project Structure

| Name                  | Description                                    |
| --------------------- | ---------------------------------------------- |
| **src/components**/\* | Contains components.                           |
| **src/constants**/\*  | Contains constants used in project.            |
| **src/redux**/\*      | Contains redux files, actions, reducer, store. |
| **src/styles**/\*     | Contains styles.                               |
| **src/Tests**/\*      | Contains tests.                                |
| **helpers**/\*        | Utility methods.                               |
| tslint.json           | Rules for tslint linter.                       |
| .gitignore            | Folder and files ignored by git.               |
| app.tsx               | The main component.                            |
| index.tsx             | Entry point of the application.                |
| package.json          | NPM dependencies.                              |
| package-lock.json     | Locked versions of NPM dependencies.           |
