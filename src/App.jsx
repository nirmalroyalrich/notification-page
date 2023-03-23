import { useState } from 'react'
import './App.css'

function App() {
  const [notifications, setNotifications] = useState([
    {
      "id": "1",
      "user": {
        "name": "Mark Webber",
        "src": "./images/avatar-mark-webber.webp",
        "href": "#"
      },
      "text": "reacted to your recent post",
      "link": {
        "text": "My first tournament today!",
        "href": "#"
      },
      "time": "1m ago",
      "isUnread": "true",
    },
    {
      "id": "2",
      "user": {
        "name": "Angela Gray",
        "src": "./images/avatar-angela-gray.webp",
        "href": "#"
      },
      "text": "followed you",
      "link": {
        "text": "",
        "href": "#"
      },
      "time": "5m ago",
      "isUnread": "true",
    },
    {
      "id": "3",
      "user": {
        "name": "Jacob Thompson",
        "src": "./images/avatar-jacob-thompson.webp",
        "href": "#"
      },
      "text": "has joined your group",
      "link": {
        "text": "Chess Club",
        "href": "#"
      },
      "time": "1 day ago",
      "isUnread": "true",
    },
    {
      "id": "4",
      "user": {
        "name": "Rizky Hasanuddin",
        "src": "./images/avatar-rizky-hasanuddin.webp",
        "href": "#"
      },
      "text": "sent you a private message",
      "link": {
        "text": "",
        "href": "#"
      },
      "privateMessage": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      "time": "5 days ago",
    },
    {
      "id": "5",
      "user": {
        "name": "Kimberly Smith",
        "src": "./images/avatar-kimberly-smith.webp",
        "href": "#"
      },
      "text": "commented on your picture",
      "link": {
        "text": "",
        "href": "#"
      },
      "image" : {
        "src": "./images/image-chess.webp",
        "href": "#"
      },
      "time": "1 week ago",
    },
    {
      "id": "6",
      "user": {
        "name": "Nathan Peterson",
        "src": "./images/avatar-nathan-peterson.webp",
        "href": "#"
      },
      "text": "reacted to your recent post",
      "link": {
        "text": "M5 end-game strategies to increase your win rate",
        "href": "#"
      },
      "time": "2 weeks ago",
    },
    {
      "id": "7",
      "user": {
        "name": "Anna Kim",
        "src": "./images/avatar-anna-kim.webp",
        "href": "#"
      },
      "text": "left the group",
      "link": {
        "text": "Chess Club",
        "href": "#"
      },
      "time": "2 weeks ago",
    },
  ]
)

  function markAllUnread(){
    setNotifications((prev) => prev.map(n => (
      {...n, isUnread: false}
      )))
  }

  function handleNotificationClick(id){
    setNotifications((prev) => prev.map(n => (
      n.id === id
        ? {...n, isUnread: false}
        : n
    )))
  }

  return (
    <div className="App">

      <div className="container">
        <header>
          <div className="title">
            <h1>Notifications</h1>
            <span className="badge">{notifications.filter(n => n.isUnread).length}</span>
          </div>
          <button id="mark" onClick={markAllUnread}>Mark all as read</button>
        </header>
        <div className="notifications-container">
          {notifications && notifications.map
          ((n) => (
            <div key={n.id} onClick={() => handleNotificationClick(n.id)} className="notification">
              <img src={n.user.src} alt={n.user.name} />
              <div className="post">
                <div className='post-content'>
                  <div className="post-activity">
                    <div className="post-text">
                      <a href={n.user.href} className="username">
                        {n.user.name}
                      </a>
                      <p>{n.text}</p>
                      {n.link && (
                        <a href={n.user.href}>
                          {n.link.text}
                        </a>
                      )}
                      <span className={n.isUnread && "isUnread"}></span>
                    </div>
                  <p className="time">{n.time}</p>
                  </div>
                  {n.image && (<a>
                    <img src={n.image.src} alt={n.image.name} />
                    </a>
                  )}
                </div>
                {n.privateMessage && (
                  <p className="privateMessage">{n.privateMessage}</p>
                )}
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
