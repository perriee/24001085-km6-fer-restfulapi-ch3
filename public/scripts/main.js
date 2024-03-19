import cars from "./car.js";

const carsCardContainer = document.getElementById("cars-card-container");
const buttonCariMobil = document.getElementById("button-cari-mobil");

const tanggal = document.getElementById("tanggal");
const waktuJemput = document.getElementById("waktu-jemput");
const jumlahPenumpang = document.getElementById("jumlah-penumpang");

async function getAllCarsData() {
    let fetchCars = await cars.getCarsData();

    carsCardContainer.innerHTML = "";

    fetchCars.data.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = cars.render(car);
        carsCardContainer.appendChild(node);
    });
}

buttonCariMobil.addEventListener("click", async () => {
    const jp = jumlahPenumpang.value;
    const tgl = tanggal.value;
    const wkt = waktuJemput.value;

    let fetchCarsFiltered = await cars.getCarsDataFiltered(jp, tgl, wkt);

    carsCardContainer.innerHTML = "";

    if (fetchCarsFiltered.data.length === 0) {
        const node = document.createElement("div");
        node.innerHTML = `<div class="bg-red-100 border border-red-200 text-lg text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500" role="alert">
            <span class="font-bold">Maaf</span>, mobil tidak tersedia!
          </div>`;
        carsCardContainer.appendChild(node);
    }

    fetchCarsFiltered.data.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = cars.render(car);
        carsCardContainer.appendChild(node);
    });
});

getAllCarsData();
