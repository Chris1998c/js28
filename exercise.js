function somma(...numeri) {
  return numeri.reduce((totale, numeri) => totale + numeri, 0);
}

const numeri = [1, 2, 3,5,4,3,5,6,12];


console.log(somma(...numeri));
