function isNumeric(strNum) {
  if (typeof strNum === "number") return true
  if (typeof strNum != "string") return false
  return !isNaN(strNum) && 
         !isNaN(parseFloat(strNum)) 
}

function changeTeam(index) {
  var TEAM_BUTTON_NAME = "p-team_sidebar__item"
  var elements = document.getElementsByClassName(TEAM_BUTTON_NAME)
  var element = elements[index-1]
  if (!element) return
  element.click()
}

document.body.addEventListener('keydown', function(e) {
  if (isNumeric(e.key) && e.ctrlKey) {
    changeTeam(Number(e.key))
    e.preventDefault();
  }
})

