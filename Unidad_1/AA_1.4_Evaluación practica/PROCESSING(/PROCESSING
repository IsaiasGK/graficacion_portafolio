void setup() {
  // Definimos el tamaño de la ventana (ancho, alto)
  size(600, 400); 
}

void draw() {
  background(255); // Fondo blanco
  
  // Configuramos el estilo de las líneas
  stroke(0);       // Color de la línea (negro)
  strokeWeight(3); // Grosor de la línea
  fill(255);       // Relleno blanco para que las figuras no sean transparentes

  // 1. CUERPO PRINCIPAL
  // Parte delantera (caldera)
  rect(150, 200, 150, 80);
  // Cabina trasera
  rect(300, 150, 120, 130);

  // 2. CHIMENEA Y DOMO
  // Base de la chimenea (rectángulo vertical)
  rect(170, 160, 30, 40); 
  // Punta de la chimenea (triángulo)
  // triangle(x1, y1, x2, y2, x3, y3)
  triangle(160, 160, 210, 160, 185, 120);
  
  // Cuadrado pequeño en el centro (domo)
  rect(230, 175, 25, 25);

  // 3. FRENTE DEL TREN
  // Triángulo superior pequeño
  triangle(150, 210, 150, 250, 110, 250);
  // Triángulo inferior grande
  triangle(150, 250, 150, 290, 100, 290);

  // 4. TECHO DE LA CABINA
  // Base del techo (rectángulo largo)
  rect(290, 135, 140, 15);
  // Los 3 triángulos decorativos sobre el techo
  triangle(290, 135, 336, 135, 313, 105); // Izquierdo
  triangle(336, 135, 383, 135, 360, 105); // Centro
  triangle(383, 135, 430, 135, 406, 105); // Derecho

  // 5. DETALLES DE LA CABINA
  // Ventana grande
  rect(320, 170, 80, 50);
  // Círculo pequeño decorativo 
  ellipse(400, 250, 15, 15);

  // 6. RUEDAS
  // Para las ruedas usamos ellipse(x, y, ancho, alto)
  // Rueda 1
  ellipse(180, 290, 55, 55); // Círculo externo
  ellipse(180, 290, 25, 25); // Círculo interno
  
  // Rueda 2
  ellipse(245, 290, 55, 55);
  ellipse(245, 290, 25, 25);
  
  // Rueda 3
  ellipse(310, 290, 55, 55);
  ellipse(310, 290, 25, 25);
  
  // Rueda 4
  ellipse(375, 290, 55, 55);
  ellipse(375, 290, 25, 25);
}
