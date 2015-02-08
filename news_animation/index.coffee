---
---

main = ->
  $('.story').on('click', open_story)

open_story = (event) ->
  story = $(event.target).parent()
  story_content = story.html()
  $('.article').html(story_content)
  $('.article').show()

$(main)
