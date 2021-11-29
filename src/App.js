import React from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Container from "./components/UI/Container";
import SideBar from "./components/UI/SideBar";
import ListView from "./components/UI/ListView";
import Footer from "./components/UI/Footer";
import ToolBar from "./components/UI/ToolBar";
import ToolBarGroup from "./components/UI/ToolBarGroup";
import ToolBarItem from "./components/UI/ToolBarItem";
import Tabs from "./components/UI/Tabs";
import Content from "./components/UI/Content";

const App = () => {
  let Items = [];
  Array.from(Array(100).keys()).map((i) =>
    Items.push({ id: i, title: `ListView Item ${i}` })
  );

  return (
    <div className="App">
      <Header>Header</Header>
      <Container>
        <SideBar>
          <ToolBar>
            <ToolBarItem>Add</ToolBarItem>
            <ToolBarItem>Edit</ToolBarItem>
            <ToolBarItem>Delete</ToolBarItem>
          </ToolBar>
          <ListView title="Projects" items={Items} />
        </SideBar>
        <Content>
          <Tabs>
            <div title="Tab 1">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и
              перешагнул в электронный дизайн. Его популяризации в новое время
              послужили публикация листов Letraset с образцами Lorem Ipsum в
              60-х годах и, в более недавнее время, программы электронной
              вёрстки типа Aldus PageMaker, в шаблонах которых используется
              Lorem Ipsum.
            </div>
            <div title="Tab 2">
              Почему он используется? Давно выяснено, что при оценке дизайна и
              композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
              используют потому, что тот обеспечивает более или менее
              стандартное заполнение шаблона, а также реальное распределение
              букв и пробелов в абзацах, которое не получается при простой
              дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."
              Многие программы электронной вёрстки и редакторы HTML используют
              Lorem Ipsum в качестве текста по умолчанию, так что поиск по
              ключевым словам "lorem ipsum" сразу показывает, как много
              веб-страниц всё ещё дожидаются своего настоящего рождения. За
              прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
              версии появились по ошибке, некоторые - намеренно (например,
              юмористические варианты).
            </div>
            <div title="Tab 3">
              Откуда он появился? Многие думают, что Lorem Ipsum - взятый с
              потолка псевдо-латинский набор слов, но это не совсем так. Его
              корни уходят в один фрагмент классической латыни 45 года н.э., то
              есть более двух тысячелетий назад. Ричард МакКлинток, профессор
              латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из
              самых странных слов в Lorem Ipsum, "consectetur", и занялся его
              поисками в классической латинской литературе. В результате он
              нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и
              1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и
              зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории
              этики был очень популярен в эпоху Возрождения. Первая строка Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из
              строк в разделе 1.10.32 Классический текст Lorem Ipsum,
              используемый с XVI века, приведён ниже. Также даны разделы 1.10.32
              и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский
              перевод, сделанный H. Rackham, 1914 год.
            </div>
          </Tabs>
        </Content>
      </Container>
      <Footer>Footer</Footer>
    </div>
  );
};

export default App;
