import "./App.css";
import { Header } from "./components/header/header";
import { CardTodo } from "./components/card-todo/card-todo";
import React, { useState, useRef, useEffect } from "react";
import { BiTired } from "react-icons/bi";
import Slider1 from "./components/slider/slider";
import { useDispatch, useSelector } from "react-redux";
import Allfilter from "./components/AllFilter/allfilter";

function App() {
  const dispatch = useDispatch();
  const [TitlePizza, setTitlePizza] = useState(true);
  const [TitleDesert, setTitleDesert] = useState(true);
  const [name, setName] = useState();
  const [menuNoSearch, setmenuNoSearch] = useState();
  const countPirog = useSelector((el) => el.counterPirog);
  const counterCheese = useSelector((el) => el.counterCheese);
  localStorage.setItem("name", JSON.stringify(name));

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const [menu, setMenu] = useState([
    {
      imageSlider: "./image-pizza/4sira.jpeg",
      image: {
        image1: "./image-pizza/4sira.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Пикантная пепперони, ветчина, маринованные огурчики, томаты, моцарелла, томатный соус",
      title: "Пепперони",
      price: "499",
      rating: 4,
      id: 1,
    },
    {
      imageSlider: "./image-pizza/chiken.jpeg",
      image: {
        image1: "./image-pizza/chiken.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус",
      title: "4 сыра",
      price: "399",
      rating: 3,
      id: 2,
    },
    {
      imageSlider: "./image-pizza/pep.jpeg",
      image: {
        image1: "./image-pizza/pep.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, соус альфредо",
      title: "Средиземная",
      price: "499",
      rating: 5,
      id: 3,
    },
    {
      imageSlider: "./image-pizza/italy.jpeg",
      image: {
        image1: "./image-pizza/italy.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
      title: "Мясная",
      price: "599",
      rating: 5,
      id: 4,
    },
    {
      imageSlider: "./image-pizza/meat1.jpeg",
      image: {
        image1: "./image-pizza/meat1.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, соус альфредо, итальянские травы",
      title: "Техас",
      price: "599",
      rating: 1,
      id: 5,
    },
    {
      imageSlider: "./image-pizza/meat2.jpeg",
      image: {
        image1: "./image-pizza/meat2.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
      title: "Грибная",
      price: "489",
      rating: 3,
      id: 6,
    },
    {
      imageSlider: "./image-pizza/meat3.jpeg",
      image: {
        image1: "./image-pizza/meat3.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Ветчина, моцарелла, соус альфредо",
      title: "Мексиканская",
      price: "399",
      rating: 2,
      id: 7,
    },
    {
      imageSlider: "./image-pizza/meat4.jpeg",
      image: {
        image1: "./image-pizza/meat4.jpeg",
        image2: "./image-pizza/4sira.jpeg",
        image3: "./image-pizza/italy.jpeg",
      },
      info: "Увеличенная порция моцареллы, томатный соус",
      title: "Чикен бомбони",
      price: "399",
      rating: 4,
      id: 8,
    },
  ]);

  const [menuDesert, setMenuDesert] = useState([
    {
      imageSlider: "./image-desert/сupcake.jpeg",
      title: "Пирог",
      price: "149",
      rating: 4,
      info: "Это не просто десерт, а вишенка на торте! Творожно-песочное тесто с ягодами, заварным кремом и лепестками миндаля.",
      counter: countPirog,
    },
    {
      imageSlider: "./image-desert/cheescake.jpeg",
      title: "Чизкейк",
      price: "139",
      rating: 4,
      info: "Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк",
      counter: counterCheese,
    },
    {
      imageSlider: "./image-desert/сырники.jpeg",
      title: "Сырники с джемом",
      price: "219",
      rating: 4,
      info: "Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие ",
    },
    {
      imageSlider: "./image-desert/fondan.jpeg",
      title: "Фонданы",
      price: "205",
      rating: 4,
      info: "Четверо из пяти гостей говорят «Oh la la!», когда едят этот французский десерт с хрустящей корочкой ",
    },
    {
      imageSlider: "./image-desert/maffin.jpeg",
      title: "2 Маффина",
      price: "209",
      rating: 1,
      info: "Основное блюдо заканчивается, начинаются маффины с начинкой на шоколадной основе с кубиками белого шоколада",
    },
    {
      imageSlider: "./image-desert/kukis.jpeg",
      title: "2 Кукиса с шоколадом",
      price: "199",
      rating: 1,
      info: "С одной стороны, кукис — это хорошо, а с другой — два еще лучше. Сочетают в себе темный шоколад",
    },
    {
      imageSlider: "./image-desert/rullet.jpeg",
      title: "Рулетики с корицей",
      price: "269",
      rating: 1,
      info: "Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром",
    },
    {
      imageSlider: "./image-desert/rullet2.jpeg",
      title: "Рулетики с брусникой",
      price: "259",
      rating: 1,
      info: "Это задорные сладкие рулетики, в которых микс из натуральной брусники и сгущенки",
    },
  ]);

  // function GoCreate(title, price) {
  //   setMenu(menu.concat([{ image:'./image-pizza/burg2.jpg',title, price }]));
  // }
  function GoFilt(valueMin, valueMax) {
    if (valueMax && valueMin)
      setMenu(menu.filter((el) => el.price > valueMin && el.price < valueMax));
    setMenuDesert(
      menuDesert.filter((el) => el.price > valueMin && el.price < valueMax)
    );
    if (valueMax) {
      setMenu(menu.filter((el) => el.price < valueMax));
      setMenuDesert(menuDesert.filter((el) => el.price < valueMax));
    } else if (valueMin) {
      setMenu(menu.filter((el) => el.price > valueMin));
      setMenuDesert(menuDesert.filter((el) => el.price > valueMin));
    }
  }
  const [filterd, setFilterd] = useState(menu);
  const [filterdDesert, setFilterdDesert] = useState(menuDesert);

  function Filter1() {
    let newMenu = [...menu].sort((a, b) => b.price - a.price);
    setFilterd(newMenu);
    let newMenuDesert = [...menuDesert].sort((a, b) => b.price - a.price);
    setFilterdDesert(newMenuDesert);
  }
  function Filter2() {
    let newMenu = [...menu].sort((a, b) => a.price - b.price);
    setFilterd(newMenu);
    let newMenuDesert = [...menuDesert].sort((a, b) => a.price - b.price);
    setFilterdDesert(newMenuDesert);
  }
  function FilterAll() {
    let newMenu = [...menu];
    setFilterd(newMenu);
    let newMenuDesert = [...menuDesert];
    setFilterdDesert(newMenuDesert);
  }

  let [privateFilt, SetPrivateFilt] = useState(false);
  function onPrivate_() {
    SetPrivateFilt(!privateFilt);
  }

  const refPizza = useRef(null);
  const refDes = useRef(null);

  const ScrollToMyPizza = () => {
    window.scrollTo(0, refPizza.current.offsetHeight);
    console.log(refPizza.current.offsetHeight);
  };
  const ScrollToMyDes = () => {
    window.scrollTo(0, refDes.current.offsetTop);
    console.log(refPizza.current.offsetTop);
  };
  function GoSearch(search) {
    let newMenu = [...menu].filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase())
    );
    if (newMenu.length == 0) setTitlePizza(false);
    setFilterd(newMenu);

    let newMenuDesert = [...menuDesert].filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase())
    );
    if (newMenuDesert.length == 0) setTitleDesert(false);
    setFilterdDesert(newMenuDesert);

    if (newMenu.length == 0 && newMenuDesert.length == 0)
      setmenuNoSearch("К сожалению,ничего не найдено");
  }

  return (
    <div className="App">
      <div className="header_cardtodo">
        <Header MENU={menu}></Header>
        <div
          style={{ heigth: "1000px" }}
          onClick={() => dispatch({ type: "Close" })}
        >
          {" "}
          <div style={{ visibility: "hidden", position: "static" }}>111</div>
          <div style={{ zIndex: 3 }}>
            <Slider1 />
          </div>
          {/* <Navig
          ScrollToMyDes={ScrollToMyDes}
          ScrollToMyPizza={ScrollToMyPizza}
        /> */}
          <Allfilter
            GoSearch={GoSearch}
            SortUP={Filter2}
            SortDown={Filter1}
            SortAll={FilterAll}
          />
          {TitlePizza && (
            <div ref={refPizza} className="pizza_title">
              Пицца
            </div>
          )}
          <CardTodo
            Sort={null}
            Slider={true}
            Ingredients={true}
            Menu={filterd}
            Pizza={true}
          />
          {TitleDesert && (
            <div ref={refDes} className="desert_title">
              Десерты
            </div>
          )}
          <CardTodo Slider={false} Ingredients={false} Menu={filterdDesert} />
        </div>
        <h1>{menuNoSearch}</h1>
      </div>
    </div>
  );
}

export default App;
