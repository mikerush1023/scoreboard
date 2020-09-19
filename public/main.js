function main() {
  let teamOneScore = 0

  // Change Team 1 Name
  const teamOneNameElement = document.querySelector('.team1 h2')

  console.log(teamOneNameElement)

  function handleChangeTeamOneName(event) {
    const elementThatChanged = event.target

    const inputFieldValue = elementThatChanged.value

    teamOneNameElement.textContent = inputFieldValue
  }

  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', handleChangeTeamOneName)

  // Team One add points
  function incrementTheScoreForTeamOne() {
    console.log('I clicked the button')

    teamOneScore = teamOneScore + 3
    console.log(teamOneScore)

    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)

    teamOneScoreElement.textContent = teamOneScore
  }

  const teamOneAddButton = document.querySelector('.team1 .add')
  console.log(teamOneAddButton)

  teamOneAddButton.addEventListener('click', incrementTheScoreForTeamOne)

  // Team One subtract points
  function decrementTheScoreForTeamOne() {
    console.log('I clicked the button')

    teamOneScore = teamOneScore - 3
    console.log(teamOneScore)

    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)

    teamOneScoreElement.textContent = teamOneScore
  }

  const teamOneSubtractButton = document.querySelector('.team1 .subtract')
  console.log(teamOneSubtractButton)

  teamOneSubtractButton.addEventListener('click', decrementTheScoreForTeamOne)

  // Team Two

  let teamTwoScore = 0

  // Team Two Name
  const teamNameTwoElement = document.querySelector('.team2 h2')

  console.log(teamNameTwoElement)

  function handleChangeTeamTwoName(event) {
    const elementThatChanged = event.target

    const inputFieldValue = elementThatChanged.value

    teamNameTwoElement.textContent = inputFieldValue
  }

  const teamTwoInput = document.querySelector('.team2 input')
  teamTwoInput.addEventListener('input', handleChangeTeamTwoName)

  // Team Two Add Points
  function incrementTheScoreForTeamTwo() {
    console.log('I clicked the button')

    teamTwoScore = teamTwoScore + 3
    console.log(teamTwoScore)

    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)

    teamTwoScoreElement.textContent = teamTwoScore
  }

  const teamTwoAddButton = document.querySelector('.team2 .add')
  console.log(teamTwoAddButton)

  teamTwoAddButton.addEventListener('click', incrementTheScoreForTeamTwo)

  // Team Two Subtract points
  function decrementTheScoreForTeamTwo() {
    console.log('I clicked the button')

    teamTwoScore = teamTwoScore - 3
    console.log(teamTwoScore)

    const teamTwoScoreElement = document.querySelector('.team2 h3')
    console.log(teamTwoScoreElement)

    teamTwoScoreElement.textContent = teamTwoScore
  }

  const teamTwoSubtractButton = document.querySelector('.team2 .subtract')
  console.log(teamTwoSubtractButton)

  teamTwoSubtractButton.addEventListener('click', decrementTheScoreForTeamTwo)
}

document.addEventListener('DOMContentLoaded', main)
