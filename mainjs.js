/*
Data types in JS (undefined,boolean,object)*/

/*
let soz;*/
/*document.write(typeof soz);*/

/*let rost = 45 == 45 ? ture : false;*/
/*document.write(rost);*/

/*let arrayObject = [45,78,"text",true,false,"css","javascript",12]*/

/*let oddiyObject = {ism:"Bekmirzo",familiya:"Ergashev", uningYoshi:"16 yoshda"}*/
/*console.log(oddiyObject)*/

/*Functions in JS*/

/*
let savatcha = [12,78,"matn",true,"true"];

if (savatcha.length == 0){
    document.write("Savatchaning ichida"+ savatcha.length +"dona ma'lumot bor!");
}
else{
    document.write("Savatchaning ichida"+ savatcha.length +"ta ma'lumot bor!")
}

let savatcha = [78,"matn"];

savatchaniTekshir(savatcha);
*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2007);
sana.setMonth(11);
sana.getDay(29);

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust",
              "sentabr","oktabr","noyabr","dekabr"];
let haftaningKuni = ["yakshanba","dushanba","sewanba","chorwanba","paywanba","Juma","Shanba",]

document.write("Men " +yil+"-yilning "+haftaKuni + oylar[oy]+" kuni Haftaning "+haftaningKuni[haftaKuni]+"-kuni tavallud topganman");

