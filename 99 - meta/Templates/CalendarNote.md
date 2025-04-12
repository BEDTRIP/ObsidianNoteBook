---
tags:
  - gCal
date: '[[<%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")%>]]'
---
{{gEvent.description}}
# GC: {{gEvent.organizer.displayName}}
- [ ] <%tp.file.title.slice(13)%> ⏳ <%tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")%>
<%tp.file.rename("{{gEvent.start.dateTime}} ".replaceAll(':', '-').replace('T', ' T').slice(0,-10) + tp.file.title.slice(10))%>