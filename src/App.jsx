import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { started } from "./sagafiles/Action";
import { start } from "./sagafiles/Constants";


function App() {
  const newsarticles= useSelector(state=>state.newsarticles)

  const dispatch=useDispatch()
  
  useEffect(()=>{
     dispatch(started())
  },[true])
  return (
    <div className="App">
   
    

     {
     newsarticles.length>0 && newsarticles[0].articles.map((article,index)=>{
        return(
          <li>{article.author}
          <p> {article.title}</p>
          <img src={article.urlToImage} alt="" />
          </li>
        )
      })
     }
    </div>
  );
}

export default App;
