import React from 'react';
import Fixed from './Fixed';
import Post from './Post';
import Profile from './Profile';

function Home() {
  return <div style={{display:'flex',maxWidth:1200,margin:'auto'}}>
    <div style={{padding:10}}>
      <Profile/>
      <Fixed/>
    </div>
    <div>
    <Post author={{
      name: "Shubham Mahapurkar",
      avatar : "https://media-exp1.licdn.com/dms/image/C5103AQHSjoW1gfKPwg/profile-displayphoto-shrink_200_200/0/1545743134048?e=1648684800&v=beta&t=lHxFc9QZMQMijrgWA0OAteD07w0Jm88xppwRFpTrpPw",
      title: "Developer"
    }}
    contentText="Sometimes we get overwhelmed by the amount of things we don't know when we learn new things. This called as Dunning-Kruger effect.
     You can see the diagram below (reminds me of Stress-Strain diagram in Strength of Materials book).
    This shows we sometimes overestimate our competence in case of little knowledge and in contrast underestimate it while having fair knowledge.
    The only thing I keep reminding me is to keep learning without thinking about what I know and I don't know, with time we can get full competence as well as confidence. #learning"
    time="1 Day Ago"
    imageLink="https://media-exp1.licdn.com/dms/image/C5622AQErZvkEmcjSGg/feedshare-shrink_800/0/1642520699082?e=1646265600&v=beta&t=s9-WShCK7B4n7oQYWlggsHRBxzu9RpJy0V90KVKzIlw"
    likeCount={300}
    />
    <Post author={{
      name: "Shubham Mahapurkar",
      avatar : "https://media-exp1.licdn.com/dms/image/C5103AQHSjoW1gfKPwg/profile-displayphoto-shrink_200_200/0/1545743134048?e=1648684800&v=beta&t=lHxFc9QZMQMijrgWA0OAteD07w0Jm88xppwRFpTrpPw",
      title: "Developer"
    }}
    contentText="Sometimes we get overwhelmed by the amount of things we don't know when we learn new things. This called as Dunning-Kruger effect.
     You can see the diagram below (reminds me of Stress-Strain diagram in Strength of Materials book).
    This shows we sometimes overestimate our competence in case of little knowledge and in contrast underestimate it while having fair knowledge.
    The only thing I keep reminding me is to keep learning without thinking about what I know and I don't know, with time we can get full competence as well as confidence. #learning"
    time="1 Day Ago"
    imageLink="https://media-exp1.licdn.com/dms/image/C5622AQErZvkEmcjSGg/feedshare-shrink_800/0/1642520699082?e=1646265600&v=beta&t=s9-WShCK7B4n7oQYWlggsHRBxzu9RpJy0V90KVKzIlw"
    likeCount={300}
    />
    </div>
    <div style={{padding:10}}>
    <Profile/>
    </div>



    
  </div>;
}

export default Home;
