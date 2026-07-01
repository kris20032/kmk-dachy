# HANDOVER - redesign demo KMK Dachy pod wzór klienta (dachywojciechowscy.pl)

> Utworzono: 2026-07-01 ~20:00. Powód: limit tygodniowy się kończył, przerwano w trakcie researchu wzoru.
> To zadanie WIELOSESYJNE. Wznów wg sekcji "RESUME PROMPT" na dole. Nie gub żadnego kontekstu poniżej.

---

## 1. SYTUACJA (co się wydarzyło)
- Klient: **KMK Dachy**, os. kontaktowa **Piotr** (właściciel), tel **694 556 912**. Handlowiec: **Szymon** (Szymon Kluska). Firma dekarska.
- Dziś (01.07) zbudowałem SZYBKIE pierwsze demo (rodzina "fachowcy", biblioteka imglib/dachy) na cold call bo Szymon miał spotkanie za 15 min. Link ŻYJE: **https://kris20032.github.io/kmk-dachy/** (repo **kris20032/kmk-dachy**, Marceli dodany jako współpracownik).
- **Spotkanie poszło ŚWIETNIE.** Szymon (WhatsApp): "500 przed 500 po", "Rozpierdalamy system". Klient jest na TAK.
- **Klient dał WZÓR i nową prośbę** (przez Szymona): stronę **https://dachywojciechowscy.pl** - "zrobisz żeby te demo wyglądało jak to, bo on chce taki efekt, chce zobaczyć na demo że jest tak podobne".
- **Krzysztof doprecyzował cel (WAŻNE):** demo ma nie tylko WYGLĄDAĆ podobnie do wzoru, ale też **DZIAŁAĆ - pełne UI/UX**, i być **spersonalizowane pod KMK Dachy**. Ma to być **"mistrzostwo świata"** - najlepsze nasze demo. Krzysztof gotów dać KAŻDE pozwolenie (Chrome, itp.) na żądanie.

## 2. CEL (definicja "gotowe")
Przebudowane demo KMK Dachy, które:
1. **Wygląda** jak dachywojciechowscy.pl (jasny, nowoczesny, niebieski akcent, ta sama logika sekcji) - klient ma ROZPOZNAĆ ten efekt.
2. **Działa** - dopracowane UI/UX: płynna nawigacja, responsywność (mobile!), hover/animacje z umiarem, klikalna galeria (lightbox), działające CTA/telefon, formularz, mapa.
3. **Spersonalizowane** pod KMK Dachy (realne dane z researchu - patrz sekcja 4), NIE generyk.
4. Przechodzi predeploy_check + weryfikację (3x200 + wygląd), deploy na TEN SAM repo kmk-dachy (update, ten sam link).
5. Po deployu: zaktualizować kartę CRM (komentarz do Szymona) + LEADY-DEMA.md.

## 3. WZÓR: dachywojciechowscy.pl - PEŁNA ANALIZA (nie trzeba znów fetchować)
- **Stack wzoru:** WordPress + Elementor 4.0.9. Styl: **nowoczesny, jasny, czysty, korporacyjny ale ciepły.**
- **Kolory marki (z kodu):** główny akcent **niebieski #066aab**, drugi akcent **bursztyn/pomarańcz #ffab00**, tło białe/jasnoszare, tekst ciemny. (Reszta hexów z curl to domyślne swatche Gutenberga - ignorować.) DOKŁADNY odcień niebieskiego warto potwierdzić wizualnie po podłączeniu Chrome.
- **Struktura sekcji (od góry):**
  1. **HERO** - zdjęcie dachu/pracy + hasło "Najlepszy wybór dla Twojego domu" + CTA "Zobacz ofertę" i "Zapytaj o wycenę". Nagłówek nawiązuje do miasta ("Dachy Poznań").
  2. **Gwarancja Jakości** - tekst + zdjęcie, lista 5 punktów (20 lat doświadczenia, indywidualne podejście, najniższe ceny, najwyższej jakości materiały, brak kompromisów) + przycisk "O Nas".
  3. **Statystyki** - 4 liczniki (wykonane projekty, lata doświadczenia, zadowoleni klienci...). Duże liczby + etykiety.
  4. **Hasło promo** - "U nas kupisz usługę z materiałem na VAT 8%".
  5. **Nasze Usługi Dekarskie** - siatka **12 kart** (miniatura + nazwa + krótki opis + "Czytaj więcej"): montaż dachówek, dachy na rąbek, dachy płaskie, okna dachowe, fotowoltaika, ciesielstwo, dekarstwo, remonty, kominy, termomodernizacja, inst. odgromowe, rynny.
  6. **Wideo realizacji** - "Nasza realizacja" + osadzony film YouTube.
  7. **Dlaczego My?** - długi tekst + 4 wartości (Doświadczenie, Pasja, Wiedza, Bezkompromisowość) + duża liczba "20 Lat Doświadczenia" + grafika.
  8. **Zaufani przez** - loga partnerów/marek (Ruukki, Roto, "Polecany Dekarz").
  9. **Realizacje** - galeria 8 miniatur, klikalne (lightbox), "Zobacz więcej".
  10. **Opinie** klientów.
  11. **Footer** - blok "Masz pytania? Potrzebujesz wyceny?" + telefon; 4 kolumny (O nas / Strony / Kontakt / Polityka prywatności); social FB/IG/YT.
- **Menu:** Strona Główna, O Nas, Oferta (submenu usług), Realizacje, Kontakt. W nagłówku 2 telefony + email + obszar.
- **Ton:** pewny, przystępny, konkretny (VAT 8%, 20 lat, liczby). Hasła: "Będziesz zaskoczony, że jakość może kosztować tak niewiele", "Brak kompromisów i półśrodków", "Żaden rodzaj pokrycia ani konstrukcji nie jest nam straszny".

## 4. RESEARCH KLIENTA - ⚠️ JESZCZE NIE ZROBIONY (pierwsze zadanie po wznowieniu!)
Krzysztof wyraźnie prosił o **porządny, ponowny research KMK Dachy**, żeby demo było POD KLIENTA. Zrobić PRZED budową (KROK 0 skilla strona-klienta):
- **WebSearch / Google:** "KMK Dachy" + wojewódz./miasto (NIEZNANE - ustalić!), tel 694 556 912. Znaleźć: miasto/obszar działania, stronę/wizytówkę, oferteo/panoramafirm.
- **Google Maps (google_photos.py):** ocena + liczba opinii (realne!), realne zdjęcia realizacji, adres, godziny, lata.
- **Social (skill social-foto):** Facebook / Instagram / TikTok KMK Dachy - realne zdjęcia realizacji + logo (awatar) + ton. UWAGA na kolizję nazw (potwierdzić miasto+branżę+telefon).
- **Wyciągnąć twarde dane** do personalizacji sekcji jak we wzorze: rok założenia (dla "X lat"), realne liczby do liczników (albo pominąć jeśli brak - NIE ZMYŚLAĆ), realny zakres usług, logo, opinie+ocena, obszar.
- Kontekst z karty CRM (notatki Piotra): "dobre opinie na Google, wizytówka średnio rozwinięta, nie chwali się zleceniami, mało opinii - trzeba pomóc zrobić dobrą stronę i reklamę". Czyli: realnych zdjęć może być MAŁO -> uzupełnić premium stockiem (Pexels, biblioteka imglib/dachy jest OK, ale UWAGA duplikat g4=g8 zgłoszony osobno).
- **Czego nie da się wyresearchować** (np. dokładne lata/liczby) -> zebrać pytania i poprosić Szymona, żeby dopytał Piotra. Krzysztof/Szymon to ogarną.

## 5. PLAN TECHNICZNY (rekomendacja)
- Silnikowa rodzina "fachowcy" (obecne demo) ma INNĄ strukturę niż wzór (hero-fach, promise, proces, gateways, uslugi) - **nie odda wzoru 1:1**. Wzór wymaga: liczniki, siatka 12 kart usług, "dlaczego my" z dużą liczbą, loga partnerów, galeria-lightbox, opinie.
- **Rekomendacja:** zbudować **dedykowaną, ręcznie dopracowaną stronę** (HTML/CSS/JS) wierną wzorowi, ale z paletą/typografią/treścią KMK - to jest "mistrzostwo świata" o które prosi Krzysztof. Można wyjść od outputu silnika jako bazy assetów (zdjęcia, mapa, beacon otwarć) i przebudować strukturę + CSS pod wzór. Zachować: stopkę "Projekt strony: Krzysztof Brzeziński", beacon otwarć (demo_views), telefon ze spacjami, mapę po współrzędnych.
- Rozważyć podłączenie Chrome (extension teraz NIEPODŁĄCZONY) żeby OBEJRZEĆ wzór wizualnie (dokładny niebieski, feel hero, karty) - poprosić Krzysztofa o włączenie/podłączenie rozszerzenia Claude in Chrome. Alternatywa: computer-use screenshot (Krzysztof otwiera wzór w Chrome, ja robię zrzut - tier "read").
- **Personalizacja pod dekarstwo:** hero z realnym/ładnym dachem, sekcje usług dekarskich pod KMK, realne realizacje w galerii.

## 6. ZASADY (twarde - z pamięci/skilla)
- **NIE zmyślać konkretów** (lat, liczb w licznikach, ocen, nazwisk, certyfikatów) - tylko realne z researchu; brak -> pominąć lub dopytać. Ocena/gwiazdki tylko z realną liczbą opinii.
- **VAT 8%** - to realny fakt branżowy (roboty dekarskie z materiałem w budownictwie mieszk.), można użyć jak wzór, ale ostrożnie/neutralnie.
- **Bez długich myślników** (—/–), tylko "-". Logo ZAWSZE jeśli klient ma. Bez wymyślonych cytatów. Bez wzmianki o AI. Podpis stopki: "Krzysztof Brzeziński".
- **predeploy_check.py musi być PASS** + weryfikacja (3x200 + hero + podstrony) PRZED podaniem linku. Obejrzeć hero/pageheady w renderze.
- Realne zdjęcia > stock. Galeria: pionowe->masonry, nie ucinać twarzy/detali.

## 7. STAN CRM (źródło prawdy o leadzie)
- Karta clients id: **a1c8ef6f-3305-4b8e-827f-5552518d9a13** (name=Piotr, company=KMK Dachy, phone="694 556 912", owner=Szymon, status=lead).
- Już ustawione: demo_url=https://kris20032.github.io/kmk-dachy/, demo_requested=false, demo_created_at set. Dodany komentarz Claude z linkiem.
- Dostęp do bazy (REST, bez OAuth): url+serviceKey w **~/CRM-backups/secret.json** (albo ~/Library/Application Support/newbeginning/supabase.env). Tabele: clients, comments (author/body/client_id/handled_at), demo_requests. Supabase MCP wymaga OAuth (w sesji headless niedostępny) - używać REST.
- Backup bazy: automat com.newbeginning.crm-backup (9/13/18/22). Usuwanie=Kosz (odwracalne).

## 8. ŚCIEŻKI / NARZĘDZIA
- Demo (working dir): `~/Desktop/New Beginning/dema/kmk-dachy/` (repo git origin: kris20032/kmk-dachy).
- Skill budowy: `~/.claude/skills/strona-klienta/` (build.py, skin.py, packs/dachy.json, imglib/dachy, predeploy_check.py, pages_ensure.sh). Deploy: GitHub Pages konto kris20032, `gh`.
- Weryfikacja wszystkich dem: `~/Desktop/New Beginning/sprawdz-strony.sh`.
- Scratchpad tej sesji: /private/tmp/claude-501/-Users-krzysztof-Desktop-New-Beginning/e5d19e75-4aa5-4c19-b399-7ab85b97125b/scratchpad (css_list.txt wzoru).
- Osobny task zgłoszony: usunąć duplikat g4≈g8 w imglib/dachy (chip w UI).

## 9. BLOKERY / POZWOLENIA
- Chrome extension "Claude in Chrome" NIEPODŁĄCZONY (nie udało się obejrzeć wzoru wizualnie). Krzysztof: "jak będziesz potrzebował pozwoleń dawaj znać, ogarniemy". -> Po wznowieniu: poprosić o podłączenie Chrome (albo computer-use screenshot) do wizualnego obejrzenia wzoru.
- Głęboka analiza CSS wzoru (pobranie wszystkich plików Elementora) TIMEOUTOWAŁA (2 min) - robić selektywnie/w tle, nie hurtem.

---

## RESUME PROMPT (wklej po /clear lub w nowej sesji)
```
Wznów zadanie: redesign demo KMK Dachy (dekarz, klient Szymona, tel 694 556 912) na "mistrzostwo świata".
Przeczytaj najpierw: ~/Desktop/New Beginning/dema/kmk-dachy/_HANDOVER-REDESIGN.md (pełny kontekst) oraz pamięć project_cold_calling_strony + LEADY-DEMA.md.
Cel: demo ma WYGLĄDAĆ i DZIAŁAĆ (pełne UI/UX, responsywne) jak wzór klienta https://dachywojciechowscy.pl (jasny, niebieski #066aab, sekcje: hero+CTA, gwarancja, liczniki, siatka usług, dlaczego my, partnerzy, galeria-lightbox, opinie, kontakt), ale spersonalizowane pod KMK Dachy realnymi danymi.
KROK 1 (obowiązkowy, jeszcze NIE zrobiony): porządny research KMK Dachy - miasto/obszar (nieznane!), Google Maps (ocena/opinie/zdjęcia), Facebook/Instagram (social-foto, realne zdjęcia+logo), rok założenia, zakres usług. NIE zmyślać liczb - czego brak, spisać jako pytania do Piotra przez Szymona.
KROK 2: obejrzeć wzór wizualnie - poproś Krzysztofa o podłączenie Chrome (extension był niepodłączony) albo computer-use screenshot.
KROK 3: zbudować dedykowaną stronę wierną wzorowi + predeploy_check PASS + deploy na repo kris20032/kmk-dachy (ten sam link) + weryfikacja + update CRM.
Zasady: bez długich myślników, logo zawsze, nie zmyślać konkretów, VAT 8% ok, stopka "Krzysztof Brzeziński". Krzysztof da każde pozwolenie na żądanie.
```
