# create - start - develop
$npx create-react-app <"project name">

$npm start

->

@@
you must make change at package.json for hot reloading in VM environment
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