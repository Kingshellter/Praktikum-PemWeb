$("#loadProfiles").on("click", function () {
  $.ajax({
    url: "http://localhost:3000/profiles", 
    method: "GET",
    success: function (data) {
      $("#profiles").empty();

      data.forEach(function (profile) {
        const card = `
          <div class="card">
            <h3>${profile.name}</h3>
            <p><strong>Age:</strong> ${profile.age}</p>
            <p><strong>Birth:</strong> ${profile.birth}</p>
            <p><strong>Gender:</strong> ${profile.gender}</p>
          </div>
        `;
        $("#profiles").append(card);
      });
    },
    error: function (error) {
      $("#profiles").empty();

      const card = `
        <div class="card">
          <h3>Error ${error.status}</h3>
          <p>${error.statusText}</p>
          <p>${error.responseText}</p>
        </div>
      `;
      $("#profiles").append(card);
    },
  });
});

// Login handler (biarkan tidak berubah)
$("#loginBtn").on("click", function () {
  const email = $("#email").val();
  const password = $("#password").val();

  $.ajax({
    url: "http://localhost:3000/login",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({ email, password }),
    success: function (res) {
      $("#loginResult").text(res.message).css("color", "green");
    },
    error: function (xhr) {
      const err = JSON.parse(xhr.responseText);
      $("#loginResult").text(err.message).css("color", "red");
    },
  });
});