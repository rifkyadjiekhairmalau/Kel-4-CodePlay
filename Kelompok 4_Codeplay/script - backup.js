const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

$(document).ready(function () {
  $(".accordion-item-header").click(function () {
    // Toggle active class on click
    $(this).toggleClass("active");

    // Get the next sibling (accordion body)
    var accordionItemBody = $(this).next(".accordion-item-body");

    // Check if the header is active, then expand/collapse the body
    if ($(this).hasClass("active")) {
      accordionItemBody.css(
        "max-height",
        accordionItemBody.prop("scrollHeight") + "px"
      );
    } else {
      accordionItemBody.css("max-height", "0");
    }
  });
});

$(function () {
  $("form[name='login']").validate({
    // Memilih form dengan atribut name="login" dan menerapkan validasi menggunakan jQuery Validate.
    rules: {
      // Aturan validasi (rules) untuk setiap field pada form.
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      // Pesan kesalahan yang akan ditampilkan jika aturan di atas tidak terpenuhi.
      email: "Silahkan masukkan email anda",
      password: "Silahkan masukkan password anda",
    },
    errorElement: "div",
    errorClass: "error",
    submitHandler: function (form) {
      // Fungsi yang akan dipanggil jika semua validasi terpenuhi saat form disubmit.
      form.submit(); // Jika valid, form akan disubmit secara normal.
    },
  });
});
