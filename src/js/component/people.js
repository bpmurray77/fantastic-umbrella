import React, { Component, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import {getState} from "../store/flux.js";

export const People = () => {
	
	useEffect(() => {
		actions.getChars()
	}, [])

	return(
		
	)
};
