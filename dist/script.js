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

var oneLinks = document.getElementById("onelinks");
var twoLinks = document.getElementById("twolinks");
var threeLinks = document.getElementById("threelinks");
var fourLinks = document.getElementById("fourlinks");
var fiveLinks = document.getElementById("fivelinks");
var sixLinks = document.getElementById("sixlinks");
var sevenLinks = document.getElementById("sevenlinks");
var eightLinks = document.getElementById("eightlinks");

var expandOne = document.getElementById("expandone");
var expandTwo = document.getElementById("expandtwo");
var expandThree = document.getElementById("expandthree");
var expandFour = document.getElementById("expandfour");
var expandFive = document.getElementById("expandfive");
var expandSix = document.getElementById("expandsix");
var expandSeven = document.getElementById("expandseven");
var expandEight = document.getElementById("expandeight");


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
          change = window.innerWidth * (expanded ? 0.25 : -0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        oneLinks.style.display = !expanded ? "none" : "block";
        expandOne.style.marginTop = !expanded ? "87vh" : "80vh";
        gsap.set(containerInner, { width: expanded ? "100vw" : "100vw" });
        ScrollTrigger.refresh();
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
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
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 1 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
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
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 1/2 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
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
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 1/3 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
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
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 1/4 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
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

          gsap.set(containerInner, { width: expanded ? "785vw" : "100vw" });
        ScrollTrigger.refresh();
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 1/4 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
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
          expandSeven.style.marginTop = !expanded ? "87vh" : "76vh";

          gsap.set(containerInner, { width: expanded ? "920vw" : "100vw" });
        ScrollTrigger.refresh();
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 1/4 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
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
          expandEight.style.marginTop = !expanded ? "87vh" : "76vh";
    

          gsap.set(containerInner, { width: expanded ? "1058vw" : "100vw" });
        ScrollTrigger.refresh();
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 1/4 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
          },
          ease: "sine.inOut"
        });
      }
    }
  );
});