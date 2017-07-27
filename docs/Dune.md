## Dune - Battle for the spice

disclaimer:
`kasa`, `hajs` i `przyprawa` używane zamiennie

### Opis 
Ogólnie to widzę, że mój pomysł najbliżej ma do gry statkami na deadline-24.
Mocno inspirowałem się RTS'em Dune 2 <3

Gracz wciela się w ród, który ma zezwolenie na zbieranie przyprawy dla Imperatora.
//Q: nie wchodziłbym mocno w ród... bardziej w coś w stylu bandy przemytników czy czegoś, graczy potencjalnie może być sporo :D w ogóle wchodzenie w lore to na razie ekwilibrystyka

Plansza o wymiarze x na y. Pola dzielą się na skały, twardy grunt i pustynię.
Oczywiście plansza generowana losowo, z losowym rozmieszczeniem graczy (o tym dalej).

Gra dzieje się w czasie rzeczywistym, czas dzielimy na ticki. 1 tick może odpowiadać jakiejś jednostce czasu w świecie (1 dzień/godzina czy coś takiego). W naszym świecie jeden tick to np. 5 sekund.
//Q: może na razie po prostu 'tury'? :D

Gra ma być prosta, więc póki co nie zakładam możliwości tworzenia jednostek ofensywnych, za wyjątkiem usług fremenów (który spełniają w tej grze rolę wywiadu/sabotażystów/sprzedajnych dupasów za hajs xD)

### Rozpoczęcie gry

Gracz rozpoczyna z określoną liczbą baz rozmieszczonych losowo po planszy na twardym gruncie // graczy jest potencjalnie sporo, mapy mogą być jebne
Gracz rozpoczyna grę z określoną liczbą harvester'ów.
Gracz rozpoczyna grę z określoną liczbą ornithoper'ów. (albo bez żadnego, to taki bajer do kupienia raczej)
//Q: mało realistyczne żeby harverster sam zapierdalał przez pustynię... trzebaby zrobić grace period że przez pierwsze X ticków Shai-hulud jest miły i uprzejmy i nie atakuje zanim ludzie ogarną hajs żeby kupić thopter... ale wtedy worm jest niespójny :D trzeba im dać chociaż jeden ornithopter do ogarnięcia harvestera i kasy na tyle że jak wyjadą samym harversterem i worm je zeżre to żeby ich było stać na jeszcze jeden harvester
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
    * losowy spawn

### Punktacja
Punkty liczone są na podstawie ilości przyprawy wysłanej dla Imperatora.
Myślę, że kupione jednostki i ulepszenia można przeliczać w jakimś drobnym stopniu na punkty, ale głównie chciałbym, żeby dobrze balansować pomiędzy tym co wysłać do Imperatora a co zainwestować żeby mieć jeszcze więcej.

### Koniec gry

Po określonej liczbie ticków.
Albo jak wszystkich powybija Shai-hulud, keeper of balance, may his passage cleanse the world

### API
* Pobieranie listy jednostek. Harvestery/Ornithoptery
    * Dla Harvester'ów 
        * Aktualny rozkaz
        * Aktualny stopień zapełnienia przyprawą
    * Dla Ornithoper'ów
        * Aktualny rozkaz
* Rozkaz dla jednostki
    * Dla Harvester'ów 
        * Idz na wpółrzędne *x* *y*
        * Idz zbierać przyprawę na współrzędnych *x* *y*
        * Zbieraj przyprawę (tu i teraz)
    * Dla Ornithoper'ów
        * Podnieś harvester (znajdujący się na tych samych współrzędnych)
        * Opuść harvester na piach
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
    * Sabotaż (?) - chwilowe wyłączenie rafinerii w bazie przeciwnika czy coś takiego, nie wiem czy to ma sens, ale przeszkadzanie innym graczom zawsze na propsie :D // hmm nie wiem
    * Wywiad (?) - odkrywanie niewidocznych fragmentów mapy // niegłupie! instant action czy parę ticków?
    * Zlecenie zrobienia fake'owego pola przyprawy wrogiego dla innych graczy?
* Pobieranie mapy z odkrytymi aktualnie widocznymi elementami (pola przypraw, bazy, Shai-hulud'y) + ewentualnia mgła wojny tzn. kiedyś Orhithoper przeleciał gdzieś i znalazł pole z przyprawą więc może zostać, ale gracz nie powinien być zaskoczony jak się tam uda i już go nie będzie. // nie wiem czy mgła wojny to nie zbytnie uproszczenie, może po prostu dawać to co jest aktualnie widoczne?
* Zakup jednostek w określonej bazie
    * Harvestery
    * Ornithopery
* Wysłanie przyprawy dla padyszacha imperatora 
//randomowy pomysł: może zbieranie punktów zrobić tak że musisz się dostać w konkretne miejsce i tam do zsypu wrzucić przyprawę i dopiero wtedy Ci się licza punkty?

## Inne pomysły
* Element walki? Jednostki atakujące? // może kiedyś

### Techniczne problemy

wykrywanie kolizji? dwa thoptery/harvestery na tych samych współrzędnych to bum?

jak się takie gry balansuje? będzie trzeba napisać grę, bota jakiegoś bardzo łatwego i po prostu napierdalać grami jak pojebany żeby zobaczyć przy jakich współczynnikach jest najlepszy rozrzut? xD

jaki protokół komunikacyjny? myślałem o tcp jak w deadlinie na poczatek a potem API restowe + resthooki 
// w sumie jakby napisać warstwy przykładowe warstwy komunikacji w dowolnym języku to to nie ma większego znaczenia chyba
// najważniejsze żeby próg wejścia był niski, tak naprawdę

czy modelujemy 1:1 powstawanie przyprawy? z małymi stworzycielami, masą przeprywawową itp? xD
