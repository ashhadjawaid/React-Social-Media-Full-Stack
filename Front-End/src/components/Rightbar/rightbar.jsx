import './rightbar.css'
import {Users} from "../../../dummyData"
import Online from '../Online/online'

export default function Rightbar({user}) {
  const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="/src/assets/gift.png" alt="" className="birthdayImg" />
          <span className='birthdayText'> <b>Ali</b> and <b>5 other friends</b> have birthday today</span>
        </div>
        <img className='rightbarAd' src="/src/assets/ad.png" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () =>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationships === 1 ? "Single" : user.relationships === 2 ? "In a relationship" : "-"}</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={`${PF}Person/5.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kat</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}Person/6.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kat</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}Person/7.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kat</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}Person/8.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kat</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}Person/9.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kat</span>
        </div>
        <div className="rightbarFollowing">
          <img src={`${PF}Person/10.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Kat</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar/>: <HomeRightBar/>}
      </div>
    </div>
  )
}
