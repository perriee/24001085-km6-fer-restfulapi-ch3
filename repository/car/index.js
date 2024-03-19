const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

exports.getCars = (p_jumlahPenumpang, p_tanggal, p_waktuJemput) => {
    let data = cars.map((car) => car);

    data = data.filter((car) => {
        let filterJumlahPenumpang = true;
        let filterWaktu = true;

        const jumlahPenumpang = parseInt(p_jumlahPenumpang);
        const tanggal = p_tanggal;
        const waktuJemput = p_waktuJemput;

        const dateCarAvailable = new Date(car.availableAt);
        const dateRent = new Date(`${tanggal} ${waktuJemput}`);

        if (jumlahPenumpang) {
            filterJumlahPenumpang = car.capacity >= jumlahPenumpang;
        }

        if (tanggal) {
            filterWaktu = dateRent >= dateCarAvailable;
        }

        return filterJumlahPenumpang && filterWaktu;
    });

    return data;
};

exports.getCar = (id) => {
    let data = cars.map((car) => car);

    data = data.filter((car) => car.id == id);
    if (data.length == 0) {
        return null;
    }

    return data[0];
};

exports.createCar = (payload) => {
    payload = {
        id: uuidv4(),
        ...payload,
    };

    // Insert Data
    cars.push(payload);
    return payload;
};

exports.updateCar = (id, payload) => {
    updatedCarsIndex = 0;

    cars.map((car, index) => {
        if (car?.id == id) {
            cars[index] = payload;
            updatedCarsIndex = index;
        }
    });

    return cars[updatedCarsIndex];
};

exports.deleteCar = (id) => {
    index = cars.findIndex((car) => car.id === id);
    cars.splice(index, 1);

    return null;
};
