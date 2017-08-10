$(function () {
	// 首页 菜单交互效果
	$('.navname').hover(
		function () {
			$(this).removeClass('navlist').addClass('navarrow')
				.find('ul').removeClass('navhid').addClass('navitem');
		},
		function () {
			$(this).removeClass('navarrow').addClass('navlist')
				.find('ul').removeClass('navitem').addClass('navhid');
		}
	)
	var city = {};
	$.get('/position', function (data) {
		if (data.code==0) {
		    city = data.city;
		}
	})
	var seller = {};
	$.get('/service', function (data) {
		console.log(data);
		if (data.code == 0) {
			seller = data.data;
		    console.log(seller)
		    let html = template('item',seller)
		}
	})

	
	
	
});