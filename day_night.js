var set = {
	linkColor: function(color){
	// var	a_list = document.querySelectorAll('a');
	// var i = 0;
	// while (i < a_list.length) {
	// 	a_list[i].style.color = color;
	// 	i += 1;
	// }

	// With jQuery(Using Google jQuery CDN below)
	// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	$('a').css('color', color);
}
	}

function dayNightHandler(self){
	var target = document.querySelector('body')
if(self.value === 'day'){
	target.style.backgroundColor = 'rgb(0,0,0, 0.87)';
	target.style.color = 'white';
	self.value = 'night';


	set.linkColor('powderblue');

} else{
	target.style.backgroundColor = 'white';
	target.style.color = 'black';
	self.value = 'day';

	set.linkColor('blue');
}
}