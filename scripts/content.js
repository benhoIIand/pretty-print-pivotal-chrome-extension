(function() {
    var template;

    var extractLinks = function(data) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;

        data.description = data.description.replace(urlRegex, function(url) {
            return '<a href="' + url + '">' + url + '</a>';
        });

        return data;
    };

    var renderPivotalTicket = function(data) {
        var el = document.createElement('div');
        el.innerHTML = tmpl(template, extractLinks(data));
        document.body.appendChild(el);
    };

    document.addEventListener('DOMContentLoaded', function() {
        template = document.querySelector('#ticket_template').innerHTML;
        
        chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
            if(msg.name === 'renderPivotalTicket') {
                setTimeout(function() {
                    renderPivotalTicket(msg.value);
                }, 0);
            }
        });
    });
})();
