const { app, BrowserWindow, } = require('electron');


app.on('ready',()=>{
    let mainWindow = new BrowserWindow({
        minWidth: 950,
        minHeight: 550,
        frame:false
        
    });

    
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});

app.on('window-all-closed', ()=>{
    app.quit();
});



