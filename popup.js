Vue.config.productionTip = false
Vue.config.devtools = false

document
  .querySelector('#open-options-button')
  .addEventListener('click', openOptions)

const vm = new Vue({
  el: '#app',
  data: {
    data: null,
  },
})

chrome.runtime.onMessage.addListener(message => {
  if (message.state) {
    vm.data = message.state
  }
})

chrome.runtime.sendMessage({ popupOpened: true })

function openOptions() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage()
  } else {
    window.open(chrome.runtime.getURL('options.html'))
  }
}

if (location.search === '?full') {
  document.documentElement.classList.add('full')
}
