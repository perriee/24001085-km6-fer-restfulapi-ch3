/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
// console.log("🚀 ~ params:", params);

/*
 * Contoh penggunaan DOM di dalam class
 * */

const app = new App();

app.buttonCariMobil.addEventListener("click", () => {
    if (app.tipeDriver.value !== "" && app.tanggal.value !== "" && app.waktuJemput.value !== "") {
        app.clear();
        app.runFilteredCars();
    } else {
        app.emptyInputMessage();
    }

    console.log("Button Cari Mobil Clicked");
});

app.init();
