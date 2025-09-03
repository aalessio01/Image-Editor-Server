# Übungsaufgabe Image Editor Backend
Der Image Editor soll es dem Nutzer erlauben Bilder speichern und zu laden zu können.
Dafür wird ein Server benötigt der Bilddaten umgehen kann und Informationen über gespeicherte Bilder bereitstellt.
Als Server soll lokal NodeJS Express verwendet werden. Später wird dieser um eine Datenbank erweitert zB MongoDB oder PostgreSQL.
 
 
## Repository einrichten
Erstelle ein neues Repository und Project mit dem Namen "Image-Editor-Server".
Richte mindestens Typescript und Jest.
Die package.json sollte mindestens zwei Scripte angelegt "start-server" und "test".
Es sollte mindestens ein funktionierender Test mit Jest angelegt sein um zu zeigen dass jest korrekt eingerichtet wurde.

## Schritt 1 - NodeJs Express aufsetzen
Als erster Schritt soll mit express eine Server aufgesetzt werden. In diesem Schritt
geht es um die Grundlagen im Umgang mit dem Express Framework unter NodeJS.

### Folgendes sollte der Server können:
- der Server lässt sich über das Terminal starten und gibt eine kurze Info aus. Zb "Image-Editor-Server listening on localhost:3000"
- der Server läuft auf Port 3000
- der Server verfügt über einen Endpunkt GET localhost:3000/imageeditorapi/health
  -> gibt nur ein OK und den Statuscode 200 zurück
- der Server verfügt über einen Endpunkt GET localhost:3000/imageeditorapi/v1/imagenames
  -> hier genügt es eine Liste von Strings zurückzugeben zb als JSON
- der Server verfügt über einen Endpunkt POST localhost:3000/imageeditorapi/v1/imageeditorapi/imagenames
  -> hier soll ein JSON an den Server gesendet werden, der Server gibt das Objekt dann über die Console aus
- für alle drei Endpunkte soll ein Curl Befehl erstellt und dokumentiert werden

### Ressourcen:
- [curl tutorial](https://curl.se/docs/tutorial.html)
- [Einführung in Express/Node](https://developer.mozilla.org/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)