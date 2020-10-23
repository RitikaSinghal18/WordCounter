var input = document.querySelectorAll('textarea')[0];
input.addEventListener('keyup', function() {

 var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
 if (words) {
    count.innerHTML = words.length;
  } else {
    count.innerHTML = 0;
  }

  var remain = document.getElementById('total').value;
  var sub = remain - words.length;
  cout.innerHTML = sub;

});

var btn = document.getElementById('db');
btn.addEventListener("click" , function(){
	cout.innerHTML = 0;
	count.innerHTML = 0;
	inp.value = "" ;
})