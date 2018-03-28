$(document).ready(function() {
  $(".dropDownTextArea").hide();
  $("button").css("backgroundColor", "gray").css("border", "2px solid gray");
  $("button").prop("disabled",true);
  $("img").click(function() {
    $(this).parent().parent().next().toggle();
  });
  $(".box").click(function() {
    if ($(".box").is(":checked")) {
      $("button").css("backgroundColor", "orange").css("border", "2px solid orange");
      $("button").prop("disabled",false);
    } else {
      $("button").css("backgroundColor", "gray").css("border", "2px solid gray");
      $("button").prop("disabled",true);
    }
    if ($(event.target).is(":checked")) {
      $(event.target).parent().parent().css("backgroundColor", "#e4da91");
    } else {
      $(event.target).parent().parent().css("backgroundColor", "white");
    }
  });
});
