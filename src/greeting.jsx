import React from "react";
// const time =new Date(2023,1,1,13).getTime()
const time =10
let greeting;

const customStyle={
    color:""
}

function Greeting(){
    if(time>12){
        greeting ="Good afternoon"
        customStyle.color="red"
    }
    else
    {   
        greeting ="Good morning"
        customStyle.color ="green"
    }
    return(
        <h1 style={customStyle}>{greeting}</h1>
    )

}
export default Greeting;