 $('body').css("background", "url('http://www.lostmagic.ru/useruploads/images/desk" + (Math.trunc(Math.random() * 5) + 1) + "_1920x1200.jpg') no-repeat center center fixed");
 
$(document).ready(function () {

  //nav-panel buttons
  $('#nav-bar').html(function () {
    var newHtml = '';
    for (var x in names) {
      newHtml += '<button class="nav-button" id="' + names[x].id + '" >' + names[x].nm + '</button>';
    }
    return newHtml;
  });

  $('.eventbox').on('click', "a", function () {
    $(this).parent().children('div').toggle('normal');
    return false;
  });

  $('.nav-button').click(function () {
    $('.itembox').html('');
    $('.eventbox').html('');
    switch ($(this).attr("id")) {
      case 'home':
        alert("НАЖАЛОСЬ " + $(this).attr("id"));
        break;
      case 'items':
         $('.itembox').html(makeItemHTML());
        break;
      case 'mobs':
        alert("НАЖАЛОСЬ " + $(this).attr("id"));
        break;
      case 'events':
        $('.eventbox').html(makeEventHTML());
        break;
      case 'quests':
        alert("НАЖАЛОСЬ " + $(this).attr("id"));
        break;
    }

  });
});