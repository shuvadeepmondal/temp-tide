import './App.css';
import Search from './component/Searchbar/Search';

function App() {
    const handleOnSerachChange =(searchData)=>{
      console.log(searchData);
    }
  return (
    <div className="container">
      < Search  onSearchChange={handleOnSerachChange} />
    </div>
  );
}

export default App;
