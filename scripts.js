function openNav() {
  document.getElementById("mySidenav").style.width = "10%";
  document.getElementById("main").style.marginLeft = "10%";
  document.getElementById("lore").style.marginLeft = "10%";
  document.getElementById("buttontrans").style.marginLeft = "10%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("lore").style.marginLeft = "0";
  document.getElementById("buttontrans").style.marginLeft = "0%";
  document.body.style.backgroundColor = "rgba(100, 100, 100, 0.4)";
}

function myTooltip(e) {
  const tooltip = document.getElementById("tooltip");

  tooltip.style.left = (e.clientX + 10) + "px";
  tooltip.style.top = (e.clientY + 10) + "px";
}

function showTip() {
  document.getElementById("tooltip").style.opacity = "1";
}

function hideTip() {
  document.getElementById("tooltip").style.opacity = "0";
}

const toggleTo2 = document.getElementById("toggle-to-2");
const toggleTo1 = document.getElementById("toggle-to-1");

const div1 = document.getElementById("main");
const div2 = document.getElementById("lore");

const hide = el => el.style.setProperty("display", "none");
const show = el => el.style.setProperty("display", "block");

hide(div2);
hide(toggleTo1);

toggleTo2.addEventListener("click", () => {
  hide(div1);
  hide(toggleTo2);
  show(toggleTo1);
  show(div2);
});

toggleTo1.addEventListener("click", () => {
  hide(div2);
  hide(toggleTo1);
  show(toggleTo2);
  show(div1);
});

function changeImage() {
    var img = document.getElementById("image");

    // Fade out
    img.style.opacity = 0;

    // Setting a timeout specifications for the function, mostly extra.
    setTimeout(function() {
        if (img.src.includes("Endministrator_Splash_Art.png")) {
            img.src = "/images/Operators/Endmin/EndministratorM_Splash_Art.png";
        } else {
            img.src = "/images/Operators/Endmin/Endministrator_Splash_Art.png";
        }
        // Fade in
        img.style.opacity = 1;
    }, 500); // 500 ms transition between the two images
}