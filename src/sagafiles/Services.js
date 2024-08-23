

 export async function getdata() {
   
  
        let response= await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4648b16c1c2e4f258894c57786439837')
        let data= await response.json()
        
        

        return data;
    }


 
  


