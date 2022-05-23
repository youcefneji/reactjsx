import React from 'react'
import logo from '../logo.svg'

const Main = () => {
  return (
      <>
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

 <h1 class="title red">Your name here</h1>

 <br/>

 <img src={logo} />

 <br />

 <img src="/logo192.png" />

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
      </>
  )
}

export default Main