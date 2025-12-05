function openNav() {
  document.getElementById("mySidenav").style.width = "10%";
  document.getElementById("main").classList.add("shifted");
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").classList.remove("shifted");
  document.body.style.backgroundColor = "white";
}
