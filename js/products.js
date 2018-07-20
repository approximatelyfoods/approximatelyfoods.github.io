var products;

$(document).ready(function() {
  $.getJSON('data/products.json', function(data) {
    products = data;
    // console.log(data);
  });

  // hack to get the identifier of each element
  $('#products-container img').each(function(i, e) {
    var src = $(this).attr('src');
    src = src.replace('images/products/', '').replace('.png', '');
    // console.log(src);
    $(this).click(function() {
      // console.log(products[src]);
      popper(products[src]);
    });
  });
  var $popper = $('#popper').click(function() {
    $(this).toggleClass('visible');
  });
  $('#popper-close').click(function() {
    $popper.toggleClass('visible');
  });
  $('#popper .container').click(function(e) {
    e.stopPropagation();
  })
});

function popper(data) {
  // $('#popper-overlay').toggleClass('visible');
  $('#popper').toggleClass('visible');
  $('#popper-img').attr('src', data.img);
  $('#popper-title').text(data.title);
  $('#popper-text').text('');
  setTimeout(function() {
    typer(data.text, "#popper-text", 1.5)
  }, 200);

}
