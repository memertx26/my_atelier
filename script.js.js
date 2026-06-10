// ===== script.js =====

// 1. Приветственное сообщение при открытии сайта
window.addEventListener('DOMContentLoaded', function() {
  console.log('Добро пожаловать в Домашнее ателье "Уютный стиль"!');
  // Можно раскомментировать, если хотите всплывающее окно:
  // alert('Добро пожаловать в Домашнее ателье "Уютный стиль"!');
});

// 2. Кнопка "Узнать больше" — плавный скролл к прайс-листу
function scrollToPrice() {
  const priceSection = document.querySelector('h2');
  if (priceSection) {
    priceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// 3. Форма на странице контактов — сообщение об отправке
function submitForm(event) {
  event.preventDefault(); // Отменяем реальную отправку формы
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  
  if (name && email) {
    alert('Спасибо, ' + name + '! Ваше сообщение отправлено. Мы ответим вам на ' + email);
  } else {
    alert('Пожалуйста, заполните все поля формы.');
  }
}

// 4. Кнопка "Позвонить нам" — имитация звонка
function callUs() {
  alert('Вы хотите позвонить нам по телефону +7 (999) 123-45-67');
}

// 5. Кнопка "Запросить портфолио" — сообщение
function requestPortfolio() {
  alert('Спасибо за интерес! Мы вышлем вам портфолио на указанный email.');
}

// 6. Кнопка "Записаться на примерку" — сообщение
function bookFitting() {
  alert('Спасибо! Мы свяжемся с вами для подтверждения примерки.');
}

// Привязываем функции к глобальной области видимости
window.scrollToPrice = scrollToPrice;
window.submitForm = submitForm;
window.callUs = callUs;
window.requestPortfolio = requestPortfolio;
window.bookFitting = bookFitting;

console.log('JavaScript загружен!');