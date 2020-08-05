import React from "react";

function ProjectList(props) {

   return (
     <div>
    {props.projects.map((item, index)=> 
      <img key={index} src={item.img} />
    )}
    </div>
  )
}

export default ProjectList;