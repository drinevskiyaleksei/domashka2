//number 1
let arr=[1,2,3,4,5] ;
for(let a=0;a<=arr.length-1;a++) console.log(arr[a]);
console.log('');  
//number 2
let b= [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let a=0;a<=b.length-1;a++){
    if(b[a]>=0||b[a]<-10||b[a]>-3) continue;
    console.log(b[a]);
}
console.log('');
//number 3
let c=[],
    d=[],
    e=23,
    result=0;
while(e<=57){
    d.push(e);
    e++;
}
console.log(d);
for(let a=23;a<=57;a++){
    c.push(a);
    result+=a;
}
console.log(c);
console.log(result);
//number 4
let f=['10', '20', '30','50', '235', '3000'];
for (let a=0;a<=f.length-1;a++){
    if(f[a][0]!=1&&f[a][0]!=2&&f[a][0]!=5)continue;
    console.log(f[a]);
}
console.log('');
//number 5
let week=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
for (let a=0;a<=week.length-1;a++){
    if(week[a]=='Сб'||week[a]=='Вс'){
        document.write(`<p><b>${week[a]}</b></p>`);
    }else{
        document.write(`<p>${week[a]}</p>`);
    };
};
console.log('');
//number 6
let mus = ['Mic','Audio','Pc','Sound'];
mus[mus.length]='PopFltr';
console.log(mus[mus.length-1]);
console.log('');
//number 7
let num=[],
a;
for(; ;){
    a=+prompt('Input number');
    if(a=='')break;
    num.push(a);
}
console.log(num);

num=num.sort(function(a,b){
    return a-b;
});
console.log(num);
console.log('');
//number 8
let o=[12, false, 'Текст', 4, 2, -5, 0];
o.reverse();
console.log(o);

let r=[12, false, 'Текст', 4, 2, -5, 0],
    p=[],
    s=r.length-1;
    while(s>=0){
        p.push(r[s]);
        s--;
    };
console.log(p);
console.log('');
//number 9
let t=[5, 9, 21, , , 9, 78, , , , 6],
sum=0;
console.log(t);
for(a=0;a<=t.length-1;a++){
    if(isFinite(t[a]))continue;
    sum++;
}
console.log(sum);
console.log('');

