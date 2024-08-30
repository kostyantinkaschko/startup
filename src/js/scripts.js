  let click = 0,
    tripleClick = false,
    codeId = document.getElementById("codeIdcircle"),
    typographIdH2 = document.getElementById("typographIdH2"),
    codeIdH2 = document.getElementById("codeIdH2"),
    supportIdH2 = document.getElementById("supportIdH2"),
    firstCite = document.getElementById("firstCite"),
    secondCite = document.getElementById("secondCite"),
    thirdCite = document.getElementById("thirdCite"),
    firstCircle = document.getElementById("firstCircle"),
    secondCircle = document.getElementById("secondCircle"),
    thirdCitcle = document.getElementById("thirdCircle"),
    currentCite = 1,
    totalCites = 3,
    nextCite = 2,
    header = document.querySelector('header'),
    topLine = document.getElementById('top-line'),
    propaboutwork = document.querySelector(".propaboutwork"),
    circleDOM = document.querySelectorAll(".circle")

  function activeCite(number) {
    clearInterval(citesInterval)
    changeCite(number)
    citesInterval = startCitesInterval()
  }

  function changeCite(number) {
    // if (number === "next") {
    //   if (currentCite < 3) {
    //     number = currentCite + 1
    //   } else {
    //     number = currentCite
    //   }
    //   startCitesInterval()
    // } else if (number === "back") {
    //   if (currentCite > 1) {
    //     number = currentCite - 1
    //   } else {
    //     number = "first"
    //   }
    // }
    // if (parseInt(number)) {
    //   switch (number) {
    //     case 1:
    //       number = "first"
    //       break
    //     case 2:
    //       number = "second"
    //       break
    //     case 3:
    //       number = "third"
    //       break
    //   } 
    console.log(number)
    let currentCiteText = currentCite
    switch (currentCiteText) {
      case 1:
        currentCiteText = "first"
        break
      case 2:
        currentCiteText = "second"
        break
      case 3:
        currentCiteText = "third"
        break

    }

    let numberCite = number + "Cite",
      numberCircle = number + "Circle",
      numberCiteVar = document.getElementById(numberCite),
      numberCircleVar = document.getElementById(numberCircle),
      previousNumber = document.getElementById(currentCiteText + "Cite")
    console.log(currentCiteText + "Cite")

    previousNumber.style.animation = 'opacity 0.5s reverse'
    setTimeout(() => {
      numberCiteVar.removeAttribute("style")
      previousNumber.removeAttribute("style")
      document.getElementById("firstCite").classList.remove('activeCite')
      document.getElementById("secondCite").classList.remove('activeCite')
      document.getElementById("thirdCite").classList.remove('activeCite')
      document.querySelectorAll('.circleBlock').forEach(element => {
        element.classList.remove('active')
      })
      numberCiteVar.classList.add('activeCite')
      numberCircleVar.classList.add('active')
      currentCite = number
      switch (currentCite) {
        case "first":
          currentCite = 1
          break
        case "second":
          currentCite = 2
          break
        case "third":
          currentCite = 3
          break

      }
      numberCiteVar.style.animation = 'opacity 0.5s'
    }, 550)
  }

  function startCitesInterval() {
    return setInterval(() => {
      nextCite = currentCite + 1
      if (nextCite > totalCites) {
        nextCite = 1
      }
      switch (nextCite) {
        case 1:
          nextCite = "first"
          break
        case 2:
          nextCite = "second"
          break
        case 3:
          nextCite = "third"
          break
      }
      console.log(nextCite)
      changeCite(nextCite)
    }, 10000)
  }


  codeId.addEventListener('click', event => {
    click++
    if (click >= 3) {
      tripleClick = true
      typographIdH2.innerHTML = "Квадрати"
      codeIdH2.innerHTML = "захоплять"
      supportIdH2.innerHTML = "світ!"
      typographIdH2.style.fontWeight = "800"
      typographIdH2.style.color = "#c0301c"
      codeIdH2.style.fontWeight = "800"
      codeIdH2.style.color = "#c0301c"
      supportIdH2.style.fontWeight = "800"
      supportIdH2.style.color = "#c0301c"
      circleDOM.forEach(element => {
        element.style.borderRadius = "0"
      })
      click = 0
    }
  })

  let tripleClickInterval = setInterval(() => {
      click = 0
      tripleClick = false
      console.log("tripleClickInterval")
    }, 500),
    citesInterval = startCitesInterval()


  let parallaxInterval = setInterval(() => {
    header.style.backgroundPosition = `0 ${window.scrollY / 3}rem`
    propaboutwork.style.backgroundPosition = `0 ${(window.scrollY - 4900) / 3}rem`
    if (topLine && scrollX < 49) {
      topLine.class = 'top-line toplineFixed'
    }
  }, 1)