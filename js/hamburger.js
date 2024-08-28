const menutog = document.querySelector('header.container .menu input');
const nav = document.querySelector('header.container .navlist ul');

menutog.addEventListener('click', function(){
    nav.classList.toggle('slide')
})

// sebagai sakelar on off 'toggle'. menambahkan class slide pada navlist ketika element input atau checkbox di klik
// sehingga automatis mengaktifkan selektro navlis.slide{} yg mengtransformasi navbar ul menjadi dropdown