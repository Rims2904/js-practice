let playrps = () => {
  let cards_sign = ['h', 'd', 's', 'c'];

  let gameon = true

  let score = { user: 0, computer: 0 };
  while (gameon === true) {

    let computerinputnum = Math.floor(Math.random() * 13) + 1;
    let computerinputsigns = cards_sign[Math.floor(Math.random() * 4)];
    let computerinput = computerinputnum + computerinputsigns;

    let userinputnum = Number(prompt('please enter a number between 1 and 13 (both inclusive)'))
    let userinputsigns = 'h'
    let userinput = userinputnum + userinputsigns

    // input validation
    if (userinputsigns !== 'h' && userinputsigns !== 'd' && userinputsigns !== 's' && userinputsigns !== 'c' && userinputnum < 1 && userinputnum > 13) {
      alert('invalid input, please try again')
    }

    if (userinputnum == computerinputnum) {
      alert(`you picked ${userinput} && computerpicked ${computerinput} you tie`)
      score.user += 1;
      score.computer += 1;
    } else if (userinputnum > computerinputnum) {
      alert(`you picked ${userinput} && computer picked ${computerinput} you win`)
      score.user += 1;
    } else if (userinputnum === 1 && computerinputnum != 1) {
      alert(`you picked ${userinput} && computer picked ${computerinput} you win`)
      score.user += 1;
    } else if (computerinputnum === 1 && userinputnum != 1) {
      alert(`you picked ${userinput} && computer picked ${computerinput} you lose`)
      score.computer += 1;
    } else {
      alert(`you picked ${userinput} && computer picked ${computerinput} you lose`)
      score.computer += 1;
    }

    // continue or quit
    let quit = prompt('Do you want to continue (True/False)')

    if (quit === 'false' || quit === 'False' || quit === 'FALSE') {
      gameon = false;
      alert(
        `You played ${score.user + score.computer} rounds.
        Final Score: User - ${score.user}, Computer - ${score.computer}`);
    }
  }
}
