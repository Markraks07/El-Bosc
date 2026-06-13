// Base de datos de la carta
const menuData = {
    "Bocadillos Calientes": [
        { name: "Lomo", price: "4,50€" },
        { name: "Tortilla", price: "4,50€" },
        { name: "Pechuga de pollo", price: "4,50€" },
        { name: "Tortilla francesa", price: "4,00€" },
        { name: "Calamar frito", price: "4,50€" },
        { name: "Panceta", price: "4,00€" },
        { name: "Frankfurt", price: "4,00€" },
        { name: "Chorizo", price: "4,00€" },
        { name: "Butifarra", price: "4,50€" },
        { name: "Bikini", price: "2,80€" },
        { name: "Hamburguesa", price: "5,50€" },
        { name: "Salchicha", price: "4,50€" }
    ],
    "Bocadillos Especiales": [
        { name: "Bosquero", desc: "bacon, queso, frankfurt, cebolla", price: "6,50€" },
        { name: "Sensación", desc: "lomo, queso, bacon, tomate, cebolla", price: "6,50€" },
        { name: "Serranito", desc: "lomo, queso, jamón, tomate, cebolla", price: "6,50€" },
        { name: "Hamburguesa completa", price: "7,80€" }
    ],
    "Bocadillos Fríos": [
        { name: "Fuet", price: "4,00€" },
        { name: "Atún", price: "4,00€" },
        { name: "Chorizo", price: "4,00€" },
        { name: "Jamón de serrano", price: "4,50€" },
        { name: "Vegetal de atún", price: "4,50€" },
        { name: "Queso curado", price: "4,50€" },
        { name: "Anchoas", price: "6,00€" }
    ],
    "Tapas Calientes": [
        { name: "Patatas al horno", price: "3,00€" },
        { name: "Chocos", price: "7,50€" },
        { name: "Tiras de pollo rebozado", price: "6,50€" },
        { name: "Calamares de la casa", price: "7,00€" },
        { name: "Sepia a la plancha", price: "7,50€" },
        { name: "Pinchos", price: "3,00€" },
        { name: "Morros", price: "4,00€" },
        { name: "Nuggets de pollo", desc: "6 uds.", price: "4,50€" },
        { name: "Croquetas", desc: "6 uds.", price: "4,50€" },
        { name: "Patatas bravas", price: "5,00€" },
        { name: "Alitas de pollo", price: "5,50€" },
        { name: "Gambas a la plancha", price: "5,50€" },
        { name: "Boquerones fritos", price: "5,50€" },
        { name: "Gambas con ajo", price: "6,50€" },
        { name: "Pimientos de padrón", price: "7,50€" },
        { name: "Boquerones con vinagre", price: "4,00€" },
        { name: "Queso frito", price: "5,50€" },
        { name: "Chipirones fritos", price: "8,00€" },
        { name: "Champiñones a la plancha", price: "4,50€" }
    ],
    "Tapas Frías": [
        { name: "Berberechos", price: "6,00€" },
        { name: "Queso curado", price: "4,00€" },
        { name: "Fuet", price: "4,50€" },
        { name: "Jamón ibérico", price: "10,50€" }
    ],
    "Platos Asiáticos": [
        { name: "Arroz tres delicias", price: "5,00€" },
        { name: "Arroz frito con gambas", price: "6,00€" },
        { name: "Arroz frito especial", price: "8,00€" },
        { name: "Arroz frito con ternera y curry", price: "6,00€" },
        { name: "Arroz frito con marisco salado", price: "6,50€" },
        { name: "Tallarines fritos tres delicias", price: "6,00€" },
        { name: "Tallarines fritos con gambas", price: "6,50€" },
        { name: "Tallarines fritos con ternera", price: "6,50€" },
        { name: "Tallarines fritos con pollo", price: "6,00€" },
        { name: "Tallarines fritos con marisco", price: "6,50€" },
        { name: "Tallarines vegetales", price: "6,00€" },
        { name: "Tallarines udon", price: "6,50€" },
        { name: "Fideos de arroz tres delicias", price: "6,00€" },
        { name: "Fideos de arroz con gambas", price: "7,00€" },
        { name: "Pan chino", price: "2,00€" },
        { name: "Bambú con setas", price: "6,00€" },
        { name: "Ternera con verdura", price: "6,50€" },
        { name: "Ternera con salsa ostras", price: "7,00€" },
        { name: "Ternera con pimienta con setas", price: "7,00€" },
        { name: "Ternera con salsa curry", price: "6,50€" },
        { name: "Ternera con champiñones", price: "6,50€" },
        { name: "Pollo con bambú y setas chinas", price: "7,00€" },
        { name: "Pollo con salsa curry", price: "6,50€" },
        { name: "Pollo con salsa picante", price: "6,50€" },
        { name: "Pollo al limón", price: "6,50€" },
        { name: "Rollitos de primavera", desc: "2 uds.", price: "4,50€" },
        { name: "Rollitos de gambas", desc: "6 uds.", price: "7,50€" }
    ],
    "Ensaladas": [
        { name: "Ensalada china", price: "5,50€" },
        { name: "Ensalada de atún", price: "5,75€" },
        { name: "Ensalada de aguacate y salmón", price: "7,00€" }
    ],
    "Platos Combinados": [
        { name: "Lomo, patatas, ensalada", price: "8,00€" },
        { name: "Bacon, patatas, ensalada", price: "8,00€" },
        { name: "Pechuga, patatas, ensalada", price: "8,00€" },
        { name: "Hamburguesa, patatas, ensalada", price: "8,00€" },
        { name: "Alitas de pollo, patatas, ensalada", price: "8,00€" },
        { name: "Salchichas, patatas, ensalada", price: "8,00€" },
        { name: "Pinchos, patatas, ensalada", price: "8,50€" },
        { name: "Chuletas de cordero, patatas, ensalada", price: "11,00€" },
        { name: "Entrecot de ternera, patatas, ensalada", price: "10,50€" },
        { name: "Gambas, patatas, ensalada", price: "11,95€" },
        { name: "Sepia, patatas, ensalada", price: "10,50€" },
        { name: "Merluza a la plancha, patatas, ensalada", price: "10,50€" },
        { name: "Calamar, patatas, ensalada", price: "10,00€" },
        { name: "Bacalao, patatas, ensalada", price: "10,00€" }
    ],
    "Platos Infantiles": [
        { name: "Nuggets y patatas", price: "4,75€" },
        { name: "Lomo y patatas", price: "4,75€" },
        { name: "Pollo y patatas", price: "4,75€" },
        { name: "Salchichas y patatas", price: "4,75€" },
        { name: "Bacon y patatas", price: "4,75€" },
        { name: "Frankfurt y patatas", price: "4,75€" },
        { name: "Hamburguesa y patatas", price: "4,75€" }
    ]
};

// Referencias a elementos del DOM
const categoryNav = document.getElementById('categoryNav');
const menuGrid = document.getElementById('menuGrid');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');

// Función para renderizar los platos de una categoría
function renderCategory(categoryName) {
    // Título de la categoría
    currentCategoryTitle.textContent = categoryName;
    
    // Efecto de transición
    menuGrid.style.opacity = 0;
    
    setTimeout(() => {
        const items = menuData[categoryName];
        let htmlStr = '';

        items.forEach(item => {
            const descHtml = item.desc ? `<div class="item-desc">${item.desc}</div>` : '';
            htmlStr += `
                <div class="menu-item">
                    <div class="item-header">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">${item.price}</span>
                    </div>
                    ${descHtml}
                </div>
            `;
        });

        menuGrid.innerHTML = htmlStr;
        menuGrid.style.transition = 'opacity 0.4s ease';
        menuGrid.style.opacity = 1;
    }, 200);

    // Actualizar clase 'active' en los botones
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.category === categoryName) {
            btn.classList.add('active');
        }
    });
}

// Inicializar la carta
function initMenu() {
    const categories = Object.keys(menuData);
    
    // Generar botones de categoría
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = category;
        btn.dataset.category = category;
        
        btn.addEventListener('click', (e) => {
            renderCategory(category);
            // Centrar el scroll horizontal en móviles
            e.target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
        
        categoryNav.appendChild(btn);
    });

    // Cargar la primera categoría al inicio
    renderCategory(categories[0]);
}

// Simulación de envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar recarga de página
    
    const btn = this.querySelector('button');
    const statusText = document.getElementById('formStatus');
    const originalText = btn.textContent;
    
    // Estado de carga
    btn.textContent = 'Enviando reserva...';
    btn.disabled = true;
    statusText.textContent = '';

    // Simular retraso de red
    setTimeout(() => {
        statusText.style.color = '#2A4B3C';
        statusText.textContent = '¡Gracias! Tu solicitud de reserva ha sido enviada. Nos pondremos en contacto contigo pronto.';
        this.reset();
        
        btn.textContent = originalText;
        btn.disabled = false;
        
        // Limpiar mensaje tras 5 segundos
        setTimeout(() => {
            statusText.textContent = '';
        }, 5000);
    }, 1500);
});

// Arrancar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initMenu);