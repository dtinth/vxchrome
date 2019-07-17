// Saves options to chrome.storage
function save_options() {
  var firstLanguage = document.getElementById('first_language').value
  var secondLanguage = document.getElementById('second_language').value
  chrome.storage.sync.set(
    {
      language1: firstLanguage,
      language2: secondLanguage,
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status')
      status.textContent = 'Options saved.'
      setTimeout(function() {
        status.textContent = ''
      }, 750)
    },
  )
}

function restore_options() {
  chrome.storage.sync.get(
    {
      language1: 'en',
      language2: 'th',
    },
    function(items) {
      document.getElementById('first_language').value = items.language1
      document.getElementById('second_language').value = items.language2
    },
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('btn_save').addEventListener('click', save_options)
