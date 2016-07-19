( function( $ ) {
$( document ).ready(function() { // Если загрузился весь HTML и картинки
if (window.console) console.log('cssmenu.js загрузилось!'); // Если активна консоль отладки браузера
$('#cssmenu > ul > li > a').click(function() { // Создать анонимную функцию, суть которой в наличие детей (child selectors) ul > li > a у div с названием cssmenu (он же класс). Смотри: https://css-tricks.com/child-and-sibling-selectors/
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});
} )( jQuery );

<!DOCTYPE html>
<html>
<body>
<!-- НАЧАЛО Меню сайта (cssmenu) -->
<div id="cssmenu">
<ul>
   <li class="active"><a href="http://буранчик.рф/index.html"><span>Главная</span></a></li>
   <li class="has-sub"><a href="#"><span>Графика</span></a>
       <ul>
         <li><a href="http://буранчик.рф/галерея1/"><span>Галерея, серия первая</span></a>
         <li><a href="http://буранчик.рф/галерея2/"><span>Галерея, серия вторая</span></a></li>
         <li><a href="http://буранчик.рф/галерея3/"><span>Галерея, серия сканов</span></a></li>
         <li><a href="http://буранчик.рф/галерея-имперка/"><span>Галерея, серия имперская</span></a></li>
         <li><a href="http://буранчик.рф/галерея-подвал/"><span>Галерея, грубая серия</span></a></li>
         <li><a href="http://буранчик.рф/галерея-приколов/"><span>Галерея, приколов серия</span></a></li>
      </ul>
      <li class="has-sub"><a href="#"><span>Статьи</span></a>
       <ul>
         <li><a href="http://буранчик.рф/глич-хоп/"><span>Глич-Хоп</span></a>
         <li class="last"><a href="http://буранчик.рф/казуу/"><span>Казуу</span></a></li>
      </ul>
            <li class="has-sub"><a href="#"><span>Ещё</span></a>
       <ul>
         <li><a href="http://буранчик.рф/музыка/"><span>Музыка</span></a>
         <li class="last"><a href="http://буранчик.рф/видео/"><span>Видео</span></a></li>
         <li class="last"><a href="http://буранчик.рф/земледелие/"><span>Земледелие</span></a></li>
      </ul>
      <li><a href="https://github.com/Buranek/Unreleased"><span>Репозиторий отменённых проектов</span></a>
      <li class='last'><a href="https://github.com/Buranek/pix"><span>Репозиторий значков</span></a></li>
</ul>
<br>
</div>
<!-- КОНЕЦ Меню сайта (cssmenu) -->

</body>
</html> 
