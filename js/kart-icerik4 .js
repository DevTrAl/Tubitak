
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
      
       
          { word: "Tanrı", description: "Türklerin eski inançlarında en yüce varlık. Tanrı kelimesi, Türklerin gökyüzüyle ilişkilendirilen Tanrı’sıdır." },
          { word: "Tengri", description: "Eski Türk inançlarında Gökyüzü Tanrısı. Doğada her şeyi yaratan yüce güç." },
          { word: "Kut", description: "Tanrı'dan gelen kutsal güç, başarı ve iyilik. Tanrı tarafından verilen lütuf ve manevi güç." },
          
          
                        
          ];
      
          const words2 = [
            { word: "İman", description: "İnanç, özellikle Tanrı'ya ya da bir dine duyulan güven ve inanç." },
            { word: "Beylik", description: "Güçlü ve erdemli yönetici, eski Türk inançlarında Tanrı tarafından kutsanmış kişi." },
            { word: "Kara (Kara Tengri)", description: "Kötü Tanrı veya olumsuz güç, eski Türk inançlarında negatif bir figür olarak görülür." },
           
            
                        
          ];
        const words3 = [

          { word: "Ulu", description: "Yüce, kutsal, özellikle Tanrı’nın yüceliğini anlatan bir sıfat." },
          { word: "Şaman", description: "Eski Türk inançlarında, ruhlarla iletişim kurabilen, hastalıkları tedavi edebilen ruhani lider." },
          { word: "İyilik", description: "Doğru yolu takip etmek, Tanrı'nın emirlerine uymak, erdemli olmak." },
          { word: "Gök Tanrı", description: "Eski Türklerin en yüksek Tanrı inancı, gökyüzüyle bağlantılı yüce Tanrı." },
          ];
      
          // Kartları oluşturma fonksiyonu
          function createCards(containerId, words) {
              const container = document.getElementById(containerId);
              
              words.forEach((item, index) => {
                  const card = document.createElement("div");
                  card.classList.add("cardg");
                  card.style.setProperty("--order", index);
      
            card.setAttribute("data-sound", `sounds/inanç/${item.word.toLowerCase()}.mp3`);
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