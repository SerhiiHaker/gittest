$(document).ready(function () {
	$('.nav a [href^="#"]').click(function () {/* Вибрати силки із меню */
		var offset = $('.nav').innerHeight();/* висота меню, отримуємо динамічно */
		var target = $(this).attr('href');/* зберігаємо значення атрибута href */
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset /* віднімаємо висоту меню */
		}, 500);/* час анімації */
		$('.nav a [href^="#"]').removeClass('active');/* видаляємо клас active у всіх пунктах меню */
		$(this).addClass('active');/* добавляємо клас active активній силці */
		return false;
	});
});