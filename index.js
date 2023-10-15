const http = require('http');

const tareas = [
  { id: 1, descripcion: 'Hacer la compra', completada: false, descripcionAdicional: 'Comprar alimentos y productos de limpieza' },
  { id: 2, descripcion: 'Lavar el coche', completada: true, descripcionAdicional: 'Lavar el coche en el lavado automático' },
  { id: 3, descripcion: 'Estudiar para el examen', completada: false, descripcionAdicional: 'Revisar apuntes y hacer ejercicios' }
];

const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.url === '/tareas' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(tareas));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ mensaje: 'Ruta no encontrada' }));
  }
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`Servidor en ejecución en http://localhost:${puerto}/`);
});