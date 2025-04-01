import './App.css'
import Dropdown from './components/Dropdown';
import data from './data.json';
import StarIcon from './assets/images/icon-star.svg'

interface qna{
  question:string,
  answer:string
}

function App() {
  return (
    <div className='App'>
        <main className='bg-white p-6 rounded md:min-w-2xl max-w-2xl'>
        <header className='font-semibold text-4xl flex items-center gap-6 text-Dark-purple mb-6'><img src={StarIcon} className='w-8 h-8'/>FAQs</header> 
        <section className='space-y-5'>
        {data && data.map((dat:qna,index)=>(
          <Dropdown header={dat.question} answer={dat.answer} default={index === 0?true:false} key={index}/>
          ))}
          </section>
          </main>
    </div>
  )
}

export default App
