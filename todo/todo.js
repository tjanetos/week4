$(function() {

  $(".list-group-item").on("click", function() {
    var elementThatWasClicked = $(this)
    elementThatWasClicked.fadeOut()
  })

})
