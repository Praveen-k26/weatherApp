
import React from "react";
import CustomButton from "./customButton.component";

const WeatherForm = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <CustomButton> Get Weather </CustomButton>
    </form>
);

export default WeatherForm;