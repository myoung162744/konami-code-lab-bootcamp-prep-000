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
    const key = e.key
    var requiredKey = codes[position]
    if (key === requiredKey) {
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
