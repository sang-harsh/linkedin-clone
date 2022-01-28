import React from 'react';
import Home from './Home';

function Main(props) {
  if(props.content==='Home'){
    return (<Home/>)
  }else if(props.content==='My Network'){
    return (<div>My Network Main Content</div>)
  }
  else if(props.content==='Jobs'){
    return (<div>Jobs Main Content</div>)
  }
  else if(props.content==='Messaging'){
    return (<div>Messaging Main Content</div>)
  }
  else if(props.content==='Notifications'){
    return (<div>Notifications Main Content</div>)
  }
}

export default Main;
