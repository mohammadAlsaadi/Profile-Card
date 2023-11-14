import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar imageName="mohammad Alsaadi.jpg" name="mohammad Alsaadi" />
      <div className="data">
        <Introl
          name="Mohammad Alsaadi"
          description="Front-End Developer and fitness coach"
        />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.imageName} alt={props.name} />;
}
function Introl(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="green" />
      <Skill skill="Java Script" emoji="💪" color="yellow" />
      <Skill skill="Flutter" emoji="💪" color="blue" />
      <Skill skill="UI/UX" emoji="💪" color="orange" />
      <Skill skill="React" emoji="💪" color="red" />
      <Skill skill="GitHub" emoji="💪" color="grey" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
