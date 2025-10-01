let playrps = () => {
  let cards_sign = ['h','d','s','c'];
  let round = 1
  for (;;) {
    let computerinputnum =  Math.floor(Math.random () * 13) + 1;
    let computerinputsigns = cards_sign[Math.floor(Math.random()*4)];
    let computerinput = computerinputnum + computerinputsigns;
    if (round != 1) {
        if (userinput === computerinput) {
            alert (`you picked ${userinput} && computerpicked ${computerinput} computer win`)
            break
        } else {
            alert (`you picked ${userinput} && computer picked ${computerinput} computer lose`)
        }
    }
    let userinputnum = prompt ('please enter a number between 1 and 13 (both inclusive)')
    let userinputsigns = prompt ('please enter h,d,s,c')
    let userinput = userinputnum +   userinputsigns
    if (userinputsigns !== 'h' && userinputsigns !== 'd' && userinputsigns !== 's' && userinputsigns !== 'c' && userinputnum < 1 && userinputnum > 13) {
        break;
    }
    if (userinput === computerinput) {
        alert (`you picked ${userinput} && computerpicked ${computerinput} you win`)
        round == 1
        break
    } else {
        alert (`you picked ${userinput} && computer picked ${computerinput} you lose`)
        round += 1
    }
    let quit = prompt ('Do you want to continue (True/False)')
    if (quit) {
        break
    }
  }
}