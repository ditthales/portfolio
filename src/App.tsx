import './App.css'
import Content from './components/Content/Content'
import RainbowLine from './components/RainbowLine/RainbowLine'
import '../i18n.js'

function App() {

  return (
      <div className='flex flex-col gap-[65px] justify-start items-center h-screen'>
        <RainbowLine orientation={'top'} />
        <Content />
        <RainbowLine orientation={'bottom'} />
      </div>
  )
}

export default App
