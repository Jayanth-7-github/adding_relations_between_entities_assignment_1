import React from 'react'



function DestinationCard({name,location,image,description,price}) {

  return (

    <>



    <h3>name:{name}</h3>

    <h3>Location:{location}</h3>



    <img src={image}  alt="Destination image" width={200} />

    

    <h3>description:{description}</h3>



    <h3>price:{price}</h3>

    </>

  )

}



export default DestinationCard