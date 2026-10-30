# Demo Dots — Market

Tienda de pruebas autónomas para agentes de navegador. HTML, CSS y JavaScript sin dependencias, servicios externos, login ni pagos reales.

## Ejecutar

Node.js 20 o superior:

```sh
npm run dev
# http://localhost:3000
npm test
```

Puerto configurable con `PORT`. El servidor escucha en todas las interfaces para permitir acceso desde otro dispositivo; úsalo solo en un entorno de pruebas.

## Flujos para Dots

1. Buscar «Studio»: aparece un producto. Buscar «inexistente»: estado sin resultados.
2. Filtrar Hogar: dos productos. Ordenar por precio ascendente: taza antes de lámpara.
3. Abrir producto, añadir al carrito, cambiar cantidad, eliminar y comprobar carrito vacío.
4. Reloj Minimal está agotado; no permite añadirlo. Auriculares tienen límite de cinco unidades.
5. Añadir auriculares y taza: subtotal $107 y envío gratis. Aplicar DOTS10: total $96.30. Un cupón incorrecto muestra error.
6. Solo una taza: $18 + $5 de envío = $23.
7. Abrir checkout y enviar vacío: validación obligatoria. Probar correo inválido. Completar con datos ficticios y aceptar compra simulada.
8. Confirmar: aparece DOTS-0001, carrito vacío y pedido visible en Mis pedidos. Recargar conserva el historial.
9. Reiniciar demo y aceptar el diálogo: borra carrito, descuentos e historial. El siguiente pedido vuelve a DOTS-0001.
10. Probar a 390px y 1440px y capturar catálogo, detalle, carrito, validación y confirmación.

## Estado y automatización

Estado por navegador en localStorage, clave `dots-demo-v1`. Usar un contexto de navegador independiente por agente o reiniciar antes de cada caso. No se guardan datos de entrega. Precios USD; envío gratis desde $100 antes de descuento. Selectores accesibles por nombre y tarjetas con `data-testid="product-1"` a `product-6`.

Rutas hash: `#catalog`, `#product/1`, `#cart`, `#checkout`, `#orders`, `#order/DOTS-0001`. Sin backend de pedidos: no es una tienda de producción. Los tests incluidos verifican cálculos y fixtures; los flujos de navegador todavía requieren validación visual.

## Git

Repositorio independiente: https://github.com/AntonioMelgarMendez/demo-dots.git
Rama principal: `main`.
