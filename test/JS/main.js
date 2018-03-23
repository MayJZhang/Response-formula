$(document).ready(function() {

  $("#intro .scrolly").scrolly();

  $("#navPanelToggle").click(function() {
    $("#navPanel").css("visibility","visible");
    $("#navPanel").css("right","0");
    //$(document.body).
  });

  $("#navPanel .close").click(function() {
    $("#navPanel").css("visibility","hidden");
    $("#navPanel").css("right","-100%");
  });
});
