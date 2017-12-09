# morph

![Morph Logo](https://image.ibb.co/iqOQ7F/morph_logo_mini_fw.png)

## ¿Que es morph?

Morph es una colección de Patrones de Diseño Web para Interfaces Graficas de Usuario (GUI). Las cuales han sido creadas usando solamente HTML natural y un mínimo de clases CSS abstraídas con una sintaxis semántica. Todo ello para mejorar la experiencia del diseñador, programador y del usuario.

- Documentación sobre morph a detalle [documentación](https://github.com/techfano/morph/wiki/Morph-fundamentos)
- [Web Demo](https://morph-60313.firebaseapp.com/)
- More documentation about morph [wiki](https://github.com/techfano/morph/wiki/Soon-in-English)

## Instalación simple

**1. Ve a la pagina [morph.pe](https://morph.pe) y descarga la ultima version estable haciendo click en el enlace Descargar [numero de version]**

**2. Luego de descargar, descomprime el zip**
![Morph Logo](https://image.ibb.co/d8v87w/Descomprimir.png)

**3. Una vez descomprimido, copia el folder "dist" en tu proyecto**
![Morph Logo](https://image.ibb.co/gUUAnw/Proyecto1.png)

**4. Luego inserta el archivo morph-x.css en tu proyecto a travez de la etiqueta link**
![Morph Logo](https://image.ibb.co/mrGefG/Proyecto2.png)

Por ejemplo:
 ``` [html]
 <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="dist/morph-[version].css">
  </head>
 ```

## ¿Como usar mi primer componente?
 
Una vez instalado morph, la mayoría los elementos HTML usaran los estilos predefinidos, pero para ciertos colores o características deseadas se deben manejar y editar ciertas clases como mostraremos a continuación:

**Haremos una cabecera con opciones de navegación**

1. Crea primero la etiqueta header
 ``` [html]
 <header>
 </header>
 ```

2. Puedes posicionarla en la parte superior de tu página con dos clases (absolute, fixed) La segunda es en caso quieres que la cabecera sea fija.

 ``` [html]
 <header class="fixed">
 </header>
 ```
 
3. También puedes agregar el nombre del proyecto con la clase "brand" con una etiqueta "div" dentro del "header".
 ``` [html]
 <header class="fixed">
  <div class="brand">
   Proyecto
  </div>
 </header>
 ```
 El cual se verá así por defecto
 ![Morph Logo](https://image.ibb.co/d2c20G/header_basico.png)
 
 4. Para añadir las opciones de navegación deberás agregar dentro del "header" un "div" con las clases "option" y "left" o "right" para indicar la dirección donde se posicionará cada opción.

``` [html]
 <header class="fixed">
  <div class="brand">
   Proyecto
  </div>
  <div class="option left">
   <a href="">
    Opcion 1
   </a>
  </div>
 </header>
 ```
![Morph Logo](https://image.ibb.co/cgPbSw/header_option.png)

5. Para programarle más énfasis de estado o indicar la selección de alguna opción deberás añadir a cualquier opción la clase "selected".

``` [html]
 <header class="fixed">
  <div class="brand">
   Proyecto
  </div>
  <div class="option left">
   <a href="">
    Opcion 1
   </a>
  </div>
  <div class="option left selected">
   <a href="">
    Opcion 2
   </a>
  </div>
 </header>
 ```
![Morph Logo](https://image.ibb.co/mZEzfG/header_selected.png)

6. Si deseas cambiar de color a la cabecera deberás añadir las clases (red, blue, yellow, green, black, gray).

Por ejemplo, cambiaremos a rojo:

``` [html]
 <header class="fixed red">
  <div class="brand">
   Proyecto
  </div>
  <div class="option left">
   <a href="">
    Opcion 1
   </a>
  </div>
  <div class="option left selected">
   <a href="">
    Opcion 2
   </a>
  </div>
 </header>
```
![Morph Logo](https://image.ibb.co/czod7w/header_red.png)

¡Y listo! Así ya tienes los elementos necesarios para crear y programar una cabecera con opciones de navegación.

- Para más detalles visita [morph.pe](https://morph.pe)
