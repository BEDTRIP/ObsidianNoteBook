<%*
let title = tp.file.title
if(title.startsWith("Untitled")) { 
	
} else if(title.startsWith("Без")) { 
	
} else if(title.startsWith("W-")) { 
	tR += await tp.file.include("[[Weekly]]")
} else if(title.startsWith("Q-")) { 
	tR += await tp.file.include("[[Quarter]]")
} else if(title.startsWith("Y-")) { 
	tR += await tp.file.include("[[Yearly]]")
} else if(title.startsWith("excalidraw-")) { 
	tR += await tp.file.include("[[TemplateE.excalidraw]]")
} else {
	tR += await tp.file.include("[[Daily]]")
};
%>
