import './App.css'
import Content from './3. Content/Content.js'
import RainbowLine from './3. Content/RainbowLine.js'
import './1. locales/i18n.js'

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
