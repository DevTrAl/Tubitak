
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
          { word: "Balık", description: "Şehir veya yerleşim yeri; genellikle bir boyun geleneksel merkezini ifade eder." },
          { word: "Takı", description: "Düğün veya törenlerde gelin ve damada takılan hediyeler." }, 
          { word: "İye", description: "Koruyucu ruh." }, 
          
  
                        
          ];
      
          const words2 = [
            { word: "Ongun", description: "Boyların kutsal kabul ettiği semboller; bir nevi totem." },
            { word: "Yurt", description: "Toprak ve yaşam alanı; geleneksel olarak bir ailenin veya boyun bağlı olduğu yer." },            
            { word: "İye", description: "Koruyucu ruh; Türk inanç sisteminde doğa ve yerin kutsallığına dair bir kavram." },           
            { word: "Takı", description: "Düğün veya törenlerde gelin ve damada takılan hediyeler." }, 
            { word: "Köç", description: "Göçebe yaşam tarzıyla ilgili gelenekler." },
                        
          ];
        const words3 = [
         
          { word: "Barka", description: "Kurban kesme veya adak verme ritüelleri." },
          { word: "Uruk", description: "Soy, boy veya kabile anlamına gelir; soy bağlarına dayalı gelenekleri ifade eder." },
          { word: "Budun", description: "Toplum, millet veya halk; bir arada yaşayan insanların geleneklerine vurgu yapar." },
          { word: "Kut", description: "Devletin veya bireyin ilahi bir güçten aldığı kutsallık. Geleneksel Türk inanç sisteminde önemli bir kavram." },  
          { word: "Süzük", description: "Eğlence ve şenlik anlamına gelir; sosyal geleneklerle bağlantılıdır." },
          ];
      
          // Kartları oluşturma fonksiyonu
          function createCards(containerId, words) {
              const container = document.getElementById(containerId);
              
              words.forEach((item, index) => {
                  const card = document.createElement("div");
                  card.classList.add("cardg");
                  card.style.setProperty("--order", index);
      
            card.setAttribute("data-sound", `sounds/gelenek/${item.word.toLowerCase()}.mp3`);
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