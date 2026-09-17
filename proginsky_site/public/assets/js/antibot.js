document.addEventListener('DOMContentLoaded', function() {
    let clicks = 0;
    let openTime = null;
    let isFormVisible = false;
    
    // Отслеживаем клики на всех полях ввода в формах
    // Теперь ищем поля ввода в любых формах, которые могут быть на странице
    document.querySelectorAll('form input[type="text"], form input[type="tel"], form input[type="email"]').forEach(input => {
        input.addEventListener('click', function() {
            clicks++;
            console.log('Клик по полю, всего кликов:', clicks);
        });
    });

    function checkFormsVisibility() {
        // Проверяем видимость ВСЕХ форм на странице
        const forms = document.querySelectorAll('form'); // Ищем все формы
        let anyFormVisible = false;
        
        forms.forEach(form => {
            // Проверяем, видима ли форма (попап открыт или секция видна)
            const isVisible = form.offsetParent !== null;
            
            // Проверяем, есть ли в форме нужные скрытые поля
            const hasAntibotFields = form.querySelector('input[name="form_load_time"]') !== null;
            
            if (isVisible && hasAntibotFields && !openTime) {
                openTime = Date.now();
                console.log('Форма стала видимой, время:', openTime);
            }
            
            if (isVisible && hasAntibotFields) {
                anyFormVisible = true;
            }
        });
        
        // Если все формы скрыты, сбрасываем время при следующем показе
        if (!anyFormVisible && openTime) {
            isFormVisible = false;
            openTime = null; // Сбрасываем, чтобы при следующем показе засечь новое время
            console.log('Формы скрыты, время сброшено');
        }
        
        // Обновляем значение для всех полей mouse_clicks во всех формах
        document.querySelectorAll('input[name="mouse_clicks"]').forEach(input => {
            input.value = clicks;
        });
    }
    
    setInterval(checkFormsVisibility, 500);

    // Обработчики для ВСЕХ форм, содержащих поля антибота
    document.querySelectorAll('form').forEach(form => {
        // Проверяем, есть ли в форме хотя бы одно из полей антибота
        const hasAntibotField = form.querySelector('input[name="form_load_time"], input[name="mouse_clicks"], input[name="website"]');
        
        if (hasAntibotField) {
            form.addEventListener('submit', function() {
                if (openTime) {
                    const seconds = ((Date.now() - openTime) / 1000).toFixed(2);
                    const timeInput = form.querySelector('input[name="form_load_time"]');
                    if (timeInput) {
                        timeInput.value = seconds;
                        console.log('Время заполнения:', seconds);
                    }
                }
                console.log('Всего кликов отправлено:', clicks);
            });
        }
    });
});