//登录
const users = {
  "admin": "123456"
};

function myLogin() {
  var sjyx = document.forms["denglu"]["sjyx"].value;
  var mima = document.forms["denglu"]["mima"].value;

  if (sjyx === "" || sjyx === "用户名") {
    alert("用户名不能为空！");
    return false;
  }
  if (mima === "" || mima === "密码") {
    alert("密码不能为空！");
    return false;
  }

  // 根据存储的用户信息进行验证
  if (users[sjyx] === mima) {
    window.location.href = "首页.html";
  } else {
    alert("登录名或密码错误！");
    return false;
  }
}



//注册
function zhuce(){
	var sjyx = document.forms["fo"]["sjyx"].value;
	  var mima = document.forms["fo"]["mima"].value;
	
	  if (sjyx === "" || sjyx === "用户名") {
	    alert("用户名不能为空！");
	    return false;
	  }
	  if (mima === "" || mima === "密码") {
	    alert("密码不能为空！");
	    return false;
	  }
	
	 
	window.open("注册成功.html");
}
