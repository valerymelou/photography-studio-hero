import "./style.css";

function makeArc(selector: string, position: "top" | "bottom"): void {
  const arc = document.getElementById(selector);

  if (arc) {
    const width = arc.clientWidth * 4;
    const offset = position === "top" ? width - 250 : 250;

    arc.style.height = `${width}px`;
    arc.style.width = `${width}px`;
    arc.style.left = "50%";
    arc.style.transform = `translate(-50%, -${offset}px)`;
  }
}

makeArc("top-arc", "top");
makeArc("bottom-arc", "bottom");
