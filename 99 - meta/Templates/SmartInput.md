<%*
let title = tp.file.title
var TemplateText;
if(title.startsWith("Untitled")) { 
	TemplateText = await tp.file.include("[[Input base]]")
}else if(title.startsWith("Без")) { 
	TemplateText = await tp.file.include("[[Input base]]")
};
tR += TemplateText;
%>