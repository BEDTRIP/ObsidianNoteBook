 `BUTTON[year1, year2]`
 `BUTTON[q1, q2, q3, q4]`
```meta-bind-button
label: '<<<'
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: year1
hidden: true
actions:
  - type: open
    link: "[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Y]-YYYY", -1, tp.file.title, "[Y]-YYYY")%>]]"
```
```meta-bind-button
label: '>>>'
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: year2
hidden: true
actions:
  - type: open
    link: "[[/07 - Daily/<% tp.date.now("[Y]-YYYY/[Y]-YYYY", 370, tp.file.title, "[Y]-YYYY")%>]]"
```
```meta-bind-button
label: Q1
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: q1
hidden: true
actions:
  - type: open
    link: "[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-1-YYYY/[Q]-1-YYYY", 0, tp.file.title, "[Y]-YYYY") %>]]"
```
```meta-bind-button
label: Q2
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: q2
hidden: true
actions:
  - type: open
    link: "[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-2-YYYY/[Q]-2-YYYY", 0, tp.file.title, "[Y]-YYYY") %>]]"
```
```meta-bind-button
label: Q3
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: q3
hidden: true
actions:
  - type: open
    link: "[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-3-YYYY/[Q]-3-YYYY", 0, tp.file.title, "[Y]-YYYY") %>]]"
```
```meta-bind-button
label: Q4
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: q4
hidden: true
actions:
  - type: open
    link: "[[/07 - Daily/<%tp.date.now("[Y]-YYYY/[Q]-4-YYYY/[Q]-4-YYYY", 0, tp.file.title, "[Y]-YYYY") %>]]"
```
<%*
const fs = require('fs');
const path = require('path');

// Определяем путь к папке и файлу
const folderPath = tp.file.path(0).slice(0, -10);
const filename = `${tp.file.title}.canvas`;
const filePath = path.join(folderPath, filename);
const text = `{`+'\n'+
`  "edges": [`+'\n'+
`  ],`+'\n'+
`  "nodes": [`+'\n'+

`    {`+'\n'+
`      "height": 1000,`+'\n'+
`      "id": "cde6eec263cc4169",`+'\n'+
`      "label": "Идеи",`+'\n'+
`      "styleAttributes": {`+'\n'+
`      },`+'\n'+
`      "type": "group",`+'\n'+
`      "width": 1980,`+'\n'+
`      "x": -1060,`+'\n'+
`      "y": -1260`+'\n'+
`    },`+'\n'+
    
`    {`+'\n'+
`      "height": 1000,`+'\n'+
`      "id": "5579411f5af3d236",`+'\n'+
`      "label": "Баллы",`+'\n'+
`      "styleAttributes": {`+'\n'+
`        "border": null`+'\n'+
`      },`+'\n'+
`      "type": "group",`+'\n'+
`      "width": 1640,`+'\n'+
`      "x": -2700,`+'\n'+
`      "y": -1260`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 290,`+'\n'+
`      "id": "ab8210ae053d62e6",`+'\n'+
`      "styleAttributes": {`+'\n'+
`        "border": "invisible"`+'\n'+
`      },`+'\n'+
`      "text": "`+
"```"+
'dataview\\n'+
'TABLE WITHOUT ID\\n'+
'q as Quartile,\\n'+
'sum(nonnull([\\nsum(nonnull(rows.Дисциплина)),\\n'+
'sum(nonnull(rows.Продуктивность)),\\n'+
'sum(nonnull(rows.Капитал)),\\n'+
'sum(nonnull(rows.Процессинг)),\\n'+
'sum(nonnull(rows.Нетворкинг)),\\n'+
'sum(nonnull(rows.Веселье))\\n])) as \\"Итог\\",\\n'+
'\\n'+
'sum(nonnull(rows.Дисциплина)) as \\"Дисципл\\",\\n'+
'sum(nonnull(rows.Продуктивность)) as \\"Продукт\\",\\n'+
'sum(nonnull(rows.Капитал)) as \\"Капитал\\",\\n'+
'sum(nonnull(rows.Процессинг)) as \\"Процесс\\",\\n'+
'sum(nonnull(rows.Нетворкинг)) as \\"Нетворк\\",\\n'+
'sum(nonnull(rows.Веселье)) as \\"Веселье\\"\\n'+
'\\n'+
'FROM #diary/day\\n'+
'WHERE y = [[' + tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY") + ']]\\n'+
'GROUP BY q\\n'+
'SORT file.day ASC\\n'+
'\\n'+
"```"+`",`+'\n'+
`     "type": "text",`+'\n'+
`      "width": 1600,`+'\n'+
`      "x": -2680,`+'\n'+
`      "y": -590`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 220,`+'\n'+
`      "id": "66e9962a22622d4b",`+'\n'+
`      "styleAttributes": {`+'\n'+
`      },`+'\n'+
`      "text": "`+
"```dataviewjs"+
'\\ndv.span(\\"**Дисциплина**\\")'+
'\\n'+
'\\nconst calendarData = {'+
'\\n    year: '+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+','+
'\\n    colors: {'+
`\\n        discipl: ['#d2190b', '#ea1c0d', '#f32c1e', '#f44336', '#f55a4e', '#f77066', '#f8877f']`+
'\\n    },'+
'\\n    entries: []'+
'\\n}'+
'\\n'+
`\\nfor(let page of dv.pages('\\"07 - Daily/`+tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY")+`\\"').where(p=>p.Дисциплина)){`+
'\\n    calendarData.entries.push({'+
'\\n        date: page.file.name,'+
'\\n        intensity: page.Дисциплина,'+
'\\n        content: await dv.span(`[](${page.file.name})`), //for hover preview'+
'\\n    })'+
'\\n       \\n}\\n'+
'\\nrenderHeatmapCalendar(this.container, calendarData)'+
'\\n'+
'\\n'+
'```'+
'\\n",'+
`      "type": "text",`+'\n'+
`      "width": 800,`+'\n'+
`      "x": -2680,`+'\n'+
`      "y": -1250`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 220,`+'\n'+
`      "id": "23a06e3d8b7a8934",`+'\n'+
`      "styleAttributes": {`+'\n'+
`      },`+'\n'+
`      "text": "`+
"```dataviewjs"+
'\\ndv.span(\\"**Продуктивность**\\")'+
'\\n'+
'\\nconst calendarData = {'+
'\\n    year: '+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+','+
'\\n    colors: {'+
`\\n        product: ['#666666', '#7f7f7f', '#999999', '#b2b2b2', '#cccccc', '#e5e5e5', '#ffffff']`+
'\\n    },'+
'\\n    entries: []'+
'\\n}'+
'\\n'+
`\\nfor(let page of dv.pages('\\"07 - Daily/`+tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY")+`\\"').where(p=>p.Продуктивность)){`+
'\\n    calendarData.entries.push({'+
'\\n        date: page.file.name,'+
'\\n        intensity: page.Продуктивность,'+
'\\n        content: await dv.span(`[](${page.file.name})`), //for hover preview'+
'\\n    })'+
'\\n       \\n}\\n'+
'\\nrenderHeatmapCalendar(this.container, calendarData)'+
'\\n'+
'\\n'+
'```'+
'\\n",'+
`      "type": "text",`+'\n'+
`      "width": 800,`+'\n'+
`      "x": -2680,`+'\n'+
`      "y": -1030`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 220,`+'\n'+
`      "id": "510afb4a2005d53a",`+'\n'+
`      "styleAttributes": {`+'\n'+
`      },`+'\n'+
`      "text": "`+
"```dataviewjs"+
'\\ndv.span(\\"**Капитал**\\")'+
'\\n'+
'\\nconst calendarData = {'+
'\\n    year: '+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+','+
'\\n    colors: {'+
`\\n        capital: ['#3db197', '#47c0a6', '#5ac6af', '#6dcdb8', '#80d4c1', '#93daca', '#a6e1d4']`+
'\\n    },'+
'\\n    entries: []'+
'\\n}'+
'\\n'+
`\\nfor(let page of dv.pages('\\"07 - Daily/`+tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY")+`\\"').where(p=>p.Капитал)){`+
'\\n    calendarData.entries.push({'+
'\\n        date: page.file.name,'+
'\\n        intensity: page.Капитал,'+
'\\n        content: await dv.span(`[](${page.file.name})`), //for hover preview'+
'\\n    })'+
'\\n       \\n}\\n'+
'\\nrenderHeatmapCalendar(this.container, calendarData)'+
'\\n'+
'\\n'+
'```'+
'\\n",'+
`      "type": "text",`+'\n'+
`      "width": 800,`+'\n'+
`      "x": -1880,`+'\n'+
`      "y": -1250`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 220,`+'\n'+
`      "id": "aa1ac0b7784820d3",`+'\n'+
`      "styleAttributes": {`+'\n'+
`      },`+'\n'+
`      "text": "`+
"```dataviewjs"+
'\\ndv.span(\\"**Процессинг**\\")'+
'\\n'+
'\\nconst calendarData = {'+
'\\n    year: '+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+','+
'\\n    colors: {'+
`\\n        process: ['#295e8d', '#2f6ba1', '#3578b4', '#3d85c6', '#5191cc', '#649ed2', '#78aad7']`+
'\\n    },'+
'\\n    entries: []'+
'\\n}'+
'\\n'+
`\\nfor(let page of dv.pages('\\"07 - Daily/`+tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY")+`\\"').where(p=>p.Процессинг)){`+
'\\n    calendarData.entries.push({'+
'\\n        date: page.file.name,'+
'\\n        intensity: page.Процессинг,'+
'\\n        content: await dv.span(`[](${page.file.name})`), //for hover preview'+
'\\n    })'+
'\\n       \\n}\\n'+
'\\nrenderHeatmapCalendar(this.container, calendarData)'+
'\\n'+
'\\n'+
'```'+
'\\n",'+
`      "type": "text",`+'\n'+
`      "width": 800,`+'\n'+
`      "x": -2680,`+'\n'+
`      "y": -810`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 220,`+'\n'+
`      "id": "77ee3a8a12f9aa49",`+'\n'+
`      "styleAttributes": {`+'\n'+
`      },`+'\n'+
`      "text": "`+
"```dataviewjs"+
'\\ndv.span(\\"**Нетворкинг**\\")'+
'\\n'+
'\\nconst calendarData = {'+
'\\n    year: '+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+','+
'\\n    colors: {'+
`\\n        network: ['#473673', '#523e84', '#5c4696', '#674ea7', '#745cb3', '#836dbb', '#927fc3']`+
'\\n    },'+
'\\n    entries: []'+
'\\n}'+
'\\n'+
`\\nfor(let page of dv.pages('\\"07 - Daily/`+tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY")+`\\"').where(p=>p.Нетворкинг)){`+
'\\n    calendarData.entries.push({'+
'\\n        date: page.file.name,'+
'\\n        intensity: page.Нетворкинг,'+
'\\n        content: await dv.span(`[](${page.file.name})`), //for hover preview'+
'\\n    })'+
'\\n       \\n}\\n'+
'\\nrenderHeatmapCalendar(this.container, calendarData)'+
'\\n'+
'\\n'+
'```'+
'\\n",'+
`      "type": "text",`+'\n'+
`      "width": 800,`+'\n'+
`      "x": -1880,`+'\n'+
`      "y": -1030`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 220,`+'\n'+
`      "id": "691656c4fcac0e0e",`+'\n'+
`      "styleAttributes": {`+'\n'+
`      },`+'\n'+
`      "text": "`+
"```dataviewjs"+
'\\ndv.span(\\"**Веселье**\\")'+
'\\n'+
'\\nconst calendarData = {'+
'\\n    year: '+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+','+
'\\n    colors: {'+
`\\n        fun: ['#ba6b17', '#d1781a', '#e38421', '#e69138', '#e99e4f', '#ecaa65', '#efb77c']`+
'\\n    },'+
'\\n    entries: []'+
'\\n}'+
'\\n'+
`\\nfor(let page of dv.pages('\\"07 - Daily/`+tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY")+`\\"').where(p=>p.Веселье)){`+
'\\n    calendarData.entries.push({'+
'\\n        date: page.file.name,'+
'\\n        intensity: page.Веселье,'+
'\\n        content: await dv.span(`[](${page.file.name})`), //for hover preview'+
'\\n    })'+
'\\n       \\n}\\n'+
'\\nrenderHeatmapCalendar(this.container, calendarData)'+
'\\n'+
'\\n'+
'```'+
'\\n",'+
`      "type": "text",`+'\n'+
`      "width": 800,`+'\n'+
`      "x": -1880,`+'\n'+
`      "y": -810`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 950,`+'\n'+
`      "id": "ad60d31d73feefb9",`+'\n'+
`      "styleAttributes": {`+'\n'+
`        "border": null,`+'\n'+
`        "textAlign": null`+'\n'+
`      },`+'\n'+
`      "text": "# Идеи за год`+
'\\n```tasks'+
`\\n(heading includes Идеи)`+
`\\n(created in or before `+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+`)`+
`\\nnot done\\n`+
'```\\n",'+
`      "type": "text",`+'\n'+
`      "width": 960,`+'\n'+
`      "x": -1040,`+'\n'+
`      "y": -1250`+'\n'+
`    },`+'\n'+

`    {`+'\n'+
`      "height": 950,`+'\n'+
`      "id": "63246ee96c669acb",`+'\n'+
`      "styleAttributes": {`+'\n'+
`        "border": null,`+'\n'+
`        "textAlign": null`+'\n'+
`      },`+'\n'+
`      "text": "# Выполненные идеи за год`+
'\\n```tasks'+
`\\n(heading includes Идеи)`+
`\\n(created in or before `+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+`)`+
`\\ndone in `+tp.date.now("YYYY", 0, tp.file.title, "[Y]-YYYY")+`\\n`+
'```\\n",'+
`      "type": "text",`+'\n'+
`      "width": 960,`+'\n'+
`      "x": -60,`+'\n'+
`      "y": -1250`+'\n'+
`    }`+'\n'+

`  ]`+'\n'+
`}`

// Создаем папку, если она не существует
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
}

// Записываем текст в файл
fs.writeFile(filePath, text, (err) => {
    if (err) {
        console.error('Ошибка при записи файла:', err);
    } else {
        console.log('Файл успешно создан:', filePath);
    }
});
%>![[<%tp.date.now("[Y]-YYYY.[canvas]", 0, tp.file.title, "[Y]-YYYY")%>]]

---
y:: [[<%tp.date.now("[Y]-YYYY", 0, tp.file.title, "[Y]-YYYY")%>]]
#diary/year<%*
await new Promise(resolve => setTimeout(resolve, 1000)); 

url_1 = `obsidian://adv-uri?vault=DevBAZA&commandid=app%3Areload`
window.open(url_1, '_self');
%>