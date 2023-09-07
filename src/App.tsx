import './App.css'
import Content from './Content/Content.js'
import RainbowLine from './components/RainbowLine/RainbowLine'
import './Sections/MacMenu/components/IdiomSelector/i18n.js'

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
