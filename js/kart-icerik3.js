
			function playAudio() {
				const audio = document.getElementById("audio");
				audio.play();
			}
      var audio = document.getElementById("audio");
      var buttonText = document.getElementById("button-text");

      function toggleAudio() {
          if (audio.currentTime === 0 || audio.paused) {
              audio.play(); // Ses dosyasını başlat
              buttonText.textContent = "⏸️ Ses Durdur"; // Buton metnini değiştir
          } else {
              audio.pause(); // Ses dosyasını durdur
              buttonText.textContent = "🔊 Ses Dinle"; // Buton metnini değiştir
          }
      }
      const words1 = [
        { word: "Eldiri", description: "Oglak derisi." },
        { word: "Eteklik böz", description: "Etek yapmak icin kullanalan kumas." },
        { word: "Xuln", description: "Degisik renklerde olan bir ipek." },
        { word: "Kaçaç", description: "Bir in ipeklisi." },
        { word: "Kedüklük", description: "Yagmurluk yapmak için malzeme." },
        { word: "Kemei", description: "Pamuktan yapilan şeritli bir kumaş." },
                        
          ];
      
          const words2 = [
        { word: "Bork", description: "Başa giyilen şey." },
        { word: "Bürünçük", description: "Burnu ve burundan aşağıyı örten yarım peçe." },
        { word: "Cekrek", description: "Kölelerin giydiği yünden yapılmış." },
        { word: "Cengü", description: "Küçük hırka." },
        { word: "Didim", description: "Gerdek gecesi gelinin giydiği taç." },
        { word: "Kerim", description: "Nakıs kumaş." },
        { word: "Kuyka", description: "Deri." },
                        
          ];
        const words3 = [
        { word: "Loatay", description: "Etik/Etüke Ayakkab, edik, sizme." },
        { word: "Mindatu:", description: "Ipek." },
        { word: "Sulagu", description: "Bir Çin dokuma türünden elde edilen kürk." },
        { word: "Agi", description: "İpek kumas." },
       
          ];
      
          // Kartları oluşturma fonksiyonu
          function createCards(containerId, words) {
              const container = document.getElementById(containerId);
              
              words.forEach((item, index) => {
                  const card = document.createElement("div");
                  card.classList.add("cardg");
                  card.style.setProperty("--order", index);
      
            card.setAttribute("data-sound", `sounds/giyim/${item.word.toLowerCase()}.mp3`);
                  // İçerik
                  card.innerHTML = `
                      <h3>${item.word}</h>
                 <p>${item.description}</p>
                  `;
                  
                  container.appendChild(card);
              });
          }
      
          // Kartları oluştur
          createCards("card-container-1", words1);
          createCards("card-container-2", words2);
        createCards("card-container-3", words3);
      
          // Kart sıralamasını düzenle
          let topIndex1 = 0;
          let topIndex2 = 0;
        let topIndex3 = 0;
      
          function arrangeCards(containerId, topIndex) {
              const cards = document.querySelectorAll(`#${containerId} .cardg`);
              cards.forEach((card, index) => {
                  const order = (index - topIndex + cards.length) % cards.length;
                  card.style.setProperty("--order", order);
                  card.style.zIndex = cards.length - order;
              });
          }
        // Ses çalma fonksiyonu
        function playSound(card) {
          const soundPath = card.getAttribute("data-sound");
          if (soundPath) {
            const audio = new Audio(soundPath);
            audio.play();
          }
        }
          // Kart sırasını değiştirmek için tıklama etkinliği
          document.getElementById("card-container-1").addEventListener("click", (event) => {
          const card = event.target.closest(".cardg");
          if (card) {
              playSound(card); // Ses çal
              topIndex1 = (topIndex1 + 1) % words1.length;
              arrangeCards("card-container-1", topIndex1);
          }
          });
      
          document.getElementById("card-container-2").addEventListener("click", (event) => {
          const card = event.target.closest(".cardg");
          if (card) {
            playSound(card); // Ses çal
            topIndex2 = (topIndex2 + 1) % words2.length;
            arrangeCards("card-container-2", topIndex2);
          }
          });
        document.getElementById("card-container-3").addEventListener("click", (event) => {
          const card = event.target.closest(".cardg");
          if (card) {
            playSound(card); // Ses çal
            topIndex3 = (topIndex3 + 1) % words3.length;
            arrangeCards("card-container-3", topIndex3);
          }
          });
      
          // Kartları düzenle
          arrangeCards("card-container-1", topIndex1);
          arrangeCards("card-container-2", topIndex2);
        arrangeCards("card-container-3", topIndex3);