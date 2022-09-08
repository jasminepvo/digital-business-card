import React from "react";
import Headshot from "../assets/professionalHeadshot.jpg"

export default function Image() {
	return (
		<div>
			<img src={Headshot} className="headshot"/>
		</div>
	);
}
