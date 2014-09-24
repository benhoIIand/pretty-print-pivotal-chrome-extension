(function() {
    var nodesArray = function(nodes) {
        return Array.prototype.slice.call(nodes);
    };

    var getLabel = function(el) {
        return el.innerText;
    };

    var getTicketData = function() {
        return {
            title: document.querySelector('.editor.name').value,
            description: document.querySelector('.rendered_description.tracker_markup').innerText,
            labels: nodesArray(document.querySelectorAll('.labels_maker .label.name')).map(getLabel),
            type: document.querySelector('.info_box .selection span').innerText,
            owner: document.querySelector('.story_owners span').innerText
        };
    };

    chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
        if(msg.name === 'getTicketData') {
            sendResponse(getTicketData());
        }
    });
})();
