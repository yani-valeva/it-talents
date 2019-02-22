class Person {
    constructor(name, money) {
        if (typeof name === 'string' && name.trim().length > 0) {
            this.name = name;
        } else {
            throw new Error('Invalid name!');
        }

        if (typeof money === 'number' && money >= 0) {
            this.money = money;
        } else {
            throw new Error('Invalid data for money!');
        }
    }
}

class Worker extends Person {
    constructor(name) {
        super(name, 0);
        this.acceptedItems = [];
        this.deletedItems = [];
    }

    arrangeItem(item, isInside) {
        if (item instanceof Item) {
            isInside ? this.acceptedItems.push(item) : this.deletedItems.push(item);
        } else {
            throw new Error('Invalid item!');
        }
    }
}

class Distributor extends Person {
    constructor(name) {
        super(name, 0);
    }

    deliver(item, shop, quantity) {
        if (item instanceof Item && typeof shop === 'string' && typeof quantity === 'number' && this.warehouse.listItems.findIndex(o => o.name === item.name) !== -1 && quantity > 0 && quantity <= item.availability) {
            console.log(`I deliver ${item.name} to ${shop}!`);
            let totalPrice = quantity * item.price;
            let distributorPrice = totalPrice * 0.2;
            this.money += distributorPrice;
            let warehouseIncome = totalPrice - distributorPrice;
            this.warehouse.money += warehouseIncome;
            this.warehouse.earnedMoney += warehouseIncome;
            let itemIndex = this.warehouse.sellingProducts.findIndex(i => i.name === item.name);
            if (itemIndex !== -1) {
                this.warehouse.sellingProducts[itemIndex].availability += quantity;
            } else {
                let newItem = {
                    name : item.name,
                    availability: quantity,
                    price: item.price
                }
                this.warehouse.sellingProducts.push(newItem);
            }
            this.warehouse.reduceProductQuantity(item, quantity);
        } else {
            throw new Error('Invalid delivering data!');
        }
    }
}

class Provider extends Person {
    constructor(name) {
        super(name, 0);
    }

    storeItem(item, quantity) {
        if (item instanceof Item && typeof quantity === 'number' && quantity > 0) {
            if (this.warehouse.money >= item.price * quantity) {
                let index = this.warehouse.listItems.findIndex(o => o.name === item.name);
            if (index !== -1) {
                this.warehouse.listItems[index].availability += item.availability;
            } else {
                let items = this.warehouse.listItems;
                items.push(item);
                items[items.length - 1].price = Number((item.price * 0.2).toFixed(2));
            }

            console.log(`I store ${item.name} in the ${this.warehouse.name}!`);
            let totalPrice = quantity * item.price;
            let providerPrice = totalPrice * 0.2;
            this.money += providerPrice;
            this.warehouse.money -= totalPrice;
            }
        } else {
            throw new Error('Invalid data for storing item!');
        }
    }
}

class Item {
    constructor(name, availability, price) {
        if (typeof name === 'string' && name.trim().length > 0) {
            this.name = name;
        } else {
            throw new Error('Invalid name for the item!');
        }

        if (typeof availability === 'number' && availability > 0) {
            this.availability = availability;
        } else {
            throw new Error('Invalid availability!');
        }

        if (typeof price === 'number' && price > 0) {
            this.price = price;
        } else {
            throw new Error('Invalid price!');
        }
    }
}

const INITIAL_MONEY = 10000;

class WareHouse {
    constructor(name, address) {
        if (typeof name === 'string' && name.trim().length > 0) {
            this.name = name;
        } else {
            throw new Error('Invalid name for warehouse!');
        }

        if (typeof address === 'string' && address.trim().length > 0) {
            this.address = address;
        } else {
            throw new Error('Invalid adress!');
        }

        this.providers = [];
        this.workers = [];
        this.distributors = [];
        this.listItems = [];
        this.money = INITIAL_MONEY;
        this.earnedMoney = 0;
        this.sellingProducts = [];
    }

    addEmployee(employee) {
        if (employee instanceof Person) {
            if (employee instanceof Worker) {
                this.workers.push(employee);
            }

            if (employee instanceof Provider) {
                this.providers.push(employee);
            }

            if (employee instanceof Distributor) {
                this.distributors.push(employee);
            }

            employee.warehouse = this;
        } else {
            throw new Error('Invalid person!');
        }
    }

    storeItem(items) {
        if (Array.isArray(items) && items.every(e => e instanceof Item)) {
            let index = Math.floor(Math.random() * this.providers.length);
            let currentProvider = this.providers[index];
            index = Math.floor(Math.random() * this.workers.length);
            let currentWorker = this.workers[index];
            items.forEach(i => {
                let quantity = Math.floor(Math.random() * 10) + 1;
                currentProvider.storeItem(i, quantity);
                currentWorker.arrangeItem(i, true);
            });
        } else {
            throw new Error('Invalid items!');
        }
    }

    deliver(item, shops) {
        if (item instanceof Item && this.listItems.findIndex(i => i.name === item.name) !== -1) {
            let index = Math.floor(Math.random() * this.distributors.length);
            let currentDistributor = this.distributors[index];
            index = Math.floor(Math.random() * shops.length);
            let currentShop = shops[index];
            let quantity = Math.floor(Math.random() * 3) + 1;
            currentDistributor.deliver(item, currentShop, quantity);
            index = Math.floor(Math.random() * this.workers.length);
            let currentWorker = this.workers[index];
            currentWorker.arrangeItem(item, false);
        } else {
            console.log('Invalid item for delivering!');
        }
    }

    reduceProductQuantity(item, quantity) {
        let index = this.listItems.findIndex(p => p.name === item.name);
        this.listItems[index].availability -= quantity;
        if (this.listItems[index].availability < 1) {
            this.listItems.splice(index, 1);
        }
    }

    printDeficitGoods() {
        console.log('List of deficit goods:');
        this.listItems.filter(p => p.availability < 10).forEach(p => {
            console.log(p.name);
        });
    }

    getSalesSatistic() {
        this.distributors.forEach(d => {
            console.log(`${d.name} earn ${d.money.toFixed(2)}!`);
        });
    }

    getPurchasesStatistic() {
        this.providers.forEach(p => {
            console.log(`${p.name} earn ${p.money.toFixed(2)}`);
        });
    }

    getCashBalance() {
        console.log(`${this.name} earned ${this.earnedMoney.toFixed(2)}!`);
        console.log(`${this.name} spent ${((INITIAL_MONEY + this.earnedMoney) - this.money).toFixed(2)}!`);
    }

    getBestSellingProducts() {
        this.sellingProducts.sort((p1, p2) => {
            return p2.availability - p1.availability;
        });

        let bestProducts = this.sellingProducts.slice(0, 5);
        console.log(bestProducts);
        bestProducts.forEach(p => {
            document.write(`<tr><td>${p.name}</td><td>${p.price}</td><td>${p.availability}</td></tr>`);
        })
    }
}

var tileStore = new WareHouse('BanyaStyle', 'Sofia - Mladost 4');
var furnitureStore = new WareHouse('Moemax', 'Sofia - Europe blvd');
var peopleNames = ['Ivo', 'Pepi', 'Sisi', 'Desi', 'Lily', 'Gosho', 'Pesho', 'Dido', 'Miro', 'Tisho', 'Stefi', 'Katya', 'Ivka', 'Ivan', 'Reni', 'Krasi', 'Krisi'];

function hireEmployees(count, currentClass) {
    for (let cnt = 0; cnt < count; cnt++) {
        let index = Math.floor(Math.random() * peopleNames.length);
        if (cnt < count / 2) {
            tileStore.addEmployee(new currentClass(peopleNames[index]));
        } else {
            furnitureStore.addEmployee(new currentClass(peopleNames[index]));
        }
    
        peopleNames.splice(index, 1);
    }
}

hireEmployees(8, Worker);
hireEmployees(4, Distributor);
hireEmployees(4, Provider);
let chair = new Item('Chair', 10, 50);
let table = new Item('Table', 8, 100);
let bed = new Item('Bed', 5, 387);
let desk = new Item('Desk', 6, 277);
let comode = new Item('Comode', 3, 800);
let kitchen = new Item('Kitchen furniture', 3, 7456);

let furnitureItems = [
    chair,
    table,
    bed,
    desk,
    comode,
    kitchen
];

let greenTile = new Item('Green tile', 88, 29);
let aquaTile = new Item('Aqua color tile', 20, 20);
let mirror = new Item('Mirror', 5, 80);
let shower = new Item('Shower', 5, 200);
let sink = new Item('Sink', 3, 800);
let showerCabin = new Item('Shower cabin', 2, 1000);

let bathroomItems = [
    greenTile,
    aquaTile,
    mirror,
    shower,
    sink,
    showerCabin
];

furnitureStore.storeItem(furnitureItems);
tileStore.storeItem(bathroomItems);
const BATHROOM_SHOPS = ['Sima', 'Aqua style', 'Siko', 'Keramo', 'Banya Style', 'Mar Mag'];
const FURNITURE_SHOPS = ['Moemax', 'Aiko', 'Zora', 'Zona', 'Ikea', 'Videnov'];

function deliverProductToShops (arr1, arr2, store) {
    for (let ind = 0; ind < arr1.length; ind++) {
        store.deliver(arr1[ind], arr2);
    }
}

deliverProductToShops(furnitureItems, FURNITURE_SHOPS, furnitureStore);
deliverProductToShops(bathroomItems, BATHROOM_SHOPS, tileStore);
console.log(tileStore);
console.log(furnitureStore);
furnitureStore.printDeficitGoods();
tileStore.printDeficitGoods();
furnitureStore.getSalesSatistic();
tileStore.getSalesSatistic();
console.log('-----------------');
furnitureStore.getPurchasesStatistic();
tileStore.getPurchasesStatistic();
console.log('-----------------');
furnitureStore.getCashBalance();
tileStore.getCashBalance();
console.log('-----------------');
furnitureStore.getBestSellingProducts();
// tileStore.getBestSellingProducts();

