import React from 'react';

// BEGIN (write your solution here)
const getCard = (obj) =>{
    if (!obj.title && !obj.text){
        return null
    }
    return <div className="card">
            <div className="card-body">
                {obj.title?<h4 className="card-title">{obj.title}</h4>:null}
                {obj.text?<p className="card-text">{obj.text}</p>:null}
            </div>
         </div>


}

export default getCard
// END
