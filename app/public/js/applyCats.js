function renderCat(handle) {
  $.get('http://localhost:9990/api/'+ handle, function(json) {
    json = JSON.parse(json);
    if(json.profanity === 'true') {
      var newHandle = Mustache.render($('#cat-container').html(), json);
      $(newHandle).appendTo('body').slideDown();
    };
  });
};

$(document).ready(function() {
  $('#enter-twitter-handle').on('submit', function(event) {
    event.preventDefault();
    renderCat($('#handle').val());
  })
});