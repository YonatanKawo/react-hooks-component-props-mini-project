import React from "react";

function Header ({header,textPosition = ""}) {
    
    return (
        <header className={{textPosition}}>
           {header ? <h1>{header}</h1>:null}
           
        </header>
    );

}
export default Header;