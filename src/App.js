import "./App.css";
import Header from "./components/UI/Header";
import Container from "./components/UI/Container";
import SideBar from "./components/UI/SideBar";
import ListView from "./components/UI/ListView";
import Footer from "./components/UI/Footer";

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
          <ListView title="Projects" items={Items} />
        </SideBar>
        <section>Content</section>
      </Container>
      <Footer>Footer</Footer>
    </div>
  );
};

export default App;
