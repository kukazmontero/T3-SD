import sys
import json

current_word = None
current_file = None
lista = []
lista1 = []
lista2 = []

current_count = 0
word = None

dic = {}

for line in sys.stdin:
    
    line = line.strip()
    word = line.split(',')[0]
    count = line.split(',')[1]
    file = line.split(',')[2]

    try:
        count = int(count)
    except ValueError:
        continue
    
    if current_word == word:
        if current_file == file:
            current_count += count
        else:
            if current_file:
                lista.append('({} , {})'.format(current_file,current_count))
                lista1.append(current_file)
                lista2.append(current_count)
            current_file = file
            current_count = count
    else:
        if current_word:
            lista.append('({} , {})'.format(current_file,current_count))
            lista1.append(current_file)
            lista2.append(current_count)
            aux = current_word
            dic[current_word] = []
            for i in range(len(lista)):
                dic[current_word].append({
                    'archivo': lista1[i],
                    'cantidad': lista2[i]
                })
                aux = aux + ' ' + lista[i]

            print(aux)
            
                         
        current_word = word
        current_count = count
        current_file = file
        aux = ''
        lista.clear()
        lista2.clear()
        
with open('./NodeJs/BD.json', 'w') as file:
        json.dump(dic, file, indent=2)


 
