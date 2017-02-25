function checkOnclickEvent(guzik) {
  console.log(guzik);
}
var list = document.getElementById('list');
var add = document.getElementById('addElem');
var number = document.getElementsByTagName('li').length;

add.addEventListener('click', function() {
    list.innerHTML += '<li>item ' + number + '</li>';
    number++;
});
