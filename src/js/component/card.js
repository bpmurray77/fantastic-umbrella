import React, { Component } from "react";
import "../../styles/home.css";


export const Card = ({title}) => (
	<div className="col-5 cardsize" id = "card">
		<div>
			<h3>{title ?
			title:
			"Error"}</h3>
		</div>
	</div>
);
