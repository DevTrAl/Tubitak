
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
        { word: "Aş Tanrı", description: "Eski Türklerde, yemeklerin bolluğunu ve bereketini sağlayan manevi güç." },
        { word: "Tengri Aş", description: "Gökyüzü Tanrısı’nın kutsadığı yiyecek, kutsal kabul edilen yemekler." },
        { word: "Kut Aşı", description: "Tanrı’dan gelen bereketle pişirilen yiyecek, kutsal yemek." },           
          ];
      
          const words2 = [
            { word: "Aş İmanı", description: "Türklerin yemek ve sofralarına duyduğu saygı ve minnettarlık duygusu." },
            { word: "Beylik Çorbası", description: "Liderlere sunulan, özel törenlerde hazırlanan çorba." },
            { word: "Kara Aş", description: "Kötü dönemlerde, kıtlık zamanlarında yapılan basit yemekler." },
                        
          ];
        const words3 = [
          { word: "Ulu Sofra", description: "Büyük ziyafet sofraları, Tanrı’ya şükran göstermek amacıyla kurulan sofralar." },
          { word: "Şaman Helvası", description: "Şaman ayinlerinde kullanılan kutsal tatlı veya yiyecek." },
          { word: "İyilik Yemişi", description: "Erdemli yaşamı simgeleyen, doğal ve sağlıklı yiyecekler." },
          { word: "Gök Tat", description: "Gökyüzü ile ilişkilendirilen, özel ve değerli kabul edilen tatlar veya yiyecekler." },
          ];
      
          // Kartları oluşturma fonksiyonu
          function createCards(containerId, words) {
              const container = document.getElementById(containerId);
              
              words.forEach((item, index) => {
                  const card = document.createElement("div");
                  card.classList.add("cardg");
                  card.style.setProperty("--order", index);
      
            card.setAttribute("data-sound", `sounds/yemek/${item.word.toLowerCase()}.mp3`);
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