const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var position = 0
function init() {
  // your code here
  document.body.addEventListener('keydown', function(e){
  
    if (e === codes[position]) {
      position++
      if (position === codes.length) {
        alert('Congratulations')
        position = 0
      }
      else {
        position = 0
      }
    }
  })
}
