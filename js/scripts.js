$(document).ready(function() {
  $("#data-entry form").submit(function(event) {

    $("#output").empty();

    var countTo = parseInt( $("#entry1").val() );
    var countBy = parseInt( $("#entry2").val() );

    if ( !countTo || !countBy ) {
      alert("Sorry, one or more of your inputs is not a number.");
    } else if ( (countTo < 0) || (countBy < 0) ) {
      alert("Sorry, please enter two positive numbers.")
    } else if ( countBy > countTo ) {
      alert("Please ensure your 'count by' number is not larger than your 'multiple' number.")
    } else {

      for (var total = countBy; total <= countTo; total += countBy) {
        $("#output").append(total + ". ");
      }

    }

    event.preventDefault();
  });
});
