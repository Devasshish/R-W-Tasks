// object
var products = [
    {
        productName: "Monster Energy Can",
        productDescription: "A powerful energy drink featuring a bold, intense flavor and a strong dose of revitalizing ingredients. Designed for people with active lifestyles, it provides long-lasting energy and a satisfying taste, perfect for staying alert, motivated, and energized through demanding activities or long days.",
        primaryColor: "Black",
        secondaryColor: "Green",
        imageSrc: "monster.png"
    },
    {
        productName: "Coca Cola Bottle",
        productDescription: "A classic and iconic cola beverage loved worldwide for its smooth sweetness, balanced fizz, and instantly recognizable taste. Perfectly chilled, it delivers refreshing enjoyment whether paired with meals, shared with friends, or enjoyed on its own during any moment of the day.",
        primaryColor: "#691814",
        secondaryColor: "White",
        imageSrc: "cocacola.png"
    },
    {
        productName: "Sprite Bottle",
        productDescription: "A clean, crisp lemon-lime soda known for its bright, uplifting flavor and refreshing carbonation. Ideal for quenching thirst on warm days, Sprite offers a light, energizing sip that feels both cooling and revitalizing, making it a go-to drink for any refreshing break.",
        primaryColor: "Green",
        secondaryColor: "Yellow",
        imageSrc: "sprite.png"
    },
    {
        productName: "Pepsi Bottle",
        productDescription: "A bold, smooth cola drink with a slightly sweeter profile and lively fizz. Pepsi provides a refreshing boost in every sip, making it perfect for pairing with snacks, meals, or simply enjoying on its own when you want a flavorful, satisfying cola experience.",
        primaryColor: "#A12817",
        secondaryColor: "white",
        imageSrc: "pepsi.png"
    },
    {
        productName: "Red Bull Can",
        productDescription: "A globally recognized energy drink crafted to enhance focus, alertness, and performance. Its unique, slightly tangy flavor combined with energizing ingredients delivers a quick, refreshing boost, making it ideal for busy days, workouts, late-night tasks, or any moment requiring extra energy.",
        primaryColor: "#143471",
        secondaryColor: "Silver",
        imageSrc: "redbull.png"
    },
];
// DOM 
var main = document.querySelector("main");
var h2 = document.querySelector("h2");
var p = document.querySelector("p");
var btn = document.querySelector("button");
var img = document.querySelector("img");
var pre = document.querySelector(".prev");
var next = document.querySelector(".next");
var index = 0;
function showSlide(i) {
    if (i < 0) {
        index = products.length - 1;
    }
    else if (i > products.length - 1) {
        index = 0;
    }
    else {
        index = i;
    }
    var product = products[index];
    h2.textContent = product.productName;
    h2.style.color = product.secondaryColor;
    main.style.backgroundColor = product.primaryColor;
    p.textContent = product.productDescription;
    btn.style.backgroundColor = product.secondaryColor;
    img.src = "./imgs/" + product.imageSrc;
}
function prevSlide() {
    showSlide(index - 1);
}
function nextSlide() {
    showSlide(index + 1);
}
// init
showSlide(index);
// evennt listener
pre.addEventListener("click", function () { return prevSlide(); });
next.addEventListener("click", function () { return nextSlide(); });
