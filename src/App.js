import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";
function App() {
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <Nav />
      <Banner />
      <Row id="0"
        title="Netflix original"
        fetchUrl={requests.fetchNetflixoriginal}
        islarger={true}
      />
      <Row id="1" title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row id="2" title="Action" fetchUrl={requests.fetchaction} />
      <Row id="3" title="Horror" fetchUrl={requests.fetchhorror} />
      <Row id="4" title="trending now" fetchUrl={requests.fetchdocumentaries} />
      <Row id="5" title="Romance" fetchUrl={requests.fetchromance} />
      <Row id="6" title="TopRated" fetchUrl={requests.fetchtopRated} />
    </div>
  );
}

export default App;
