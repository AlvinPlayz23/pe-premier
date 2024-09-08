function headerIcon() {
  var nav = document.createElement("div");

  nav.setAttribute("id", "navbar");

  nav.innerHTML = `   
`;

  return nav;
}

document.getElementById("header").appendChild(headerIcon());
export default headerIcon;
