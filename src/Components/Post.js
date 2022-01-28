import React,{useState} from 'react';

const container = {
  backgroundColor:'white',
  width:450,
  borderRadius: 8
}

function Post({author,contentText,time,imageLink,likeCount}) {
  const[like,setLike]=useState(false);
  return (
    <div style={container}>
      <div style={{display: 'flex',alignItems:'center',paddingBottom:10}}>
        <div style={{paddingLeft:10,paddingRight:10}}>
          <img src={author.avatar} alt='Author Avatar 404' height={100} style={{borderRadius : '50px'}}></img>
        </div>
        <div>
            {author.name}
            <br/>
            {author.title}
            <br/>
            {time}
        </div>
      </div>
      <div style={{textAlign:'justify', padding: 10}}>
        {contentText}
      </div>
      <div style={{padding:10}}>
        <img src={imageLink} style={{width: '90%'}}/>
      </div>
      <div style={{textAlign:'justify', padding: 10,color: 'GrayText'}}>
          {
            like?(<span>You and {likeCount} others liked this.</span>)
            :(<span>{likeCount} people liked this.</span>)
          }
      </div>
      <div style={{textAlign:'justify', padding: 10,display: 'flex'}}>
        <div style={{flex:1,cursor:'pointer'}} onClick={()=>setLike(prevLike=> !prevLike)}>Like</div>
        <div style={{flex:1,cursor:'pointer'}}>Comment</div>
        <div style={{flex:1,cursor:'pointer'}}>Share</div>
        <div style={{flex:1,cursor:'pointer'}}>Send</div>
      </div>
    </div>
  );
}

export default Post;
