const carUseCase = require("../../usecase/car");

exports.getCars = (req, res) => {
    const { jumlahPenumpang, tanggal, waktuJemput } = req.query;

    const data = carUseCase.getCars(jumlahPenumpang, tanggal, waktuJemput);

    const response = {
        data,
        message: data.length > 0 ? "Successfully Retrieved All Cars" : "Cars not found",
    };

    res.status(200).json(response);
};

exports.getCar = (req, res, next) => {
    const { id } = req.params;

    const data = carUseCase.getCar(id);

    if (!data) {
        return next({
            statusCode: 404,
            message: `Car with id ${id} is not found`,
        });
    }

    const response = {
        data: data,
        message: "Successfully Retrived Car",
    };

    res.status(200).json(response);
};

exports.createCar = (req, res, next) => {
    // Validate Request
    const {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        availableAt,
        transmission,
        available,
        type,
        year,
        options,
        specs,
    } = req.body;

    if (!plate || plate == "") {
        return next({
            statusCode: 400,
            message: "plate must be filled",
        });
    }
    if (!manufacture || manufacture == "") {
        return next({
            statusCode: 400,
            message: "manufacture must be filled",
        });
    }
    if (!model || model == "") {
        return next({
            statusCode: 400,
            message: "model must be filled",
        });
    }
    if (!image || image == "") {
        return next({
            statusCode: 400,
            message: "image must be filled",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return next({
            statusCode: 400,
            message: "rentPerDay must be filled",
        });
    }
    if (!capacity || capacity == "") {
        return next({
            statusCode: 400,
            message: "capacity must be filled",
        });
    }
    if (!description || description == "") {
        return next({
            statusCode: 400,
            message: "description must be filled",
        });
    }
    if (!availableAt || availableAt == "") {
        return next({
            statusCode: 400,
            message: "availableAt must be filled",
        });
    }
    if (!transmission || transmission == "") {
        return next({
            statusCode: 400,
            message: "transmission must be filled",
        });
    }
    if (!available || available == "") {
        return next({
            statusCode: 400,
            message: "available must be filled",
        });
    }
    if (!type || type == "") {
        return next({
            statusCode: 400,
            message: "type must be filled",
        });
    }
    if (!year || year == "") {
        return next({
            statusCode: 400,
            message: "year must be filled",
        });
    }
    if (options.length == 0) {
        return next({
            statusCode: 400,
            message: "options must be filled",
        });
    }
    if (specs.length == 0) {
        return next({
            statusCode: 400,
            message: "specs must be filled",
        });
    }

    const data = carUseCase.createCar(req.body);

    const response = {
        data: data,
        message: "Successfully Created Car",
    };

    res.status(200).json(response);
};

exports.updateCar = (req, res, next) => {
    // Validate Request
    const {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        availableAt,
        transmission,
        available,
        type,
        year,
        options,
        specs,
    } = req.body;

    if (!plate || plate == "") {
        return next({
            statusCode: 400,
            message: "plate must be filled",
        });
    }
    if (!manufacture || manufacture == "") {
        return next({
            statusCode: 400,
            message: "manufacture must be filled",
        });
    }
    if (!model || model == "") {
        return next({
            statusCode: 400,
            message: "model must be filled",
        });
    }
    if (!image || image == "") {
        return next({
            statusCode: 400,
            message: "image must be filled",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return next({
            statusCode: 400,
            message: "rentPerDay must be filled",
        });
    }
    if (!capacity || capacity == "") {
        return next({
            statusCode: 400,
            message: "capacity must be filled",
        });
    }
    if (!description || description == "") {
        return next({
            statusCode: 400,
            message: "description must be filled",
        });
    }
    if (!availableAt || availableAt == "") {
        return next({
            statusCode: 400,
            message: "availableAt must be filled",
        });
    }
    if (!transmission || transmission == "") {
        return next({
            statusCode: 400,
            message: "transmission must be filled",
        });
    }
    if (!available || available == "") {
        return next({
            statusCode: 400,
            message: "available must be filled",
        });
    }
    if (!type || type == "") {
        return next({
            statusCode: 400,
            message: "type must be filled",
        });
    }
    if (!year || year == "") {
        return next({
            statusCode: 400,
            message: "year must be filled",
        });
    }
    if (options.length == 0) {
        return next({
            statusCode: 400,
            message: "options must be filled",
        });
    }
    if (specs.length == 0) {
        return next({
            statusCode: 400,
            message: "specs must be filled",
        });
    }

    const id = req?.params?.id;
    const updateCarData = {
        id: id,
        ...req.body,
    };

    const data = carUseCase.updateCar(id, updateCarData);

    res.status(200).json({
        data: data,
        message: "Successfully Updated Car",
    });
};

exports.deleteCar = (req, res) => {
    const id = req?.params?.id;

    const data = carUseCase.deleteCar(id);

    res.status(200).json({
        data: data,
        message: `Successfully delete car with id ${id}`,
    });
};
