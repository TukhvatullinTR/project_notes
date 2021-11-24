import React from 'react';
import "./App.css";
import Header from "./components/UI/Header";
import Container from "./components/UI/Container";
import SideBar from "./components/UI/SideBar";
import ListView from "./components/UI/ListView";
import Footer from "./components/UI/Footer";
import ToolBar from "./components/UI/ToolBar";
import ToolBarItem from "./components/UI/ToolBarItem";
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
          <ToolBar>
            <ToolBarItem>Add</ToolBarItem>
            <ToolBarItem>Edit</ToolBarItem>
            <ToolBarItem>Delete</ToolBarItem>
          </ToolBar>
        </Content>
      </Container>
      <Footer>Footer</Footer>
    </div>
  );
};

export default App;
