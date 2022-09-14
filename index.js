let scoreHome = 0

function AddPointsH1(){
  scoreHome += 1
  let pointsHome = document.getElementById("point-entryF")
  pointsHome.textContent = scoreHome
}

function AddPointsH2(){
  scoreHome += 2
    let pointsHome = document.getElementById("point-entryF")
    pointsHome.textContent = scoreHome
  }

  function AddPointsH3(){
    scoreHome += 3
    let pointsHome = document.getElementById("point-entryF")
    pointsHome.textContent = scoreHome
  }


  let scoreAway = 0
  function AddPointsG1(){
    scoreAway += 1
    let pointsAway = document.getElementById("point-entryS")
    pointsAway.textContent = scoreAway
  }
  
  function AddPointsG2(){
    scoreAway += 2
      let pointsAway = document.getElementById("point-entryS")
      pointsAway.textContent = scoreAway
    }
  
    function AddPointsG3(){
    scoreAway += 3
      let pointsAway = document.getElementById("point-entryS")
      pointsAway.textContent = scoreAway
    }
