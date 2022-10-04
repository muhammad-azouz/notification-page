import Notification from "./components/Notification";
import NotificationContainer from "./components/NotificationContainer";
import NotificationHeader from "./components/NotificationHeader";

function App() {
  return (
    <>
      <NotificationContainer>
        <NotificationHeader />

        <Notification
          avatar={"./images/avatar-mark-webber.webp"}
          profileName={"Mark Webber"}
          notificationType={"reacted to your recent post"}
          postTitle={"My first tournament today!"}
          groupTitle=""
          time="1m ago"
          unread={true}
          msgContent=""
          yourPicture=""
        />
        <Notification
          avatar={"images/avatar-angela-gray.webp"}
          profileName={"Angela Gray"}
          notificationType={"followed you"}
          postTitle={""}
          groupTitle=""
          time="5m ago"
          unread={true}
          msgContent=""
          yourPicture=""
        />
        <Notification
          avatar={"images/avatar-jacob-thompson.webp"}
          profileName={"Jacob Thompson "}
          notificationType={"has joined your group"}
          postTitle={""}
          groupTitle={"Chess Club"}
          time="1day ago"
          unread={true}
          msgContent=""
          yourPicture=""
        />
        <Notification
          avatar={"images/avatar-rizky-hasanuddin.webp"}
          profileName={"Rizky Hasanuddin"}
          notificationType="sent you a private message"
          postTitle={""}
          groupTitle={""}
          time="5 day ago"
          unread={false}
          msgContent="Hello, thanks for setting up the Chess Club. I've been a member for a
          few weeks now and I'm already having lots of fun and improving my
          game."
          yourPicture=""
        />
        <Notification
          avatar={"images/avatar-kimberly-smith.webp"}
          profileName={"Kimberly Smith"}
          notificationType="commented on your picture"
          postTitle={""}
          groupTitle={""}
          time="1 weeks ago"
          unread={false}
          msgContent=""
          yourPicture="images/image-chess.webp"
        />
        <Notification
          avatar={"images/avatar-nathan-peterson.webp"}
          profileName={"Nathan Peterson"}
          notificationType={"reacted to your recent post"}
          postTitle={"5 end-game strategies to increase your win rate"}
          groupTitle=""
          time="2 weeks ago"
          unread={false}
          msgContent=""
          yourPicture=""
        />
        <Notification
          avatar={"images/avatar-anna-kim.webp"}
          profileName={"Anna Kim"}
          notificationType={"left the group Chess Club"}
          postTitle={""}
          groupTitle={"Chess Club"}
          time="2 weeks ago"
          unread={false}
          msgContent=""
          yourPicture=""
        />
      </NotificationContainer>
    </>
  );
}

export default App;
