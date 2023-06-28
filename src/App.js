import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';

function App() {
  return (
    <div>
      <h1 style={{
        fontsize: 80px
      }}>My Awesome Bookstore</h1>
      <BookList/>
    </div>
  );
}

export default App;
