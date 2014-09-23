var template = '<h4><%this.title%></h4>';

var getLabel = function(el) {
    return el.innerText;
};

var getDetails = function() {
    var title = $('.editor.name').value,
        description = $('.rendered_description.tracker_markup').innerText,
        labels = $('.labels_maker .label.name').map(getLabel),
        type = $('.selection.item_feature').innerText,
        owner = $('.owner_link .name').innerText;

    // console.log(title, description, labels, type, owner);

    console.log(TemplateEngine(template, {
        title: title
    }));
}

setTimeout(getDetails, 5000);
