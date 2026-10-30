export const products=[
{id:1,name:'Auriculares Studio',category:'Tecnología',price:89,stock:5,icon:'🎧',color:'#dedaf4',description:'Sonido envolvente, diseño ligero y hasta 30 horas de música.'},
{id:2,name:'Mochila Everyday',category:'Accesorios',price:65,stock:8,icon:'🎒',color:'#ead7bd',description:'Todo lo que necesitas, siempre contigo. Compartimento para laptop.'},
{id:3,name:'Lámpara Halo',category:'Hogar',price:45,stock:4,icon:'💡',color:'#f4e7b4',description:'Luz cálida regulable para darle otra vida a tu escritorio.'},
{id:4,name:'Cámara Pocket',category:'Tecnología',price:129,stock:3,icon:'📷',color:'#d2e0d6',description:'Captura los pequeños momentos. Cámara compacta de uso diario.'},
{id:5,name:'Taza Sunday',category:'Hogar',price:18,stock:10,icon:'☕',color:'#eacdc6',description:'Cerámica artesanal para mañanas sin prisa. Capacidad de 350 ml.'},
{id:6,name:'Reloj Minimal',category:'Accesorios',price:75,stock:0,icon:'⌚',color:'#d5dfeb',description:'Líneas simples y una correa cómoda. Un clásico de todos los días.'}];
export function totals(cart,coupon=''){const subtotal=cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.qty,0);const discount=coupon==='DOTS10'?Math.round(subtotal*10)/100:0;const shipping=subtotal===0||subtotal>=100?0:5;return {subtotal,discount,shipping,total:Math.round((subtotal-discount+shipping)*100)/100};}
