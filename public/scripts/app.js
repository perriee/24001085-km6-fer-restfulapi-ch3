class App {
    constructor() {
        this.carsCardContainer = document.getElementById("cars-card-container");
        this.buttonCariMobil = document.getElementById("button-cari-mobil");

        // input
        this.tipeDriver = document.getElementById("tipe-driver");
        this.tanggal = document.getElementById("tanggal");
        this.waktuJemput = document.getElementById("waktu-jemput");
        this.jumlahPenumpang = document.getElementById("jumlah-penumpang");
    }

    async init() {
        await this.load();
        this.run();
    }

    run = () => {
        Car.list.forEach((car) => {
            const node = document.createElement("div");
            node.innerHTML = car.render();
            this.carsCardContainer.appendChild(node);
        });
    };

    async runFilteredCars() {
        await this.loadCarsWithFilter();
        this.carsCardContainer.innerHTML = "";

        if (Car.list.length === 0) {
            const node = document.createElement("div");
            node.innerHTML = `<div class="text-2xl italic">Mobil tidak ditemukan</div>`;
            this.carsCardContainer.appendChild(node);
        }

        Car.list.forEach((car) => {
            const node = document.createElement("slot");
            node.innerHTML = car.render();
            this.carsCardContainer.appendChild(node);
        });
    }

    async load() {
        const cars = await Binar.listCars();
        Car.init(cars);
    }

    async loadCarsWithFilter() {
        const cars = await Binar.listCars((data) => {
            let filterJumlahPenumpang = true;
            let filterWaktu = true;

            const jumlahPenumpang = this.jumlahPenumpang.value;
            const tanggal = this.tanggal.value;
            const waktuJemput = this.waktuJemput.value;

            const dateCarAvailable = new Date(data.availableAt);
            const dateRent = new Date(`${tanggal} ${waktuJemput}`);

            if (jumlahPenumpang !== "") {
                filterJumlahPenumpang = data.capacity >= jumlahPenumpang;
            }

            if (tanggal !== "") {
                filterWaktu = dateCarAvailable >= dateRent;
            }

            return filterJumlahPenumpang && filterWaktu;
        });
        console.log("🚀 ~ App ~ cars ~ cars:", cars);

        Car.init(cars);
    }

    clear = () => {
        let child = this.carsCardContainer.firstElementChild;

        while (child) {
            child.remove();
            child = this.carsCardContainer.firstElementChild;
        }
    };
}
