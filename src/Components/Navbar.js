import React,{useState} from 'react';

function Navbar(props) {

  const selected ={
    textAlign:'center',
    fontSize: 12,
    minWidth: 60,
    padding: 6,
    marginLeft: 10,
    marginRight: 10,
    borderBottom: "1.5px solid black"
  }

  const [text,setText]=useState("");

  const searchStyles ={
        height: 32,
        width: 280,
        paddingLeft: 20,
        border: '0px',
        borderRadius: 5,
        backgroundColor: '#EEF3F8',
        marginLeft: 10,
  }
  const navLinkStyles={
    textAlign:'center',
    fontSize: 12,
    minWidth: 60,
    padding: 6,
    marginLeft: 10,
    marginRight: 10
  }

  return (
    <div style={{
          backgroundColor:'white',
          position: 'fixed',
          height: 52,
          width: '100%',
          top:0
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        maxWidth: 900,
        margin: 'auto'
      }}>

        <div>
          <img src='logo.png' alt='Logo 404' height="32" ></img>
        </div>
        <div style={{flex:1}}>
          <input 
          placeholder='Search' 
          style={searchStyles}
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
        </div>
        <div  style={props.content==='Home'? selected : navLinkStyles} onClick={()=>props.setContent('Home')}>
          <img src='home.png' alt='Home png 404' height="20"/>
          <br/>
          Home
        </div>
        <div  style={props.content==='My Network'? selected : navLinkStyles} onClick={()=>props.setContent('My Network')} >
          <img src='home.png' alt='Home png 404' height="20"/>
          <br/>
          My Network
        </div>
        <div  style={props.content==='Jobs'? selected : navLinkStyles} onClick={()=>props.setContent('Jobs')}>
          <img src='home.png' alt='Home png 404' height="20"/>
          <br/>
          Jobs
        </div>
        <div  style={props.content==='Messaging'? selected : navLinkStyles} onClick={()=>props.setContent('Messaging')}>
          <img src='home.png' alt='Home png 404' height="20"/>
          <br/>
          Messaging
        </div>
        <div  style={props.content==='Notifications'? selected : navLinkStyles} onClick={()=>props.setContent('Notifications')}>
          <img src='home.png' alt='Home png 404' height="20"/>
          <br/>
          Notifications
        </div>  

      </div>      

    </div>
  );
}

export default Navbar;
