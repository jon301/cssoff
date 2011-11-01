$(document).ready(function() {
    // Placeholder
    $('input[placeholder], textarea[placeholder]').placeholder();

    // Obstacles
    var obs_items = $('#obstacles li');
    var obs_slides = $('#obs_slides .slide');
    obs_items.hover(function() {
        var $this = $(this);
        obs_items.removeClass('selected');
        $this.addClass('selected');

        obs_slides.removeClass('selected');
        obs_slides.filter('[data-obs-id="' + $this.data('obs-id') + '"]').addClass('selected');
    });
});
