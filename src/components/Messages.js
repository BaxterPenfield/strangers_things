import React from "react";

const Messages = ({ postID, token }) => {
    const [userData, setUserData] = useState({})
    useEffect(async () => {
        await getSinglePost(postID, token)
          .then((results) => {
            setUserData(results.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

  return (
    <div id="post-messages">
      <div className="post-content">
        <span className="post-username"></span>
        <span className="post-title"></span>
        <span className="post-content"></span>
        <span className="post-price">Price - </span>
      </div>
    </div>
  );
};

export default Messages;
