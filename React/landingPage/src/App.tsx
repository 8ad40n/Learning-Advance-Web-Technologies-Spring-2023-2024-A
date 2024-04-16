
import './App.css'
import Education from './components/education'
import Heading from './components/heading'
import Project from './components/project'
import Skill from './components/skill'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Heading/>
      <p>--------------------------------------------------------------------------------------------------------</p>
      <br /><br />
      <Education/>
      <br />
      <Skill/>
      <br />
      <Project/>
    </>
  )
}

export default App
