$(function () {
	// 页面加载时获取地理位置
	$('#showCity').html(localStorage.getItem("location"));
    // 点击城市列表时候 修改存储在本地的地理位置，并且修改页面显示
    $('.footer').delegate('i', 'click', function () {
	    // console.log($(this).html());
	    window.localStorage.setItem("location",$(this).html());
	    $('#showCity').html($(this).html());
	    window.location.href = "/service.html"
    });
    
    /*$('#city').click(function () {
	    $('#showCity').html(localStorage.getItem("location"));
    })*/
});