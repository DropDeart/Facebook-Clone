import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import SideBar from './components/Sidebar/SideBar'
import Widgets from './components/Widgets/Widgets'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed/>
        <Widgets />
      </div>
    </div>
  )
}

export default App
