import stl from "./Friends.module.css";
import Friend from "./Friend/Friend";

function Friends(props) {
  let friendsElemets = props.state.messagesPage.dialogsData.map((friend) => (
    <Friend id={friend.id} name={friend.name} />
  ));
  return <div className={stl.friendsBox}> {friendsElemets}</div>;
}

export default Friends;
