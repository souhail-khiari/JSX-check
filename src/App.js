import React from 'react';
import './Style.css';
import myImgage from "./images2.png" ;

function App() {
  return (
<div style={{border:"1px solid black" , maxWidth: "100px"  }}>

<h1 className='title red'>Your name here</h1>
<img src={"/images1.png"} />


<img src="/images2.png" />

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
</div>
);
};

export default App;
