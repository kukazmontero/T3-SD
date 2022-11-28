import sys
import re
import random


def read_input(file):
    for line in file:
        line = re.sub(r'\W+',' ',line.strip())
        words = line.split()
        yield words
        
        

def main(separator='\t'):
    i=0
    data = read_input(sys.stdin)
    
    for words in data:
       
        for word in words:
            if(i==0):
                nfile = word
            print('{},{},{}'.format(word, 1, nfile))
            i = i +1
        
            

if __name__ == "__main__":
    main()