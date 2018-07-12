var foods;

$(document).ready(function() {
  $.getJSON('data/foods.json', function(data) {
    foods = data;
    console.log(data);
  });

  // hack to get the identifier of each element
  $('#foods-container img').each(function(i, e) {
    var src = $(this).attr('src');
    src = src.replace('images/foods/', '').replace('.png', '');
    // console.log(src);
    $(this).click(function() {
      // console.log(foods[src]);
      popper(foods[src]);
    });
  });
});

function popper(data) {
  $('#popper-img').attr('src', data.img);
  $('#popper-title').text(data.title);
  $('#popper-text').text(data.text);
}