const categories = [
  { name: "Ensaladas", items: [["Marroquí", "5 €", "Pimiento verde y rojo, cebolla roja, pepino, tomate, aceituna negra y perejil."], ["César", "8 €", "Pechuga de pollo, maíz, queso, pan tostado, huevo, tomate y lechuga."], ["Rusa", "7,5 €", "Langostino, atún, huevo, aceituna, patata y zanahoria."], ["Mixta", "6 €", "Pasta, remolacha, arroz, patata, lechuga y pepino."]] },
  { name: "Sopas y pastela", items: [["Harira", "3 €", "Tomate, cebolla, cilantro, jengibre, fideo fino y azafrán."], ["Sopa de pescado", "4 €", "Gambas, calamares, langostinos, mejillones y pescado blanco."], ["Pastela de pollo", "5 €", "Pollo, cebolla, huevo, ras el hanout, almendra y azúcar glas."], ["Pastela de pescado", "5,5 €", "Pescado, gambas, calamares y especias."]] },
  { name: "Cuscús", items: [["Cordero", "12 €"], ["Ternera", "10 €"], ["Pollo", "9 €", "Todos los platos de cuscús con verduras y caldo."]] },
  { name: "Tajine", items: [["Ternera", "10 €", "Ciruela, pasas y canela."], ["Cordero", "12 €", "Ciruela, pasas y canela."], ["Pollo", "10 €", "Patata frita y aceitunas verdes o verduras."], ["Albóndigas", "10 €", "Salsa de tomate, huevo y patatas fritas."], ["Gambas", "12 €", "Salsa de tomate."]] },
  { name: "Pinchitos", items: [["Ternera", "13 €", "3 pinchitos y patatas fritas."], ["Carne picada", "12 €", "3 pinchitos, ensalada y patatas fritas."], ["Pollo", "12 €", "3 pinchitos, ensalada y patatas fritas."]] },
  { name: "Platos", items: [["Pollo", "10 €", "A la plancha o con especias. Ensalada marroquí y patatas fritas."], ["Hígado", "11 €", "A la plancha, ensalada mixta y patatas fritas."], ["Mixto", "13 €", "Carne picada y pollo a la plancha."], ["Royal", "16 €", "Salchichas, hígado, carne picada y pollo."], ["Calamares", "18 €", "Calamares fritos, ensalada mixta y patatas fritas."]] },
  { name: "Tacos", items: [["Pollo", "N 8 € · XL 12 €"], ["Carne picada", "N 9 € · XL 13 €"], ["Mixto", "N 10 € · XL 14 €"], ["Gambas", "N 10 € · XL 14 €"], ["Calamar", "N 10 € · XL 14 €"], ["Royal", "N 11 € · XL 15 €", "Todos con salsa andaluza, queso y patatas fritas."]] },
  { name: "Pizza", items: [["Vegetal", "6 €"], ["Margarita", "7 €"], ["Atún", "7 €"], ["Pollo", "8 €"], ["Carne picada", "9 €"], ["Marisco", "10 €"], ["Cuatro estaciones", "12 €"], ["Cuatro quesos", "8 €"]] },
  { name: "Bocadillos", items: [["Atún", "7 €"], ["Pollo", "8 €"], ["Ternera", "9 €"], ["Mixto", "10 €"], ["Calamar", "10 €"], ["Royal", "12 €", "Atún, carne y calamar."]] },
  { name: "Hamburguesas", items: [["Pollo", "7,5 €", "Pollo, tomate, cebolla, huevo, salsa de queso y salsa de perejil."], ["Carne picada", "7,5 €", "Lechuga, tomate, cebolla, huevo, salsa de queso y BBQ."], ["Mixto", "10 €", "Pollo y carne picada."]] },
  { name: "Complementos", items: [["Croquetas", "6 €"], ["Nuggets de pollo", "6 €"], ["Alitas de pollo", "6 €"], ["Ración de patatas fritas", "2,5 €"], ["Ración de pan", "0,50 €"]] },
  { name: "Bebidas", items: [["Cerveza", "1,8 €"], ["Cerveza sin alcohol", "1,8 €"], ["Zumos", "1,5 €"], ["Zumos naturales", "4 €"], ["Té moruno", "1,5 €"], ["Refrescos", "1,5 €"]] }];

const grid = document.querySelector('#menu-grid');
const filters = document.querySelector('.filters');
function render(filter = 'Todo') {
  const visible = filter === 'Todo' ? categories : categories.filter(c => c.name === filter);
  grid.innerHTML = visible.map(category => `<article class="menu-category"><h3>${category.name}</h3>${category.items.map(([name, price, note]) => `<div class="menu-item"><strong>${name}</strong><span>${price}</span>${note ? `<small>${note}</small>` : ''}</div>`).join('')}</article>`).join('');
}
['Todo', ...categories.map(c => c.name)].forEach((category, i) => {
  const button = document.createElement('button'); button.textContent = category; button.className = i === 0 ? 'active' : '';
  button.onclick = () => { document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active')); button.classList.add('active'); render(category); };
  filters.appendChild(button);
});
render();
document.querySelector('.menu-toggle').addEventListener('click', e => { const links = document.querySelector('.nav-links'); links.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', links.classList.contains('open')); });
document.querySelector('#year').textContent = new Date().getFullYear();
