$(function () {
  //自动下拉
  $('#rw-dropdown').hover(function () {
    $('#rw-dropdown').dropdown('open');
  });
  $('#rw-dropdown').mouseout(function () {
    setTimeout(function () {
      $("#rw-dropdown-content").hover(function () {
      }, function () {
        $('#rw-dropdown').dropdown('close');
      });
    }, 300);
  });

  //初始化验证码
  if ($('#captcha')) {
    var src = '/captcha?' + Math.random();
    $('#captcha').attr('src', src).removeAttr('class', 'am-hide');
    //点击更换
    $('#captcha').click(function () {
      this.src = '/captcha?' + Math.random();
    });
  }
  //注册提示
  if (document.location.pathname.split('/')[1] == 'price') {
    var priceCount = 0;
    var arrCookie = document.cookie.split("; ");
    for (var i in arrCookie) {
      if (arrCookie[i].split('=')[0] == 'priceCount') {
        priceCount = parseInt(arrCookie[i].split('=')[1]) + 1;
      }
    }
    if (priceCount == '' || priceCount == undefined) {
      document.cookie = 'priceCount=0;path=/';
    } else {
      document.cookie = 'priceCount=' + priceCount + ';path=/';
    }
    if (priceCount == 2) {
      $('#loginConfirm').modal('open');
      document.cookie = 'priceCount=-1;path=/';
    }
  }
});
function showCase(url) {
  var windowWidth = $(window).width() - 120;
  var windowHeight = $(window).height() - 100;
  $('#caseFrame').attr('src', url);
  $('#caseHref').attr('href', url);
  $('#caseFrame').width(windowWidth - 20);
  $('#caseFrame').height(windowHeight - 48);
  $('#caseModal').modal({width: windowWidth, height: windowHeight}).modal('open');
}
