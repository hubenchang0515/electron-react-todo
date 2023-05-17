const { app, BrowserWindow } = require('electron')

// 创建窗口
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    // 加载页面
    win.loadFile('index.html')
}

// 程序入口
app.whenReady().then(() => {
    createWindow()
})