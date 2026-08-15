# CCTweak_Puzzles

Тренувальні 2D-головоломки для школи Кодомандри — Blockly + Minecraft-style side-view.

**Мета:** учень збирає програму з блоків, натискає «Запустити», ComputerCraft-turtle йде по підземному тунелю до алмаза. Автоматична перевірка коректності коду через sandbox-виконання (JS-Interpreter).

## Стек

- **Blockly** (Google) — візуальне блочне програмування
- **JS-Interpreter** (Neil Fraser) — sandbox виконання коду з детекцією нескінченних циклів
- **SVG** — рендер side-view сцени (як 2D-Terraria)
- **Vanilla Minecraft textures** — [mcasset.cloud](https://mcasset.cloud/) (educational use)

## API turtle (MVP)

```lua
turtle.forward()  -- крок вправо
turtle.back()     -- крок вліво
turtle.up()       -- крок вгору
turtle.down()     -- крок вниз
```

Face-direction зафіксований вправо (немає `turnLeft/Right` у 2D). Копання/розміщення блоків — не в MVP, тільки рух.

## Пов'язані документи

- [Логіка перевірки коду у Blockly Games](https://bajka.pp.ua/notes/infra/blockly-games-code-verification/) — референс архітектури
- [CCTweak_BlocklyEditor](https://github.com/asemelinsky/CCTweak_BlocklyEditor) — production редактор для реального ComputerCraft (не тренувальний)

## Локальний запуск

Статичний сайт — просто відкрити `index.html` у браузері, або:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Ліцензія

MIT для нашого коду. Minecraft textures — Mojang property, використовуються за fair use для non-commercial educational purposes.
