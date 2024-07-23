document.addEventListener("DOMContentLoaded", function() {
  console.clear();

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  let containerOuter = document.getElementById("container-outer");
  let containerInner = document.getElementById("container-inner");
  let sections = gsap.utils.toArray("section");

  let tween = gsap.to(sections, {
    x: () => -containerInner.offsetWidth + window.innerWidth,
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: containerOuter,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      end: () => "+=" + containerInner.offsetWidth
    }
  });

  var expanded = false;
  var expandButtonOne = document.getElementById("expandone");
  var expandButtonTwo = document.getElementById("expandtwo");
  var expandButtonThree = document.getElementById("expandthree");
  var expandButtonFour = document.getElementById("expandfour");
  var expandButtonFive = document.getElementById("expandfive");
  var expandButtonSix = document.getElementById("expandsix");
  var expandButtonSeven = document.getElementById("expandseven");
  var expandButtonEight = document.getElementById("expandeight");
  var expandButtonNine = document.getElementById("expandnine");

  var oneLinks = document.getElementById("onelinks");
  var twoLinks = document.getElementById("twolinks");
  var threeLinks = document.getElementById("threelinks");
  var fourLinks = document.getElementById("fourlinks");
  var fiveLinks = document.getElementById("fivelinks");
  var sixLinks = document.getElementById("sixlinks");
  var sevenLinks = document.getElementById("sevenlinks");
  var eightLinks = document.getElementById("eightlinks");
  var nineLinks = document.getElementById("ninelinks");

  var expandOne = document.getElementById("expandone");
  var expandTwo = document.getElementById("expandtwo");
  var expandThree = document.getElementById("expandthree");
  var expandFour = document.getElementById("expandfour");
  var expandFive = document.getElementById("expandfive");
  var expandSix = document.getElementById("expandsix");
  var expandSeven = document.getElementById("expandseven");
  var expandEight = document.getElementById("expandeight");
  var expandNine = document.getElementById("expandnine");

  var grid = document.getElementById("grid-icon");
  var scroll = document.getElementById("scroll-icon");

  expandButtonOne.addEventListener("click", function () {
    console.log("one clicked");
    gsap.fromTo(
      ".one",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          oneLinks.style.display = !expanded ? "none" : "block";
          grid.style.display = !expanded ? "block" : "none";
          scroll.style.display = !expanded ? "block" : "none";
          expandOne.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "100vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 0 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonTwo.addEventListener("click", function () {
    gsap.fromTo(
      ".two",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          twoLinks.style.display = !expanded ? "none" : "block";
          expandTwo.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "120vw" : "120vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 1 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonThree.addEventListener("click", function () {
    gsap.fromTo(
      ".three",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          threeLinks.style.display = !expanded ? "none" : "block";
          expandThree.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "180vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 1 / 2 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonFour.addEventListener("click", function () {
    gsap.fromTo(
      ".four",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          fourLinks.style.display = !expanded ? "none" : "block";
          expandFour.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "340vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 1 / 3 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonFive.addEventListener("click", function () {
    gsap.fromTo(
      ".five",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          fiveLinks.style.display = !expanded ? "none" : "block";
          expandFive.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "650vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 2 / 3 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonSix.addEventListener("click", function () {
    gsap.fromTo(
      ".six",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          sixLinks.style.display = !expanded ? "none" : "block";
          expandSix.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "1000vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 3 / 4 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonSeven.addEventListener("click", function () {
    gsap.fromTo(
      ".seven",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          sevenLinks.style.display = !expanded ? "none" : "block";
          expandSeven.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "2000vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 1 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonEight.addEventListener("click", function () {
    gsap.fromTo(
      ".eight",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          eightLinks.style.display = !expanded ? "none" : "block";
          expandEight.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "3000vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 2 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  expandButtonNine.addEventListener("click", function () {
    gsap.fromTo(
      ".nine",
      {
        minWidth: !expanded ? "20vw" : "100vw"
      },
      {
        minWidth: !expanded ? "100vw" : "20vw",
        duration: 0.5,
        ease: "sine.inOut",
        onComplete: () => {
          expanded = !expanded;
          let st = tween.scrollTrigger,
            change = window.innerWidth * (expanded ? 0.25 : -0.25),
            movement = containerInner.offsetWidth - window.innerWidth,
            progress = (st.progress * 1) / ((movement + change) / movement);
          nineLinks.style.display = !expanded ? "none" : "block";
          expandNine.style.marginTop = !expanded ? "87vh" : "80vh";
          gsap.set(containerInner, { width: expanded ? "4000vw" : "100vw" });
          ScrollTrigger.refresh();
          st.update();
          st.getTween().progress(1); // eliminate the scrub animation
          gsap.to(window, {
            scrollTo: {
              y: st.start + (st.end - st.start) * (expanded ? 2.5 : progress)
            },
            ease: "sine.inOut"
          });
        }
      }
    );
  });

  ScrollTrigger.addEventListener("refreshInit", () => {
    gsap.set(containerInner, { width: sections.length * 200 + "%" });
  });

  gsap.set(containerInner, { width: sections.length * 200 + "%" });

  window.addEventListener("resize", function () {
    gsap.set(containerInner, { width: sections.length * 200 + "%" });
    ScrollTrigger.refresh();
  });

  gsap.fromTo(
    sections,
    { x: () => -containerInner.offsetWidth + window.innerWidth },
    { x: 0, duration: 0.5, ease: "sine.inOut" }
  );

  gsap.set(containerInner, { width: sections.length * 200 + "%" });
  ScrollTrigger.refresh();
});
