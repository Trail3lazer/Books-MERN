import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Saved from './pages/SavedPage';
import Search from './pages/SearchPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  const db = {
    find: async()=>{
      let res = await fetch('/api/books', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      let result = await res.json();
      console.log(result);
      return result;
    },
    post: async(obj)=>{
      let book = {
        volumeInfo: {
          title: obj.volumeInfo.title,
          authors: obj.volumeInfo.authors.join(', '),
          previewLink: obj.volumeInfo.previewLink,
          description: obj.volumeInfo.description,
          imageLinks: {
            thumbnail:  obj.volumeInfo.imageLinks.thumbnail
          }
        },
        id: obj.id,
      };

      let res = await fetch('/api/books', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
      })
      let result = await res.json();
      console.log(result);
      return result;
    }
  }

  return (
    <div  className="App">
    <Navbar />
    <Hero />
    <Router>
      <Switch>

        <Route path="/favorites" component={()=>{
          return <Saved db={db} />
        }} />
        
        <Route path="/" component={()=>{
          return <Search db={db} />
        }} />

      </Switch>
    </Router>
    </div>
  );
}

export default App;
