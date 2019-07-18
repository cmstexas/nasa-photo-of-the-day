import React from "react";
import styled from "styled-components";

const Button1 = styled.button`
  background-color: seagreen;
	border-radius:21px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:17px;
	padding:19px 44px;
	text-decoration:none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-left: 49rem;
  margin-bottom: 5rem;
  `;

  const Image = styled.img`
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`;

export default function DayCard({ imageUrl }) {
  return (
    <div className="day-card">
      <Image src= {imageUrl} alt="nasa pic" style={{ maxWidth: "550px" }} />
      <Button1>VIEW ARCHIVES</Button1>
    </div>
  );
}



