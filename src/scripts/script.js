$('.btn-wrap').on('mouseover', function () {
  $(this).parent().addClass('btn-hover');
}).on('mouseout', function () {
  $(this).parent().removeClass('btn-hover');
})

function Copy(containerid) {
  let textarea = document.createElement('textarea');
  textarea.id = 'temp';
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = document.getElementById(containerid).innerText;
  let selector = document.querySelector('#temp');
  selector.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

$(document).ready(function () {
  if ($(window).width() <= 992) {
    $('.nav-link').on('click', function () {
      $('.modal').hide();
      $('.modal').removeClass('show');
      $('.modal-backdrop').removeClass('show');
      $('.modal-backdrop').css('display', 'none');
      $('body').css("overflow", "auto");
    });
  }
});



var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});



var lastHeartPos = { x: 0, y: 0 };

$(document).mousemove(function (event) {
  if (Math.abs(lastHeartPos.x - event.clientX) < 10 && Math.abs(lastHeartPos.y - event.clientY) < 10) {
    return; // если мышь не переместилась достаточно, чтобы создать новое сердце, то ничего не делаем
  }

  var heart = $('<div class="heart"></div>').appendTo('#heart-container');
  heart.css({
    'left': event.clientX - 25,
    'top': event.clientY - 25,
  });

  lastHeartPos = { x: event.clientX, y: event.clientY }; // сохраняем позицию последнего сердца

  setTimeout(function () {
    heart.remove();
  }, 3000);
});