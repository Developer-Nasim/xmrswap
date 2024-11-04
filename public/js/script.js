$(document).ready(function () { 
  if (document.querySelectorAll('.header_item_lang').length > 0) {
    
    const ChangeLang = document.querySelector('.header_item_lang')

    ChangeLang.addEventListener('click', () => {
      translatePage()
    })

    // Переводы текста на странице
    const translations = {
      en: {
        translate_1: "Reserve <img src=\"/img/monero.svg\" alt=\"\"> <span>0 </span> XMR",
        translate_2: "24h volume:  <img src=\"/img/monero.svg\" alt=\"\"><span>0 </span> XMR",
        translate_3: "<a href=\"#!\">Contacts</a>",
        translate_4: "<a href=\"#!\">FAQ</a>",
        translate_5: "Payment",
        translate_6: "Send funds to the <span>specified</span> address",
        translate_7: "QR For payment",
        translate_8: "Order",
        translate_9: "Guranted letter",
        translate_10: "Amount to send",
        translate_11: "Wallet to send to",
        translate_12: "Order status",
        translate_13: "Waiting for payment",
        translate_14: "Remaining time",
        translate_15: "Amount to receive",
        translate_16: "Your XMR address",
        translate_17: "Crypto",
        translate_18: "Time"

      },
      ru: {
        translate_1: "Резерв <img src=\"/img/monero.svg\" alt=\"\"> <span>0 </span> XMR",
        translate_2: "24h объем:  <img src=\"/img/monero.svg\" alt=\"\"><span>0 </span> XMR",
        translate_3: "<a href=\"#!\">Контакты</a>",
        translate_4: "<a href=\"#!\">FAQ</a>",
        translate_5: "Оплата",
        translate_6: "Отправьте средства на <span>указанный</span> адрес",
        translate_7: "QR-код для оплаты",
        translate_8: "Заказ",
        translate_9: "Гарантийное письмо",
        translate_10: "Сумма для отправки",
        translate_11: "Кошелек для отправки",
        translate_12: "Статус заказа",
        translate_13: "Ожидание оплаты",
        translate_14: "Оставшееся время",
        translate_15: "Сумма к получению",
        translate_16: "Ваш XMR-адрес",
        translate_17: "Крипто",
        translate_18: "Время"
      }
    };

    // Переменная для отслеживания текущего языка
    let currentLanguage = "en";

    function translatePage() {
      
      // Переключаем язык
      currentLanguage = currentLanguage === "en" ? "ru" : "en";

      // Получаем все элементы с классом header_item_info
      console.log("translatePage called");
      const items = document.querySelectorAll(".translate");
      console.log("Items found:", items.length);
      // Обновляем текст для каждого элемента
      items.forEach(item => {
        const key = item.getAttribute("data-key");
        if (translations[currentLanguage][key]) {
          item.innerHTML = translations[currentLanguage][key];
        } else {
          console.warn(`Translation key "${key}" not found for language "${currentLanguage}"`);
        }
      });

      
      // Обновляем элемент с классом header_item_lang
      const langElement = document.querySelector(".header_item_lang");
      if (currentLanguage === "en") {
        langElement.innerHTML = `EN <img src="/img/lang_en.svg" alt="">`;
      } else {
        langElement.innerHTML = `RU <img src="/img/lang_ru.svg" alt="">`;
      }
    }
  }
});


$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $("html, body").animate(
      {
        scrollTop: dn,
      },
      1000
    );

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});

  

// СКРИПТ НА ПОКАЗ КОМИССИИ

$(document).ready(function() {
  $('.main_rect_adress_rect_item_input').on('input', function() {
      if ($(this).val().trim()) {
          $('.main_rect_bottom_item_text').text('3% + 0.0007');
      } else {
          $('.main_rect_bottom_item_text').text('-');
      }
  });
});

 


// ПОКАЗАТЬ/СКРЫТЬ ОКНО С ПОЛЗУНКОМ

$(document).ready(function() {
  // Привязываем обработчик события клика к элементу с классом .main_rect_bottom_item_range_main
  $('.main_rect_bottom_item_range_main').on('click', function() {
    // Проверяем, виден ли элемент с классом .main_rect_bottom_item_range_time
    if ($('.main_rect_bottom_item_range_time').is(':visible')) {
      // Если виден, скрываем с анимацией
      $('.main_rect_bottom_item_range_time').slideUp();
    } else {
      // Если не виден, показываем с анимацией
      $('.main_rect_bottom_item_range_time').slideDown();
    }
  });
});

 



// ПОЛЗУНОК RANGE И ПОДСТАНОВКА ЗНАЧЕНИЯ
$(document).ready(function() {
  if (document.querySelectorAll('#rangeInput').length > 0) {
    
  const elem = document.getElementById('rangeInput');

  // Определяем шаги
  const steps = [0, 1, 6, 12, 18, 24];

  // Функция для обновления значений
  var rangeValue = function() {
      const value = parseInt(elem.value); // Получаем текущее значение ползунка
      let newValue;

      // Определяем новое значение на основе текущего значения ползунка
      if (value >= 0 && value <= 24) {
          if (value === 0) {
              newValue = "Instant"; // Если значение 0, устанавливаем "instant"
          } else if (value < 6) {
              newValue = steps[1] + 'H'; // 1H
          } else if (value < 12) {
              newValue = steps[2] + 'H'; // 6H
          } else if (value < 18) {
              newValue = steps[3] + 'H'; // 12H
          } else if (value < 24) {
              newValue = steps[4] + 'H'; // 18H
          } else {
              newValue = steps[5] + 'H'; // 24H
          }
      }

      const targets = document.querySelectorAll('.value'); // Получаем все элементы с классом .value
      
      targets.forEach(function(target) {
          target.innerHTML = newValue; // Обновляем значение
      });
  }

  // Обработчик события input
  elem.addEventListener("input", rangeValue);

  // Инициализируем значение при загрузке страницы
  rangeValue(); // Вызываем функцию, чтобы установить начальное значение
  }
});


// СКРИПТ НА МИНИМУМ/МАКСИМУМ В ИНПУТЕ ВВОДА

$(document).ready(function() {
  $('#input_minmax').on('input', function() {
      const value = parseFloat($(this).val()); // Преобразуем значение в число

      // Удаляем класс ошибки, если он существует
      $('.main_rect_up_item_maxmin').removeClass('main_rect_up_item_maxmin_error');
      // Сбрасываем изображение на исходное
      $('.main_rect_up_item_maxmin img').attr('src', '/img/main_info.svg');

      // Проверяем условия
      if (value < 0.003 || value > 300) {
          $('.main_rect_up_item_maxmin').addClass('main_rect_up_item_maxmin_error'); // Добавляем класс ошибки
          // Меняем изображение на ошибочное
          $('.main_rect_up_item_maxmin img').attr('src', '/img/main_info_error.svg');
      }
  });
});



// КОПИРОВАНИЕ И ПОКАЗ ОКНА 

$(document).ready(function() {
  $('.footer_item_nav_copy').click(function() {
      var text = $('#text-to-copy').text(); // Получаем текст из элемента
      var input = $('<textarea>').val(text).appendTo('body').select(); // Создаем временный элемент
      document.execCommand('copy'); // Копируем текст в буфер обмена
      input.remove(); // Удаляем временный элемент
      
      // Показываем уведомление с анимацией
      $('.copy').slideDown();

      // Скрываем уведомление через 2 секунды с анимацией
      setTimeout(function() {
          $('.copy').slideUp();
      }, 2000);
  });
});



// ВЫБОР И ПОДСТАНОВКА ЗНАЧЕНИЙ ИЗ SELECT

$(document).ready(function() {
  // Показать/скрыть список при нажатии на select_coin
  $('#select_coin').click(function() {
      // Переключаем видимость с анимацией
      $('.main_rect_up_item_right_select').slideToggle(); 

      // Поворачиваем стрелку
      $('.main_rect_up_item_right_rect_arrow').toggleClass('select_rotated');
  });

  // Обработка клика по элементам списка
  $('.main_rect_up_item_right_select_coin').click(function() {
      // Получаем изображение и текст
      var selectedImg = $(this).find('img').attr('src');
      var selectedText = $(this).contents().filter(function() {
          return this.nodeType === 3; // Получаем текстовый узел
      }).text().trim(); // Обрезаем пробелы

      // Получаем текст из span и удаляем скобки
      var selectedSpanText = $(this).find('span').text().trim().replace(/[()]/g, ''); // Удаляем скобки

      // Обновляем содержимое
      $('#select_coin_icon').attr('src', selectedImg);
      $('#select_update').html(selectedText).prepend('<img id="select_coin_icon" src="' + selectedImg + '" alt="">');
      
      // Подставляем текст из span в элементы с id="select_teg" и "select_teg_minmax"
      $('#select_teg').text(selectedSpanText); // Здесь скобки обязательны для вызова функции
      $('#select_teg_minmax').text(selectedSpanText); // Добавлено для подстановки в select_teg_minmax

      // Скрываем список после выбора с анимацией
      $('.main_rect_up_item_right_select').slideUp(); 
      // Возвращаем стрелку в исходное положение
      $('.main_rect_up_item_right_rect_arrow').removeClass('select_rotated');
  });
});




$(document).ready(function() {
  $('#addressForm').on('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      var addressInput = $('#addressInput').val();
      var errorMessage = $('#adress_format');

      // Проверяем условия
      if (addressInput.length === 95 && addressInput.startsWith('4')) {
          errorMessage.hide(); // Скрываем сообщение об ошибке
          alert("Адрес корректен!"); // Можно выполнить другие действия, если нужно
      } else {
          errorMessage.show(); // Показываем сообщение об ошибке
      }
  });
});



$(document).ready(function() {
  // Обработка клика по кнопке проверки адреса
  $('#checkAddress').on('click', function() {
      var addressInput = $('#addressInput').val().trim(); // Удаляем пробелы
      var errorMessage = $('#adress_format');

      // Проверяем условия
      if (addressInput.length === 95) {
          if (addressInput.startsWith('4')) {
              errorMessage.slideUp(); // Скрываем сообщение об ошибке с эффектом слайда
              // Перенаправление на payment.html
              window.location.href = 'payment.html';
          } else {
              errorMessage.slideDown(); // Показываем сообщение об ошибке с эффектом слайда
          }
      } else {
          errorMessage.slideDown(); // Показываем сообщение об ошибке с эффектом слайда
      }
  });

  // Обработка ввода в textarea
  $('#addressInput').on('input', function() {
      // Устанавливаем скролл на верх
      this.scrollTop = 0;
  });
});

