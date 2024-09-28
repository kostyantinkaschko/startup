let click = 0,
  tripleClick = false,
  codeId = document.querySelector("#codeIdcircle"),
  typographIdH2 = document.querySelector("#typographIdH2"),
  codeIdH2 = document.querySelector("#codeIdH2"),
  supportIdH2 = document.querySelector("#supportIdH2"),
  firstCite = document.querySelector("#firstCite"),
  secondCite = document.querySelector("#secondCite"),
  thirdCite = document.querySelector("#thirdCite"),
  firstCircle = document.querySelector("#firstCircle"),
  secondCircle = document.querySelector("#secondCircle"),
  thirdCircle = document.querySelector("#thirdCircle"),
  currentCite = 1,
  totalCites = 3,
  currentScrollY = window.scrollY,
  nextCite = 2,
  numberCite = 0,
  numberCircle = 0,
  numberCiteVar = 0,
  numberCiteAuthorVar = 0,
  numberCircleVar = 0,
  previousNumber = 0,
  disabledButton = 0,
  tripleClickInterval = false,
  header = document.querySelector('header'),
  headerWrapper = header.querySelector(".wrapper"),
  topLine = document.querySelector('#topline'),
  propaboutwork = document.querySelector(".propaboutwork"),
  circleDOM = document.querySelectorAll(".circle"),
  centerContent = document.querySelector("#centerContent"),
  services = document.querySelector("#services"),
  aboutus = document.querySelector("#aboutus"),
  latestworksid = document.querySelector("#latestworksid"),
  proaboutwork = document.querySelector("#proaboutwork"),
  recentsPosts = document.querySelector("#recentsPosts"),
  companiesBlock = document.querySelector("#companiesBlock"),
  footerContent = document.querySelector("#footerContent"),
  footer = document.querySelector("#footer"),
  emailRexExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  scrollY1px = 0,
  fixedScrollY1px = 0,
  lastScrollY = 0,
  readMoreVar = 0,
  postp = 0,
  activeButtonVar = 0,
  waitVarForAnimation = false,
  popup = document.querySelector("#popup"),
  falshScrollBar = document.querySelector("#falshScrollBarId"),
  getStartedButton = document.querySelector("#getStartedButton"),
  popUpOpenRights = false,
  infinitySlider = false,
  slider = document.querySelector('.sliderBlock'),
  slides = document.querySelectorAll('#slider figcaption'),
  currentIndex = 0,
  currentCiteText = currentCite,
  logo = document.querySelector("#logo"),
  bottomside = document.querySelector("#bottomside"),
  setActiveCategory = null,
  idLogin = document.querySelector("#login"),
  passwordId = document.querySelector("#password"),
  parallaxInterval = false,
  menu = document.querySelector(".menu"),
  burgerMenuButton = document.querySelector(".burgerMenuButton"),
  lineBurgerMenu = document.querySelectorAll(".lineBurgerMenu"),
  firstHeader = document.querySelector(".first-header"),
  form = document.querySelector("#formTask"),
  wasSend = false,
  basket = document.querySelector("#basket"),
  basketImg = document.querySelector("#basketImg"),
  offsetX,
  offsetY,
  isDragging = false,
  leftVar = 0,
  offset = 0,
  basketArray = JSON.parse(localStorage.getItem('basket')) || [],
  viewButtons = document.querySelectorAll('.view-button'),
  basketPopup = document.querySelector('#basketPopup'),
  basketList = document.querySelector('#basketList'),
  popupErorr = document.querySelector("#popupError"),
  popupErrorH2 = document.querySelector("#errorh2"),
  fixedButton = document.querySelector("#fixedButton"),
  emailOrderCheck = false,
  dataForOrderPupUp = document.querySelector("#dataForOrderPupUp"),
  currentX = 0,
  works = {
    first: {
      src: "img/filework.png",
      alt: "#",
      category: ["Branding"],
      header: "Hair Dresser"
    },
    second: {
      src: "img/file2.png",
      alt: "#",
      category: ["Branding"],
      header: "There is no"
    },
    third: {
      src: "img/file3.png",
      alt: "#",
      category: ["Development"],
      header: "There is no"
    },
    four: {
      src: "img/file4.png",
      alt: "#",
      category: ["Development"],
      header: "There is no"
    },
    five: {
      src: "img/file5.png",
      alt: "#",
      category: ["Strategy"],
      header: "There is no"
    },
    six: {
      src: "img/file6.png",
      alt: "#",
      category: ["Strategy"],
      header: "There is no"
    },
    seven: {
      src: "img/file7.png",
      alt: "#",
      category: ["Design", "Strategy"],
      header: "There is no"
    },
    eight: {
      src: "img/file8.png",
      alt: "#",
      category: ["Development"],
      header: "There is no"
    },
    nine: {
      src: "img/file9.png",
      alt: "#",
      category: ["Design"],
      header: "There is no"
    }
  }

document.addEventListener("DOMContentLoaded", () => {
  header.style.animation = "1.8s opacity"
  header.style.opacity = "1"
  services.style.opacity = "0"
  aboutus.style.opacity = "0"
  latestworksid.style.opacity = "0"
  proaboutwork.style.opacity = "0"
  recentsPosts.style.opacity = "0"
  companiesBlock.style.opacity = "0"
  footerContent.style.opacity = "0"
  footer.style.opacity = "0"
  getStartedButton.classList.toggle("disabledButton")
  if (localStorage.idPost) {
    readMore(localStorage.idPost)
  }
  basketHeaderFunction()
  console.log(JSON.stringify(basketArray))
  if (localStorage.buttonNumber) {
    if (localStorage.buttonNumber === "firstButt") {
      setActiveCategory = null
    } else if (localStorage.buttonNumber === "secondButt") {
      setActiveCategory = "Branding"
    } else if (localStorage.buttonNumber === "thirdButt") {
      setActiveCategory = "Design"
    } else if (localStorage.buttonNumber === "fourButt") {
      setActiveCategory = "Development"
    } else if (localStorage.buttonNumber === "fiveButt") {
      setActiveCategory = "Strategy"
    }
    activeButton(setActiveCategory, localStorage.buttonNumber)
  }
  if (localStorage.username) {
    document.getElementById("name").value = localStorage.username
  }
  if (localStorage.email) {
    document.getElementById("email").value = localStorage.email
  }
  if (localStorage.subject) {
    document.getElementById("subject").value = localStorage.subject
  }
  if (localStorage.companyName) {
    document.getElementById("companyName").value = localStorage.companyName
  }
  if (localStorage.message) {
    document.getElementById("message").value = localStorage.message
  }

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    isSwiping = true
  })

  slider.addEventListener('touchmove', (e) => {
    if (isSwiping) {
      currentX = e.touches[0].clientX,
        diffX = currentX - startX

      if (diffX > 50) {
        isSwiping = false
        document.querySelector('#left').leftSlide()
      } else if (diffX < -50) {
        isSwiping = false
        document.querySelector('#right').rightSlide()
      }
    }
  })

  slider.addEventListener('touchend', () => {
    isSwiping = false
  })
  popup.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - popup.getBoundingClientRect().left
    offsetY = e.clientY - popup.getBoundingClientRect().top
    isDragging = true
    popup.style.cursor = "grab"
    document.body.style.userSelect = "none"
  })

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      leftVar = `${e.clientX - offsetX + popup.clientHeight / 1.8}`,
        topVar = `${e.clientY - offsetY + popup.clientWidth / 2.1}`
      if (leftVar > 132 && leftVar < window.innerWidth / 1.095) {
        popup.style.left = leftVar + "rem"
        localStorage.setItem('positionX', leftVar)
      }
      if (topVar < 608.9964999389648 && topVar > 126.92678557123456) {
        popup.style.top = topVar + "rem"
        localStorage.setItem('positionY', topVar)
      }
      idLogin.setAttribute("readonly", true)
      passwordId.setAttribute("readonly", true)
      idLogin.style.text
    }
  })

  document.addEventListener('mouseup', () => {
    isDragging = false
    idLogin.removeAttribute("readonly")
    passwordId.removeAttribute("readonly")
    popup.style.cursor = "default"
    document.body.style.userSelect = "text"
  })

function updateSlider() {
    offset = -12.7 * currentIndex
    slider.style.transform = `translateX(${offset}%)`
    document.querySelector('#left').disabled = "true"
    document.querySelector('#right').disabled = "true"

    setTimeout(() => {
      document.querySelector('#left').removeAttribute("disabled")
      document.querySelector('#right').removeAttribute("disabled")
    }, 600)
}

  function leftSlide() {
    currentIndex--
    if (currentIndex < 0) {
      currentIndex = 4
      slider.style.transition = "none"
      offset = -12.7 * currentIndex
      slider.style.transform = `translateX(${offset}%)`
      setTimeout(() => {
        slider.style.transition = "all 1s ease"
        currentIndex = 3
        updateSlider()
      }, 100)
    } else {
      updateSlider()
    }
  }

  function rightSlide() {
    currentIndex++
    if (currentIndex > 4) {
      currentIndex = 0
      slider.style.transition = "none"
      offset = -12.7 * currentIndex
      slider.style.transform = `translateX(${offset}%)`
      setTimeout(() => {
        slider.style.transition = "all 1s ease"
        currentIndex = 1
        offset = -12.7 * currentIndex
        updateSlider()
      }, 100)
    } else {
      updateSlider()
    }
  }
  if (!waitVarForAnimation) {
    document.querySelector('#left').addEventListener('click', () => {
      leftSlide()
    })

    document.querySelector('#right').addEventListener('click', () => {
      rightSlide()
    })
  }


})


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
  currentCiteText = currentCite
  switch (currentCiteText) {
    case 1:
      currentCiteText = "firstCite"
      break
    case 2:
      currentCiteText = "secondCite"
      break
    case 3:
      currentCiteText = "thirdCite"
      break

  }

  numberCite = number + "Cite"
  numberCircle = number + "Circle"
  numberCiteVar = document.getElementById(numberCite)
  numberCiteAuthorVar = document.getElementById(numberCite + "Author")
  numberCircleVar = document.getElementById(numberCircle)
  previousNumber = document.getElementById(currentCiteText)

  previousNumber.style.animation = 'opacity .5s reverse infinite'
  console.log(previousNumber)
  setTimeout(() => {
    numberCiteVar.removeAttribute("style")
    previousNumber.removeAttribute("style")
    console.log(previousNumber)
    document.getElementById("firstCite").classList.remove('activeCite')
    document.getElementById("secondCite").classList.remove('activeCite')
    document.getElementById("thirdCite").classList.remove('activeCite')
    document.querySelectorAll('.circleBlock').forEach(element => {
      element.classList.remove('active')
    })
    document.getElementById("firstCiteAuthor").classList.remove('activeCite')
    document.getElementById("secondCiteAuthor").classList.remove('activeCite')
    document.getElementById("thirdCiteAuthor").classList.remove('activeCite')
    numberCiteVar.classList.add('activeCite')
    numberCiteAuthorVar.classList.add('activeCite')
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
  }, 50)
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

tripleClickInterval = setInterval(() => {
    click = 0
    tripleClick = false
    console.log("tripleClickInterval")
  }, 500),
  citesInterval = startCitesInterval()

parallaxInterval = setInterval(() => {
  header.style.backgroundPosition = `0 ${window.scrollY / 3}rem`
  propaboutwork.style.backgroundPosition = `0 -${window.scrollY / 26 * 2}rem`

  if (scrollX < 49) {
    topLine.class = 'top-line toplineFixed'
  }
  if (window.innerWidth < 840 && window.innerWidth > 559 && scrollY > 49) {
    logo.classList.add("hidden")
    topLine.style.justifyContent = "center"
  } else {
    logo.classList.remove("hidden")
    burgerMenuButton.style.width = "60rem"
    burgerMenuButton.style.height = "60rem"
  }
}, 1)

disabledButton = setInterval(() => {
  getStartedButton.classList.toggle("disabledButton")
  popUpOpenRights = true
}, 2000)

document.addEventListener("scroll", () => {
  currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY) {
    topLine.removeAttribute("style")
    centerContent.removeAttribute("style")
  } else {
    if (currentScrollY > 700) {
      topLine.style.position = "fixed"
      centerContent.style.margin = "70rem 0 429rem 0"
      topLine.style.padding = "20rem 0"
      topLine.style.left = "0"
      topLine.style.backgroundColor = "rgba(0,0,0,0.5)"
      topLine.style.top = "-40rem"
      topLine.style.transition = "all 1s ease"
      topLine.style.animation = "40s backgroundTopLine infinite"
      if (window.innerWidth < 560) {
        topLine.style.flexDirection = "row"
        if (window.innerWidth > 410) {
          topLine.style.width = "80%"
          topLine.style.padding = "20rem 55rem"
        } else {
          topLine.style.width = "65%"
          topLine.style.padding = "20rem 75rem"
        }
        logo.querySelector("a").style.fontSize = "16rem"
      } else {
        topLine.style.width = "100%"
        topLine.style.padding = "20rem 0"
        topLine.style.justifyContent = "space-around"
      }
    } else {
      topLine.removeAttribute("style")
      centerContent.removeAttribute("style")
    }
  }

  lastScrollY = currentScrollY
  if (currentScrollY > 268) {
    services.style.opacity = "1"
    services.style.animation = "1s opacity"
  }
  if (currentScrollY > 780) {
    aboutus.style.opacity = "1"
    aboutus.style.animation = "1s opacity"
  }
  if (currentScrollY > 1780) {
    latestworksid.style.opacity = "1"
    latestworksid.style.animation = "1s opacity"
  }
  if (currentScrollY > 2544 - latestworksid.clientHeight) {
    proaboutwork.style.opacity = "1"
    proaboutwork.style.animation = "1s opacity"
  }
  if (currentScrollY > 3200 - latestworksid.clientHeight) {
    recentsPosts.style.opacity = "1"
    recentsPosts.style.animation = "1s opacity"
  }
  if (currentScrollY > 4100 - latestworksid.clientHeight) {
    companiesBlock.style.opacity = "1"
    companiesBlock.style.animation = "1s opacity"
  }
  if (currentScrollY > 4700 - latestworksid.clientHeight) {
    footerContent.style.opacity = "1"
    footerContent.style.animation = "1s opacity"
  }
  if (currentScrollY > 5100 - latestworksid.clientHeight) {
    footer.style.opacity = "1"
    footer.style.animation = "1s opacity"
  }
})

function send() {
  let username = document.getElementById("name").value,
    email = document.getElementById("email").value,
    subject = document.getElementById("subject").value,
    companyName = document.getElementById("companyName").value,
    message = document.getElementById("message").value,
    emailCheck = emailRexExp.test(email)

  if (email === "" || username === "" || subject === "" || companyName === "" || message === "") {
    showErrorPopup("Ви ввели не все!")
  } else {
    if (emailCheck) {
      showConfirmPopup((userDataConfirmed) => {
        if (userDataConfirmed) {
          wasSend = true
          localStorage.setItem("username", username)
          localStorage.setItem("email", email)
          localStorage.setItem("subject", subject)
          localStorage.setItem("companyName", companyName)
          localStorage.setItem("message", message)
          localStorage.setItem("wasSend", wasSend)
        }
      })
    } else {
      showErrorPopup("Неправильний email!")
    }
  }
}

function readMore(id) {
  let buttonId = document.getElementById(id),
    newElement = document.createElement("p"),
    paragraphs = buttonId.querySelectorAll("p"),
    readMoreNewButton = document.createElement("a")
  localStorage.setItem("idPost", id)

  readMoreVar = buttonId.querySelector("#readMore")
  postp = buttonId.querySelector("#" + id + "p")
  if (window.innerWidth >= 880) {
    postp.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam. Modi ratione aliquam amet molestias quam dolor omnis suscipit ducimus, quasi numquam corrupti repellendus rem sunt laudantium vel, veniam laboriosam nulla veritatis sequi fugiat reiciendis eum nisi impedit! Vero repudiandae hic architecto error eveniet numquam enim suscipit officiis at eum voluptates nemo doloribus, exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  ab ratione"
    buttonId.appendChild(newElement)
    newElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus porro quaerat impedit voluptatum minus provident voluptatibus soluta? Doloremque, voluptatum. Molestias error blanditiis reprehenderit, magni recusandae rem alias impedit corrupti? Quis officia obcaecati quia esse alias aliquid consequatur reiciendis molestias sint error, harum et amet quisquam blanditiis, illum dolor beatae quam temporibus veniam voluptatum assumenda ipsa. Soluta officiis nam fuga ipsa quae deserunt odio culpa ullam tempore saepe autem explicabo cumque at nostrum perferendis rerum, pariatur animi necessitatibus. Excepturi deleniti quis magnam exercitationem non voluptatum, dolor obcaecati enim, possimus asperiores ratione deserunt quos nesciunt qui perferendis natus maiores temporibus ipsa reiciendis fugit, ad ut omnis repudiandae. Modi ratione aliquam amet molestias quam dolor omnis suscipit ducimus, quasi numquam corrupti repellendus rem sunt laudantium vel, veniam laboriosam nulla veritatis sequi fugiat reiciendis eum nisi impedit! Vero repudiandae hic architecto error eveniet numquam enim suscipit officiis at eum voluptates nemo doloribus, exercitationem ab ratione qui ex eaque, a, cumque deleniti sed quia aut! Earum accusamus eum modi animi dolor praesentium molestiae quisquam, quod sapiente aliquam quas libero vitae in corrupti labore illo magnam. Iste odio eveniet amet quasi voluptatibus incidunt eaque maxime minus, dolores laudantium corporis sapiente in voluptates veritatis odit at, quaerat voluptate, nisi porro natus perspiciatis! Hic tempora, illo quis, numquam quas neque pariatur quod magnam sed minus nisi quidem vitae id corporis odit, impedit saepe asperiores facere ab ut? Consectetur sunt sit fuga. Dolore, deleniti. Quidem non quae voluptatum culpa illum provident veritatis quaerat voluptate reprehenderit mollitia repudiandae dolores debitis ducimus sequi ea fuga, unde perspiciatis eligendi? Doloribus amet corporis magnam iste nisi! Veritatis et delectus earum expedita aut asperiores ratione eaque tempore vitae nulla necessitatibus inventore tenetur temporibus hic ipsa iste a quos molestiae quis laborum nam, corporis impedit laboriosam porro? Corrupti laudantium eius quam tempora quos iusto voluptate?"
    newElement.style.margin = "0"
    buttonId.appendChild(readMoreNewButton)
  } else {
    firstHeader.appendChild(readMoreNewButton)
    postp.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam. Modi ratione aliquam amet molestias quam dolor omnis suscipit ducimus, quasi numquam corrupti repellendus rem sunt laudantium vel, veniam laboriosam nulla veritatis sequi fugiat reiciendis eum nisi impedit! Vero repudiandae hic architecto error eveniet numquam enim suscipit officiis at eum voluptates nemo doloribus, exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  ab ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus porro quaerat impedit voluptatum minus provident voluptatibus soluta? Doloremque, voluptatum. Molestias error blanditiis reprehenderit, magni recusandae rem alias impedit corrupti? Quis officia obcaecati quia esse alias aliquid consequatur reiciendis molestias sint error, harum et amet quisquam blanditiis, illum dolor beatae quam temporibus veniam voluptatum assumenda ipsa. Soluta officiis nam fuga ipsa quae deserunt odio culpa ullam tempore saepe autem explicabo cumque at nostrum perferendis rerum, pariatur animi necessitatibus. Excepturi deleniti quis magnam exercitationem non voluptatum, dolor obcaecati enim, possimus asperiores ratione deserunt quos nesciunt qui perferendis natus maiores temporibus ipsa reiciendis fugit, ad ut omnis repudiandae. Modi ratione aliquam amet molestias quam dolor omnis suscipit ducimus, quasi numquam corrupti repellendus rem sunt laudantium vel, veniam laboriosam nulla veritatis sequi fugiat reiciendis eum nisi impedit! Vero repudiandae hic architecto error eveniet numquam enim suscipit officiis at eum voluptates nemo doloribus, exercitationem ab ratione qui ex eaque, a, cumque deleniti sed quia aut! Earum accusamus eum modi animi dolor praesentium molestiae quisquam, quod sapiente aliquam quas libero vitae in corrupti labore illo magnam. Iste odio eveniet amet quasi voluptatibus incidunt eaque maxime minus, dolores laudantium corporis sapiente in voluptates veritatis odit at, quaerat voluptate, nisi porro natus perspiciatis! Hic tempora, illo quis, numquam quas neque pariatur quod magnam sed minus nisi quidem vitae id corporis odit, impedit saepe asperiores facere ab ut? Consectetur sunt sit fuga. Dolore, deleniti. Quidem non quae voluptatum culpa illum provident veritatis quaerat voluptate reprehenderit mollitia repudiandae dolores debitis ducimus sequi ea fuga, unde perspiciatis eligendi? Doloribus amet corporis magnam iste nisi! Veritatis et delectus earum expedita aut asperiores ratione eaque tempore vitae nulla necessitatibus inventore tenetur temporibus hic ipsa iste a quos molestiae quis laborum nam, corporis impedit laboriosam porro? Corrupti laudantium eius quam tempora quos iusto voluptate?"
  }
  newElement.id = "readMoreNewParagraph"
  readMoreVar.classList.toggle("hidden")
  readMoreNewButton.id = "readMoreNewButton"
  readMoreNewButton.onclick = readLess
  readMoreNewButton.innerHTML = "Read less"
  readMoreNewButton.style.cursor = "pointer"
  newElement.style.animation = "1s height"
}

function readLess() {
  let readMoreNewParagraph = document.getElementById("readMoreNewParagraph"),
    readMoreNewButton = document.getElementById("readMoreNewButton")
  readMoreNewParagraph.remove()
  readMoreNewButton.remove()
  readMoreVar.classList.toggle("hidden")
  postp.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam."

}

function activeButton(id, buttonNumber) {
  let bottomsideFigures = document.querySelectorAll(".bottomside figure")

  console.log(id)

  if (id == null) {
    document.querySelectorAll(".bottomside figcaption").forEach(element => {
      element.classList.remove("hidden")
      console.log(`Removed hidden from: ${element.outerHTML}`)
    })
  } else {
    bottomsideFigures.forEach(element => {
      let figcaptions = element.querySelectorAll("figcaption")

      figcaptions.forEach(figcaption => {
        if (figcaption.classList.contains(id)) {
          figcaption.classList.remove("hidden")
          console.log(`Removed hidden from: ${figcaption.outerHTML}`)
          found = true
        } else {
          figcaption.classList.add("hidden")
          console.log(`Added hidden to: ${figcaption.outerHTML}`)
        }
      })
    })
  }

  let buttonName = document.querySelector(`.${buttonNumber}`),
    activeButtonVar = document.getElementById("activeButton")

  activeButtonVar.removeAttribute("id")


  localStorage.setItem("buttonNumber", buttonNumber)

  buttonName.setAttribute("id", "activeButton")
}





function popUp() {
  if (!localStorage.positionX) {
    localStorage.setItem("positionX", "50%")
    popup.style.left = `${localStorage.positionX}`
  } else {
    popup.style.left = `${localStorage.positionX}rem`
  }
  if (!localStorage.positionY) {
    localStorage.setItem("positionY", "50%")
    popup.style.top = `${localStorage.positionY}`
  } else {
    popup.style.top = `${localStorage.positionY}rem`
  }
  if (popUpOpenRights) {
    popup.classList.toggle("hide")
    if (window.innerWidth > 900) {
      falshScrollBar.classList.toggle("hide")
    }
    document.body.classList.toggle("no-scroll")
    headerWrapper.classList.toggle("margin")
    centerContent.classList.toggle("margin2")
    basketPopup.classList.add('hide')
  }
}


function openBurgerMenu() {
  if (window.innerWidth < 560) {
    document.body.classList.toggle("no-scroll")
    menu.classList.toggle("burgerMenu")
  }
}

function smoothScrollTo(targetPosition) {
  basketPopup.classList.add('hide')
  document.body.classList.remove("no-scroll")
  getStartedButton.classList.add("disabledButton")
  popup.classList.add("hide")
  falshScrollBar.classList.add("hide")

  let targetElement = document.getElementById(targetPosition)
  targetPosition = targetElement.getBoundingClientRect().y + window.scrollY
  let currentPosition = window.pageYOffset,
    distance = targetPosition - currentPosition,
    duration = 200,
    interval = 15,
    elapsed = 0

  let scrollInterval = setInterval(() => {
    elapsed += interval
    let progress = elapsed / duration,
      easingProgress
    if (progress < 0.5) {
      easingProgress = Math.pow(progress * 2, 3) / 2 // Збільшення швидкості до 50% прокрутки
    } else {
      easingProgress = 0.5 + (Math.pow((progress - 0.5) * 2, 3) / 2) // Зменшення швидкості для другої половини
    }

    let scrollAmount = currentPosition + distance * easingProgress
    window.scrollTo(0, scrollAmount)

    if (elapsed >= duration) {
      clearInterval(scrollInterval)
      window.scrollTo(0, targetPosition)
    }
  }, interval)

  if (window.innerWidth < 560) {
    openBurgerMenu()
  }
}

updateBasketPopup()

viewButtons.forEach(button => {
  button.addEventListener('click', function () {
    let workName = this.getAttribute('data-name'),
      work = works[workName]

    basketArray.push(work)
    alert(`${work.header} was added to the basket!`)
    updateBasketPopup()
    saveBasketToLocalStorage()
  })
})

function updateBasketPopup() {
  basketList.innerHTML = ''

  if (basketArray.length > 0) {
    fixedButton.classList.remove("hide")
  } else {
    fixedButton.classList.add("hide")
  }

  basketArray.forEach(item => {
    let listItem = document.createElement('div')
    listItem.classList.add('item')

    listItem.innerHTML = `
      <div class="leftside">
        <img src="${item.src}" alt="${item.alt}">
      </div>
      <div class="rightside">
        <h2>${item.header}</h2>
        <p>${item.category}</p>
        <a href="javascript:void(0)" data-name="${item.header}" class="remove-button">Remove</a>
      </div>
    `

    basketList.appendChild(listItem)
  })

  removeBasketButton()
}

function removeBasketButton() {
  document.querySelectorAll('.remove-button').forEach(button => {
    button.removeEventListener('click', handleRemove)
    button.addEventListener('click', handleRemove)
    if (basketArray.length > 0) {
      fixedButton.classList.remove("hide")
    } else {
      fixedButton.classList.add("hide")
    }
  })
}

function handleRemove(event) {
  let workName = event.target.getAttribute('data-name')
  console.log(`Removing item: ${workName}`)
  removeFromBasket(workName, event.target)
}

function removeFromBasket(workName, removeButton) {
  let index = basketArray.findIndex(item => item.header === workName)
  if (index > -1) {
    basketArray.splice(index, 1)
    removeButton.closest('.item').remove()
    saveBasketToLocalStorage()
  } else {
    console.log(`Item not found: ${workName}`)
  }
}

function saveBasketToLocalStorage() {
  localStorage.setItem('basket', JSON.stringify(basketArray))
}

function basketPopupFunc() {
  basketPopup.classList.toggle('hide')
  document.body.classList.toggle("no-scroll")
  getStartedButton.classList.toggle("disabledButton")
  popup.classList.add("hide")
  falshScrollBar.classList.toggle("hide")
  dataForOrderPupUp.classList.add("hide")
}

function showErrorPopup(message) {
  let popupError = document.getElementById("popupError"),
    errorh2 = document.getElementById("errorh2")

  errorh2.innerHTML = message
  popupError.classList.remove("hide")

  setTimeout(() => {
    popupError.classList.add("hide")
  }, 3000)
}

function showConfirmPopup(callback) {
  let confirmPopup = document.getElementById("confirmPopup")
  confirmPopup.classList.remove("hide")

  document.getElementById("confirmYes").onclick = () => {
    confirmPopup.classList.add("hide")
    callback(true)
  }

  document.getElementById("confirmNo").onclick = () => {
    confirmPopup.classList.add("hide")
    callback(false)
  }
}


function saveLocalStorageOrder() {
  let nameOrder = document.querySelector("#nameOrder").value,
    companyNameOrder = document.querySelector("#companyNameOrder").value,
    messageOrder = document.querySelector("#messageOrder").value,
    emailOrder = document.querySelector("#emailOrder").value
  emailOrderCheck = emailRexExp.test(email)
  if (emailOrderCheck) {
    localStorage.setItem("nameOrder", nameOrder)
    localStorage.setItem("companyNameOrder", companyNameOrder)
    localStorage.setItem("messageOrder", messageOrder)
    localStorage.setItem("emailOrder", emailOrder)
    basketHeaderFunction()
  }
}

function dataForOrderPupUpOpen() {
  dataForOrderPupUp.classList.toggle("hide")
}

function basketHeaderFunction() {
  let headersArray = basketArray.map(item => item.header)
  document.getElementById('basketItems').value = JSON.stringify(headersArray)
}