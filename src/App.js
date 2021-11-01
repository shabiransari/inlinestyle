import "./styles.css";
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  backgroundColor: "red"
};
customStyle.color = "#fff";
export default function App() {
  return (
    <div className="App">
      <h1 style={customStyle}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
