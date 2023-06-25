// Review

const reviews = [
  {
    id: 1,
    name: "Pratama Putra",
    job: "Fullstack Developer",
    img: "https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg",
    text: "Merasa benar-benar terbantu di tempat ini, saya seperti berada di rumah sendiri. Timnya full support dan bikin nyaman",
  },
  {
    id: 2,
    name: "Ayu Dewi",
    job: "Entepreneur",
    img: "https://img.freepik.com/premium-photo/beautiful-islamic-female-model-wearing-hijab-fashion-muslim-woman-sitting-sand-beach_326694-735.jpg",
    text: "Terima kasih Psyche-Basecamp karena sudah mensupport dan membantu saya mengatasi berbagai macam masalah psikologis yang saya alami, saya menjadi orang yang lebih baik daripada sebelumnya",
  },
  {
    id: 3,
    name: "Helena",
    job: "Data Analyst",
    img: "https://static.vecteezy.com/system/resources/previews/005/339/848/large_2x/beautiful-islamic-female-model-wearing-hijab-fashion-a-modern-wedding-dress-for-muslim-woman-sitting-in-the-sand-and-beach-portrait-an-asian-girl-model-using-hijab-having-fun-at-the-beach-with-trees-free-photo.jpg",
    text: "Begitu banyak yang saya dapatkan dari Psyche-Basecamp ini, semuanya membantu saya menjadi pribadi yang lebih baik lagi",
  },
  {
    id: 4,
    name: "Yoga Kurniawan",
    job: "Mahasiswa",
    img: "https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-noah.jpg",
    text: "Ternyata ada tempat seperti ini di Indonesia, selama ini saya mencari semacam tim support psikologis, tapi belum menemukannya",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// Clicked Review

// Smooth scrolling when clicking on a link
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav_menu_link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
