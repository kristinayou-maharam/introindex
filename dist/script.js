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


var toggle = document.getElementById("rightnav");

var collapseOne = document.getElementById("collapseone");
var collapseTwo = document.getElementById("collapsetwo");
var collapseThree = document.getElementById("collapsethree");
var collapseFour = document.getElementById("collapsefour");
var collapseFive = document.getElementById("collapsefive");
var collapseSix = document.getElementById("collapsesix");
var collapseSeven = document.getElementById("collapseseven");
var collapseEight = document.getElementById("collapseeight");
var collapseNine = document.getElementById("collapsenine");


expandButtonOne.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : 0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        oneLinks.style.display = !expanded ? "none" : "block";
        toggle.style.display = !expanded ? "block" : "none";
        collapseOne.style.display = !expanded ? "none" : "block";
        expandOne.style.marginTop = !expanded ? "84vh" : "78vh";
        gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });

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

collapseOne.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : 0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        oneLinks.style.display = !expanded ? "none" : "block";
        toggle.style.display = !expanded ? "block" : "none";
        collapseOne.style.display = !expanded ? "none" : "block";
        expandOne.style.marginTop = !expanded ? "84vh" : "78vh";
        gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });

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
          change = window.innerWidth * (expanded ? 0.5 : 0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          twoLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseTwo.style.display = !expanded ? "none" : "block";
          expandTwo.style.marginTop = !expanded ? "84vh" : "78vh";
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

collapseTwo.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : 0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          twoLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseTwo.style.display = !expanded ? "none" : "block";
          expandTwo.style.marginTop = !expanded ? "84vh" : "78vh";
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
          change = window.innerWidth * (expanded ? 0.5 : 0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          threeLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseThree.style.display = !expanded ? "none" : "block";
          expandThree.style.marginTop = !expanded ? "84vh" : "78vh";

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();

        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.35 : progress)

          },
          ease: "sine.inOut"
        });
      }
    }
  );
});

collapseThree.addEventListener("click", function () {
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
      change = window.innerWidth * (expanded ? 0.5 : 0.25),
      movement = containerInner.offsetWidth - window.innerWidth,
      progress = (st.progress * 1) / ((movement + change) / movement);
      threeLinks.style.display = !expanded ? "none" : "block";
      toggle.style.display = !expanded ? "block" : "none";
      collapseThree.style.display = !expanded ? "none" : "block";
      expandThree.style.marginTop = !expanded ? "84vh" : "78vh";

      gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
      ScrollTrigger.refresh();

        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.35 : progress)

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
          change = window.innerWidth * (expanded ? 0.5 : 0.55),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          fourLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseFour.style.display = !expanded ? "none" : "block";
          expandFour.style.marginTop = !expanded ? "84vh" : "78vh";
          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();

        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.438 : progress)
          },
          ease: "sine.inOut"
        });
      }
    }
  );
});
collapseFour.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : 0.55),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          fourLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseFour.style.display = !expanded ? "none" : "block";
          expandFour.style.marginTop = !expanded ? "84vh" : "78vh";
          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();

        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.438 : progress)
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
          change = window.innerWidth * (expanded ? 0.5 : -0.2),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          fiveLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseFive.style.display = !expanded ? "none" : "block";
          expandFive.style.marginTop = !expanded ? "84vh" : "78vh";

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.523 : progress)

          },
          ease: "sine.inOut"
        });
      }
    }
  );
});

collapseFive.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : -0.2),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          fiveLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseFive.style.display = !expanded ? "none" : "block";
          expandFive.style.marginTop = !expanded ? "84vh" : "78vh";

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.523 : progress)

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
          change = window.innerWidth * (expanded ? 0.55 : -0.2),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          sixLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseSix.style.display = !expanded ? "none" : "block";
          expandSix.style.marginTop = !expanded ? "84vh" : "78vh";

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.61 : progress)

          },
          ease: "sine.inOut"
        });
      }
    }
  );
});

collapseSix.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.55 : -0.2),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          sixLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseSix.style.display = !expanded ? "none" : "block";
          expandSix.style.marginTop = !expanded ? "84vh" : "78vh";

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.61 : progress)

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
          change = window.innerWidth * (expanded ? 0.5 : -0.2),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          sevenLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseSeven.style.display = !expanded ? "none" : "block";
          expandSeven.style.marginTop = !expanded ? "84vh" : "78vh";

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.71 : progress)

          },
          ease: "sine.inOut"
        });
      }
    }
  );
});

collapseSeven.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : -0.2),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          sevenLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseSeven.style.display = !expanded ? "none" : "block";
          expandSeven.style.marginTop = !expanded ? "84vh" : "78vh";

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.71 : progress)

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
          change = window.innerWidth * (expanded ? 0.5 : 0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          eightLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseEight.style.display = !expanded ? "none" : "block";
          expandEight.style.marginTop = !expanded ? "84vh" : "78vh";
    

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.835 : progress)

          },
          ease: "sine.inOut"
        });
      }
    }
  );
});

collapseEight.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : 0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          eightLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseEight.style.display = !expanded ? "none" : "block";
          expandEight.style.marginTop = !expanded ? "84vh" : "78vh";
    

          gsap.set(containerInner, { width: expanded ? "250vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.835 : progress)

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
          change = window.innerWidth * (expanded ? 0.5 : 0.1),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          nineLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
          collapseNine.style.display = !expanded ? "none" : "block";
          expandNine.style.marginTop = !expanded ? "80vh" : "78vh";
          gsap.set(containerInner, { width: expanded ? "280vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.785 : progress)

          },
          ease: "sine.inOut"
        });
        st.update();
      }
    }
  );
});

collapseNine.addEventListener("click", function () {
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
          change = window.innerWidth * (expanded ? 0.5 : 0.1),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
          nineLinks.style.display = !expanded ? "none" : "block";
          toggle.style.display = !expanded ? "block" : "none";
        collapseNine.style.display = !expanded ? "none" : "block";
          expandNine.style.marginTop = !expanded ? "80vh" : "78vh";
          gsap.set(containerInner, { width: expanded ? "280vw" : "180vw" });
        ScrollTrigger.refresh();
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.785 : progress)

          },
          ease: "sine.inOut"
        });
        st.update();
      }
    }
  );
});