# MPK-apk-BD-P4-MRPS
Projekt Aplikacji Webowej dla Miejskiego Przedsiębiorstwa Komunikacyjnego realizowany w ramach zajęć projektowych przedmiotu "Bazy Danych".

prezentacja panelu zarządzania:
https://drive.google.com/file/d/1SfhkYvd7QHeT1RBfc8vYMLINcuLeF0JD/view?usp=sharing

# Sposób uruchomienia
1. Jeśli na komputerze jest zainstalowany serwer MSQL8.0 usuchom go jako użytkownik root, na local host,port 3301,bez hasła, oraz stwórz poleceniem CREATE SCHEMA mpkdb, pusty schemat bazy danych.
   
2. Jeśli bazy nie ma na komputerze skopiować plik pustej bazy z dostarocznego nośnika danych w lokalizacji dysku C://.
   
3. Otworzyć wiersz poleceń i wpisać "C://baza/bin/mysqld"
   
4. Otworzyć plik projektu "MPK-apk-BD-P4-MRPS" w programie Visual Studio Code
   
5. Uruchomić 2xwiersz polecenia w folderze projektu
   
6. W pierwszym wierszu poleceń wpisywać kolejno:
   "npm i"-(tylko jeśli pobrane z github)
   "cd server",
   "npm run resetdb",
   "npm start"
   
7. W pierwszym wierszu poleceń wpisywać kolejno:
   "npm i"-(tylko jeśli pobrane z github)
   "cd client"
   "npm start"




