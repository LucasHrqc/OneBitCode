import { Fragment } from "react"
import Card from "./components/Card"
import poster from "./assets/poster.jpg";
import esbPoster from "./assets/esb-poster.jpg";
import rotjPoster from "./assets/rotj-poster.jpg";

function App() {
  return (
    // <div className="app">
    //   <Card />
    // </div>
    // Subsittui a div, pra não renderizar ela no template.
    // <Fragment>
    //   <Card />
    // </Fragment>
    <>
      <Card title="Pôster: Star Wars (1977)" poster={poster} />
      <Card title="Pôster: Empire Strikes Back (1980)" poster={esbPoster}/>
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPoster}/>
    </>
  )
}

export default App
