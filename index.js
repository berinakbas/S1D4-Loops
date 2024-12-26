function tutarHesapla(isimler) {
  let tekrar = 0;

  const karakterler = ['a', 'h', 'm', 'e', 't'];
  for (let i = 0; i < isimler.length; i++) {
    let isim = isimler[i].toLowerCase();

    for (let h = 0; h < karakterler.length; h++) {
      for (let k = 0; k < isim.length; k++) {
        if (isim.charAt(k) === karakterler[h]) {
          tekrar++;
        }
      }
    }
  }
  return tekrar * 1000;
}

module.exports = tutarHesapla;
