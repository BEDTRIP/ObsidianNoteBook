<%*
let title = tp.file.title
var TemplateText;
if(title.startsWith("excalidraw-")) { 
	TemplateText = await tp.file.include("[[TemplateE.excalidraw]]")
} else if(tp.file.folder() == tp.file.title){
	TemplateText = await tp.file.include("[[ProjectMain]]")
} else {
	TemplateText = "" 
}
tR += TemplateText;
%>