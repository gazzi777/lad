let a=prompt("Начальное здоровье Евстафия");

document.querySelector('.HealthEvst').innerHTML=a;


let ph_armor_evst=0;
let magic_armor_evst=0;

let ph_armor_monster=0;
let magic_armor_monster=0;

let cooldown_monster1=0;
let cooldown_monster2=0;

let cooldown_evst1=0;
let cooldown_evst2=0;
let cooldown_evst3=0;

document.querySelector('.MagicArmor').innerHTML=magic_armor_evst;
document.querySelector('.PhArmor').innerHTML=ph_armor_evst;


let monster_health=monster.maxHealth;


document.querySelector('.HealthMonstr').innerHTML=monster_health;






// document.querySelector('#action1').onclick=cadil();
// document.querySelector('#action2').onclick=vertuha();
// document.querySelector('#action3').onclick=fireball();
// document.querySelector('#action4').onclick=block();








//действия Евстафия
function cadil(){
        cooldown_evst1-=1;
        cooldown_evst2-=1;
        cooldown_evst3-=1;
        magic_armor_evst+=evstafiy.moves[0]["magicArmorPercents"];


        if(ph_armor_monster>evstafiy.moves[0]["physicalDmg"]){
            ph_armor_monster-=evstafiy.moves[0]["physicalDmg"];

        }
        else{
            if (ph_armor_monster==evstafiy.moves[0]["physicalDmg"]){
                ph_armor_monster=0;
            }
            else{
                monster_health=monster_health+ph_armor_monster-evstafiy.moves[0]["physicalDmg"];
            }
        }

        monsters();
}

function vertuha(){
    cooldown_evst1=4;
    cooldown_evst2-=1;
    cooldown_evst3-=1;

    if(ph_armor_monster>evstafiy.moves[1]["physicalDmg"]){
        ph_armor_monster-=evstafiy.moves[1]["physicalDmg"];

    }
    else{
        if (ph_armor_monster==evstafiy.moves[1]["physicalDmg"]){
            ph_armor_monster=0;
        }
        else{
            monster_health=monster_health+ph_armor_monster-evstafiy.moves[1]["physicalDmg"];
        }
    }
    cool();

}

function fireball(){
    cooldown_evst1-=1;
    cooldown_evst2=3;
    cooldown_evst3-=1;
    if(magic_armor_monster>evstafiy.moves[2]["magicDmg"]){
        magic_armor_monster-=evstafiy.moves[2]["magicDmg"];

    }
    else{
        if (magic_armor_monster==evstafiy.moves[2]["magicDmg"]){
            magic_armor_monster=0;
        }
        else{
            monster_health=monster_health+magic_armor_monster-evstafiy.moves[2]["magicDmg"];
        }
    }
}

function block(){
    cooldown_evst1-=1;
    cooldown_evst2-=1;
    cooldown_evst3=4;
    magic_armor_evst=Number(evstafiy.moves[3]["magicArmorPercents"]);
    ph_armor_evst=Number(evstafiy.moves[3]["magicArmorPercents"]);
    document.querySelector('.MagicArmor').innerHTML=magic_armor_evst;
    document.querySelector('.PhArmor').innerHTML=ph_armor_evst;
}

function cool(){
    if (cooldown_evst1>0){
        var activeElement = document.querySelector('#action1');
        activeElement.classList.remove('btn btn-danger');
        activeElement.classList.add('btn btn-primary disabled');

    }
}




//действия монстра (компьютера)
function  monsters(){
    let random=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (random==1){
        cooldown_monster1-=1;
        cooldown_monster2-=1;
        ph_armor_monster+=monster.moves[0]["physicArmorPercents"]; 
        magic_armor_monster+=monster.moves[0]["magicArmorPercents"];


        if(ph_armor_evst>monster.moves[0]["physicalDmg"]){
            ph_armor_evst-=monster.moves[0]["physicalDmg"];

        }
        else{
            if (ph_armor_evst==monster.moves[0]["physicalDmg"]){
                ph_armor_evst=0;
            }
            else{
                a=a+ph_armor_evst-monster.moves[0]["physicalDmg"];
            }
        }
     }
     else if (random==2 && cooldown_monster1<=0){
        cooldown_monster1=3;
        cooldown_monster2-=1;
        if(magic_armor_evst>monster.moves[1]["magicDmg"]){
            magic_armor_evst-=monster.moves[1]["magicDmg"];
        }
        else{
            if (magic_armor_evst==monster.moves[1]["magicDmg"]){
                magic_armor_evst=0;
            }
            else{
                a=a+magic_armor_evst-monster.moves[1]["magicDmg"];
            }
        }
     }
     else if (random==3 && cooldown_monster2<=0){
        cooldown_monster1-=1;
        cooldown_monster2=2;
        ph_armor_monster+=monster.moves[2]["physicArmorPercents"];
        
        if(ph_armor_evst>monster.moves[2]["physicalDmg"]){
            ph_armor_evst-=monster.moves[2]["physicalDmg"];
        }
        else{
            if (ph_armor_evst==monster.moves[2]["physicalDmg"]){
                ph_armor_evst=0;
            }
            else{
                a=a+ph_armor_evst-monster.moves[2]["physicalDmg"];
            }
        }
     }
     else{
        monsters();
     }

}


const monster = {
    maxHealth: 10,
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
}

const evstafiy = {
    maxHealth: a, 
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4
        },
    ]
}

