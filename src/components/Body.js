import ResturantCard from "./ResturantCards";
import resList from "../utils/mocData.js";
import { useEffect, useState } from "react";
import { render } from "react-dom";



const Body=()=>{

  const [listOfResturants,setListOfResturants]= useState(resList);
  
  const [searchInput,setSearchInput]=useState("");

  const[filterclicked,setFilterClicked]=useState("Eat 'BETTER' not Less");

   useEffect(()=>{
    fetchData();
    console.log('useEFcalled')
   },[])
   
   const fetchData=async()=>{
    const data=await fetch(
      ""
      );
      const json=await data.json();

      console.log(json);
   }
   
  
  console.log("render")
    
    return(
      <div className="body">
        <div className="search-cntr">
          <input 
          type="text"
          className="search-input"
          placeholder="Search here"
          value={searchInput}
          onChange={(e)=>{
            setSearchInput(e.target.value); //this is to give inputs to the search bar 
          }}
          />
          <button className="search-btn" 
          // onClick={()=>{
          //   const data= filterData(searchInput,listOfResturants)
          //   setListOfResturants(data)
            
          // }}
          >Search</button>
          <h2 className="ad-text">{filterclicked}</h2>
          

        </div>
         <div className="filter">
            <button
           
           className="filter-btn" onClick={()=>{
           
            const filterdList= listOfResturants.filter(
           (res)=> res.data.data.avgRating >4 )

           setListOfResturants( filterdList);
           setFilterClicked("Top-Rated resturants at the town")
            }}>
             Top Rated Rusturants

           </button> 
           </div> 
        <div className="resturant-card">

            {listOfResturants.map((restaurant,index)=>(
            <ResturantCard key={restaurant?.data?.data?.id} resData={restaurant}/>
           )
           )}
          
          
          
        </div>
      </div>
    )
   };

   export default Body 