var showInfo = function() {
    alert("Show Info is invoked");
};

var showAnotherInfo = function() {
    alert("Show Another Info");
};

chrome.extension.onMessage.addListener(function(message, sender, callback) {
    if (message.functiontoInvoke == "showInfo") {
        showInfo();
    }
});
