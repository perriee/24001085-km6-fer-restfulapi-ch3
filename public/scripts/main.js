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
    app.clear();
    app.runFilteredCars();
    console.log("Button Cari Mobil Clicked");
});

app.init();
