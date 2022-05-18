var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RARITY;
(function (RARITY) {
    RARITY[RARITY["COMMON"] = 0] = "COMMON";
    RARITY[RARITY["RARE"] = 1] = "RARE";
    RARITY[RARITY["LEGENDARY"] = 2] = "LEGENDARY";
    RARITY[RARITY["EPIC"] = 3] = "EPIC";
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
        this.fortest_2 = 0;
    }
    Booster.prototype.getBoosterLoot = function (playerInventory) {
        var counter = 0;
        var i;
        var local_base_volume = this.base_volume;
        var local_second_volume = this.second_volume;
        while ((local_base_volume + local_second_volume > 0)) {
            i = getRandomItem(32);
            if ((itemsBase[i].rarity == this.rarity) && (local_base_volume > 0)) {
                local_base_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty ' + itemsBase[i].rarity + ' № ' + i);
            }
            if ((itemsBase[i].rarity == this.rarity + 1) && (local_second_volume > 0)) {
                local_second_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty+1 ' + itemsBase[i].rarity + ' № ' + i);
            }
        }
        return this.ThisFunktion;
    };
    return Booster;
}());
var LuckBooster = /** @class */ (function (_super) {
    __extends(LuckBooster, _super);
    function LuckBooster(settings) {
        var _this = _super.call(this, settings) || this;
        _this.luckyChans = settings.luckyChans;
        return _this;
    }
    LuckBooster.prototype.ValumeLucktChose = function (rarity, luckyChans) {
        var getLucktChose = 0;
        var standartluckyChans = luckyChans;
        var executionLucktChose = Math.random();
        for (var i = rarity; i < 3; i++) {
            if (executionLucktChose < standartluckyChans) {
                getLucktChose++;
            }
            standartluckyChans = Math.pow(luckyChans, getLucktChose + 1);
        }
        return getLucktChose;
    };
    LuckBooster.prototype.getBoosterLoot = function (playerInventory) {
        var local_base_volume = this.base_volume;
        var local_second_volume = this.second_volume;
        var counter = 0;
        var i;
        while ((local_base_volume + local_second_volume > 0)) {
            var getLucktChose = this.ValumeLucktChose(this.rarity, this.luckyChans);
            i = getRandomItem(32);
            if ((itemsBase[i].rarity == this.rarity + getLucktChose) && (local_base_volume > 0)) {
                local_base_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty ' + local_base_volume + ', raryti ' + itemsBase[i].rarity +
                    ', Luck ' + getLucktChose + ' № ' + i);
            }
            if ((itemsBase[i].rarity == this.rarity + 1 + getLucktChose) && (local_second_volume > 0)) {
                local_second_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty+1 ' + local_second_volume + ', raryti ' + itemsBase[i].rarity +
                    ', Luck ' + getLucktChose + ' № ' + i);
            }
        }
        return this.ThisFunktion;
    };
    return LuckBooster;
}(Booster));
var UniformBooster = /** @class */ (function (_super) {
    __extends(UniformBooster, _super);
    function UniformBooster(settings) {
        return _super.call(this, settings) || this;
    }
    UniformBooster.prototype.getBoosterLoot = function (playerInventory) {
        var counter = 0;
        var i;
        var local_base_volume = this.base_volume;
        var local_second_volume = this.second_volume;
        if (local_base_volume + local_second_volume < 4) {
            throw new Error('Равномерный бустер не может быть меньше четырёх');
        }
        var uniformTrafaret = [false, false, false, false];
        var j = 0;
        while ((local_base_volume + local_second_volume > 0)) {
            //console.log(j);
            i = getRandomItem(32);
            if ((uniformTrafaret[itemsBase[i].itemType] == false) || (j == 4)) {
                var getLucktChose = this.ValumeLucktChose(this.rarity, this.luckyChans);
                if ((itemsBase[i].rarity == this.rarity + getLucktChose) && (local_base_volume > 0)) {
                    local_base_volume--;
                    this.ThisFunktion[counter] = itemsBase[i];
                    counter++;
                    playerInventory[i]++;
                    j++;
                    console.log('Add_raryty ' + local_base_volume + ', raryti ' + itemsBase[i].rarity + ' Item Type ' + itemsBase[i].itemType
                        + ' ItemType is exist ' + uniformTrafaret[itemsBase[i].itemType] + ' № ' + i);
                    uniformTrafaret[itemsBase[i].itemType] = true;
                }
                if ((itemsBase[i].rarity == this.rarity + 1 + getLucktChose) && (local_second_volume > 0)) {
                    local_second_volume--;
                    this.ThisFunktion[counter] = itemsBase[i];
                    counter++;
                    playerInventory[i]++;
                    j++;
                    console.log('Add_raryty ' + local_second_volume + ', raryti ' + itemsBase[i].rarity + ' Item Type ' + itemsBase[i].itemType
                        + ' ItemType is exist ' + uniformTrafaret[itemsBase[i].itemType] + ' № ' + i);
                    uniformTrafaret[itemsBase[i].itemType] = true;
                }
            }
        }
        return this.ThisFunktion;
    };
    return UniformBooster;
}(LuckBooster));
var CollectionBooster = /** @class */ (function (_super) {
    __extends(CollectionBooster, _super);
    function CollectionBooster(settings) {
        return _super.call(this, settings) || this;
    }
    CollectionBooster.prototype.getSizeInventory = function (playerInventory) {
        var j = 0;
        for (var i = 1; i < 33; i++) {
            j += playerInventory[i];
        }
        return j;
    };
    CollectionBooster.prototype.FilterByProportion = function (playerInventory, i) {
        var SizeInventory = this.getSizeInventory(playerInventory); //общее количество предметов в инвентаре
        var ItemCount = playerInventory[i];
        if (ItemCount == 0) {
            return true;
        }
        else {
            if (ItemCount / SizeInventory < Math.random())
                return true;
            else
                return false;
        }
    };
    CollectionBooster.prototype.getBoosterLoot = function (playerInventory) {
        var counter = 0;
        var i;
        var local_base_volume = this.base_volume;
        var local_second_volume = this.second_volume;
        if (local_base_volume + local_second_volume < 4) {
            throw new Error('Равномерный бустер не может быть меньше четырёх');
        }
        var uniformTrafaret = [false, false, false, false];
        var j = 0;
        while ((local_base_volume + local_second_volume > 0)) {
            //console.log(j);
            i = getRandomItem(32);
            if ((uniformTrafaret[itemsBase[i].itemType] == false) || (j == 4) && this.FilterByProportion(playerInventory, i)) {
                var getLucktChose = this.ValumeLucktChose(this.rarity, this.luckyChans);
                if ((itemsBase[i].rarity == this.rarity + getLucktChose) && (local_base_volume > 0)) {
                    local_base_volume--;
                    this.ThisFunktion[counter] = itemsBase[i];
                    counter++;
                    playerInventory[i]++;
                    j++;
                    console.log('Add_raryty ' + local_base_volume + ', raryti ' + itemsBase[i].rarity + ' Item Type ' + itemsBase[i].itemType
                        + ' ItemType is exist ' + uniformTrafaret[itemsBase[i].itemType] + ' № ' + i);
                    uniformTrafaret[itemsBase[i].itemType] = true;
                }
                if ((itemsBase[i].rarity == this.rarity + 1 + getLucktChose) && (local_second_volume > 0)) {
                    local_second_volume--;
                    this.ThisFunktion[counter] = itemsBase[i];
                    counter++;
                    playerInventory[i]++;
                    j++;
                    console.log('Add_raryty ' + local_second_volume + ', raryti ' + itemsBase[i].rarity + ' Item Type ' + itemsBase[i].itemType
                        + ' ItemType is exist ' + uniformTrafaret[itemsBase[i].itemType] + ' № ' + i);
                    uniformTrafaret[itemsBase[i].itemType] = true;
                }
            }
        }
        return this.ThisFunktion;
    };
    return CollectionBooster;
}(UniformBooster));
var boostersBase = {
    1: new Booster({ rarity: RARITY.RARE, base_volume: 3, second_volume: 2 }),
    2: new Booster({ rarity: RARITY.LEGENDARY, base_volume: 3, second_volume: 1 }),
    3: new LuckBooster({ rarity: RARITY.RARE, base_volume: 3, second_volume: 2, luckyChans: 0.10 }),
    4: new LuckBooster({ rarity: RARITY.LEGENDARY, base_volume: 3, second_volume: 1, luckyChans: 0.45 }),
    5: new UniformBooster({ rarity: RARITY.RARE, base_volume: 3, second_volume: 2, luckyChans: 0.10 }),
    6: new UniformBooster({ rarity: RARITY.LEGENDARY, base_volume: 3, second_volume: 1, luckyChans: 0.45 }),
    7: new CollectionBooster({ rarity: RARITY.RARE, base_volume: 3, second_volume: 2, luckyChans: 0.10 }),
    8: new CollectionBooster({ rarity: RARITY.LEGENDARY, base_volume: 3, second_volume: 1, luckyChans: 0.45 })
    // пример добавления экземпляра бустерпака 
};
function getBoosterLoot(boosterID, playerInventory) {
    return boostersBase[boosterID].getBoosterLoot(playerInventory);
    //return boosters[boosterID].getBoosterLoot(playerInventory); 
}
function someInventoryInitialise(playerInventory) {
    for (var i = 1; i < 33; i++) {
        playerInventory[i] = 0;
    }
    return playerInventory;
    //return boosters[boosterID].getBoosterLoot(playerInventory); 
}
function someInventoryLog(playerInventory) {
    var j = 0;
    var console_bufer = '';
    for (var i = 1; i < 33; i++) {
        //console.log(playerInventory[i]);
        console_bufer += playerInventory[i] + ' ';
        j += playerInventory[i];
    }
    console.log(console_bufer);
    console.log('summa ' + j);
    console.log();
    console.log('////////////////');
}
console.log();
console.log('////////////////');
var SomeInventory_1 = {};
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(1, SomeInventory_1);
someInventoryLog(SomeInventory_1);
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(2, SomeInventory_1);
someInventoryLog(SomeInventory_1);
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(3, SomeInventory_1);
someInventoryLog(SomeInventory_1);
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(4, SomeInventory_1);
someInventoryLog(SomeInventory_1);
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(5, SomeInventory_1);
someInventoryLog(SomeInventory_1);
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(6, SomeInventory_1);
someInventoryLog(SomeInventory_1);
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(7, SomeInventory_1);
someInventoryLog(SomeInventory_1);
SomeInventory_1 = someInventoryInitialise(SomeInventory_1);
getBoosterLoot(8, SomeInventory_1);
someInventoryLog(SomeInventory_1);
/*
for(let i: number = 4;i>0;i--){
    getBoosterLoot(8, SomeInventory_1);
}

let j: number = 0;
for(let i: number = 1; i<33; i++){
    console.log(SomeInventory_1[i]);
    j+=SomeInventory_1[i];
}
console.log('j');
console.log(j);
//*/ 
