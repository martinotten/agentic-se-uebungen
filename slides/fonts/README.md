# Bundled fonts

Dieser Ordner enthaelt die optional im Deck gebuendelten Emoji-Fonts. Standardmaessig nutzt das Deck
den Emoji-Font des Systems; ob und welcher Font verwendet wird, steuert das `emojiFont`-Headmatter in `slides.md`; die zugehoerigen `@font-face`-Deklarationen liegen in
`styles/emoji-openmoji.css` und `styles/emoji-noto.css` (siehe
[`docs/slide-features.md`](../../docs/slide-features.md)).

Die Fonts werden bewusst mitgeliefert und nicht von einem CDN geladen: Das Deck laeuft auch ohne
Netzverbindung, und die Darstellung bleibt zwischen Praesentation und PDF-Export identisch.

## `openmoji/`

- Datei: `OpenMoji-color-glyf_colr_0.woff2` (COLRv0, ca. 1 MB)
- Version: OpenMoji 17.0.0
- Quelle: <https://github.com/hfg-gmuend/openmoji/releases/tag/17.0.0> (`openmoji-font.zip`,
  Verzeichnis `OpenMoji-color-glyf_colr_0`)
- Lizenz: CC BY-SA 4.0, siehe `openmoji/LICENSE.txt`
- Attribution (von der Lizenz gefordert): "All emojis designed by
  [OpenMoji](https://openmoji.org/) -- the open-source emoji and icon project. License:
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)"

COLRv0 ist das von OpenMoji fuer Web-Einsatz empfohlene Format und hat unter den Color-Font-Formaten
die breiteste Browserunterstuetzung.

## `noto-color-emoji/`

- Dateien: `notocoloremoji.0.woff2` bis `notocoloremoji.9.woff2` (nach Unicode-Ranges geschnitten,
  zusammen ca. 2 MB)
- Quelle: Google Fonts (`https://fonts.googleapis.com/css2?family=Noto+Color+Emoji`), Slices und
  `unicode-range`-Angaben unveraendert uebernommen
- Lizenz: SIL Open Font License 1.1, siehe
  <https://fonts.google.com/noto/specimen/Noto+Color+Emoji/about>

Durch das Slicing laedt der Browser nur die Teildateien, deren Unicode-Ranges auf einer Slide
tatsaechlich vorkommen.
