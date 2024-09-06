import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(10)




  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${search}&limit=10&skip=${skip}&select=title,category,price`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  },[search,skip]);
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toString().toLowerCase())}
      />
      <button onClick={()=>setSkip(prev=>prev-10)} style={{margin:"8px"}}>Previous 10</button>
      <button onClick={()=>setSkip(prev=>prev+10)} style={{margin:"8px"}}>Next 10</button>
      {data
        .map((el) => (
          <div>
            {el.title} | {el.category} | {el.price}
          </div>
        ))}
    </>
  );
}

export default App;
