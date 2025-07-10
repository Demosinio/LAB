let header = document.getElementById("header")
let main = document.getElementById("main")

document.getElementById("btn1").addEventListener("click", () => {
  header.innerHTML= `<h1>Z edukacji do biznesu – Twoja transformacja zaczyna się tutaj</h1>`
  main.innerHTML = `
                <h2>Dlaczego warto wybrać LAB?</h3>
                <div id="divy">
                    <div class="images">
                        <h3>Dostęp do materiałów i konsultacji</h3>
                        <img src="img/imageIndex.jpg" alt="Obrazek z laptopem" class="img1">
                    </div>
                    <div class="images">
                        <h3>Wsparcie w wejściu na rynek pracy</h3>
                        <img src="img/imageIndex2.jpg" alt="Obrazek z laptopem" class="img1">
                    </div>
                    <div class="images">
                        <h3>Nauka oparta na praktycznych projektach</h3>
                        <img src="img/imageIndex3.jpg" alt="Obrazek z laptopem" class="img1">
                    </div>
                    <div class="images">
                        <h3>Doświadczeni mentorzy</h3>
                        <img src="img/imageIndex4.jpg" alt="Obrazek z laptopem" class="img1">
                    </div>
                </div>
                <p>Otrzymujesz dostęp do aktualnych materiałów oraz wsparcie mentorów w trakcie całego kursu.</p>
  `
})


document.getElementById("btn2").addEventListener("click", () => {
  header.innerHTML= `<h1>Engineer LAB – buduj solidne fundamenty kariery</h1>`
  main.innerHTML = `
              <h2>Engineer LAB</h2>
            <p><strong>Czas trwania:</strong> 10 tygodni</p>
            <p>Program przygotowany z myślą o inżynierach chcących zdobyć kompetencje cyfrowe i zrozumieć nowoczesne procesy technologiczne.</p>
            <ul>
              <li>Podstawy automatyzacji i sterowania procesami</li>
              <li>Praca z systemami SCADA i IoT</li>
              <li>Wprowadzenie do języków skryptowych (Python, Bash)</li>
              <li>Symulacje cyfrowe i modelowanie inżynierskie</li>
              <li>Integracja sprzętu z oprogramowaniem</li>
              <li>Tworzenie aplikacji do zarządzania danymi technicznymi</li>
              <li>Cyberbezpieczeństwo w środowiskach przemysłowych</li>
              <li>Współpraca zespołowa i Agile w projektach technicznych</li>
              <li>Projekt praktyczny: prototyp rozwiązania dla branży</li>
            </ul>
            <a href="https://www.alx.pl/pl/jezyki-programowania/" id="zapis">Zapisz się</a>
  `
})

document.getElementById("btn3").addEventListener("click", () => {
  header.innerHTML= `<h1>AI LAB – odkryj świat sztucznej inteligencji</h1>`
  main.innerHTML = `
            <h2>AI LAB</h2>
            <p><strong>Czas trwania:</strong> 8 tygodni</p>
            <p>Intensywny kurs wprowadzający w świat sztucznej inteligencji i uczenia maszynowego – od podstaw po wdrożenie modeli.</p>
            <ul>
              <li>Wprowadzenie do AI – czym jest i jak działa</li>
              <li>Podstawy języka Python i bibliotek ML (NumPy, pandas)</li>
              <li>Uczenie maszynowe – algorytmy, modele, dane</li>
              <li>Sieci neuronowe i framework TensorFlow/Keras</li>
              <li>Tworzenie prostych chatbotów i systemów rekomendacyjnych</li>
              <li>Analiza danych i wizualizacje</li>
              <li>Etapy trenowania i testowania modeli</li>
              <li>Projekt zespołowy: rozwiązanie problemu za pomocą AI</li>
            </ul>
            <a href="https://www.alx.pl/pl/jezyki-programowania/" id="zapis">Zapisz się</a>
  `
})

document.getElementById("btn4").addEventListener("click", () => {
  header.innerHTML= `<h1>Frontend LAB – twórz nowoczesne interfejsy</h1>`
  main.innerHTML = `
            <h2>Frontend LAB</h2>
            <p><strong>Czas trwania:</strong> 10 tygodni</p>
            <p>Kurs skupiający się na tworzeniu nowoczesnych, estetycznych i responsywnych interfejsów użytkownika.</p>
            <ul>
              <li>Podstawy HTML5 i semantyki</li>
              <li>Nowoczesne CSS (Grid, Flexbox, animacje)</li>
              <li>JavaScript od podstaw do zaawansowania</li>
              <li>Tworzenie komponentów w React</li>
              <li>Integracja z API i dynamiczne dane</li>
              <li>Praca z bibliotekami UI (Tailwind, Bootstrap)</li>
              <li>Dostępność (WCAG) i UX/UI w praktyce</li>
              <li>Debugowanie i optymalizacja frontendu</li>
              <li>Projekt końcowy: interaktywny serwis webowy</li>
            </ul>
            <a href="https://www.alx.pl/pl/jezyki-programowania/" id="zapis">Zapisz się</a>
  `
})

document.getElementById("btn5").addEventListener("click", () => {
  header.innerHTML= `<h1>Software Developer LAB – od pomysłu do wdrożenia</h1>`
  main.innerHTML = `
          <h2>Software LAB</h2>
          <p><strong>Czas trwania:</strong> 12 tygodni</p>
          <p>Uczestnicy przechodzą przez intensywny cykl szkoleń, którego celem jest nauka tworzenia nowoczesnych aplikacji.</p>
          <ul>
            <li>Wstęp do programowania – myślenie jak developer</li>
            <li>Praca z kodem źródłowym – Git i dobre praktyki</li>
            <li>Tworzenie interfejsów użytkownika (HTML, CSS, JS)</li>
            <li>Programowanie aplikacji webowych (React, Vue)</li>
            <li>Backend w praktyce – API, bazy danych</li>
            <li>Wzorce projektowe i architektura aplikacji</li>
            <li>Testowanie oprogramowania</li>
            <li>Praca w metodykach Agile i SCRUM</li>
            <li>Cyberbezpieczeństwo w codziennej pracy</li>
            <li>Projekt grupowy – produkt dla realnego klienta</li>
          </ul>
          <a href="https://www.alx.pl/pl/jezyki-programowania/" id="zapis">Zapisz się</a>
  `
})

document.getElementById("btn6").addEventListener("click", () => {
  header.innerHTML= `<h1>Backend LAB – twórz solidne fundamenty aplikacji</h1>`
  main.innerHTML = `
          <h2>Backend LAB</h2>
          <p><strong>Czas trwania:</strong> 10 tygodni</p>
          <p>Kurs koncentruje się na nauce tworzenia bezpiecznych i wydajnych aplikacji po stronie serwera.</p>
          <ul>
            <li>Podstawy architektury backendu</li>
            <li>Programowanie w Node.js i Express</li>
            <li>Tworzenie i dokumentowanie REST API</li>
            <li>Praca z bazami danych (SQL i NoSQL)</li>
            <li>Bezpieczeństwo aplikacji backendowych</li>
            <li>Autoryzacja i uwierzytelnianie (JWT, OAuth)</li>
            <li>Testowanie i debugowanie backendu</li>
            <li>Skalowanie i deployment</li>
            <li>Projekt końcowy: pełna aplikacja z API</li>
          </ul>
          <a href="https://www.alx.pl/pl/jezyki-programowania/" id="zapis">Zapisz się</a>
  `
})