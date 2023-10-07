let names = document.querySelector('.names span'),
    names2 = document.querySelector('.names2 span'),
    names3 = document.querySelector('.names3 span'),
    names4 = document.querySelector('.names4 span'),
    names5 = document.querySelector('.names5 span'),
    names6 = document.querySelector('.names6 span'),
    names7 = document.querySelector('.names7 span'),
    names8 = document.querySelector('.names8 span'),
    names9 = document.querySelector('.names9 span'),
    d_none = document.querySelector('.d_none'),
    text_inside = document.querySelector('.text_inside'),
    countryEntr = prompt('Enter your country');


fetch(`https://islomapi.uz/api/present/day?region=${countryEntr}`, {
    method:'GET'
}) 
    .then(response => response.json())
    .then((date) => {
        console.log(date);
        names.innerHTML = date.region
        names2.innerHTML = date.date
        names3.innerHTML = date.weekday
        names4.innerHTML = date.times.asr
        names5.innerHTML = date.times.hufton
        names6.innerHTML = date.times.peshin
        names7.innerHTML = date.times.quyosh
        names8.innerHTML = date.times.shom_iftor
        names9.innerHTML = date.times.tong_saharlik
    })

if (countryEntr == "") {
    d_none.style.display = 'block'
    text_inside.style.display = 'none'
}else{
    // console.log('bor');
}