if (!window.vxframe) {
  const css = String.raw
  const frame = document.createElement('iframe')
  frame.setAttribute(
    'style',
    css`
      position: fixed;
      top: 0px;
      left: 0px;
      width: calc(100vw);
      height: 200px;
      margin: 0;
      padding: 0;
      border: 0;
      background: transcript;
      z-index: 999999999;
      pointer-events: none;
    `,
  )
  frame.src = chrome.runtime.getURL('popup.html')
  document.body.appendChild(frame)
  window.vxframe = frame
  chrome.runtime.onMessage.addListener(message => {
    if (message.disposeOverlay) {
      window.vxframe = null
      frame.remove()
    }
  })
  chrome.runtime.sendMessage({ overlayInjected: true })
}
