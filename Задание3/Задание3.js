let len=0;
let cows,bulls;

while(len>6||len<3){
    len=Math.floor(Math.random()*10);
}//Герерируем длинну числа от [3,6]

let attempts=prompt(`Введите число попыток:`)

let hidden = number();
for(let i=0;i<attempts;i++){
    let guess=prompt(`Компьютер загадал число длиной ${len}`)
    AL(hidden,guess);
    let s=bulls+" Быки "+cows+" Коровы"+`<br/>`+" Осталось попыток: "+(attempts-i-1);
    document.writeln(`${s}<br/><br/>`);
    if (hidden==guess){
        alert("Вы выиграли!");
        break;
    }
}
alert("Неудача :( попробуй еще (для этого нажми F5)");



function number(){
    let a='';
    for (let i=0; i<len;i++){
        do{
            c=Math.floor(Math.random()*10);
        }
        while(a.indexOf(c)>=0);//Циклом преверяем повторяющиеся цифры
        a=a+c;//Добаялем в а если число не встречалось   
    }
    return a;   
}//Сама функция загадывает число длинной len

function AL(make,attempt){
    bulls=0;
    cows=0;
    for(let i=0;i<len;i++){
        if(make[i]==attempt[i]){
            bulls++;
        }//Если в по индексам совпадают числа
        else{
            if (make.indexOf(attempt[i])>=0){
                cows++;
            }
        }//Если просто присутствует 
    }
}

