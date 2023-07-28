function menu() {
  let mdDispo = window.matchMedia('(max-width:768px').matches;

  let header = document.querySelector('header')
  let navBar = header.querySelector('nav')
  let menu = header.querySelector('.logo-area svg')
  let linkMenu = navBar.querySelectorAll('a')

  // Se for no máximo 768px
  if (mdDispo) {
    let menuClick = 0;
    menu.addEventListener('click', () => {
      let posiWindow = window.scrollY
      menuClick++
      if (menuClick == 1) {
        document.body.classList.toggle('overflow-hidden')
        navBar.classList.toggle('hidden')
        header.classList.toggle('h-[100vh]')

        if (posiWindow < 100) {
          header.classList.replace('bg-transparent', 'bg-[#161616]')
        }

      } else {
        menuClick = 0
        document.body.classList.toggle('overflow-hidden')
        navBar.classList.toggle('hidden')
        header.classList.toggle('h-[100vh]')

        if (posiWindow < 100) {
          header.classList.replace('bg-[#161616]', 'bg-transparent')
        }
      }
    })

    linkMenu.forEach((link) => {
      link.addEventListener('click', () => {
        setTimeout(() => {
          menuClick = 0;
          let posiWindow = window.scrollY
          document.body.classList.toggle('overflow-hidden')
          navBar.classList.toggle('hidden')
          header.classList.toggle('h-[100vh]')

          if (posiWindow < 100) {
            header.classList.replace('bg-[#161616]', 'bg-transparent')
          }
        }, 150);
      })
    })


  }






  //Efeito Scroll
  window.addEventListener('scroll', () => {
    let windowScroll = window.scrollY
    if (windowScroll >= 100) {
      header.classList.replace('bg-transparent', 'bg-[#161616]')
    } else {
      header.classList.replace('bg-[#161616]', 'bg-transparent')
    }
  })
}
menu()

function animationScroll() {
  let allAnimate = document.querySelectorAll('.allAnimate')
  let metadeTela = window.innerHeight * 0.9

  window.addEventListener('scroll', () => {
    let posicaoScroll = window.scrollY

    allAnimate.forEach((item) => {
      let posiItem = item.getBoundingClientRect().top
      if (posiItem <= metadeTela) {
        // Se o item tiver a classe a_exit subistitua por a_enter, senão, apenas adicione o a_enter
        if (item.classList.contains('a_exit')) {
          item.classList.replace('a_exit', 'a_enter')
        } else {
          item.classList.add('a_enter')
        }


      } else {
        if (item.classList.contains('a_enter')) {
          item.classList.replace('a_enter', 'a_exit')
        } else {
          item.classList.add('a_exit')
        }

      }
    })


  })

}
animationScroll()