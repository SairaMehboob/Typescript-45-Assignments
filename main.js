//DEFINING A FUNCTION
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //ADDING ADDITIONAL OPTIONS TO THE CAR OBJECT
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//CALLING THE FUNCTION TO CREATE A CAR OBJECT
var myCar = create_car("TOYOTA", "COROLLA", "COLOR:BLACK", "SUNROOF:TRUE");
console.log(myCar);
