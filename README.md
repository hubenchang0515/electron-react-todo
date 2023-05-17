# Electron React Todo

A todo list application powered by electron and react /  一个使用 electron 和 react 开发的 todo 列表应用

## Build & Pack

```bash
npm run build
npm run pack   
```

## Brief

``` bash
electron-react-todo/
├── package.json            # project npm config
│
├── tsconfig.json           # react typescript build config
│
├── public/                 # static resource
│
├── src/                    # react source
│
├── electron/               # electron source
│   ├── main.ts             # main entry source
│   ├── package.json        # electron-packager config
│   └── tsconfig.json       # electron typecript build config
│
├── build/                  # build output directory
│   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   │
│   └── main.js             # main entry
│
└── dist/                   # pack outout directory
```