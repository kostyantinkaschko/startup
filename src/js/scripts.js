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
  topLine = document.getElementById('topline'),
  propaboutwork = document.querySelector(".propaboutwork"),
  circleDOM = document.querySelectorAll(".circle"),
  centerContent = document.getElementById("centerContent"),
  services = document.getElementById("services"),
  aboutus = document.getElementById("aboutus"),
  latestworksid = document.getElementById("latestworksid"),
  proaboutwork = document.getElementById("proaboutwork"),
  recentsPosts = document.getElementById("recentsPosts"),
  companiesBlock = document.getElementById("companiesBlock"),
  footerContent = document.getElementById("footerContent"),
  footer = document.getElementById("footer"),
  emailRexExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  scrollY1px = 0,
  fixedScrollY1px = 0,
  lastScrollY = 0,
  readMoreVar = 0,
  postp = 0,
  activeButtonVar = 0
document.addEventListener("DOMContentLoaded", event => {
  header.style.animation = "1.8s opacity"
  header.style.opacity = "1"
})

document.addEventListener("DOMContentLoaded", () => {
  services.style.opacity = "0"
  aboutus.style.opacity = "0"
  latestworksid.style.opacity = "0"
  proaboutwork.style.opacity = "0"
  recentsPosts.style.opacity = "0"
  companiesBlock.style.opacity = "0"
  footerContent.style.opacity = "0"
  footer.style.opacity = "0"

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


  // localStorage.setItem("username", username)
  // localStorage.setItem("email", email)
  // localStorage.setItem("subject", subject)
  // localStorage.setItem("companyName", companyName)
  // localStorage.setItem("message", message)
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


document.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY) {
    topLine.removeAttribute("style")
    centerContent.removeAttribute("style")
  } else {
    if (currentScrollY > 700) {
      topLine.style.transition = "all 1s ease"
      topLine.style.position = "fixed"
      centerContent.style.margin = "70rem 0 429rem 0"
      topLine.style.width = "93%"
      topLine.style.backgroundColor = "rgba(0,0,0,0.5)"
      topLine.style.left = "0"
      topLine.style.padding = "20rem 62rem"
      topLine.style.top = "-40rem"
      topLine.style.animation = "40s backgroundTopLine infinite"
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
  if (currentScrollY > 2544) {
    proaboutwork.style.opacity = "1"
    proaboutwork.style.animation = "1s opacity"
  }
  if (currentScrollY > 3200) {
    recentsPosts.style.opacity = "1"
    recentsPosts.style.animation = "1s opacity"
  }
  if (currentScrollY > 4100) {
    companiesBlock.style.opacity = "1"
    companiesBlock.style.animation = "1s opacity"
  }
  if (currentScrollY > 4700) {
    footerContent.style.opacity = "1"
    footerContent.style.animation = "1s opacity"
  }
  if (currentScrollY > 5100) {
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


  if (emailCheck) {
    let userDataConfirmed = confirm('Чи правильно ви все вказали?')
  } else if (!emailCheck) {
    alert("You write uncorrect email")
  }
  localStorage.setItem("username", username)
  localStorage.setItem("email", email)
  localStorage.setItem("subject", subject)
  localStorage.setItem("companyName", companyName)
  localStorage.setItem("message", message)
}

function readMore(id) {
  let buttonId = document.getElementById(id),
    newElement = document.createElement("p"),
    paragraphs = buttonId.querySelectorAll("p"),
    readMoreNewButton = document.createElement("a")

  readMoreVar = buttonId.querySelector("#readMore")
  postp = buttonId.querySelector("#" + id + "p")

  readMoreVar.classList.toggle("hidden")
  buttonId.appendChild(newElement)
  newElement.id = "readMoreNewParagraph"
  postp.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam. Modi ratione aliquam amet molestias quam dolor omnis suscipit ducimus, quasi numquam corrupti repellendus rem sunt laudantium vel, veniam laboriosam nulla veritatis sequi fugiat reiciendis eum nisi impedit! Vero repudiandae hic architecto error eveniet numquam enim suscipit officiis at eum voluptates nemo doloribus, exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  exercitationem ab ratione  ab ratione"
  newElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus porro quaerat impedit voluptatum minus provident voluptatibus soluta? Doloremque, voluptatum. Molestias error blanditiis reprehenderit, magni recusandae rem alias impedit corrupti? Quis officia obcaecati quia esse alias aliquid consequatur reiciendis molestias sint error, harum et amet quisquam blanditiis, illum dolor beatae quam temporibus veniam voluptatum assumenda ipsa. Soluta officiis nam fuga ipsa quae deserunt odio culpa ullam tempore saepe autem explicabo cumque at nostrum perferendis rerum, pariatur animi necessitatibus. Excepturi deleniti quis magnam exercitationem non voluptatum, dolor obcaecati enim, possimus asperiores ratione deserunt quos nesciunt qui perferendis natus maiores temporibus ipsa reiciendis fugit, ad ut omnis repudiandae. Modi ratione aliquam amet molestias quam dolor omnis suscipit ducimus, quasi numquam corrupti repellendus rem sunt laudantium vel, veniam laboriosam nulla veritatis sequi fugiat reiciendis eum nisi impedit! Vero repudiandae hic architecto error eveniet numquam enim suscipit officiis at eum voluptates nemo doloribus, exercitationem ab ratione qui ex eaque, a, cumque deleniti sed quia aut! Earum accusamus eum modi animi dolor praesentium molestiae quisquam, quod sapiente aliquam quas libero vitae in corrupti labore illo magnam. Iste odio eveniet amet quasi voluptatibus incidunt eaque maxime minus, dolores laudantium corporis sapiente in voluptates veritatis odit at, quaerat voluptate, nisi porro natus perspiciatis! Hic tempora, illo quis, numquam quas neque pariatur quod magnam sed minus nisi quidem vitae id corporis odit, impedit saepe asperiores facere ab ut? Consectetur sunt sit fuga. Dolore, deleniti. Quidem non quae voluptatum culpa illum provident veritatis quaerat voluptate reprehenderit mollitia repudiandae dolores debitis ducimus sequi ea fuga, unde perspiciatis eligendi? Doloribus amet corporis magnam iste nisi! Veritatis et delectus earum expedita aut asperiores ratione eaque tempore vitae nulla necessitatibus inventore tenetur temporibus hic ipsa iste a quos molestiae quis laborum nam, corporis impedit laboriosam porro? Corrupti laudantium eius quam tempora quos iusto voluptate?"
  newElement.style.margin = "0"
  buttonId.appendChild(readMoreNewButton)
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
function activeButton(){
  activeButtonVar = latestworksid.getElementById("activeButton")
  activeButtonVar.removeAttribute("id")
}
