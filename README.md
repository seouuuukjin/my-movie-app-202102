#must make change at package.json
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
```
as
```json
"scripts": {
    "start": "CHOKIDAR_USEPOLLING=true react-scripts start",
    "build": "react-scripts build"
  },
```