 `BUTTON[day1, day2, day3, day4, day5]`
 ```meta-bind-button
label: "<<<"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: day1
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]'
```
```meta-bind-button
label: "<%tp.date.now("[W]-ww", 0, tp.file.title, "YYYY-MM-DD")%>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: day2
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/[W]-ww-YYYY", 0, tp.file.title, "YYYY-MM-DD") %>]]'
```
```meta-bind-button
label: "<%tp.date.now("[Q]-Q", 0, tp.file.title, "YYYY-MM-DD")%>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: day3
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/[Q]-Q-YYYY", 0, tp.file.title, "YYYY-MM-DD") %>]]'
```
```meta-bind-button
label: "<%tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD")%>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: day4
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Y]-YYYY", 0, tp.file.title, "YYYY-MM-DD") %>]]'
```
```meta-bind-button
label: ">>>"
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: day5
hidden: true
actions:
  - type: open
    link: '[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Q]-Q-YYYY/YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]'
```
---
### Идеи <%tp.file.title%>
- [ ]➕<%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")%>
---
```meta-bind-button
label: ✖️ Удалить завершенные
icon: ""
style: destructive
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: 'delete_done'
hidden: true
actions:
  - type: js
    file: 99 - meta/Scripts/find_path.js
    args: 
      my_file: '<%tp.file.title%>'

```
## Расписание
```tasks
heading includes GC:
scheduled on <%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")%>
not done
```
  `BUTTON[delete_done, create_new_gcal]`
  
```meta-bind-button
label: ⬜️ Следовал ли я расписанию сегодня?
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: replaceSelf
    replacement: "Дисциплина:: 1"
    templater: false

```

---
## Задачи на <%tp.file.title%>
### Что сегодня важного я хочу сделать? 
- [ ]
### Запланировано на сегодня
```tasks
((due on or before <%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")%>) OR (scheduled on or before <%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")%>))
NOT (heading includes GC:)
NOT (heading includes Что сегодня важного я хочу сделать?)
NOT (heading includes Идеи)
NOT (heading includes Расписание)
NOT (heading includes Задачи на <%tp.file.title%>)
not done
```

```meta-bind-button
label: ⬜️ Сделал ля я все что хотел сегодня?
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: replaceSelf
    replacement: "Продуктивность:: 1"
    templater: false

```

---
### Баллы

```meta-bind-button
label: ⬜️ Работал ли я над тем чтобы у меня стало больше денег?
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: replaceSelf
    replacement: "Капитал:: 1"
    templater: false

```

```meta-bind-button
label: ⬜️ Потратил ли я силы для того чтобы преобразовать в голове информацию?
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: replaceSelf
    replacement: "Процессинг:: 1"
    templater: false

```

```meta-bind-button
label: ⬜️ Познакомился ли я сегодня с кем-либо полезным?
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: replaceSelf
    replacement: "Нетворкинг:: 1"
    templater: false

```
	
```meta-bind-button
label: ⬜️ Сделал ли я что-то классное, что я запомню?
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: replaceSelf
    replacement: "Веселье:: 1"
    templater: false

```

---
### Дневник благодарности
- 
- 
- 
---
d:: [[<%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")%>]]
w:: [[<%tp.date.now("[W]-ww-YYYY", 0, tp.file.title, "YYYY-MM-DD")%>]]
q:: [[<%tp.date.now("[Q]-Q-YYYY", 0, tp.file.title, "YYYY-MM-DD")%>]]
y:: [[<%tp.date.now("[Y]-YYYY", 0, tp.file.title, "YYYY-MM-DD")%>]]

#diary/day
