import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Card } from "../component/card";

export const Home = () => {

	const {store, actions} = useContext(Context);

	return(<div class="container">
		<People />
		<Card />
	</div>)

};
