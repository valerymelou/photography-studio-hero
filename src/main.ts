import "./style.css";

const topArc = document.getElementById("top-arc");
const bottomArc = document.getElementById("bottom-arc");

if (topArc) {
  const width = topArc.clientWidth * 4;

  topArc.style.height = `${width}px`;
  topArc.style.width = `${width}px`;
  topArc.style.left = "50%";

  const offset = width - 250;
  topArc.style.transform = `translate(-50%, -${offset}px)`;
}

if (bottomArc) {
  const width = bottomArc.clientWidth * 4;

  bottomArc.style.height = `${width}px`;
  bottomArc.style.width = `${width}px`;
  bottomArc.style.left = "50%";

  const offset = 250;
  bottomArc.style.transform = `translate(-50%, -${offset}px)`;
}
