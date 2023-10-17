import React ,{Component}from 'react'
import './App.css'
import News from './News'
import Navbar from './Navbar'

export default class App extends Component {
  render(){
  return (
    <div>
      <div className='body'>
<Navbar/>
<h1 className='cricket-news-heading'>Search For Cricket News</h1>
<News/>
    </div>
    </div>
  )
}
}

