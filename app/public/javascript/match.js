$("#getMatch").on("click", function(event) {
    event.preventDefault();
    if ($("#userName").val() === "" ||
        $("#userPhoto").val() === "" ||
        $("#question1").find(":selected").val() === "Open this select menu" ||
        $("#question2").find(":selected").val() === "Open this select menu" ||
        $("#question3").find(":selected").val() === "Open this select menu" ||
        $("#question4").find(":selected").val() === "Open this select menu" ||
        $("#question5").find(":selected").val() === "Open this select menu" ||
        $("#question6").find(":selected").val() === "Open this select menu" ||
        $("#question7").find(":selected").val() === "Open this select menu" ||
        $("#question8").find(":selected").val() === "Open this select menu" ||
        $("#question9").find(":selected").val() === "Open this select menu" ||
        $("#question10").find(":selected").val() === "Open this select menu"){
          alert("Please fill out all areas of the form")
        } else {
    // Grabs all the values from the form that the user filled out
    var newFriend = {
      name: $("#userName").val().trim(),
      photo: $("#userPhoto").val().trim(),
      scores: [
        $("#question1").find(":selected").val(),
        $("#question2").find(":selected").val(),
        $("#question3").find(":selected").val(),
        $("#question4").find(":selected").val(),
        $("#question5").find(":selected").val(),
        $("#question6").find(":selected").val(),
        $("#question7").find(":selected").val(),
        $("#question8").find(":selected").val(),
        $("#question9").find(":selected").val(),
        $("#question10").find(":selected").val()
    ]
    };

    $.post("api/friends", newFriend).then(function(data) {
        // Populates the modal and toggles it to appear on completion
        $("#matchImage").attr("src", data.photo);
        $("#matchName").text(data.name);
        $("#matchModal").modal("toggle");
    })
  }
  })