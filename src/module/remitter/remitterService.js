

const object = {};

object.remitterslist = [
    {
        id: 1,
        name: 'Jack',
        work: 'Enginerr',
        address: 'India',
        gender: 'male',
        email: 'jack@gmail.com',
        language: 'hindi',
        passportno: '77987812398',
        rate: 0,
        quantity: 0,
        amount: 0,
        itemAmountTotal: 0,
        items: []
    },
    {
        id: 2,
        name: 'Peter',
        work: 'Shop',
        address: 'Myanmar',
        gender: 'female',
        email: 'pater@gmail.com',
        language: 'spanish',
        passportno: '987234524232',
        rate: 0,
        quantity: 0,
        amount: 0,
        itemAmountTotal: 0,
        items: []
    },
    {
        id: 3,
        name: 'Raj',
        work: 'Driver',
        address: 'Hong-kong',
        gender: 'male',
        email: 'raj@gmail.com',
        language: 'german',
        passportno: '671237127890',
        rate: 0,
        quantity: 0,
        amount: 0,
        itemAmountTotal: 0,
        items: []
    }];

object.addRemitter = function (data) {
    this.remitterslist.push(data)
}

object.getRemitter = function (id) {
    return this.remitterslist.filter(function (item) {
        return  parseInt(item.id) === parseInt(id);
    })
}

object.removeRemiter = function () {

}

object.updateRemitter = function(){

}

export default object