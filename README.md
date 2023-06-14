# MPK-apk-BD-P4-MRPS
Projekt Aplikacji Webowej dla Miejskiego Przedsiębiorstwa Komunikacyjnego realizowany w ramach zajęć projektowych przedmiotu "Bazy Danych".

prezentacja panelu zarządzania:
https://drive.google.com/file/d/1SfhkYvd7QHeT1RBfc8vYMLINcuLeF0JD/view?usp=sharing

# Sposób uruchomienia
1. Jeśli na komputerze jest zainstalowany serwer MSQL8.0 usuchom go i zaloguj się jako użytkownik root.
2. Po zalogowaniu stwórz pustą baze danych pod nazwą "mpkdb" (create database mpkdb;).
   
3. Jeśli bazy nie ma na komputerze skopiować plik pustej bazy z dostarocznego nośnika danych (baza) do lokalizacji dysku C://.
   
4. Otworzyć wiersz poleceń i wpisać "C://baza/bin/mysqld"
   
5. Otworzyć plik projektu "MPK-apk-BD-P4-MRPS" w programie Visual Studio Code
   
6. Uruchomić 2xwiersz polecenia w folderze projektu
   
7. W pierwszym wierszu poleceń wpisywać kolejno:
   "cd server",
   "npm i"-(tylko jeśli pobrane z github)
   "npm run resetdb",
   "npm start"
   
9. W pierwszym wierszu poleceń wpisywać kolejno:
   "cd client"
   "npm i"-(tylko jeśli pobrane z github)
   "npm start"




