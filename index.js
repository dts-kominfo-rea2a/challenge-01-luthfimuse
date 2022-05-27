// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let monicaColor = new Set();
monicaColor.add(["Yellow", "Pink", "White", "Purple"]);
//console.log(monicaColor)

let wendyColor = new Set();
wendyColor.add(["Blue", "Black", "Grey"]);

const monicaEducation = [
    { name: "SD 01",  city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" }
];
const wendyEducation = [
    { name: "SD 02",  city: "Jakarta",  graduate: "2010" },
    { name: "SMP 03", city: "Bogor",    graduate: "2013" },
    { name: "SMA 01", city: "Surabaya", graduate: "2016" },
    { name: "Universitas Maju", city: "Tangerang" }
];


// const monicaRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]; 
// const wendyRestaurant  = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]; 


const bento   = "Bento";
const sushi   = "Sushi";
const pancake = "Pancake";
const eggy    = "Eggy";
const tempura = "Tempura";
const padang  = "Padang";
const tteok   = "Tteok";
const katsu   = "Katsu";
const geprek  = "Geprek";


let monicaRestaurant = new Set();
monicaRestaurant.add(bento);
monicaRestaurant.add(sushi);
monicaRestaurant.add(pancake);
monicaRestaurant.add(eggy);
monicaRestaurant.add(tempura);
monicaRestaurant.add(bento);
monicaRestaurant.add(eggy);
monicaRestaurant.add(padang);
monicaRestaurant.add(tteok);
monicaRestaurant.add(sushi);
monicaRestaurant.add(sushi);

let wendyRestaurant = new Set();
wendyRestaurant.add(tempura);
wendyRestaurant.add(bento);
wendyRestaurant.add(sushi);
wendyRestaurant.add(pancake);
wendyRestaurant.add(padang);
wendyRestaurant.add(katsu);
wendyRestaurant.add(geprek);
wendyRestaurant.add(pancake);
wendyRestaurant.add(eggy);

// console.log(monicaRestaurant, wendyRestaurant)

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [...monicaColor],
    isHavePet: "Yes",
    education: monicaEducation,
    favoriteRestaurant: [...monicaRestaurant]
  };

  const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [...wendyColor],
    isHavePet: "No",
    education: wendyEducation,
    favoriteRestaurant: [...wendyRestaurant]

  };
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users[0] = firstUser;
users[1] = secondUser;

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};