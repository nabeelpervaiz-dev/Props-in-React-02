
import { useState } from 'react';
import Card from './components/card'
import './App.css'
import { Heading1 } from 'lucide-react';


function App() {
  const [count, setCount] = useState(0)
  const jobOppenings=[
  {
    "brandLogo": "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3YxMDkxLTAzLXhfMS5qcGc.jpg",
    "companyName": "Meta",
    "datePosted": "2 days ago",
    "post": "Frontend Engineer",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$85/hr",
    "location": "Menlo Park, USA"
  },
  {
    "brandLogo": "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    "companyName": "Apple",
    "datePosted": "5 days ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Mid level",
    "pay": "$75/hr",
    "location": "Cupertino, USA"
  },
  {
    "brandLogo": "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    "companyName": "Amazon",
    "datePosted": "1 week ago",
    "post": "Backend Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior level",
    "pay": "$55/hr",
    "location": "Seattle, USA"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    "companyName": "Netflix",
    "datePosted": "3 weeks ago",
    "post": "UI/UX Designer",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$95/hr",
    "location": "Los Gatos, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgjbU__bud80q-JzYoHocp6LMXfZyXR-J9dbUC4arrTg&s=10",
    "companyName": "Google",
    "datePosted": "4 weeks ago",
    "post": "Cloud Solutions Architect",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$90/hr",
    "location": "Mountain View, USA"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/thumbnails/027/127/592/small_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    "companyName": "Microsoft",
    "datePosted": "2 weeks ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Mid level",
    "pay": "$70/hr",
    "location": "Redmond, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_JtQ-dtYDO81KHIVAZ0240PWjX9tBca5yp8yY8k2rEGZSuLq0q7x0A5Q&s=10",
    "companyName": "NVIDIA",
    "datePosted": "6 days ago",
    "post": "AI Research Scientist",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$110/hr",
    "location": "Santa Clara, USA"
  },
  {
    "brandLogo": "https://pbs.twimg.com/profile_images/1613650873208508417/wA7pR3aU_400x400.jpg",
    "companyName": "Adobe",
    "datePosted": "10 weeks ago",
    "post": "Full Stack Developer",
    "tag1": "Part Time",
    "tag2": "Junior level",
    "pay": "$45/hr",
    "location": "San Jose, USA"
  },
  {
    "brandLogo": "https://cdn-icons-png.flaticon.com/512/2496/2496101.png",
    "companyName": "Spotify",
    "datePosted": "2 weeks ago",
    "post": "Data Engineer",
    "tag1": "Full Time",
    "tag2": "Mid level",
    "pay": "$65/hr",
    "location": "New York, USA"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOvizDc-Qf3FFD7AmqCIvacDVsnV9kiE5SZw02zOKesv-NzK9xa4fae3r&s=10",
    "companyName": "Uber",
    "datePosted": "3 days ago",
    "post": "Mobile Engineer (Android)",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$80/hr",
    "location": "San Francisco, USA"
  }
]
console.log(jobOppenings.brandLogo);

  return (
<div className="parent">

 {jobOppenings.map((elem)=>{
  return <Card logo={elem.brandLogo} company={elem.companyName} time={elem.datePosted} job_title={elem.post} pay={elem.pay} location={elem.location}/>

 })}



</div>
  )
 }

export default App
