$(document).ready(function(){
if (window.console) console.log('ШБМНК.js версии 1.5 загрузилось!'); // Если активна консоль отладки браузера, показать текст
	// Режим окулиста
	$("button id=go bigger").click(function(){ // Если была нажата кнопка
		//var id = $(this).attr('go-bigger'); // Если была нажата кнопка увеличения
		// Поменять размеры шрифтов, задействованных на главной странице сайта
		$("body").css({"font-size": "175%"});
		$("h2").css({"font-size": "150%"});
		$("h3").css({"font-size": "155%"});
		$("h4").css({"font-size": "165%"});
		// Поменять картинки
		$('body').css('background-image', 'url(../images/theme-okulist/back.png)'); // Поменять общий фон на окулистический
		$('#left').css('background-image', 'url(../images/theme-okulist/left-body.png)'); // Поменять левый фон на окулистический
		$('#right').css('background', '#FFF'); // Поменять фон правого блока
		$('#footer p').css('background-image', 'url(../images/theme-okulist/footerback.png)'); // Поменять подвальный фон на окулистический
		$('#lesopark').attr('src','images/theme-okulist/lesopark.png'); //Поменять лесопарк на ЧБ
		$('#borago').attr('src','images/theme-okulist/bogaro.png'); //Поменять бораго на простое
    });
    
    // Режим НЕ-окулиста
    $("button id=go small").click(function(){ // Если была нажата кнопка
		
		// Поменять размеры шрифтов, задействованных на главной странице сайта
		$("body").css({"font-size": "100%"});
		$("h2").css({"font-size": "100%"});
		$("h3").css({"font-size": "100%"});
		$("h4").css({"font-size": "100%"});
		// Поменять картинки
		$('body').css('background-image', 'url(../images/theme/back.png)'); // Поменять общий фон на обычный
		$('#left').css('background-image', 'url(../images/theme/left-body.png)'); // Поменять левый фон на обычный
		$('#footer p').css('background-image', 'url(../images/theme/footerback.jpg)'); // Поменять подвальный фон на обычный
		$('#lesopark').attr('src','images/theme/lesopark.png'); //Поменять лесопарк на обычный
		$('#borago').attr('src','images/theme-okulist/bogaro.gif'); //Поменять бораго на обычное
    });
});
