// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(docuemnt).ready(function () {
  $(".change-devoured").on("submit", function (event) {
    event,
    preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function (data) {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});