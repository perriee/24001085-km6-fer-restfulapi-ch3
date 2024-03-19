const carRepo = require("../../repository/car");

exports.getCars = (jumlahPenumpang, tanggal, waktuJemput) => {
    const data = carRepo.getCars(jumlahPenumpang, tanggal, waktuJemput);
    return data;
};

exports.getCar = (id) => {
    const data = carRepo.getCar(id);
    return data;
};

exports.createCar = (payload) => {
    const data = carRepo.createCar(payload);
    return data;
};

exports.updateCar = (id, payload) => {
    const data = carRepo.updateCar(id, payload);
    return data;
};

exports.deleteCar = (id) => {
    const data = carRepo.deleteCar(id);
    return data;
};
