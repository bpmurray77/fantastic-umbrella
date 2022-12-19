import React, { Component } from "react";

export const Card = ({title}) => (
	<div class="col-5 cardsize">
		<div>
			<h3>{title ?
			title:
			"Name"}</h3>
		</div>
	</div>
);
