import reactImg from "../../assets/deepwoken-icon.webp";
import "./Header.css";

const flavorTexts = [
  "The fog parts just enough to let you enter, then seals shut behind you. Whatever rules the world obeyed before do not follow you here...",
  "This place exists between moments, veiled in mist that remembers every soul that failed to leave.",
  "Whispers of forgotten adventurers echo through the fog, urging you to press on despite the unknown dangers ahead.",
  "The air is damp and breathless, carrying echoes that don't match your movements. The fog presses close, as if learning your shape.",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const randomFlavorText = flavorTexts[getRandomInt(flavorTexts.length)];

  return (
    <header>
      <hr style={{ margin: "150px 100px 10px 100px" }} />
      <img src={reactImg} />
      <h2>{randomFlavorText}</h2>
      <hr style={{ margin: "0 100px 50px 100px" }} />
    </header>
  );
}
