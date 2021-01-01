import React,{Component} from 'react';
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from '../src/QuoteDb';
import CSS from '../src/App.css'
export default class App extends Component{
  //state

  state={
    quote: quotes[0].quote,
    author: quotes[0].author
  }

  //generator different quote function

  generateRandomQuote = (arr)=>{
    //get randum numbers

    let num = Math.floor (Math.random()*quotes.length)

    let newQuote = quotes[num]
    this.setState({

      quote: newQuote.quote,
      author: newQuote.author

    })

    this.shuffleQuotes(quotes)
  }

  //shuffle function

  shuffleQuotes = (arr)=>{
    return arr.sort (function(){return 0.5-Math.random()})
  }

render(){
  return(
    <div className="container" >
    <h1 className='text-container'> Random Quote</h1>

    <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />

    </div>
  )
}
  
}

