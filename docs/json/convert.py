from ctypes.wintypes import PINT
import json
from multiprocessing.dummy import Array

from numpy import array
"""
datos = {
    "America":[
        {
            'Pais':'Colombia',
            'Ciudad':'Medellin',
            'Descripsion':"Aqui hay muchas cosas que hacer pero sobre todo estar con tus amigitos",
            'imagen' : "https://upload.wikimedia.org/wikipedia/commons/d/d9/Medellin.jpg"
        }
    ],
    "Europa":[        
    ],
    "Asia":[
    ],
    "Africa":[
    ],
    "Oceania":[
    ]
}

datos["America"].append({
    'Pais':'Colombia',
    'Ciudad':'Cali',
    'Descripsion':"Aqui hay muchas cosas que hacer pero sobre todo estar con tus amigitos",
    'imagen' : "https://i0.wp.com/passporterapp.com/es/blog/wp-content/uploads/2021/09/que-ver-en-cali-.jpg?fit=1740%2C1080&ssl=1"
})



cadena_json = json.dumps(datos)
print(cadena_json)

with open('datos.json',"w") as f:
    json.dump(datos, f)
"""

def writeJSON():
    with open('datos.json',"w",encoding='utf-8') as f:
        json.dump(jsonDatos, f) 

def getData():
    while True:
        pais = input("Pais : ")
        ciudad = input("Ciudad : ")
        descripsion = input("Descripsion : ")
        imagen = input("Imagen : ")
        if (pais != "" or ciudad != "" or 
        descripsion != ""  or imagen != ""): 
            dic = {
                'Pais': pais,
                'Ciudad': ciudad,
                'Descripsion': descripsion,
                'imagen' : imagen
            }
            return dic
        print("Informacion incorrecta vuelva a llenar")


jsonDatos : dict

continents = []


with open('datos.json',"r",encoding='utf-8') as f:
    jsonDatos = json.load(f)

for key in jsonDatos:
    continents.append(key)

#print(continent)

#print(jsonDatos["America"][0])

while True:
    x = 0
    for c in continents:
        print(f"{x}. {c}")
        x+=1
    print(f"{x}. salvar cambios")
    x+=1
    print(f"{x}. salir")
    print()

    selection = int(input("Introdusca una opcion : "))
    print()

    if selection <= len(continents)-1 :
        print(continents[selection])
        print()
        while True:
            answer = input("Desea ingresar un dato? Y/N : ")
            if answer == "Y" : 
                print("Ingrese la info :")
                dic = getData()
                jsonDatos[continents[selection]].append(dic)
            elif answer == "N" : break
        print()
    elif selection == x-1 : writeJSON()
    elif selection == x : break
    else : print("Opcion no existente\n")

print("Adios :3")