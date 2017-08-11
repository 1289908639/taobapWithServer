$(function () {
	// 获取城市列表信息
	var city = {};
	$.get('/position', function (data) {
		if (data.code==0) {
		    city = data.city;
		}
	})
	
	//通过ajax请求并保存服务商信息
	var data = {};
	$.get('/service', function (res) {
		if (res.code == 0) {
			data = res.data;
		    // console.log(data.service)
			let navList = template("navList", data);
		    $('#navUl').append(navList);
		    
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
			);
			
			let homeListItem = data.category.map((value, index) => {
				//console.log(value.category);
				let service = data.service.filter((val, index) => {
					return val.category === value.category
				})
				// 给每一个分类 添加一个经过过滤的数组，这些数组是从service 数组中过滤出来的
				value.service = service;
			})
			
			let homeList = template('item1',data)
			console.log(homeList)
			$("#homeList").append(homeList)
		}
	})
	
	
	
	
});