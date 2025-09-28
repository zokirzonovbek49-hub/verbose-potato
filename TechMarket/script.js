// Фильтрация товаров по категориям
document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт загружен!'); // Для отладки
    
    // Фильтрация товаров
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    console.log('Найдено кнопок фильтра:', filterButtons.length);
    console.log('Найдено карточек товаров:', productCards.length);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Клик по кнопке:', this.textContent);
            
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            console.log('Выбранная категория:', category);
            
            // Показываем/скрываем товары в зависимости от категории
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || category === cardCategory) {
                    card.style.display = 'block';
                    console.log('Показываем товар:', card.querySelector('h3').textContent);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Добавление товаров в корзину
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBtn = document.querySelector('.cart-btn');
    let cartCount = 0;
    
    console.log('Найдено кнопок "В корзину":', addToCartButtons.length);
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartBtn.textContent = `Корзина (${cartCount})`;
            
            // Анимация добавления в корзину
            const originalText = this.textContent;
            this.textContent = 'Добавлено!';
            this.style.background = '#10b981';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
            
            console.log('Товар добавлен в корзину. Всего товаров:', cartCount);
        });
    });
    
    // Плавная прокрутка к секциям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Прокрутка к секции:', targetId);
            }
        });
    });
    
    // Кнопка "Смотреть каталог" в hero секции
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const catalogSection = document.querySelector('#catalog');
            if (catalogSection) {
                catalogSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});