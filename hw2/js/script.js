'use strict'
//number 1
let name = prompt('Name');
let age = prompt('Age');
let city = prompt('City');
let phone = prompt('Phone');
let email = prompt('Email');
let company = prompt('Company');
console.log('Меня зовут' +' '+ name +' '+'Мне'+' ' +age+' '+'лет. Я проживаю в городе'+' ' +city+' '+ 'и работаю в компании'+' ' +company+' '+'. Мои контактные данные:'+phone+','+ email+'.');
//number 2
let data = 2021 - age;
console.log(`${name} родился в ${data} году.`)
//number 3
let str = '123321',
    a1 = Number(str[0]),
    a2 = Number(str[1]),
    a3 = Number(str[2]),
    a4 = Number(str[3]),
    a5 = Number(str[4]),
    a6 = Number(str[5]),
    s1 = a1+a2+a3,
    s2 = a4+a5+a6;
    let sstr = (s1 == s2) ? console.log('True') : console.log('False');
//number 4
let a = 1;
let aa = (a>0)? console.log('True'): console.log('False');
//number 5
let aaa = 10,
    b = 2,
    aaab = aaa+b,
    ab = aaa-b,
    aab = aaa*b,
    abb = aaa/b,
    aaabbb = aaab+ab+aab+abb;
    console.log(aaab);
    console.log(ab);
    console.log(aab);
    console.log(abb);
    console.log(aaabbb);
    if (aaabbb>1){
        console.log(aaabbb**2);
    }
//number 6
if (aaa>2 && aaa<11||b>=6 && b<14){
    console.log('Верно');
}else{
    console.log('Неверно');
}
//number 7
let n = 33;
if (n>=0 && n<15){
    console.log('Первая четверть');
}else if(n>=15 && n<30){
    console.log('Вторая четверть');
}else if (n>=30 && n<45){
    console.log('Третья четверть');
}else if(n>=45 && n<60){
    console.log('Четвертая четверть');
}
//number 8
let day = 6;
if (day>=0 && day<10){
    console.log('Первая декада');
}else if(day>=10 && day<20){
    console.log('Вторая декада');
}else if(day>=20 && day<31){
    console.log('Третья декада');
}

