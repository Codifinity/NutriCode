```
📦NutriCode
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜AppContainer.tsx -  container dla aplikacji
 ┃ ┣ 📂screens
 ┃ ┃ ┣ 📜HomeScreen.tsx  -  Strona Glowna
 ┃ ┃ ┣ 📜LoginScreen.tsx  -  Ekran logowania / Rejestracji
 ┃ ┃ ┗ 📜Main.tsx  -  Nawigacja dolna po zalogowaniu
 ┃ ┗ 📜index.tsx  -  Nawigacja glowna (przed zalogowaniem)
 ┣ 📜App.tsx
 ┣ 📜firebase.ts  -  baza danych
 ┣ 📜prettier.config.js  -  config prettiera
 ┗ 📜tsconfig.json  -  config typescript
 ```

# NutriCode


NutriCode to aplikacja służąca do skanowania kodów kreskowych produktów w celu uzyskania dodatkowych informacji na ich temat. Aplikacja została wykonana w React native z użyciem expo-cli

## Jak uruchomić aplikację NutriCode?

Należy ściągnąć repo z kodem aplikacji i otworzyć terminal w lokalizacji z aplikacją. Następnie trzeba wykonać poniższe kroki: 

Pierwszy krok: 
```sh
npm install
```
Drugi krok:
```sh
npx expo start
```

Następnie terminal powinien wyświetlić kod QR, którego zeskanowanie umożliwi uruchomienie aplikacji na telefonie. (Komputer i telefon muszą być podłączone do tej samej sieci).

Zainstaluj aplikację expo na swoim telefonie. Aplikacja jest dostępna za darmo do pobrania w app store oraz w sklepie play. Po zainstalowaniu expo dla iOS wystarczy zeskanować kod przez wbudowaną aplikację aparatu. Jeśli chodzi o androida, włącz aplikację expo i zeskanuj kod QR w tej aplikacji. W obu przypadkach po wykonaniu tych czynności aplikacja NutriCode powinna się już uruchomić.