#import wikipedia as wiki
import wikipediaapi


wiki_wiki = wikipediaapi.Wikipedia(
        language='es',
        extract_format=wikipediaapi.ExtractFormat.WIKI
)

page_py = wiki_wiki.page('Python')
print("Page - Exists: %s" % page_py.exists())
#print(page_py.text)
with open('./Carpeta1/Archivo1.txt', 'w') as f:
            f.write(page_py.text)
            f.close()

page_py2 = wiki_wiki.page('Messi')
print("Page - Exists: %s" % page_py2.exists())
print(page_py2.text)
with open('./Carpeta1/Archivo2.txt', 'w') as f:
            f.write(str(page_py2.text))
            f.close()

page_py3 = wiki_wiki.page('Religion')
print("Page - Exists: %s" % page_py3.exists())
print(page_py3.text)
with open('./Carpeta1/Archivo3.txt', 'w') as f:
            f.write(str(page_py3.text))
            f.close()

page_py4 = wiki_wiki.page('Futbol')
print("Page - Exists: %s" % page_py4.exists())
print(page_py4.text)
with open('./Carpeta1/Archivo4.txt', 'w') as f:
            f.write(str(page_py4.text))
            f.close()

page_py5 = wiki_wiki.page('Chile')
print("Page - Exists: %s" % page_py5.exists())
print(page_py5.text)
with open('./Carpeta1/Archivo5.txt', 'w') as f:
            f.write(str(page_py5.text))
            f.close()

page_py6 = wiki_wiki.page('Maradona')
print("Page - Exists: %s" % page_py6.exists())
print(page_py6.text)
with open('./Carpeta2/Archivo6.txt', 'w') as f:
            f.write(str(page_py6.text))
            f.close()

page_py7 = wiki_wiki.page('Pele')
print("Page - Exists: %s" % page_py7.exists())
print(page_py7.text)
with open('./Carpeta2/Archivo7.txt', 'w') as f:
            f.write(str(page_py7.text))
            f.close()

page_py8 = wiki_wiki.page('Barcelona')
print("Page - Exists: %s" % page_py8.exists())
print(page_py8.text)
with open('./Carpeta2/Archivo8.txt', 'w') as f:
            f.write(str(page_py8.text))
            f.close()

page_py9 = wiki_wiki.page('Ronaldo')
print("Page - Exists: %s" % page_py9.exists())
print(page_py9.text)
with open('./Carpeta2/Archivo9.txt', 'w') as f:
            f.write(str(page_py9.text))
            f.close()

page_py10 = wiki_wiki.page('Real Madrid')
print("Page - Exists: %s" % page_py10.exists())
print(page_py10.text)
with open('./Carpeta2/Archivo10.txt', 'w') as f:
            f.write(str(page_py10.text))
            f.close()

 