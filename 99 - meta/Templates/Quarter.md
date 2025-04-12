 `BUTTON[qua1, qua2, qua3]`
 ```meta-bind-button
label: "<<<"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: qua1
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/[Q]-Q-YYYY", -1, tp.file.title, "[Q]-Q-YYYY")%>]]'
```
```meta-bind-button
label: "<%tp.date.now("YYYY", 0, tp.file.title, "[Q]-Q-YYYY")%>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: qua2
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Y]-YYYY", 0, tp.file.title, "[Q]-Q-YYYY") %>]]'
```
```meta-bind-button
label: ">>>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: qua3
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/[Q]-Q-YYYY", 93, tp.file.title, "[Q]-Q-YYYY")%>]]'
```
---
## Баллы
```dataview
TABLE WITHOUT ID
w as week,
sum(nonnull([
sum(nonnull(rows.Дисциплина)),
sum(nonnull(rows.Продуктивность)),
sum(nonnull(rows.Капитал)),
sum(nonnull(rows.Процессинг)),
sum(nonnull(rows.Нетворкинг)),
sum(nonnull(rows.Веселье))
])) as "Итог",

sum(nonnull(rows.Дисциплина)) as "Дисципл",
sum(nonnull(rows.Продуктивность)) as "Продукт",
sum(nonnull(rows.Капитал)) as "Капитал",
sum(nonnull(rows.Процессинг)) as "Процесс",
sum(nonnull(rows.Нетворкинг)) as "Нетворк",
sum(nonnull(rows.Веселье)) as "Веселье"

FROM #diary/day
WHERE q = this.q
GROUP BY w
SORT file.day ASC
```
---
## Идеи
```tasks
(heading includes Идеи) AND NOT (heading includes <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>)
(created in or before <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>)
not done
```
```tasks
(heading includes Идеи) AND NOT (heading includes 2025-Q2)
(created in or before <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>)
done in <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>
```
#### Супер идеи квартиля <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>
- [ ]➕<%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "[Q]-Q-YYYY")%>
---
## Задачи
```tasks
((due on or before <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>) OR (scheduled on or before <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>))
NOT (heading includes GC:)
NOT (heading includes Что сегодня важного я хочу сделать?)
NOT (heading includes Идеи)
NOT (heading includes Расписание)
NOT (heading includes Задачи на)
NOT (heading includes На подумать)
NOT (heading includes <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>)
NOT (heading includes Инпуты)
not done
```
```tasks
NOT (heading includes GC:)
NOT (heading includes Что сегодня важного я хочу сделать?)
NOT (heading includes Идеи)
NOT (heading includes Расписание)
NOT (heading includes Задачи на)
NOT (heading includes На подумать)
NOT (heading includes <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>)
NOT (heading includes Инпуты)
done on <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>
```
---
## Инпуты
```tasks
((due on or before <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>) OR (scheduled on or before <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>))
NOT (heading includes GC:)
NOT (heading includes Что сегодня важного я хочу сделать?)
NOT (heading includes Идеи)
NOT (heading includes Расписание)
NOT (heading includes Задачи на)
NOT (heading includes На подумать)
NOT (heading includes <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>)
heading includes Инпуты
not done
```
```tasks
NOT (heading includes GC:)
NOT (heading includes Что сегодня важного я хочу сделать?)
NOT (heading includes Идеи)
NOT (heading includes Расписание)
NOT (heading includes Задачи на)
NOT (heading includes На подумать)
NOT (heading includes <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>)
heading includes Инпуты
done on <%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "[Q]-Q-YYYY")%>
```
---
q:: [[<%tp.date.now("[Q]-Q-YYYY", 0, tp.file.title, "[Q]-Q-YYYY")%>]]
y:: [[<%tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Q]-Q-YYYY")%>]]
#diary/quarter