console.clear();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let containerOuter = document.getElementById("container-outer");
let containerInner = document.getElementById("container-inner");
let sections = gsap.utils.toArray("section");

let tween = gsap.to(sections, {
  x: () => -containerInner.offsetWidth + window.innerWidth,
  ease: "power1.inOut",
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
        expandButton.innerHTML = !expanded ? "Expand" : "Close";
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
          ease: "power1.inOut"
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
      ease: "power1.inOut",
      onComplete: () => {
        expanded = !expanded;
        let st = tween.scrollTrigger,
          change = window.innerWidth * (expanded ? 0.25 : -0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        expandButtonTwo.innerHTML = !expanded ? "Expand" : "Close";
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
          ease: "power1.inOut"
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
      ease: "power1.inOut",
      onComplete: () => {
        expanded = !expanded;
        let st = tween.scrollTrigger,
          change = window.innerWidth * (expanded ? 0.25 : -0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        expandButtonThree.innerHTML = !expanded ? "Expand" : "Close";
        gsap.set(containerInner, { width: expanded ? "180vw" : "120vw" });
        ScrollTrigger.refresh();
        // st.scroll(st.start + (st.end - st.start) * progress);
        st.update();
        st.getTween().progress(1); // eliminate the scrub animation
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (expanded ? 0.5 : progress)
            // Set the scroll to 0.5 of the ScrollTrigger instance's total scroll
            // This is 1 divided by the index of the target, in this case
            // the target is the third element so it's index is 2
            // So is 1/2 = 0.5
          },
          ease: "power1.inOut"
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
      ease: "power1.inOut",
      onComplete: () => {
        expanded = !expanded;
        let st = tween.scrollTrigger,
          change = window.innerWidth * (expanded ? 0.25 : -0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        expandButtonFour.innerHTML = !expanded ? "Expand" : "Close";
        gsap.set(containerInner, { width: expanded ? "370vw" : "120vw" });
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
          ease: "power1.inOut"
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
      ease: "power1.inOut",
      onComplete: () => {
        expanded = !expanded;
        let st = tween.scrollTrigger,
          change = window.innerWidth * (expanded ? 0.25 : -0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        expandButtonFive.innerHTML = !expanded ? "Expand" : "Close";
        gsap.set(containerInner, { width: expanded ? "740vw" : "120vw" });
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
          ease: "power1.inOut"
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
      ease: "power1.inOut",
      onComplete: () => {
        expanded = !expanded;
        let st = tween.scrollTrigger,
          change = window.innerWidth * (expanded ? 0.25 : -0.25),
          movement = containerInner.offsetWidth - window.innerWidth,
          progress = (st.progress * 1) / ((movement + change) / movement);
        expandButtonSix.innerHTML = !expanded ? "Expand" : "Close";
        gsap.set(containerInner, { width: expanded ? "900vw" : "120vw" });
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
          ease: "power1.inOut"
        });
      }
    }
  );
});