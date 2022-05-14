enum RARITY { 
    COMMON, 
    RARE, 
    LEGENDARY, 
    EPIC 
    } 
    // Тип предмета 
    enum ITEMTYPE { 
    HELMET, 
    WEAPON, 
    SHIELD, 
    ARMOR 
    } 
    interface IItemSettings { 
    //ID: number; 
    name: string;
    rarity: RARITY;
    itemType: ITEMTYPE;
    }

    function getRandomItem(I : number) {
        return Math.floor(Math.random()*(I - 1) + 1);
      }

    class Item {
    //const ID: number; 
    name: string;
    rarity: RARITY;
    itemType: ITEMTYPE;
    constructor(settings: IItemSettings) { 
    //this.ID = settings.ID;
    this.name = settings.name;
    this.rarity = settings.rarity;
    this.itemType = settings.itemType;
    } 
    } 

    let itemsBase: {[ID: number]: Item} = { 
    1: new Item({name: "COMMON HELMET 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    2: new Item({name: "RARE HELMET 1", rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    3: new Item({name: "EPIC HELMET 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    4: new Item({name: "LEGENDARY HELMET 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    5: new Item({name: "COMMON WEAPON 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    6: new Item({name: "RARE WEAPON 1", rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    7: new Item({name: "EPIC WEAPON 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    8: new Item({name: "LEGENDARY WEAPON 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    9: new Item({name: "COMMON SHIELD 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    10: new Item({name: "RARE SHIELD 1", rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    11: new Item({name: "EPIC SHIELD 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    12: new Item({name: "LEGENDARY SHIELD 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    13: new Item({name: "COMMON ARMOR 1", rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    14: new Item({name: "RARE ARMOR 1", rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    15: new Item({name: "EPIC ARMOR 1", rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    16: new Item({name: "LEGENDARY ARMOR 1", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR }),
    17: new Item({name: "COMMON HELMET 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    18: new Item({name: "RARE HELMET 2", rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    19: new Item({name: "EPIC HELMET 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    20: new Item({name: "LEGENDARY HELMET 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    21: new Item({name: "COMMON WEAPON 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    22: new Item({name: "RARE WEAPON 2", rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    23: new Item({name: "EPIC WEAPON 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    24: new Item({name: "LEGENDARY WEAPON 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    25: new Item({name: "COMMON SHIELD 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    26: new Item({name: "RARE SHIELD 2", rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    27: new Item({name: "EPIC SHIELD 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    28: new Item({name: "LEGENDARY SHIELD 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    29: new Item({name: "COMMON ARMOR 2", rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    30: new Item({name: "RARE ARMOR 2", rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    31: new Item({name: "EPIC ARMOR 2", rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    32: new Item({name: "LEGENDARY ARMOR 2", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR })        
    };


// Интерфейс инвентаря. Ключ - ID предмета, значение - количество экземпляров этого предмета в инвентаре
interface IInventory { 
[key: number]: number 
} 

// Настройки простого бустерпака 
interface IBoosterSettings { 
rarity: RARITY;
base_volume: number;
second_volume: number;
} 

// Класс простого бустерпака 
class Booster { 
    rarity: RARITY;
    base_volume: number;
    second_volume: number;
    ThisFunktion: Item[]; 
    constructor(settings: IBoosterSettings) { 
    this.rarity = settings.rarity;
    this.base_volume = settings.base_volume;
    this.second_volume = settings.second_volume;
    this.ThisFunktion = new Array(this.base_volume+this.second_volume);
    } 

    getBoosterLoot(playerInventory: IInventory): Item[] {
        let counter : number = 0;
        let i: number;
        while((this.base_volume+this.second_volume > 0)){
            i = getRandomItem(32);
            if((itemsBase[i].rarity == this.rarity)&&(this.base_volume > 0)){
                this.base_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty '+itemsBase[i].rarity);
            }
            if((itemsBase[i].rarity == this.rarity+1)&&(this.second_volume > 0)){
                this.second_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty+1 ' +itemsBase[i].rarity);
            }          
        }
        return this.ThisFunktion;
    }      
}

interface ILuckBoosterSettings extends IBoosterSettings {
    luckyChans: number;
} 
// Класс бустерпака удачи 

class LuckBooster extends Booster { 
luckyChans: number;
constructor (settings: ILuckBoosterSettings) {
    super(settings);
    this.luckyChans = settings.luckyChans;
} 

getBoosterLoot(playerInventory: IInventory): Item[]{
    let counter : number = 0;
        let i: number;
        while((this.base_volume+this.second_volume > 0)){
            let GetLucktChose: number = 0;
            if(Math.random()< this.luckyChans){
                GetLucktChose = 1;
            }
            i = getRandomItem(32);
            if((itemsBase[i].rarity == this.rarity+GetLucktChose)&&(this.base_volume > 0)){
                this.base_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty '+ this.base_volume +', raryti '+itemsBase[i].rarity + ', Luck ' + GetLucktChose);
            }
            if((itemsBase[i].rarity == this.rarity+1+GetLucktChose)&&(this.second_volume > 0)){
                this.second_volume--;
                this.ThisFunktion[counter] = itemsBase[i];
                counter++;
                playerInventory[i]++;
                console.log('Add_raryty+1 ' +this.second_volume + ', raryti '+itemsBase[i].rarity + ', Luck ' + GetLucktChose);
            }          
        }
        return this.ThisFunktion;
}

} 
class UniformBooster extends LuckBooster { 
    constructor (settings: ILuckBoosterSettings) {
        super(settings);
    }    
    getBoosterLoot(playerInventory: IInventory): Item[]{
        let counter : number = 0;
        let i: number;
        if(this.base_volume+this.second_volume <4){
            throw new Error('Равномерный бустер не может быть меньше четырёх');
        }
        while((this.base_volume+this.second_volume > 0)){ 
            let UniformTrafaret: boolean[] = [false, false, false, false];          
            for(let j: number = 0; j<4;){
                if(this.base_volume+this.second_volume > 0){
                    j = 4;
                }
                //console.log(j);
                i = getRandomItem(32);
                if(UniformTrafaret[itemsBase[i].itemType] == false){
                    let GetLucktChose: number = 0;
                    if(Math.random()< this.luckyChans){
                        GetLucktChose = 1;
                    }
                    if((itemsBase[i].rarity == this.rarity+GetLucktChose)&&(this.base_volume > 0)){
                        this.base_volume--;
                        this.ThisFunktion[counter] = itemsBase[i];
                        counter++;
                        playerInventory[i]++;
                        j++;
                        UniformTrafaret[itemsBase[i].itemType] = true;
                        console.log('Add_raryty '+ this.base_volume +', raryti '+itemsBase[i].rarity);
                    }
                    if((itemsBase[i].rarity == this.rarity+1+GetLucktChose)&&(this.second_volume > 0)){
                        this.second_volume--;
                        this.ThisFunktion[counter] = itemsBase[i];
                        counter++;
                        playerInventory[i]++;
                        j++;
                        UniformTrafaret[itemsBase[i].itemType] = true;
                        console.log('Add_raryty+1 ' +this.second_volume + ', raryti '+itemsBase[i].rarity);
                    }
                }
            }         
        }
        return this.ThisFunktion;
    }
    }


let boostersBase = { 
    1: new Booster({rarity: RARITY.RARE, base_volume : 3, second_volume: 2}),
    2: new Booster({rarity: RARITY.LEGENDARY, base_volume : 3, second_volume: 1}), 
    3: new LuckBooster({rarity: RARITY.RARE, base_volume : 3, second_volume: 2, luckyChans: 0.10}),
    4: new LuckBooster({rarity: RARITY.LEGENDARY, base_volume : 3, second_volume: 1, luckyChans: 0.45}),
    5: new UniformBooster({rarity: RARITY.RARE, base_volume : 3, second_volume: 2, luckyChans: 0.10}),
    6: new UniformBooster({rarity: RARITY.LEGENDARY, base_volume : 3, second_volume: 1, luckyChans: 0.45})
    // пример добавления экземпляра бустерпака 
};

function getBoosterLoot(boosterID: number, playerInventory: IInventory): Item[] {    
    return boostersBase[boosterID].getBoosterLoot(playerInventory);
    //return boosters[boosterID].getBoosterLoot(playerInventory); 
}
console.log();

let SomeInventory_1: IInventory = {}
for(let i: number = 1; i<33; i++){
    SomeInventory_1[i] = 0;
}

getBoosterLoot(5, SomeInventory_1);
let j: number = 0;
for(let i: number = 1; i<33; i++){
    //console.log(SomeInventory_1[i]);
    j+=SomeInventory_1[i];
}
console.log('j');
console.log(j);
//*/