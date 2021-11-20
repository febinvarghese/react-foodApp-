import React, { useEffect, useState } from "react";

function MealApi() {
  let [menu, setmenu] = useState([]);

  async function  getFavImage() {
    const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    const response = await fetch(API);
    const data = await response.json();
    setmenu(data.meals);
  }
   
  
  useEffect( () => {
      getFavImage()
  }, []);

  let menuImg = menu.map((item)=>{
      return(
        <img src={item.strMealThumb} alt="" />
      )
  })



  return (
    <div>
      <h1>welcopme</h1>
      {menuImg}
    </div>
  );
}

export default MealApi;
