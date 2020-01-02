
const {app, BrowserWindow} = require('electron');
const electron = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain } = require('electron');
var ipc = require('electron').ipcMain;
let nodeConsole = require('console');

let myConsole = new nodeConsole.Console(process.stdout, process.stderr);
myConsole.log('It works!');

ipc.on('invokeAction', function(event, data) {
	let result = processData(data);
	event.sender.send('actionReply', result);
});

function createWindow() {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});
	win.loadFile('index.html');

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);





app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});