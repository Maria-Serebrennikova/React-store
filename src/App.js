import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Card from "./components/Card";
import items from "./items.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все модели</h2>
          <div className="content__items">
            {
              items.map((obj) => (
                <Card title={obj.title} price={obj.price} image={obj.imageUrl} heights={obj.heights}/>
              ))
            }

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
