import React, { useEffect, useState } from "react";
import axios from "axios";
import DayCard from "../Components/DayCard";


export default function DayGrid({ limit }) {
    const [hdImage, setImage] = useState("");
    const [date, setDate] = useState("2019-07-15");
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Dqi1aIt6ZhF8QjaBRhzVAdfv6ybls4xP4zXhM5wU&date=${date}`)
        .then(response => {
          const pod = response.data.hdurl;
          //pod = pic of day
          // console.log("day api:", doggos);
          console.log("pod api:", pod);
          // KEY PART, SAVE TO STATE:
          setImage(pod);
          // setMediaType(response.data.media_type);



          const podDate = response.data.date;
          console.log(podDate);
          // setDate(podDate)
        
        });
    }, [date]);
  
    // console.log("breed", breed);
    return (
      <div className="day-grid">
        <button onClick={() => setDate("2019-07-17")}>July 17, 2019</button>
        <button onClick={() => setDate("2019-07-16")}>July 16, 2019</button>
        <button onClick={() => setDate("2019-07-15")}>July 15, 2019</button>
        <button onClick={() => setDate("2019-07-14")}>July 14, 2019</button>
        <DayCard imageUrl={hdImage} key={hdImage} />
        {/* {hdImage.map(podUrl => {
          return <DayCard imageUrl={podUrl} />;
        })} */}
        {/* <div className="cat-card">
          <img
            src="https://adorbs-as-a-service.herokuapp.com/api/v1/250w/200h/"
            alt="kittehs!"
          />
        </div> */}
      </div>
    );
  
      }
  // const images = [`https://adorbs-as-a-service.herokuapp.com/api/v1/250w/200h/`]
  