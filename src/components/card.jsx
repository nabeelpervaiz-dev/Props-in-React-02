import {Bookmark} from "lucide-react";
const card = (props) => {

  // console.log(props)
  return (

  <div className="card">

    <div className="top">
     
        <img src={props.logo} alt=""/>
    
      <button className="savebtn">Save <Bookmark color="grey" strokeWidth={1}/></button>
    </div>
    <div className="middle">
      <div className="company">
        <h3>{props.company}</h3>
      <h5>{props.time}days ago</h5>
      </div>
      <h2>{props.job_title}</h2>
      <div className="btns">
        <button className="contract">Contract</button>
        <button className="remote">Remote</button>
      </div>
    
    </div>
    <div className="bottom">
 <div className="left">
  <h3>{props.pay}</h3>
  <p>{props.location}</p>
 </div>
<div className="right">
  <button className="apply">Apply Now</button>
</div>
    </div>

   </div>
  )
  
}

export default card