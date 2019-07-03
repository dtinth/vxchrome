# vxchrome

A little Chrome extension that helps me input text using my voice on my Chromebook.
It should work on macOS and Windows as well as on Linux.

## How to install

1. Download the source code and extract it.

2. Go to `chrome://extensions` and enable the developer mode.

3. Click “Load unpacked.”

4. Select the downloaded folder.

## How to use

- Press `Ctrl+Shift+0` to start a stop the recognition in English language.

- Press `Ctrl+Shift+9` to start a stop the recognition in Thai language.

- Whatever you speak is copied into the clipboard, so you can paste into any apps immediately afterwards.
  If the recognition is incorrect, you can just re-speak it (or fix it manually).

- Go to `chrome://extensions/shortcuts` to customize the keyboard shortcuts to your liking.
  On Windows and macOS, you may also set the shortcut to be global, so that you can use it outside Chrome.

## How to develop

### Set up

1. Clone the project to your local machine.

2. Go to `chrome://extensions` and enable the developer mode.

3. Click “Load unpacked.”

4. Select the project folder.

### Development

- For the popup (`popup.html` and `popup.js`), you can edit the file and save.
  The next time you open the popup by triggering the listen command, it will load the latest version automatically.

- For the background script (`background.js`), after you edit the code and save,
  go to `chrome://extensions` and click the reload button under the vxchrome extension.
