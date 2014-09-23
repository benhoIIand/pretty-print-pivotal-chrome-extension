function genericOnClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "showInfo"
        });
    });
}

var contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];

alert('fawfnjawnfjwanf');

for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Test '" + context + "' menu item";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "onclick": genericOnClick
    });
}
