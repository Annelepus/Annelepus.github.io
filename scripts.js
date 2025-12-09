function openNav() {
  document.getElementById("mySidenav").style.width = "10%";
  document.getElementById("main").style.marginLeft = "10%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
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