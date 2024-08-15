import './App.css'
import { Actor } from './components/Actor'
import ActorList from './components/actor-list'
import { ActorData } from './components/ActorData'
import ContactForm from './components/contact-form'
import Counter from './components/counter'
import Intro from './components/Intro'
import MovieList from './components/MovieList'

function App() {

  return (
    <>
      <Intro />
      <ContactForm />
      <Counter />
      <ActorData name="Ryan Reynolds" age={47} worth={350000000} />
      <ActorData name="Robert Downey Jr" age={59} worth={300000000} />
      <ActorData name="Chris Evans" age={43} worth={110000000} />
      <ActorData {...Actor} />
      <MovieList />
      <ActorList />
    </>
  )
}

export default App
