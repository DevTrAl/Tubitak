const words = [
    { word: "Eldiri", description: "Oğlak derisi" },
    { word: "Eteklik böz", description: "Etek yapmak için kullanılan kumaş" },
    { word: "Xuln", description: "Değişik renklerde olan bir ipek" },
    { word: "Kaçaç", description: "Bir in ipeklisi" },
    { word: "Kedüklük", description: "Yağmurluk yapmak için malzeme" },
    { word: "Kemei", description: "Pamuktan yapılan şeritli bir kumaş" },
    { word: "Bertü", description: "Üst kısma giyilen elbise" },
    { word: "Bork", description: "Başa giyilen şey" },
    { word: "Bürünçük", description: "Burnu ve burundan aşağıyı örten yarım peçe" },
    { word: "Cekrek", description: "Kölelerin giydiği yünden yapılmış" },
    { word: "Cengü", description: "Küçük hırka" },
    { word: "Didim", description: "Gerdek gecesi gelinin giydiği taç" },
    { word: "Kerim", description: "Nakış kumaş" },
    { word: "Kuyka", description: "Deri" },
    { word: "Etek", description: "Etek" },
    { word: "Loatay", description: "Ayakkabı, edik, süzme" },
    { word: "Mindatu", description: "İpek" },
    { word: "Imek", description: "Kuzu derisinden kürk" },
    { word: "Sugri", description: "Deri" },
    { word: "Sulagu", description: "Bir Çin dokuma türünden elde edilen kürk" },
    { word: "Agi", description: "İpek kumaş" },
    { word: "Âl", description: "Turuncu renginde bir kumaş" },
    { word: "Ay", description: "Turuncu renkli ipek" },
    { word: "Barçin", description: "İpekli kumaş, ipek" },
    { word: "Böz", description: "Bez" },
    { word: "Buggak", description: "Devenin ayak derisi" },
    { word: "Çarukluk", description: "Ayakkabı yapmak için hazırlanan deri" },
    { word: "Çaydam", description: "Yağmurluk yapmaya veya yatak doldurmaya yarayan ince bir keçe" },
    { word: "Çınaxsi", description: "İpeği’de nakış" },
    { word: "Çit", description: "Üzerine nakışlar basılmış bir ipek" },
    { word: "Ed-ed", description: "Kumaş vb. imal edilen her şey" },
];

// Kartları 3 gruba ayır
const group1 = words.slice(0, 10);
const group2 = words.slice(10, 20);
const group3 = words.slice(20, 30);

function createCards(containerId, cards) {
    const container = document.querySelector(containerId);

    // Kartları sırayla oluştur ve ekle
    cards.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("cardg");
        card.style.setProperty("--order", index);

        // İçerik
        card.innerHTML = `
            <h3>${item.word}</h3>
            <p>${item.description}</p>
        `;

        container.appendChild(card);
    });

    // Kart sıralamasını düzenle
    let topIndex = 0;

    function arrangeCards() {
        const cards = container.querySelectorAll(".cardg");
        cards.forEach((card, index) => {
            const order = (index - topIndex + cards.length) % cards.length;
            card.style.setProperty("--order", order);
            card.style.zIndex = cards.length - order;
        });
    }

    // Kart sırasını değiştirmek için tıklama etkinliği
    container.addEventListener("click", () => {
        topIndex = (topIndex + 1) % cards.length;
        arrangeCards();
    });

    arrangeCards();
}

// Her grup için kartları oluştur
createCards("#container1", group1);
createCards("#container2", group2);
createCards("#container3", group3);
