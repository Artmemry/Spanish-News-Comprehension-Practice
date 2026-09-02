# La Actualidad — la actualidad española en comprensión lectora

The Spanish twin of *L'Actu*, same engine, same shape, different newspapers. It
turns the month's Spanish news into reading comprehension, filtered so that only
what touches the four Edexcel themes gets in.

## What a student sees

They pick a month, filter by theme if they want, and open an article:

- an **adapted text** of 200–280 words, written for this site from published
  facts, with the outlet, the date and a **link to the real article**;
- a **glossary** they can show or hide;
- eight to ten **marked tasks** — verdadero / falso / no se menciona, multiple
  choice, gap-fill, vocabulary matching, and two short written answers;
- a **stretch task** with a model answer: an opinion paragraph, a translation, or
  a comparison with the set text;
- a **floating accent pad** (á é í ó ú ñ ü ¡ ¿), and a **download** of everything
  they wrote, with their name on it, to hand in.

Written answers are marked on ideas rather than wording, and where the marker
refuses one the student can press *mi versión también vale* — the same escape
hatch as in *El Léxico*, and the claim travels into the file they hand you.

Each article links to the **vocabulary lists** that prepare it. The
regularisation article opens with a link to `U8.2 — la regularización
extraordinaria 2026`, which is the list you already have on exactly that subject.

## Why the texts are ours and not the paper's

Newspaper articles are in copyright; the facts in them are not. Writing the text
ourselves is what makes the site legal, and it also lets me pitch the level at
A-Level rather than at a Spanish adult reader — and it means a paywall never
breaks a lesson. The original is always one click away.

## Setting it up, once

1. Create a public repository called **A-Level-Spanish-Actualidad** under
   `artmemry`.
2. Upload:

```
A-Level-Spanish-Actualidad/
├── index.html
├── style.css
├── app.js
└── data/
    └── issues.js      ← el mes vive aquí, y nada más
```

3. **Settings → Pages → Source: Deploy from a branch → main / (root)**. A minute
   later the site is at
   `https://artmemry.github.io/A-Level-Spanish-Actualidad/`.
4. Add a tile to the **A-Level-Spanish-BBA** hub page. Say the word and I will
   send the edited hub page.

## Using it

- One article: `…/A-Level-Spanish-Actualidad/?a=2026-09-ES-T1`
- One month: `…/?m=2026-09`
- **The answer key: `…/?prof=1`** — not linked from the site.

The per-article links drop straight into the Homework column of the MTP, exactly
like the vocabulary links.

## Asking for a new month

Say *build October* and I will sweep the month's Spanish press, apply the
relevance test, write the articles and the tasks, and send you a replacement
`data/issues.js` with the new month on top. One file, one upload.

**Some months will be thin, and that is deliberate.** A story gets in only if you
would actually set it. If nothing worth setting appeared on memoria histórica in
October, October has three articles and says so on the page.

## What is in this first issue — septiembre 2026

| Tema | Artículo | Fuente |
|---|---|---|
| T1 Sociedad | Tener hijos joven, en España, empobrece | estudio de FEDEA y la UCM, 25 de agosto |
| T2 Cultura | Almodóvar vuelve a San Sebastián | sección Made in Spain, 5 de agosto |
| T3 Inmigración | Regularización extraordinaria: cinco meses y un pasaporte | CEAR, real decreto de abril |
| T4 Memoria | Diez mil cuerpos todavía en las cunetas | anuncio del secretario de Estado, 24 de agosto |

Two of these are unusually well matched to what you already teach. The Almodóvar
item gives your *Volver* students a reason to use the film-critical vocabulary of
`VOL.7` on something that is not the film; and the exhumations article lands in
the same month as the French site's piece on the Libération de Paris, where the
Spanish republicans of la Nueve are commemorated — one lesson, both A-Levels.

## Verified

- Every article opens with no JavaScript error; five paragraphs, glossary and
  tasks in each.
- A full run — answering, scoring, downloading — produces a file headed with the
  student's name and score, listing every question, their answer, and the right
  answer where they were wrong.
- The accent pad appears when a box takes focus and carries the Spanish set,
  including ¡ and ¿.
- `?prof=1` prints the whole answer key.
- Every `lex` code was checked against the live corpus, so the vocabulary links
  land on a real list.
