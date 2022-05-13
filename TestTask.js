var RARITY;
(function (RARITY) {
    RARITY[RARITY["COMMON"] = 0] = "COMMON";
    RARITY[RARITY["RARE"] = 1] = "RARE";
    RARITY[RARITY["EPIC"] = 2] = "EPIC";
    RARITY[RARITY["LEGENDARY"] = 3] = "LEGENDARY";
})(RARITY || (RARITY = {}));
// Тип предмета 
var ITEMTYPE;
(function (ITEMTYPE) {
    ITEMTYPE[ITEMTYPE["HELMET"] = 0] = "HELMET";
    ITEMTYPE[ITEMTYPE["WEAPON"] = 1] = "WEAPON";
    ITEMTYPE[ITEMTYPE["SHIELD"] = 2] = "SHIELD";
    ITEMTYPE[ITEMTYPE["ARMOR"] = 3] = "ARMOR";
})(ITEMTYPE || (ITEMTYPE = {}));
function getRandomItem(I) {
    return Math.floor(Math.random() * (I - 1) + 1);
}
var Item = /** @class */ (function () {
    function Item(settings) {
        //this.ID = settings.ID;
        this.name = settings.name;
        this.rarity = settings.rarity;
        this.itemType = settings.itemType;
    }
    return Item;
}());
var itemsBase = {
    1: new Item({ name: "COMMON HELMET 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    2: new Item({ name: "RARE HELMET 1", rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    3: new Item({ name: "EPIC HELMET 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    4: new Item({ name: "LEGENDARY HELMET 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    5: new Item({ name: "COMMON WEAPON 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    6: new Item({ name: "RARE WEAPON 1", rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    7: new Item({ name: "EPIC WEAPON 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    8: new Item({ name: "LEGENDARY WEAPON 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    9: new Item({ name: "COMMON SHIELD 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    10: new Item({ name: "RARE SHIELD 1", rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    11: new Item({ name: "EPIC SHIELD 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    12: new Item({ name: "LEGENDARY SHIELD 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    13: new Item({ name: "COMMON ARMOR 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    14: new Item({ name: "RARE ARMOR 1", rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    15: new Item({ name: "EPIC ARMOR 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    16: new Item({ name: "LEGENDARY ARMOR 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR }),
    17: new Item({ name: "COMMON HELMET 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    18: new Item({ name: "RARE HELMET 2", rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    19: new Item({ name: "EPIC HELMET 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    20: new Item({ name: "LEGENDARY HELMET 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    21: new Item({ name: "COMMON WEAPON 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    22: new Item({ name: "RARE WEAPON 2", rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    23: new Item({ name: "EPIC WEAPON 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    24: new Item({ name: "LEGENDARY WEAPON 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    25: new Item({ name: "COMMON SHIELD 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    26: new Item({ name: "RARE SHIELD 2", rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    27: new Item({ name: "EPIC SHIELD 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    28: new Item({ name: "LEGENDARY SHIELD 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    29: new Item({ name: "COMMON ARMOR 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    30: new Item({ name: "RARE ARMOR 2", rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    31: new Item({ name: "EPIC ARMOR 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    32: new Item({ name: "LEGENDARY ARMOR 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR })
};
// Класс простого бустерпака 
var Booster = /** @class */ (function () {
    function Booster(settings) {
        this.rarity = settings.rarity;
        this.base_volume = settings.base_volume;
        this.second_volume = settings.second_volume;
        this.ThisFunktion = new Array(this.base_volume + this.second_volume);
    }
    Booster.prototype.AddItemFromBooster = function (volume, rarityID, counter) {
        volume--;
        counter++;
    };
    Booster.prototype.getBoosterLoot = function (playerInventory) {
        var counter = 0;
        var i;
        while ((this.base_volume + this.second_volume > 0)) {
            i = getRandomItem(32);
            if ((itemsBase[i].rarity == this.rarity) && (this.base_volume > 0)) {
                this.base_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                //console.log('Add_raryty '+this.base_volume);
            }
            if ((itemsBase[i].rarity == this.rarity + 1) && (this.second_volume > 0)) {
                this.second_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                //console.log('Add_raryty+1 ' +this.second_volume);
            }
        }
        return this.ThisFunktion;
    };
    return Booster;
}());
// Класс бустерпака удачи 
var boostersBase = {
    1: new Booster({ rarity: RARITY.RARE, base_volume: 3, second_volume: 2 }),
    2: new Booster({ rarity: RARITY.LEGENDARY, base_volume: 1, second_volume: 3 })
};
function getBoosterLoot(boosterID, playerInventory) {
    return boostersBase[boosterID].getBoosterLoot(playerInventory);
    //return boosters[boosterID].getBoosterLoot(playerInventory); 
}
var SomeInventory_1 = {};
for (var i = 1; i < 33; i++) {
    SomeInventory_1[i] = 0;
}
getBoosterLoot(1, SomeInventory_1);
var j = 0;
for (var i = 1; i < 33; i++) {
    console.log(SomeInventory_1[i]);
    j += SomeInventory_1[i];
}
console.log('j');
console.log(j);
//*/
