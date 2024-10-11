const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

function berhasil() {
  alert("Berhasil Daftar!"); //pesan yang muncul saat berhasil daftar
}

function validasiForm() {
  var nama = document.getElementById("name").value;
  var umur = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var kelas = document.getElementById("class").value;

  //validasi input, apakah sudah semua kolom terisi
  if (
    nama === "" ||
    umur === "" ||
    email === "" ||
    pass === "" ||
    kelas === ""
  ) {
    alert("Tolong isi semua kolom");
    return false;
  } else {
    berhasil();
    return true; //apabila semua kolom sudah terisi dan berhasil daftar
  }
}
