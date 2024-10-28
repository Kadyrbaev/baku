import { memo } from "react";

const Test = (props) => {  // {}==={}
  console.log("TEST");
  console.log(props);
  
  
  return (
    <div>
        <h1>TEST</h1>
        <h2>{props.state.age}</h2>
    </div>
  )
}

export default  memo(Test)

// git init
// git add .
// git commit -m "",
// ssylka repos
// git push -u origin master