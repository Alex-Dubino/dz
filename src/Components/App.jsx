import "../style/App.scss";
import Cards from "./Cards/Cards";
function App() {
  const arr = [
    {
      title: "Безлимитный 300",
      content: 300,
      subContent: "до 10 Мбит/сек",
      bg: "blue",
    },
    {
      title: "Безлимитный 450",
      content: 450,
      subContent: "до 50 Мбит/сек",
      bg: "green",
    },
    {
      title: "Безлимитный 550",
      content: 550,
      subContent: "до 100 Мбит/сек",
      bg: "red",
    },
    {
      title: "Безлимитный 1000",
      content: 1000,
      subContent: "до 200 Мбит/сек",
      bg: "black",
    },
  ];
  return (
    <>
      <div className="cards">
        <Cards card={arr[0]} />
        <Cards card={arr[1]} />
        <Cards card={arr[2]} />
        <Cards card={arr[3]} />
      </div>
    </>
  );
}

export default App;
