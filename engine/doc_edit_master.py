import docx
from doc_editor import docx_find_replace_text
import sys
import os

country = sys.argv[1]
model = sys.argv[2]
doc = docx.Document('C:\\Template\\template.docx')
docx_find_replace_text(doc, '[Country]', country)
docx_find_replace_text(doc, '[Model]', model)

directory = "C:\\Final_Document"

if not os.path.exists(directory):
    os.makedirs(directory)
doc.save('C:\\Final_Document\\Edited_Document.docx')

print("Document successfully saved in directory C:\\Final_Document")

