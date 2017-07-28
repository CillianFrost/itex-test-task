$(document).ready(function() {
  var a, moveLeft, moveRight;
  console.log('works');
  moveLeft = function() {
    $('.slider_images').children().eq(0).animate({
      width: 0
    }, 100);
    setTimeout((function() {
      var elem;
      elem = $('.slider_images').children().eq(0).clone();
      $('.slider_images').children().eq(0).remove();
      $('.slider_images').append(elem);
      elem.css('width', 1000);
    }), 100);
  };
  moveRight = function() {
    var elem;
    elem = $('.slider_images').children().eq(2).clone();
    elem.css('width', 0);
    $('.slider_images').prepend(elem);
    elem.animate({
      width: 1000
    }, 100);
    elem = $('.slider_images').children().eq(3).remove();
  };
  a = 1;
  $('.slider_navigation_right').on('click', function() {
    if (a === 1) {
      a = 0;
      moveRight();
      setTimeout((function() {
        a = 1;
      }), 300);
    } else {
      return 0;
    }
  });
  $('.slider_navigation_left').on('click', function() {
    if (a === 1) {
      a = 0;
      moveLeft();
      setTimeout((function() {
        a = 1;
      }), 300);
    } else {
      return 0;
    }
  });
  $('.goods_main_block_description_arrow').click(function() {
    $('.goods_main_block_radio').toggle('100');
    $('.goods_main_block_description_arrow').toggleClass('goods_main_block_arrow_up');
    return $('.goods_main_block_description_arrow').toggleClass('goods_main_block_arrow_down');
  });
  $('.goods_main_block_information_arrow').click(function() {
    $('.goods_main_block_text').toggle('');
    $('.goods_main_block_information_arrow').toggleClass('goods_main_block_arrow_down');
    return $('.goods_main_block_information_arrow').toggleClass('goods_main_block_arrow_up');
  });
  $('.goods_main_block_radio_box').eq(0).click(function() {
    $('.goods_main_block_price_this').text('125.000 Р.');
    $(this).children().eq(0).addClass('goods_main_block_radio_box_this_check');
    $('.goods_main_block_radio_box').eq(1).children().eq(0).removeClass('goods_main_block_radio_box_this_check');
    return $('.goods_main_block_radio_box').eq(2).children().eq(0).removeClass('goods_main_block_radio_box_this_check');
  });
  $('.goods_main_block_radio_box').eq(1).click(function() {
    $('.goods_main_block_price_this').text('150.000 Р.');
    $(this).children().eq(0).addClass('goods_main_block_radio_box_this_check');
    $('.goods_main_block_radio_box').eq(0).children().eq(0).removeClass('goods_main_block_radio_box_this_check');
    return $('.goods_main_block_radio_box').eq(2).children().eq(0).removeClass('goods_main_block_radio_box_this_check');
  });
  return $('.goods_main_block_radio_box').eq(2).click(function() {
    $('.goods_main_block_price_this').text('170.000 Р.');
    $(this).children().eq(0).addClass('goods_main_block_radio_box_this_check');
    $('.goods_main_block_radio_box').eq(1).children().eq(0).removeClass('goods_main_block_radio_box_this_check');
    return $('.goods_main_block_radio_box').eq(0).children().eq(0).removeClass('goods_main_block_radio_box_this_check');
  });
});
