function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};	

Phone.prototype.getWarrantyCost = function() {
return this.price * 0.1;
} 
Phone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.brand + ", kolor to " + this.color + ", cena to " + 
		this.price + ", natomiast cena przedłużonej gwarancji to " + this.getWarrantyCost() + ".")
}

var iPhone6S = new Phone("Apple", 2250, "space grey");
var SamsungGalaxyS6 = new Phone("Samsung", 3800, "grey");
var OnePlusOne = new Phone("One Plus", 1450, "white");


iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

