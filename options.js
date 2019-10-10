// Saves options to chrome.storage
function save_options() {
  let firstLanguage = document.getElementById('first_language').value
  let secondLanguage = document.getElementById('second_language').value
  chrome.storage.sync.set(
    {
      language1: firstLanguage,
      language2: secondLanguage,
    },
    () => {
      // Update status to let user know options were saved.
      let status = document.getElementById('status')
      status.textContent = 'Options saved.'
      setTimeout(() => {
        status.textContent = ''
      }, 750)
    },
  )
}

function restore_options() {
  chrome.storage.sync.get(defaultSettings, items => {
    document.getElementById('first_language').value = items.language1
    document.getElementById('second_language').value = items.language2
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('btn_save').addEventListener('click', save_options)
