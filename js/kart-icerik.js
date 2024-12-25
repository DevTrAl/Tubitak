
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
        { word: "Otağ", description: "Ailenin yaşadığı büyük çadır, evin merkezi." },
        { word: "Ev", description: "Yuva, aile bireylerinin yaşadığı yer. Türklerde ev ve aile sıkça eş anlamlı kullanılmıştır." },
        { word: "Aile", description: "Çekirdek aileyi ifade eder. Divan’da bu kelime açıkça geçmez, ancak aile kavramı başka terimlerle ifade edilmiştir." },
        { word: "Uluğ", description: "Büyük, ailenin büyüğü (genelde dede veya baba)." },
        { word: "Eçe", description: "Anne, evin kadını." },
        { word: "Oğul", description: "Ailenin erkek çocuğu." },
                        
          ];
      
          const words2 = [
          { word: "Kız", description: "Ailenin kız çocuğu." },
        { word: "Ata", description: "Baba veya dede; ailenin reisi." },
        { word: "Ana", description: "Anne. Türklerde ailede önemli bir yer tutar." },
        { word: "Karı", description: "Kadın, eş anlamında kullanılır." },
        { word: "Er", description: "Erkek, koca veya aile reisi." },
        { word: "Evlü", description: "Evli, aile kurmuş kişi anlamına gelir." },
        { word: "Uruk", description: "Soy, nesil, aileden gelen kişiler." },
        { word: "Er", description: "Erkek, koca veya aile reisi." },
                        
          ];
        const words3 = [
        { word: "Budun", description: "Kabile, ailelerin birleşiminden oluşan topluluk." },
        { word: "Töre", description: "Aile içindeki düzeni ve ilişkileri belirleyen gelenek ve kurallar." },
        { word: "Köngül", description: "Sevgi, aile içindeki bağlılığı ve duygusal bağı ifade eder." },
        { word: "İnik", description: "Küçük kardeş ya da aile içindeki küçük birey." },
        { word: "Kağan", description: "Ailenin lideri veya soyun başındaki kişi (ailelerin birleşimi bağlamında)." },
        { word: "Yurt", description: "Ailelerin kurduğu yaşam alanı, aynı zamanda memleket anlamı taşır." },
        { word: "İş", description: "Aile bireylerinin yaptığı işler, genelde ev içindeki görev dağılımını ifade eder." },
          ];
      
          // Kartları oluşturma fonksiyonu
          function createCards(containerId, words) {
              const container = document.getElementById(containerId);
              
              words.forEach((item, index) => {
                  const card = document.createElement("div");
                  card.classList.add("cardg");
                  card.style.setProperty("--order", index);
      
            card.setAttribute("data-sound", `sounds/Aile/${item.word.toLowerCase()}.mp3`);
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