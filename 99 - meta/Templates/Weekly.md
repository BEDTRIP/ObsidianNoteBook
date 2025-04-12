 `BUTTON[week1, week2, week3, week4]`
 ```meta-bind-button
label: "<<<"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: week1
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/[W]-ww-YYYY", -7, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: "<%tp.date.now("YYYY", 0, tp.file.title, "[W]-ww-YYYY")%>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: week2
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Y]-YYYY", 0, tp.file.title, "[W]-ww-YYYY") %>]]'
```
```meta-bind-button
label: "<%tp.date.now("[Q]-Q", 0, tp.file.title, "[W]-ww-YYYY")%>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: week3
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/[Q]-Q-YYYY", 0, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: ">>>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: week4
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/[W]-ww-YYYY", 7, tp.file.title, "[W]-ww-YYYY")%>]]'
```
 `BUTTON[weekday1, weekday2, weekday3, weekday4, weekday5, weekday6, weekday7]`
```meta-bind-button
label: "ПН"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: weekday1
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.weekday("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 0, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: "ВТ"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: weekday2
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.weekday("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 1, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: "СР"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: weekday3
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.weekday("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 2, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: "ЧТ"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: weekday4
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.weekday("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 3, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: "ПТ"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: weekday5
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.weekday("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 4, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: "СБ"
icon: ""
style: destructive
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: weekday6
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.weekday("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 5, tp.file.title, "[W]-ww-YYYY")%>]]'
```
```meta-bind-button
label: "ВС"
icon: ""
style: destructive
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: weekday7
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.weekday("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 6, tp.file.title, "[W]-ww-YYYY")%>]]'
```
---
## Баллы
```dataview
TABLE WITHOUT ID
file.link as Неделя,

sum(nonnull([Дисциплина, Продуктивность, Капитал, Процессинг, Нетворкинг, Веселье])) as "Итог",
choice(Дисциплина > 0, "🟥", " ") as "Дисципл",
choice(Продуктивность > 0, "⬜️", " ") as "Продукт",
choice(Капитал > 0, "🟩", " ") as "Капитал",
choice(Процессинг > 0, "🟦", " ") as "Процесс",
choice(Нетворкинг > 0, "🟪", " ") as "Нетворк",
choice(Веселье > 0, "🟧", " ") as "Веселье"

FROM #diary/day
WHERE w = this.w
SORT file.day ASC
```
---
## Идеи
```tasks
(heading includes Идеи) AND NOT (heading includes <%tp.file.title%>)
(created in <%tp.date.now("YYYY-[W]ww", 0, tp.file.title, "[W]-ww-YYYY")%>)
```
#### Супер идеи недели <%tp.file.title%>
- [ ]➕<%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "[W]-W-YYYY")%>
---
## Задачи
```tasks
((due on or before <%tp.date.now("YYYY-[W]ww", 0, tp.file.title, "[W]-ww-YYYY")%>) OR (scheduled on or before <%tp.date.now("YYYY-[W]ww", 0, tp.file.title, "[W]-ww-YYYY")%>))
NOT (heading includes GC:)
NOT (heading includes Что сегодня важного я хочу сделать?)
NOT (heading includes Идеи)
NOT (heading includes Расписание)
NOT (heading includes Задачи на)
NOT (heading includes На подумать)
NOT (heading includes <%tp.file.title%>)
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
NOT (heading includes <%tp.file.title%>)
NOT (heading includes Инпуты)
done on <%tp.date.now("YYYY-[W]ww", 0, tp.file.title, "[W]-ww-YYYY")%>
```
---
## Инпуты
```tasks
((due on or before <%tp.date.now("YYYY-[W]ww", 0, tp.file.title, "[W]-ww-YYYY")%>) OR (scheduled on or before <%tp.date.now("YYYY-[W]ww", 0, tp.file.title, "[W]-ww-YYYY")%>))
NOT (heading includes GC:)
NOT (heading includes Что сегодня важного я хочу сделать?)
NOT (heading includes Идеи)
NOT (heading includes Расписание)
NOT (heading includes Задачи на)
NOT (heading includes На подумать)
NOT (heading includes <%tp.file.title%>)
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
NOT (heading includes <%tp.file.title%>)
heading includes Инпуты
done on <%tp.date.now("YYYY-[W]ww", 0, tp.file.title, "[W]-ww-YYYY")%>
```
---
w:: [[<%tp.date.now("[W]-ww-YYYY", 0, tp.file.title, "[W]-ww-YYYY")%>]]
q:: [[<%tp.date.now("[Q]-Q-YYYY", 0, tp.file.title, "[W]-ww-YYYY")%>]]
y:: [[<%tp.date.now("[Y]-YYYY", 0, tp.file.title, "[W]-ww-YYYY")%>]]

#diary/week