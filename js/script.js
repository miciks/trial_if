let ad = prompt("isminizi giriniz :");
let tckn = prompt("TCKN giriniz :");

// kontrolEt(ad,tckn);
// function kontrolEt(ad, tckn) {
//     if (ad != "") {
//         if (tckn.length == 11) {
//             console.log(ad  + tckn );
//         } else {
//            console.log("TC nizi 11 karakter olarak giriniz") 
//         }
        
//     } else {
//         console.log("lütfen isim alanını boş bırakmayınız");
//     }
// }

kontrolEt2(ad,tckn);
function kontrolEt2(params) {
    if (ad == "") {
        console.log("lütfen isminizi giriniz");
        return;

    }
    if (tckn.length != 11) {
        console.log("TC nizi 11 karakter olarak giriniz");
        return;
    }

    console.log(ad + ">>>>" + tckn);   
}