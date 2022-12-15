import React from "react";
import tickets from "./images/tickets.png"
import pending from "./images/pending.png"
import resolved from "./images/resolved.png"
 
const Cards = props =>{
    return(
        <div className="flex mt-10 mr-10 ml-56">
            <div className="flex h-40 justify-center shadow-lg align-center rounded-3xl px-8 border-2">
                <img classname="mt-4" src={tickets}/>
            </div>
            
            <div className="flex ml-16 h-40 justify-center shadow-lg align-center rounded-3xl px-8 border-2">
                <img classname="mt-4" src={pending}/>
            </div>
            
            <div className="flex ml-16 h-40 justify-center shadow-lg align-center rounded-3xl px-6 border-2">
                <img classname="mt-4" src={resolved}/>
            </div>

        </div>
    );
}

export default Cards;