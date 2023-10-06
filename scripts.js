// document.getElementById('tossIt').addEventListener('click', () => {
//   document.getElementById('coin-wrapper').classList.add('tossed')
// });

const outcomes = [
  {
    text: 'heads',
    animation: 'flipHeads'
  },
  {
    text: 'tails',
    animation: 'flipTails'
  },
]

const resultStr = [] 

const generateOutCome = () => {

  let fraction = +(Math.random() * 1).toFixed(2)
  if (resultStr.length === 2) {
    if((resultStr[ resultStr.length - 1 ] === resultStr[ resultStr.length - 2 ]) && (resultStr[ resultStr.length - 1 ] === 'heads')) {
      fraction = 0
    } else if((resultStr[ resultStr.length - 1 ] === resultStr[ resultStr.length - 2 ]) && (resultStr[ resultStr.length - 1 ] === 'tails')) {
      fraction = 1
    }
  }
  const result =  (fraction > 0.5) ? outcomes[0] : outcomes[1]
  resultStr.push(result.text)
  console.log(resultStr)
  return result
}

document.getElementById('tossIt').addEventListener('click', () => {
  const outcomeObject = generateOutCome()
  if (document.getElementById('coin-toss').classList.contains('coin-toss--reverse')) {
    document.getElementById('coin-toss').classList.remove('coin-toss--reverse')
  }
  document.getElementById('coin-toss').classList.add(outcomeObject.animation)
});

addEventListener("animationend", (event) => {
  if (document.getElementById('coin-toss').classList.contains('flipTails')) {
    document.getElementById('coin-toss').classList.add('coin-toss--reverse')
    document.getElementById('coin-toss').classList.remove('flipTails')
  } else if (document.getElementById('coin-toss').classList.contains('flipHeads')) {
    document.getElementById('coin-toss').classList.remove('flipHeads')
  }

  const LIST_ELEMENT = document.createElement('li')
  LIST_ELEMENT.innerHTML = resultStr[resultStr.length - 1]
  LIST_ELEMENT.classList.add(resultStr[resultStr.length - 1]);
  document.getElementById('lastfewresults').appendChild(LIST_ELEMENT)

  if (resultStr.length > 5) {
    document.getElementById('lastfewresults').children[0].remove()
    resultStr.splice(0, 1)
    console.log('resultStr >>>')
    console.log(resultStr)
  }

});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}