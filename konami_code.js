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


function init() {
  // your code here
  addEventListener('keydown',function(e){
    var key = e.key
    var requiredKey = code[position]
    if (key === requiredKey) {
      position++
      if (position === code.length) {
        alert('Congratulations')
        position = 0
      }
      else {
        position = 0
      }
    }
  })
}
