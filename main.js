
const {app, BrowserWindow} = require('electron');
const electron = require('electron');
const url = require('url');
const path = require('path');
const { ipcMain } = require('electron');
var ipc = require('electron').ipcMain;
let nodeConsole = require('console');
const appFolder = path.dirname(process.execPath);
const updateExe = path.resolve(appFolder, '..', 'Update.exe');
const exeName = path.basename(process.execPath);

let myConsole = new nodeConsole.Console(process.stdout, process.stderr);
myConsole.log('It works!');

ipc.on('invokeAction', function(event, data) {
	let result = processData(data);
	event.sender.send('actionReply', result);
});

app.setLoginItemSettings({
	openAtLogin: true,
	path: updateExe,
	args: [
	'--processStart', `"${exeName}"`,
	'--process-start-args', `"--hidden"`
	]
});

function createWindow() {
	let { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
	let win = new BrowserWindow({
		width: 290,
		height: 145,
		x: width - 300,
		y: height - 1020,
		transparent: true,
		frame: false,
		skipTaskbar: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.setResizable(false);
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