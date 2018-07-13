var $document, $wrapper, h, w;

$document = $(document).ready(function() {
  $wrapper = $('#wrapper');	// content jquery object
  $parallax = $('.parallax'); // layers with parallax
	w = $(window).width();		// window width
  h = $(window).height();		// window height
  
});

function typer(text, target, speed){
  var $target = $(target);
  $target.text("");
	var content = text.split("");
  var i = 0;
	function show(){
		if(i < content.length) {		
			$target.append(content[i]);
			i++;
		}
	};
	var timer = setInterval(show, speed);	
};

/*
$document.on("mousemove", function(e) {
	// console.log(e.pageX, e.pageY);
	var offsetX = 0.5 - e.pageX / w,	//cursor position X
    offsetY = 0.5 - e.pageY / h,	//cursor position Y
		dy = e.pageY - h / 2,			//@h/2 = center of poster
		dx = e.pageX - w / 2,			//@w/2 = center of poster
		theta = Math.atan2(dy, dx),		//angle between cursor and center of poster in RAD
		angle = theta * 180 / Math.PI - 90, //convert rad in degrees
		transformValue = 'rotateX(' + offsetY * 10 + 'deg) rotateY(' + -offsetX * 10 + 'deg)'; //poster transform

	//get angle between 0-360
	if (angle < 0) {
		angle = angle + 360;
	}

	//poster transform
	$wrapper.css('transform', transformValue);

	//parallax foreach layer
	$parallax.each(function() {
		var $this = $(this),
			offsetLayer = $this.data('offset') || 0,
			transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

		$this.css('transform', transformLayer);
	});

});
*/