import React from "react";
import Proptypes from "prop-types"

function Movie(){

    return <h1></h1>
}

Movie.propType={
    id : Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary
}