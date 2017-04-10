function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.brand + ", kolor to " + this.color + ", a cena to " + this.price + ".")
}

var iPhone6S = new Phone("Apple", 2250, "space grey");
var SamsungGalaxyS6 = new Phone("Samsung", 3800, "grey");
var OnePlusOne = new Phone("One Plus", 1450, "white");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();