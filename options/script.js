var $uploadUrl = document.getElementById('uploadUrl');
var $status = document.getElementById('status');
var $save = document.getElementById('save');

function saveOptions() {
    chrome.storage.sync.set({
        uploadUrl: document.getElementById('uploadUrl').value
    }, function() {
        $status.style.opacity = '1';

        setTimeout(function() {
            $status.style.opacity = '0';
        }, 1500);
    });
}

function restoreOptions() {
    chrome.storage.sync.get(function(items) {
        document.getElementById('uploadUrl').value = items.uploadUrl || '';
    });
}

function handleKeyUp(e) {
    if(e.keyCode === 13) {
        saveOptions();
    }
}

document.addEventListener('DOMContentLoaded', restoreOptions);
$uploadUrl.addEventListener('keyup', handleKeyUp);
$save.addEventListener('click', saveOptions);
