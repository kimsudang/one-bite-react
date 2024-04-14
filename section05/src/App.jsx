import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
  };

  return (
    <>
    <Header></Header>
      <h1>안녕 리액트</h1>
      <Main></Main>
      <Button {...buttonProps} />
      <Button text={"카페"} color={"blue"}>
        <Main></Main>
      </Button>
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
      <Footer></Footer>
    </>
  )
}

export default App