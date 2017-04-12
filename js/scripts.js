function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
		this.getWarrantyCost = function() {
		return this.price * 0.1;
		console.log(this.getWarrantyCost);  //jak dodatkowo wyświetlić w konsoli wynik getWarrantyCost?
		}; //sposób 1
};	

//Phone.prototype.getWarrantyCost = function() {
//	return warrantyCost = this.price * 0.1;
//} //sposób 2

Phone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.brand + ", kolor to " + this.color + ", cena to " + 
		this.price + ", natomiast cena przedłużonej gwarancji to " + this.getWarrantyCost() + ".")
}
Phone.prototype.printWarrantyCost = function() {
	console.log(this.getWarrantyCost());
}

var iPhone6S = new Phone("Apple", 2250, "space grey");
var SamsungGalaxyS6 = new Phone("Samsung", 3800, "grey");
var OnePlusOne = new Phone("One Plus", 1450, "white");


iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

iPhone6S.printWarrantyCost();
SamsungGalaxyS6.printWarrantyCost();
OnePlusOne.printWarrantyCost();

//iPhone6S.getWarrantyCost();
//SamsungGalaxyS6.getWarrantyCost();
//OnePlusOne.getWarrantyCost(); // Jak to wyświetlić?

//POLECENIE
//Proszę dorób jeszcze wyświetlanie ceny przedłużonej gwarancji, która równa jest 10% ceny telefonu. 
//Stwórz do tego metodę getWarrantyCost(), którą użyjesz potem w printInfo()


