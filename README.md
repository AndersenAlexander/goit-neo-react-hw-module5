# Movie Search App

Aceasta este o aplicație web de căutare a filmelor, construită folosind **React** și **Vite**. Aplicația interacționează cu **The Movie Database (TMDB) API** pentru a afișa filmele în trend, a căuta filme după titlu și a oferi detalii complete despre fiecare film, inclusiv distribuția și recenziile.

## Funcționalități

- **HomePage:** Afișează lista de filme în trend (popularitate zilnică) preluate din TMDB.
- **MoviesPage:** Permite utilizatorilor să caute filme după cuvinte cheie. Rezultatele căutării sunt afișate sub formă de listă.
- **MovieDetailsPage:** Oferă detalii complete despre un film selectat, inclusiv:
  - Detalii despre film (titlu, descriere, rating, genuri etc.)
  - **Cast:** Informații despre actorii care apar în film (rute imbricate).
  - **Reviews:** Recenzii ale filmului (rute imbricate).
- **NotFoundPage:** Afișează un mesaj de eroare și un link către pagina principală pentru rutele neexistente.
- **Navigație:** Un meniu simplu ce permite navigarea între pagina de start și pagina de căutare.

## Tehnologii Folosite

- **React** – pentru construirea interfeței utilizator.
- **Vite** – pentru configurarea și rularea rapidă a aplicației.
- **React Router** – pentru gestionarea navigării și a rutelor.
- **Axios** – pentru efectuarea cererilor HTTP către TMDB API.
- **CSS Modules** – pentru stilizarea componentelor, menținându-le izolate.

## Instalare și Configurare

1. **Clonează repository-ul:**
   ```bash
   git clone https://github.com/numele-tau-utilizator/goit-neo-react-hw-module5.git
   cd goit-neo-react-hw-module5
