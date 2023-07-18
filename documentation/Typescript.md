**How to configure Typescript ?**

1. Install typescript globally
```bash
npm install typescript --save-dev
```
2. Configure in the package.json this code :
```json
{
  "name": "posts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "build": "tsc"
  },
  "keywords": [],
  "author": "Osman CEKIC",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.4.0",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  },
  "devDependencies": {
    "@types/node": "^20.4.1",
    "typescript": "^5.1.6"
  }
}
```

We had to add the **type module** because we wanted to use **ES module**.
```json
"type": "module",
```

We also wanted to add the **build module** to compile the typescript code to javascript code. 
```json
"scripts": {
"build": "tsc"
},
```
What is ES module ? 
> ES modules are a feature of JavaScript that allow you to import and export modules. This is a feature that has been available in TypeScript for a while but not yet in browsers. However, it is now available in all major browsers.
```js
import * as fs from 'fs';
```
3. Create a tsconfig.json file
```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
    "include": ["src/**/*"],
}
```
