class Car {
    static list = [];

    static init(cars) {
        this.list = cars.map((i) => new this(i));
        console.log("🚀 ~ Car ~ init ~ cars:", cars);
    }

    constructor({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        options,
        specs,
        availableAt,
    }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }

    render() {
        return `
        <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
        <div class="h-56">
          <img
            class="w-full h-full object-cover rounded-t-xl"
            src=${this.image}
            alt="Image Car"
          />
      </div>
    <div class="flex flex-col gap-4 p-5">
        <p class="font-medium">${this.manufacture} / ${this.type}</p>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rp ${this.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="flex flex-col gap-3 text-slate-500">
            <div class="flex gap-3">
                <img src="./images/fi_users.png" alt="Icon user" class="w-6" />
                <span>${this.capacity} orang</span>
            </div>
            <div class="flex gap-3">
                <img src="./images/fi_settings.png" alt="Icon user" class="w-6" />
                <span>${this.transmission}</span>
            </div>
            <div class="flex gap-3">
                <img src="./images/fi_calendar.png" alt="Icon user" class="w-6" />
                <span>Tahun ${this.year}</span>
            </div>
        </div>
        <a
            href="#"
            class="flex items-center justify-center p-3 font-medium text-center text-white bg-green-primary rounded-lg hover:bg-green-hover transition-all focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
            Pilih Mobil
        </a>
    </div>
</div>
    `;
    }
}
