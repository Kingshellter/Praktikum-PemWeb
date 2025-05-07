// Code di sini
$(document).ready(function() {
    $("#changeColorBtn").click(function() {
        const warna = ["red", "green", "blue", "black", "white"];
        const warnabaru = warna[Math.floor(Math.random() * warna.length)];
        $("#changeColorBox").css("background-color", warnabaru);
    });


    let posisiKeKanan = 0;
    const rightBox = $("#movableRightBox");
    const rightContainer = rightBox.closest(".md");
    const maxRight = rightContainer.width() - rightBox.width();
    $("#movableRightBtn").click(function () {
      if (posisiKeKanan + 50 <= maxRight) {
        posisiKeKanan += 50;
      } else {
        posisiKeKanan = maxRight;
      }
      rightBox.css("left", posisiKeKanan + "px");
    });


    let keKanan = false;
    $("#movableRightLeftBtn").click(function () {
      const box = $("#movableRightLeftBox");
      const container = box.closest(".md");
      const maxLeft = container.width() - box.width();
      if (!keKanan) {
        box.css("left", maxLeft + "px");
      } else {
        box.css("left", "0");
      }
      keKanan = !keKanan;
    });


    let Membesar = false;
    $("#largerBtn").click(function () {
      const box = $("#largerBox");
      if (!Membesar) {
        box.css({
          transform: "scale(1.5)",
          transition: "transform 0.3s ease"
        });
      } else {
        box.css({
          transform: "scale(1)",
          transition: "transform 0.3s ease"
        });
      }
      Membesar = !Membesar;
    });

    
    $("#fadeOutBtn").click(function () {
        $("#fadeOutBox").fadeOut(600);
    });
})