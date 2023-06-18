# MPK-apk-BD-P4-MRPS
Projekt Aplikacji Webowej dla Miejskiego Przedsiębiorstwa Komunikacyjnego realizowany w ramach zajęć projektowych przedmiotu "Bazy Danych".


# Sposób uruchomienia

1. Jeśli na komputerze jest zainstalowany serwer MSQL usuchom go i zaloguj się jako użytkownik root.
2. Po zalogowaniu stwórz pustą baze danych pod nazwą "mpkdb" (create database mpkdb;).
   
3. Jeśli bazy nie ma na komputerze skopiować plik pustej bazy z dostarocznego nośnika danych (baza) do lokalizacji dysku C://.
   
4. Otworzyć wiersz poleceń i wpisać "C://baza/bin/mysqld"
   
5. Otworzyć plik projektu "MPK-apk-BD-P4-MRPS" w programie Visual Studio Code

   *jeśli pobrano repozytorium z github
   W folsedrze MPK-apk-BD-P4-MRPS/server stworzyć plik .env
   i wypełnić danymi:</br>
   DB_USER=root </br>
   DB_PASSWORD=</br>
   DB_DATABASE=mpkdb</br>
   DB_HOST=localhost</br>
   

   
7. Uruchomić 2xwiersz polecenia w folderze projektu
   
8. W pierwszym wierszu poleceń wpisywać kolejno:</br>
   "cd server",</br>
   "npm i"-(tylko jeśli pobrane z github),</br>
   "npm run resetdb",</br>
   "npm start"
   
9. W pierwszym wierszu poleceń wpisywać kolejno:</br>
   "cd client"</br>
   "npm i"-(tylko jeśli pobrane z github)</br>
   "npm start"</br>




