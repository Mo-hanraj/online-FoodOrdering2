//import resList from "../utils/mocData";
 //console.log(resList)

 const ResturantCard = (props) => {
    const { resData }=props;
   
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      deliveryTime,
        }=resData?.data?.data;
      return(
        <div className="res-cards">
          <img className="res-logo" 
          alt="biriryani" src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId
            }></img>
          <h3>{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{avgRating}</h4>
          <h4>{deliveryTime}</h4>
  
        </div>
      )
     };
  
   
  
  
  
  
    export default ResturantCard
     