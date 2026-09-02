# The generator — how a month gets made

This file is the contract. Anyone (or any model) following it can produce a new
issue that the site will render without further changes.

## The pipeline, in order

1. **Sweep the month.** Search the French or Spanish press for stories published
   in the month just ended. The four Edexcel themes are the only filter that
   matters, and they are not all equally served: society, politics and
   immigration produce news every month; the historical theme (Occupation /
   Franco) produces news only when there is a commemoration, an exhumation, a
   trial, an archive release or an anniversary.

   **Sweep on the sub-themes, not on the four headings** — the headings are too
   broad to search with, and one sub-theme is easy to forget entirely. They are
   carried in `window.THEMES[…].subs` and shown to students on the theme filter:

   | | French 9FR0 | Spanish 9SP0 |
   |---|---|---|
   | T1 | la famille en voie de changement · l'éducation · le monde du travail | los cambios en la familia · el mundo laboral · **el impacto turístico** |
   | T2 | la musique · les médias · les festivals et les traditions | la música · los medios de comunicación · los festivales y las tradiciones |
   | T3 | l'impact positif de l'immigration · les défis de l'intégration · l'extrême droite | el impacto positivo · los retos de la integración · la reacción social y las medidas políticas |
   | T4 | la France occupée · le régime de Vichy · la Résistance | la Guerra Civil y el ascenso de Franco · la dictadura franquista · la transición |

   Tourism sits inside Spanish Theme 1 and is the one most often missed: a story
   about overtourism, housing in the Balearics or a tourist tax belongs to T1,
   not to some general "economy" bucket, and it maps onto `U3 Impacto turístico`
   in the corpus.
2. **Apply the relevance gate.** A story earns a place only if a teacher would
   actually set it. *Would this help a student write or say something in the
   exam on this theme?* If the answer is no, drop it. **An issue with two items
   is a good issue; an issue padded to four is not.** Say in the issue's `note`
   which themes had nothing, and the site will say so too.
3. **Verify the facts.** Fetch the article and take the figures from it. Where a
   fetch fails, find the same story elsewhere rather than writing around it.
   Prefer the primary source — a ministry, a statistics office, a parliamentary
   report, an NGO's own page — over a summary of it. **Never state a date,
   an edition number or a figure that no source gave you.**
4. **Write the text.** 200–280 words of original French or Spanish, five
   paragraphs, built from the facts and not from the article's sentences. Pitch
   it at A-Level: complex sentences are welcome, but every unfamiliar word
   should be either inferable or glossed. Seed it with vocabulary the students
   already hold in *Le Lexique* / *El Léxico* so the reading reinforces the
   lists. One idea per paragraph, and let the last paragraph say why the story
   matters — that is what a student will reuse in an essay.
5. **Write the tasks.** Eight to ten, in this order: true/false/not-given first
   (they check literal comprehension), then multiple choice, then gap-fill,
   then the vocabulary matching, then the two short written answers, which are
   the only ones that ask the student to think. Include **at least one
   "not mentioned"** item — it is the type that teaches students to read what is
   there rather than what they expect.
6. **Write the stretch task.** One per article, and never the same kind twice in
   a month: an opinion paragraph, a translation into English, or an essay-style
   comparison with the set text. Give a model answer of the length asked for,
   written as a strong A-Level candidate would write it — not as a native
   journalist would.
7. **Check.** Load the site locally, open every article, answer a few tasks,
   download the results file, and open `?prof=1`. No console error, and every
   answer key correct.

## Copyright

The site never reproduces the article. Facts are not copyrightable; the
journalist's sentences are. Every item carries the outlet, the date, a link, and
a line saying the text was written for this site. If a story cannot be told
without quoting it at length, the story is wrong for this site.

## The data file

`data/issues.js` defines two globals. Newest issue first.

```js
window.THEMES = { T1:{name:"…", short:"…"}, T2:{…}, T3:{…}, T4:{…} };

window.ISSUES = [
 { id:"2026-09",              // sorts and appears in the ?m= link
   label:"Septembre 2026",    // what the student sees on the button
   published:"2026-09-01",
   note:"…",                  // what this month gave, and what it did not
   items:[ … ] }
];
```

One item:

```js
{
 id:"2026-09-FR-T1",          // <issue>-<LANG>-<theme>; used by the ?a= link
 theme:"T1",
 words:243, minutes:25,       // shown on the card so a student can budget
 title:"…",
 standfirst:"…",              // one sentence, why this story
 source:{name:"…", date:"25 août 2026", url:"https://…"},
 lex:[{code:"U2.1", label:"le système scolaire"}],   // deep links into Le Lexique
 text:["para 1","para 2", …],
 glossary:[["le mot","the word"], …],
 tasks:[ … ],
 stretch:{q:"…", model:"…"}
}
```

`lex` codes must be real lesson ids in the vocabulary corpus — check them against
`data/corpus.js` in the trainer before writing them, or the link will open the
front page.

## Task types

| `t` | fields | marked |
|---|---|---|
| `vf` | `q`, `a:"V"\|"F"\|"N"`, `why` | 1 point, one attempt |
| `qcm` | `q`, `opts:[…]`, `a:<index>`, `why` | 1 point |
| `lacune` | `q`, `before`, `after`, `a:[accepted…]`, `bank:[…]` | 1 point, accent- and inflection-tolerant |
| `lexique` | `q`, `pairs:[[target,english], …]` | one point per pair |
| `court` | `q`, `a:[model]`, `keys:["idea\|synonym", …]` | 1 point if 60% of the keys appear |

`keys` are ideas, not words: write `"portable\|téléphone"` so either counts. A
`court` answer that the marker refuses shows a **my version counts too** button,
exactly as the vocabulary trainer does — the student is not stuck, and the claim
is theirs to justify in the file they hand in.

## Adding a month by hand

Open `data/issues.js`, copy an existing issue object, change `id`, `label` and
`published`, replace the items, and commit. GitHub Pages republishes in about a
minute. If the page goes blank the JSON is broken — almost always a missing
comma, or a straight quote inside a sentence that needed escaping as `\"`.
