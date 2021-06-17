//number 1
let a = 1,
    b = 35;
while(a>=1 && a<=50){
    console.log(a);
    a++;
}
while(b<=35&& b>=8){
    console.log(b);
    b--;
}
//number 2
let c = 89;
while (c<=89 && c>=11){
    document.write(`${c} <br/>`);
    c--;
}
//number 3
let i,
    sum = 0;
for (i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);
//number 4
let h=0,
    r,
    l;
for(r=1;r<=5;r++){
    h=0;
    for(l=1;l<=r;l++){
        h+=l;
    }
    console.log(h);
}
//number 5
//вариант через for
for(let d=8;d<=56;d++){
    if(d % 2==0){
        console.log(d);
    }
}
//вариант через while
let e=6;
while(e <= 56)
{
    e +=2;
    console.log(e);
}
//number 6
let f ;
let j=2,
    k=2;
for(j=2;j<=10;j++){
    for(k=2;k<=10;k++){
        f=j*k;
        console.log( +j+'*'+k+'='+f);
    }
}
//number 7
let n = 1000,
    num=0,
    s;
    for(s=1;s>0;s++){
        n=n/2;
        if(n<50){
            num=s;
            console.log(num);
            console.log(n);
            break;
        }
    }
//number 8
let g=0,
    avg,
    argument,
    counter;
for(;;){
    argument=+prompt('Number');
    if (argument==NaN)console.log(true);
    if(argument==""||argument==0){
        console.log('Zero');
        break;
    }else if(isNaN(argument)==true){
        console.log('Error');
    }
    g+=argument;
    counter++;
}
console.log(g);
avg=sum/counter;
console.log(avg);

