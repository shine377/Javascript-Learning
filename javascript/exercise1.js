const background = document.createElement("div");
const content = document.createElement("div");
content.textContent = "Background Color: Black";
content.style.backgroundColor = "red";
content.style.fontSize = "25px";
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.margin = "300px";
const button = document.getElementById("button-element");
button.append(background);
background.appendChild(content);
const bod = document.getElementById("bod");
bod.style.backgroundColor = "black";
const colors = ["green", "blue", "yellow", " black", "orange"];
button.addEventListener("click", () => {
  const val = col();
  content.textContent = `Background Color: ${colors[val]}`;
  console.log(colors[val]);

  bod.style.backgroundColor = colors[val];
});

const col = () => {
  return Math.floor(Math.random() * colors.length);
};
