# vx [chrome extension version]

A little Chrome extension that helps me input text using my voice on my Chromebook.
It should work on macOS and Windows as well as on Linux.

## How to install

[<img alt="Available in the Chrome Web Store" src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_496x150.png" width="248" height="75" />](https://chrome.google.com/webstore/detail/vx/obopnfigmanifpiojfhebcegjepgaiif)

## How to install from source code

1. Download the source code and extract it.

2. Go to `chrome://extensions` and enable the **Developer mode**.

3. Click “Load unpacked.”

4. Select the downloaded folder.

## How to use

- Press `Ctrl+Shift+1` to start a stop the recognition in English language.

- Press `Ctrl+Shift+2` to start a stop the recognition in Thai language.

- Press `Ctrl+Shift+3` to stop the recognition.

- Languages and keyboard shortcuts can be customized in the options.

- Whatever you speak is copied into the clipboard, so you can paste into any apps immediately afterwards.
  If the recognition is incorrect, you can just re-speak it (or fix it manually).

- Go to `chrome://extensions/shortcuts` to customize the keyboard shortcuts to your liking.
  On Windows and macOS, you may also set the shortcut to be global, so that you can use it outside Chrome.

## Testing on a fresh Chrome profile

```sh
# Generates an extension package
./scripts/build-package.sh

# These two files are generated:
# 1. `tmp/vx` - and unpacked extension
# 2. `tmp/vx.zip` - the zipped version, for uploading to Google Chrome developer dashboard

# Run it
rm -rf tmp/chrome-profile && /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --no-first-run --no-default-browser-check --user-data-dir="$PWD/tmp/chrome-profile" --load-extension="$PWD/tmp/vx"
```
