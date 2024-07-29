if (document.querySelector(".preloader")) {
  document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
      enableScroll()
      document.body.classList.add('loaded');
    }, 100);
  });
}
const header = document.querySelector(".header")
const mobMenu = document.querySelector(".mob-menu")
const iconMenu = document.querySelector(".icon-menu")
const modalOpenBtn = document.querySelectorAll(".mod-open-btn")
const modalCloseBtn = document.querySelectorAll(".mod-close-btn")
const modal = document.querySelectorAll(".modal")
const successModal = document.querySelector("#success-mod")
const errorModal = document.querySelector("#error-mod")
let animSpd = 400
//get path to sprite id
function sprite(id) {
  return '<svg><use xlink:href="html/img/icons/sprite.svg#' + id + '"></use></svg>'
}
//scroll pos
function scrollPos() {
  return window.pageYOffset || document.documentElement.scrollTop
}
//enable scroll
function enableScroll() {
  if (document.querySelectorAll(".fixed-block")) {
      document.querySelectorAll(".fixed-block").forEach(block => block.style.paddingRight = '0px')
  }
  document.body.style.paddingRight = '0px'
  document.body.classList.remove("no-scroll")
}
//disable scroll
function disableScroll() {
  let paddingValue = window.innerWidth > 350 ? window.innerWidth - document.documentElement.clientWidth + 'px' : 0
  if (document.querySelectorAll(".fixed-block")) {
      document.querySelectorAll(".fixed-block").forEach(block => block.style.paddingRight = paddingValue)
  }
  document.body.style.paddingRight = paddingValue
  document.body.classList.add("no-scroll");
}
//open modal
function openModal(modal) {
  let activeModal = document.querySelector(".modal.open")
  if (!activeModal && !iconMenu.classList.contains("open") ) {
      disableScroll()
  }
  if (activeModal) {
    activeModal.classList.remove("open")
  }
  modal.classList.add("open")
}
//close modal
function closeModal(modal) {
  modal.classList.remove("open")
  setTimeout(() => {
    if (!iconMenu.classList.contains("open")) {
        enableScroll()
    }
  }, animSpd);
}
// modal click outside
function modClickOutside() {
  if (modal) {
    modal.forEach(mod => {
      mod.addEventListener("click", e => {
          if (!(mod.classList.contains("payment-mod") || mod.classList.contains("purchase-mod") || mod.classList.contains("reg-mod") || mod.classList.contains("tour-mod")|| mod.classList.contains("hackaton-mod")) && 
          !mod.querySelector(".modal__content").contains(e.target))
          {
              closeModal(mod)
          }
          if (mod.querySelector(".btn-close").contains(e.target)) {
            closeModal(mod)
        }
      })
    })
  }
}
modClickOutside()
// modal button on click
if (modalOpenBtn) {
  modalOpenBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault()
        let href = btn.getAttribute("data-modal")
        openModal(document.getElementById(href))
    })
  })
}
// modal close button on click
if (modalCloseBtn) {
  modalCloseBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault()
        let href = btn.getAttribute("data-modal")
        closeModal(document.getElementById(href))
    })
  })
}
// formSuccess
function setSuccessTxt(title = false, txt = false, subject = false) {
  successModal.querySelector(".modal__top h2").innerHTML = title ? title : "Заявка<br>успешно отправлена"
  successModal.querySelector(".modal__top p").textContent = txt ? txt : ""
  switch (subject) {
    case "football": successModal.querySelector(".modal__bg").setAttribute("src", "html/img/modal-football.svg")
    break;
    case "hackaton": successModal.querySelector(".modal__bg").setAttribute("src", "html/img/modal-hackaton.svg")
    break;
    default: successModal.querySelector(".modal__bg").setAttribute("src", "html/img/modal-deer.svg")
  }
}
function setErrorTxt(title = false, txt = false, subject = false) {
  errorModal.querySelector(".modal__top h2").innerHTML = title ? title : "Что-то пошло не так"
  errorModal.querySelector(".modal__top p").textContent = txt ? txt : ""
  switch (subject) {
    case "football": errorModal.querySelector(".modal__bg").setAttribute("src", "html/img/modal-football.svg")
    break;
    case "hackaton": errorModal.querySelector(".modal__bg").setAttribute("src", "html/img/modal-hackaton.svg")
    break;
    default: errorModal.querySelector(".modal__bg").setAttribute("src", "html/img/modal-deer.svg")
  }
}
function formReset(form) {
  form.querySelectorAll(".item-form").forEach(item => item.classList.remove("error"))
  form.querySelectorAll("input").forEach(inp => {
      if (!["hidden", "checkbox", "radio"].includes(inp.type)) {
          inp.value = ""
      }
      if (["checkbox", "radio"].includes(inp.type) && !inp.classList.contains("required")) {
          inp.checked = false
      }
  })
  if (form.querySelector("textarea")) {
      form.querySelector("textarea").value = ""
  }
}
function formSuccess(form, title = false, txt = false, subject = false) {
  formReset(form)
  setSuccessTxt(title = title, txt = txt, subject = subject)
  openModal(successModal)
}
//mask input
const inp = document.querySelectorAll('input[type=tel]')
if (inp) {
    inp.forEach(item => {
        Inputmask({ "mask": "+7 999 999-99-99" }).mask(item);
    })
}
//smoothdrop
function smoothDrop(header, body, dur) {
  body.style.overflow = 'hidden';
  body.style.transition = `height ${dur}ms ease`;
  body.style['-webkit-transition'] = `height ${dur}ms ease`;
  if (!header.classList.contains("active")) {
      header.classList.add("open")
      body.style.display = 'block';
      let height = body.clientHeight + 'px';
      body.style.height = '0px';
      setTimeout(function () {
          body.style.height = height;
          setTimeout(() => {
              body.style.height = null
              header.classList.add("active")
          }, dur);
      }, 0);
  } else {
      header.classList.remove("open")
      let height = body.clientHeight + 'px';
      body.style.height = height
      setTimeout(function () {
          body.style.height = "0"
          setTimeout(() => {
              body.style.display = 'none';
              body.style.height = null
              header.classList.remove("active")
          }, dur);
      }, 0);
  }
}
//swhitch tab
function tabSwitch(nav, block) {
  nav.forEach((item, idx) => {
      item.addEventListener("click", () => {
          nav.forEach(el => {
              el.classList.remove("active")
          })
          block.forEach(el => {
              el.classList.remove("active")
          })
          item.classList.add("active")
          block[idx].classList.add("active")
          item.style.opacity = "0"
          block[idx].style.opacity = "0"
          setTimeout(() => {
              item.style.opacity = "1"
              block[idx].style.opacity = "1"
          }, 0);
      })
  });
}
//anchor
if (document.querySelector(".js-anchor")) {
  document.querySelectorAll(".js-anchor").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault()
      let windowTop = window.pageYOffset || document.documentElement.scrollTop
      let dest = document.querySelector(item.getAttribute("href"))
      let diff = 0
      if (dest.querySelector(".reports__row") && dest.getBoundingClientRect().top < 0) {
        diff = dest.querySelector(".reports__row").clientHeight
      }
      destPos = dest.getBoundingClientRect().top < 0 ? dest.getBoundingClientRect().top - 60 : dest.getBoundingClientRect().top - 20
      if (iconMenu.classList.contains("open")) {
          iconMenu.click()
          setTimeout(() => {
              window.scrollTo({ top: windowTop - diff + destPos, behavior: 'smooth' })
          }, 300);
      } else {
          window.scrollTo({ top: windowTop - diff + destPos, behavior: 'smooth' })
      }     
    })
  })
}

// fixed header
function scrollPos() {
  return window.pageYOffset || document.documentElement.scrollTop;
}
let lastScroll = scrollPos();
window.addEventListener("scroll", () => {
  if (scrollPos() > 1) {
      header.classList.add("fixed")
      if ((scrollPos() > lastScroll && !header.classList.contains("unshow"))) {
          header.classList.add("unshow")
      } else if (scrollPos() < lastScroll && header.classList.contains("unshow")) {
          header.classList.remove("unshow")
      }
  } else {
      header.classList.remove("fixed")
      header.classList.remove("unshow")
  }
  lastScroll = scrollPos()
})
//mob-menu show/unshow
iconMenu.addEventListener("click", () => {
  if (iconMenu.classList.contains("open")) {
      enableScroll()
  } else {
      disableScroll()
  }
  iconMenu.classList.toggle("open")
  mobMenu.classList.toggle("show")
})
// custom scroll FF
const customScroll = document.querySelectorAll(".custom-scroll")
let isFirefox = typeof InstallTrigger !== 'undefined';
if (isFirefox) {
  document.documentElement.style.scrollbarColor = "#4cc326 #1E1E1E"
}
if (isFirefox && customScroll) {
  customScroll.forEach(item => { item.style.scrollbarColor = "#4cc326 #1E1E1E" })
}
//accordion
const accordion = document.querySelectorAll(".accordion")
if (accordion) {
  accordion.forEach(item => {
    item.querySelector(".accordion__header").addEventListener("click", e => {
      accordion.forEach(el => {
        if (el.querySelector(".accordion__header").classList.contains("active")) {
          smoothDrop(el.querySelector(".accordion__header"), el.querySelector(".accordion__body"), 500) 
        }
      })
      smoothDrop(item.querySelector(".accordion__header"), item.querySelector(".accordion__body"), 500) 
    })
})
}
// extra faq items
const faq = document.querySelector(".faq")
if (faq) {
  faq.querySelectorAll(".accordion").forEach((item,idx) => {
    if (idx <= 8) {
      item.querySelector(".accordion__header span").textContent = "0" + (idx + 1)
    }
  })
}
if (faq.querySelector(".faq__btn")) {
  let txt = faq.querySelector(".faq__btn").textContent
  faq.querySelector(".faq__btn").addEventListener("click" , () => {
    let unshowedL = faq.querySelectorAll(".item-faq").length
    let showedL = faq.querySelectorAll(".item-faq.show").length
    if (unshowedL > showedL) {
      faq.querySelectorAll(".item-faq").forEach(item => item.classList.add("show"))
      faq.querySelector(".faq__btn span").textContent = "свернуть"
      faq.querySelector(".faq__btn span").setAttribute("data-txt","свернуть")
    } else {
      faq.querySelector(".faq__btn span").textContent = txt
      faq.querySelector(".faq__btn span").setAttribute("data-txt",txt)
      faq.querySelectorAll(".item-faq").forEach(item => item.classList.remove("show"))
      for (let i = 0; i < 5; i++) {
        if (faq.querySelectorAll(".item-faq")[i]) {
          faq.querySelectorAll(".item-faq")[i].classList.add("show")
        }
      }
    }
  })
}
//swiper2
const swiper2 = document.querySelectorAll(".swiper2")
if (swiper2) {
  swiper2.forEach(item => {
    let swiperDesk = false
    let swiperMob = false
    let itemSwiperDesk, itemSwiperMob
    function initSwiper() {
      if (window.innerWidth > 767.98 && !swiperDesk) {
        if (swiperMob) {
          swiperMob = false
          itemSwiperMob.destroy(true, true)
        }
        swiperDesk = true
        itemSwiperDesk = new Swiper(item.querySelector(".swiper"), {
          slidesPerView: 2,
          spaceBetween: 10,
          observer: true,
          observeParents: true,
          navigation: {
            prevEl: item.querySelector(".nav-btn--prev"),
            nextEl: item.querySelector(".nav-btn--next")
          },
          breakpoints: {
            1400.98: {
              spaceBetween: 20,
            },
          },
          speed: 800
      })
      } else if (window.innerWidth < 767.98 && !swiperMob) {
        item.querySelectorAll(".nav-btn").forEach(btn => btn.removeAttribute("disabled"))
        if (swiperDesk) {
          swiperDesk = false
          itemSwiperDesk.destroy(true, true)
        }
        swiperMob = true
        itemSwiperMob = new Swiper(item.querySelector(".swiper"), {
          slidesPerView: 1,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          loop: item.querySelectorAll(".swiper-slide").length > 2,
          navigation: {
            prevEl: item.querySelector(".nav-btn--prev"),
            nextEl: item.querySelector(".nav-btn--next")
          },
          speed: 800
        })
      }
    }
    initSwiper()
    window.addEventListener("resize", initSwiper)
  })
}
//swiper1
const swiper1 = document.querySelectorAll(".swiper1")
if (swiper1) {
  swiper1.forEach(item => {
    let swiperDesk = false
    let swiperMob = false
    let itemSwiperDesk, itemSwiperMob
    function initSwiper() {
      if (window.innerWidth > 767.98 && !swiperDesk) {
        if (swiperMob) {
          swiperMob = false
          itemSwiperMob.destroy(true, true)
        }
        swiperDesk = true
        itemSwiperDesk = new Swiper(item.querySelector(".swiper"), {
          slidesPerView: 2,
          spaceBetween: 10,
          observer: true,
          observeParents: true,
          navigation: {
            prevEl: item.querySelector(".nav-btn--prev"),
            nextEl: item.querySelector(".nav-btn--next")
          },
          breakpoints: {
            1400.98: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            1200.98: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
          },
          speed: 800
        })
      } else if (window.innerWidth < 767.98 && !swiperMob) {
        item.querySelectorAll(".nav-btn").forEach(btn => btn.removeAttribute("disabled"))
        if (swiperDesk) {
          swiperDesk = false
          itemSwiperDesk.destroy(true, true)
        }
        swiperMob = true
        itemSwiperMob = new Swiper(item.querySelector(".swiper"), {
          slidesPerView: 1,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          loop: item.querySelectorAll(".swiper-slide").length > 2,
          navigation: {
            prevEl: item.querySelector(".nav-btn--prev"),
            nextEl: item.querySelector(".nav-btn--next")
          },
          speed: 800
      })
      }
    }
    initSwiper()
    window.addEventListener("resize", initSwiper)
  })
}
//switch active tab/block
const switchBlock = document.querySelectorAll(".switch-block")
if (switchBlock) {
  switchBlock.forEach(item => {
    tabSwitch(item.querySelectorAll("[data-nav]"),item.querySelectorAll("[data-block]"))
  })
}
//register modal
const regModal = document.querySelector(".reg-mod")
if (regModal) {
  regModal.querySelector(".main-btn").addEventListener("click", () => {
    let checkedMod = regModal.querySelector("input:checked").getAttribute('data-modal')
    openModal(document.querySelector(`#${checkedMod}`))
  })
}
// add-extra
const addExtra = document.querySelectorAll(".add-extra")
if (addExtra) {
  addExtra.forEach(item => {
    let content = item.querySelector(".add-extra__content").outerHTML
    item.querySelectorAll(".add-extra__content")[0].classList.add("del-hidden")
    item.querySelector(".add-extra__btn").addEventListener("click", () => {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden")
      } else {
        item.querySelectorAll(".add-extra__content")[item.querySelectorAll(".add-extra__content").length - 1].insertAdjacentHTML("afterend", content)
      }   
    })
    //delete file
    item.addEventListener("click", e => {
      item.querySelectorAll(".add-extra__del").forEach((del, idx) => {
          if (del.contains(e.target)) {
              setTimeout(() => {
                  del.parentNode.remove()
              }, 0);
          }
      })

  })
  })
}
function addExtraSuccess(form) {
  formReset(form)
  form.parentNode.classList.add("hidden")
  form.querySelectorAll(".add-extra__content").forEach((item,idx) => {
    if (idx != 0) {
      item.remove()
    }
  })
}
// tour modal
const tourMod = document.querySelector(".tour-mod")
function checkActiveFormat() {
  tourMod.querySelectorAll(".tour-mod__block").forEach(el => {
    el.classList.remove("active")
    let checkedInp = tourMod.querySelector('input[name=tour-format]:checked').getAttribute("data-format")
    if (el.getAttribute("data-block") === checkedInp) {
      el.classList.add("active")
    }
  })
}
if (tourMod) {
  tourMod.querySelectorAll('input[name=tour-format]').forEach(item => {
    checkActiveFormat()
    item.addEventListener("change", checkActiveFormat)
  })
}
// purchase form
const purchForm = document.querySelectorAll(".purchase-mod__form")
if (purchForm) {
  purchForm.forEach(form => {
    form.querySelectorAll("input[name='ticket-type[]'").forEach(item => {
      item.addEventListener('change', () => {
        if (item.parentNode.classList.contains("all-tickets")) {
          form.querySelectorAll("input[name='ticket-type[]'").forEach(el => {       
            el.removeAttribute("checked")
            el.checked = false
          })
          item.setAttribute("checked", true)
          item.checked = true
        } else {
          form.querySelectorAll("input[name='ticket-type[]'").forEach(el => {       
            if (el.parentNode.classList.contains("all-tickets")) {
              el.removeAttribute("checked")
              el.checked = false
            }
          })
        }
      })
    })
  })
}
//reports
const reports = document.querySelector(".reports")
let reportsTl = []
function reportTime(item) {
  let start = item.getAttribute("data-start").includes(":") ? item.getAttribute("data-start").split(":") : item.getAttribute("data-start").split(".")
  let end = item.getAttribute("data-end").includes(":") ? item.getAttribute("data-end").split(":") : item.getAttribute("data-end").split(".")
  let data = {
    start: [Number(start[0].split()[0]) == 0 ? Number(start[0].substring(1)) : Number(start[0]), Number(start[1].split()[0]) == 0 ? Number(start[1].substring(1)) : Number(start[1])], 
    end: [Number(end[0].split()[0]) == 0 ? Number(end[0].substring(1)) : Number(end[0]), Number(end[1].split()[0]) == 0 ? Number(end[1].substring(1)) : Number(end[1])]
  }
  return data
}
function setReportsGrid() {
  if (reports && reports.querySelector(".reports__tabs input[name=report-tab-day]")) {
    let gridCount = document.querySelector(".day_sections_reports.active").querySelectorAll(".reports__items.show").length
    reports.setAttribute("data-grid", gridCount)
  //1 min height
  let initH 
  let secCount = gridCount
  if (window.innerWidth > 1200.98) {
    let tabletH = 0
    if (window.innerWidth < 1400.98) {
      tabletH = 18
    }
    if ([ 5, 4, 3 ].includes(secCount)) {
      initH = ( 144 + tabletH ) / 60
    } else if ([ 2, 1 ].includes(secCount)) {
      initH = ( 120 + tabletH )  / 60
    } else {
      initH = ( 156 + tabletH )  / 60
    }
  } else {
    initH = 186 / 60
  }
  let startArr = []
  let endArr = []
  let minStart, maxEnd
  if (reports.querySelector(".item-report")) {
    reports.querySelector(".reports__time").innerHTML = ""
    if (reports.querySelector(".day_sections_reports.active .reports__items.show .item-report")) {
      reports.querySelectorAll(".day_sections_reports.active .reports__items.show .item-report").forEach((item,idx) => {
        startArr.push(reportTime(item).start[0])
        endArr.push(reportTime(item).end[0])
        minStart = Math.min(...startArr)
        maxEnd = Math.max(...endArr)
        reports.querySelector(".reports__time").innerHTML = ""
        for (let i = minStart; i <= maxEnd; i++) {
          reports.querySelector(".reports__time").innerHTML += `<span>${i < 10 ? "0" + i : i}:00</span>`
        }
      })
    }
    reports.querySelectorAll(".reports__items").forEach(sec => {
      sec.querySelectorAll(".item-report").forEach((item,idx) => {
        let thisTime = reportTime(item)
        let min = thisTime.end[1] - thisTime.start[1]
        let hours = thisTime.end[0] - thisTime.start[0]
        if (min < 0) {
          hours = hours - Math.abs(min) / 60
        }
        item.style.height = initH * hours * 60 + ( min > 0 ? initH * min : 0 ) + "px"
        if (idx !== 0) {
          let prevTime = reportTime(sec.querySelectorAll(".item-report")[idx - 1])
          let min = thisTime.start[1] - prevTime.end[1]
          let hours = thisTime.start[0] - prevTime.end[0]
          if (min < 0) {
            hours = hours - Math.abs(min) / 60
          }
          item.style.marginTop = initH * hours * 60 + ( min > 0 ? initH * min : 0 ) + "px"
        } else {
          let min = thisTime.start[1]
          let hours = thisTime.start[0] - minStart
          item.style.marginTop = initH * hours * 60 + initH * min + "px"
        }
        //report title height
        let titleCurrentH = item.querySelector(".item-report__title").clientHeight
        item.querySelector(".item-report__title").style.overflow = "visible"
        let titleRealH = item.querySelector(".item-report__title").clientHeight
        let titleLineH = parseInt(getComputedStyle(item.querySelector(".item-report__title")).getPropertyValue('line-height'))
        item.querySelector(".item-report__title").style.overflow = "hidden"
        if ((titleRealH - titleCurrentH) > 2) {
          let clamp = parseInt(titleCurrentH / titleLineH)
          item.querySelector(".item-report__title").style.webkitLineClamp = clamp > 0 ? clamp : 1
        }
        //report modal open/close
        item.querySelector(".item-report__inner").addEventListener("click", () => {
          document.querySelector("#item-report-mod .modal__content").innerHTML = item.querySelector(".item-report__mod .modal__content").innerHTML
          openModal(document.querySelector("#item-report-mod"))
        })
      })
    })
  }
  }
}
setReportsGrid()
window.addEventListener("resize", setReportsGrid)
function reportsModSuccess(form) {
  let checkedSecLength = form.querySelectorAll("input[name=report-sec]:checked").length
  if (checkedSecLength > 0 && checkedSecLength != form.querySelectorAll("input[name=report-sec]").length) {
    reports.setAttribute("data-grid",checkedSecLength)
    let btnTxt 
    if (checkedSecLength == 1) {
      btnTxt = "секция"
    } else if ([ 2, 3, 4].includes(checkedSecLength)) {
      btnTxt = "секции"
    } else {
      btnTxt = "секций"
    }
    document.querySelector(".reports__top .stroke-btn span").textContent = checkedSecLength+ " " + btnTxt
    document.querySelector(".reports__top .stroke-btn span").setAttribute("data-txt",checkedSecLength+ " " + btnTxt) 
  } else {
    reports.setAttribute("data-grid", form.querySelectorAll("input[name=report-sec]").length)
    document.querySelector(".reports__top .stroke-btn span").textContent = "Все секции"
    document.querySelector(".reports__top .stroke-btn span").setAttribute("data-txt","Все секции") 
  }
  if (checkedSecLength != 0) {
    reports.querySelectorAll(".reports__items").forEach(item => {
      item.classList.remove("show")
      form.querySelectorAll("input[name=report-sec]:checked").forEach(inp => {
        if (item.getAttribute("data-section") == inp.value) {
          item.classList.add("show")
        }
      })
    })
    reports.querySelectorAll(".reports__sections span").forEach(item => {
      item.style.display = "none"
      form.querySelectorAll("input[name=report-sec]:checked").forEach(inp => {
        if (item.getAttribute("data-section") == inp.value) {
          item.style.display = "flex"
        }
      })
    })
  } else {
    reports.querySelectorAll(".reports__items").forEach(item => item.classList.add("show"))
    reports.querySelectorAll(".reports__sections span").forEach(item => item.style.display = "flex")
  }
  document.querySelectorAll(".reports__tabs input[name=report-tab-day]").forEach(inp => {
    inp.parentNode.classList.remove("hidden")
    inp.classList.remove("hidden-slash")
  })
  document.querySelectorAll(".day_sections_reports").forEach(item => {
    if (item.querySelectorAll(".reports__items.show").length == 0) {
      document.querySelectorAll(".reports__tabs input[name=report-tab-day]").forEach((inp,idx) => {
        if (Number(inp.getAttribute("data-report-day")) == Number(item.getAttribute("data-day-id"))) {
          inp.parentNode.classList.add("hidden")
          if (idx == 0) {
            for (let i=0; i< document.querySelectorAll(".reports__tabs input[name=report-tab-day]").length - 1; i++) {
              if (!document.querySelectorAll(".reports__tabs input[name=report-tab-day]")[idx+i].classList.contains("hidden")) {
                document.querySelectorAll(".reports__tabs input[name=report-tab-day]")[idx+i].classList.add("hidden-slash")
                return
              }
            }
          }
        }
      })
      if (item.classList.contains("active")) {
        let findDay = Array.from(document.querySelectorAll(".day_sections_reports")).find(item => item.querySelectorAll(".reports__items.show").length > 0)
        if (findDay) {
          let dayAttr = Number(findDay.getAttribute("data-day-id"))
          document.querySelectorAll(".reports__tabs input[name=report-tab-day]").forEach(inp => {
            if (Number(inp.getAttribute("data-report-day")) == dayAttr) {
              inp.click()
            }
          })
        }
      }
    }
  })
  setReportsGrid()
  closeModal(document.querySelector("#reports-mod"))
}
function reportDayOnClick() {
  document.querySelectorAll(".reports__tabs input[name=report-tab-day]").forEach(inp => {
    inp.addEventListener('change', () => {
      document.querySelectorAll(".day_sections_reports").forEach(item => {
        if (item.getAttribute("data-day-id") == inp.getAttribute('data-report-day') ) {
          item.classList.add("active")
        } else {
          item.classList.remove("active")
        }
      })
      document.querySelectorAll(".day_sections").forEach(item => {
        if (item.getAttribute("data-day-id") == inp.getAttribute('data-report-day') ) {
          item.classList.add("active")
        } else {
          item.classList.remove("active")
        }
      })
      setReportsGrid()
    })
  })
} 
if (reports && document.querySelector(".reports__tabs input[name=report-tab-day]")) {
  reportDayOnClick()
}
// reports anim
function reportsTrigger() {
  if (document.querySelector(".reports__scroll")) {
    gsap.to(".reports__row", {
      y: -document.querySelector(".reports__row").offsetHeight ,
      ease: "none",
      scrollTrigger: {
        trigger: ".reports",
        pin: true,
        scrub: 1,
        start: "top 20px top",
        pinSpacing: false,
        end: () => "+=" + document.querySelector(".reports__row").offsetHeight,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    })
    gsap.to(".reports__row", {
      ease: "none",
      scrollTrigger: {
        trigger: ".reports",
        scrub: 1,
        start: "top 20px top",
        end: "bottom bottom",
        onEnter: () => {
          document.querySelector(".reports").classList.add("bot-grad")
        },
        onLeaveBack: () => {
          document.querySelector(".reports").classList.remove("bot-grad")
        },
        onLeave: () => {
          document.querySelector(".reports").classList.remove("bot-grad")
        },
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    })
    gsap.to(".reports__row", {
      ease: "none",
      scrollTrigger: {
        trigger: ".reports",
        scrub: 1,
        start: "top 20px top",
        end: "bottom top",
        onEnter: () => {
          document.querySelector(".reports").classList.add("top-grad")
          header.classList.add("hidden")
        },
        onLeave: () => {
          document.querySelector(".reports").classList.remove("top-grad")
          header.classList.remove("hidden")
        },
        onEnterBack: () => {
          document.querySelector(".reports").classList.add("top-grad")
          header.classList.add("hidden")
        },
        onLeaveBack: () => {
          document.querySelector(".reports").classList.remove("top-grad")
          header.classList.remove("hidden")
        },
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    })
  }
}
//add parallax to img in intro sec
let introILL = document.querySelectorAll(".intro__ill-img")
if (introILL) {
  introILL.forEach(img => {
    img.addEventListener("mouseenter", e => {
      if (window.innerWidth > 1520) {
        img.style.transitionDuration = '.5s'
        const startY = e.clientY
        const startX = e.clientX
        img.addEventListener("mousemove", (event) => {
          img.style.transitionDuration = '0s'
          let diffX = event.clientX - startX
          let diffY = event.clientY - startY
          img.style.transform = 'translate3d(' + diffX / 20 + 'px,' + diffY / 20 + 'px,0)'
        })
        img.addEventListener("mouseleave", () => {
          img.style.transform = 'translate3d(0,0,0)'
          img.style.transitionDuration = '.5s'
        })
      }
    })
  })
}
//remove ticket
function removeTicket(ticket) {
  setTimeout(() => {
    ticket.parentNode.parentNode.remove()
  }, 0);

}
$('[data-fancybox]').fancybox({
  infobar: false,
  hash: false,
  buttons: [
    "close"
  ],
  thumbs: false
});