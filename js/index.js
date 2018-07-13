var foods;

$(document).ready(function() {
  $.getJSON('data/foods.json', function(data) {
    foods = data;
    // console.log(data);
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
  var $popper = $('#popper').click(function() {
    $(this).toggleClass('visible');
  });
  $('#popper-close').click(function() {
    $popper.toggleClass('visible');
  });
  $('#popper .container').click(function(e) {
    e.stopPropagation();
  });
});

function popper(data) {
  // $('#popper-overlay').toggleClass('visible');
  $('#popper').toggleClass('visible');
  $('#popper-img').attr('src', data.img);
  $('#popper-title').text(data.title);
  if (!!data.subtitle) {
    $('#popper-subtitle').text(data.subtitle);
  }
  $('#popper-text').text(data.text);
  // setTimeout(function() {
  //   typer(data.text, "#popper-text", 1)
  // }, 200); 
}

/*
$(document).ready(function(){
	setTimeout(function() {
    typer("Euryoryzomys emmonsae, Emmons's rice rat, is a rodent from the Amazon rainforest of Brazil in the genus Euryoryzomys of the family Cricetidae. Initially misidentified as E. macconnelli or E. nitidus, it was formally described in 1998. A ground-dwelling rainforest species, it may also be adapted to climbing trees. It occurs in a limited area south of the Amazon River in the state of Pará, a distribution that is apparently unique among the muroid rodents of the region.", ".p2", 1.5)
  }, 1500); 
});
*/