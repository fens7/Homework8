// Создать сущность человека, который будет содержать свойства “имя” и “возраст”. А также иметь метод вывода данных объекта

function Person() {
    (this.name = prompt('Вкажіть ім,я користувача')),
        (this.age = prompt('Також вік користувача')),
        (this.showPerson = function () {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        });
}

const firstPerson = new Person();
firstPerson.showPerson();

// Создать сущность автомобиля. Она должна содержать минимум 3 характеристики. А также иметь метод вывода на экран данных об этом автомобиле. И метод присвоение этого автомобиля владельцу (метод должен записать в автомобиль объект владельца)

function Car() {
    (this.model = prompt('Введіть модель машини')),
        (this.color = prompt('Вкажіть колір машини')),
        (this.year = prompt('Який рік випуску машини?')),
        (this.showCar = function () {
            console.log(
                `Модель машини: ${this.model}. Колір: ${this.color}. Рік випуску: ${this.year}`
            );
        }),
        (this.carOwner = function (owner) {
            this.owner = owner;
            console.log(this);
        });
}

const firstCar = new Car();

firstCar.showCar();
firstCar.carOwner(firstPerson);
