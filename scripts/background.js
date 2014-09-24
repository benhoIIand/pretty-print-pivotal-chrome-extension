var sendTicketData = function(ticketData) {
    return function(tab) {
        chrome.tabs.sendMessage(tab.id, {
            name: 'renderPivotalTicket',
            value: ticketData
        });
    };
};

var openNewTab = function(ticketData) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('index.html')
    }, sendTicketData(ticketData));
};

var getTicketData = function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
        name: 'getTicketData'
    }, openNewTab);
};

var triggerTicketGeneration = function(info, tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, getTicketData);
}

chrome.contextMenus.create({
    'title': 'Pretty Print Pivotal',
    'contexts': ['page'],
    'onclick': triggerTicketGeneration
});
