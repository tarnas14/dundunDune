## Dune - Battle for the spice

### Opis 
Ogólnie to widzę, że mój pomysł najbliżej ma do gry statkami na deadline-24.
Mocno inspirowałem się RTS'em Dune 2 <3

Gracz wciela się w ród, który ma zezwolenie na zbieranie przyprawy dla Imperatora.

Plansza o wymiarze x na y. Pola dzielą się na skały/twardy grunt i pustynię.
Oczywiście plansza generowana losowo, z losowym rozmieczeniem graczy (o tym dalej).

Gra dzieje się w czasie rzeczywistym, czas dzielimy na ticki. 1 tick może odpowiadać jakiejś jednostce czasu w świecie (1 dzień/godzina czy coś takiego). W naszym świecie jeden tick to np. 5 sekund.

Gra na być prosta, więc póki co nie zakładam możliwości tworzenia jednostek ofensywnych, za wyjątkiem usług fremenów (który spełniają w tej grze rolę wywiadu/sabotażystów/sprzedajnych dupasów za hajs xD)

### Rozpoczęcie gry

Gracz rozpoczyna z określoną liczbą baz rozmieszczonych losowo po planszy na twardym gruncie
Gracz rozpoczyna grę z określoną liczbą harvester'ów.
Gracz rozpoczyna grę z określoną liczbą ornithoper'ów. (albo bez żadnego, to taki bajer do kupienia raczej)
Gracz rozpoczyna grę z określoną liczbą przyprawy (aka hajs, który można przerobić na punkty wysyłając do imperatora, kupic ulepszenia, jednostki, lub użyć zdolności fremenów)

### Jednostki
* Harvester
    * Może poruszać się po planszy zarówno po piasku jak i twardym gruncie
    * Może zbierać przyprawę
    * Po dostarczeniu przyprawy do bazy następuje rozładowanie (które też może trwać ileś ticków)
* Ornithoper
    * Może wykrywać Shai-huludy
    * Może 'eskortować' harvestery. Po przypisaniu do harvestera to on dostarcza go na pole przyprawy (dużo szybciej) i do rafinerii oraz chroni przed zjedzeniem przez Shai-huluda
    * Może służyć do szybkiego latania po mapie i odkrywania złóż przyprawy (tym samym żadne ograniczenia terenu go nie dotyczą)
* Shai-hulud
    * Kontrolowany przez komputer
    * Może się poruszać tylko po piasku
    * Może być wykryty tylko przez ornithopery
    * Zjada harvestery
    * Jest przyciągany przez harvestery

### Punktacja
Punkty liczone są na podstawie ilości przyprawy wysłanej dla Imperatora.
Myślę, że kupione jednostki i ulepszenia można przeliczać w jakimś drobnym stopniu na punkty, ale głównie chciałbym, żeby dobrze balansować pomiędzy tym co wysłać do Imperatora a co zainwestować żeby mieć jeszcze więcej.

### Koniec gry

Po określonej liczbie ticków.

### API
* Pobieranie listy jednostek. Harvestery/Ornithoptery
    * Dla Harvester'ów 
        * Aktualny rozkaz
        * Aktualny stopień zapełniania przyprawą
    * Dla Ornithoper'ów
        * Aktualny rozkaz
* Rozkaz dla jednostki
    * Dla Harvester'ów 
        * Idz na wpółrzędne *x* *y*
        * Idz zbierać przyprawę na współrzędnych *x* *y*
    * Dla Ornithoper'ów
        * Przypisz do Harvestera
        * Idz do współrzędnych *x* *y* 
* Ulepszenia (za hajs)
    * Dla harvesterów
        * Szybkość poruszania się
        * Szybkość zbierania przyprawy
    * Dla ornithoperów
        * Szybkość poruszania się
        * Zasięg widzenia
    * Dla bazy (w sumie rafinerii :p)
        * Szybkość rozładowywania harvesterów
        * Zwiększenie liczby harvesterów, które równolegle można rozładowywać
* Dealowanie z Fremenami (za hajs)
    * Sabotaż (?) - chwilowe wyłączenie rafinerii w bazie przeciwnika czy coś takiego, nie wiem czy to ma sens, ale przeszkadzanie innym graczom zawsze na propsie :D
    * Wywiad (?) - odkrywanie niewidocznych fragmentów mapy
* Pobieranie mapy z odkrytymi aktualnie widocznymi elementami (pola przypraw, bazy, Shai-hulud'y) + ewentualnia mgła wojny tzn. kiedyś Orhithoper przeleciał gdzieś i znalazł pole z przyprawą więc może zostać, ale gracz nie powinien być zaskoczony jak się tam uda i już go nie będzie.
* Zakup jednostek w określonej bazie
    * Harvestery
    * Ornithopery
* Wysłanie przyprawy dla padyszacha imperatora 

## Inne pomysły
* Element walki? Jednostki atakujące?
