$(document).ready(function () {
  $("#flip").click(function () {
      $("#panel").slideToggle("slow");
  });

  // تشغيل الصوت عند أول ضغطة في الصفحة
  $(document).one("click", function () {
      var audio = document.getElementById("myAudio");
      if (audio) {
          audio.play().catch(function (err) {
              console.log("تعذر تشغيل الصوت:", err);
          });
      }
  });
});
