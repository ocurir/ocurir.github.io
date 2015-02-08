(function() {
  var main, open_story;

  main = function() {
    return $('.story').on('click', open_story);
  };

  open_story = function(event) {
    var story, story_content;
    story = $(event.target).parent();
    story_content = story.html();
    $('.article').html(story_content);
    $('p').show();
    return $('.article').show();
  };

  $(main);

}).call(this);
