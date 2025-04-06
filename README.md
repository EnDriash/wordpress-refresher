Jak to działą?

Wstepne requirements:
najpierw zainstaluj NVM
Node Version Menagera
https://github.com/coreybutler/nvm-windows
po instalacji sprawdź
nvm -v
nastepnie zainstaluj versje noda
nvm install 20
nvm use 20
od teraz uzywasz 20 wersji node.js
zobacz wersje npm
npm -v
wejdz do tego katalogu i
npm i

Doatkowo dla wygody nie uzywaj nigdy FileZilli zainstaluj sobie WinSCP ktory nie ma wkurzajacych pop-upow i potwierdzen do uploadu plikow.

Główne ustawienia
nastepnie główna część 
jesli pracujesz nad jakims konkretnym url to musisz go podmienic w pliku .env DOMAIN

WAZNE:
skrypt uzywa pupeeter-core ktory steruje przegladarka dlatego tez waznym jest zeby uruchomic np. chrome w wersji z debug mode i otworzyc port 9222 ktory umozliwi odswiezanie tabem. ten port otwiera sie domyslnie przy starcie przegladarki wiec jesli masz otwarte juz okna musisz je zamknac uruchomic chroma w wersji debug:

bash
``` "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222  ```

lub kliknij w przygotowany plik skryptowy .bat (pamietaj by zmienic   --new-window "START URL OF YOUR WP PAGE")
start-dev.bat


nastepnie...
nalezy zapewne zalogowac sie do panelu admina wordpress a pozniej przejsc na podglad strony nad ktora pracujesz
teraz za kazdym razem gdy zapiszesz pliki lokalnie w folderze zobaczysz logi na dzialajcym skrypcie np.
✅ Odświeżono: https://XXX.pl/homepage/# wordpress-refresher
