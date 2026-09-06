import {Bookmark} from "lucide-react";
const card = () => {
  return (
  <div className="card">

    <div className="top">
     
        <img src="https://miro.medium.com/1*-_Oy1F9RhlYwtRGSyNEj9w.png" alt=""/>
    
      <button className="savebtn">Save <Bookmark color="grey" strokeWidth={1}/></button>
    </div>
    <div className="middle">
      <div className="company">
        <h3>Airbnb</h3>
      <h5>5 days ago</h5>
      </div>
      <h2>junior UI/UX devloper</h2>
      <div className="btns">
        <button className="contract">Contract</button>
        <button className="remote">Remote</button>
      </div>
    
    </div>
    <div className="bottom">
 <div className="left">
  <h3>100$/hr</h3>
  <p>lahore, punjab</p>
 </div>
<div className="right">
  <button className="apply">Apply Now</button>
</div>
    </div>

   </div>
  )
}

export default card