import 'bulma/css/bulma.min.css'
import Content from './components/Content'

function App() {
  return (
    <div className="hero is-fullheight has-background-light">
      <div className="columns hero-head">
        <div className="column"></div>
        <div className="column is-two-fifths">
          <Content></Content>
        </div>
        <div className="column"></div>
      </div>
    </div>
  )
}

export default App
