import React, { useState, useEffect }  from "react";
function GrafanaDashboard() {
    return (
      <div className="App">
        <h3>Iframes in React</h3>
        <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>
        <iframe src="http://94.237.54.137:3000/d-solo/gP7AsuHVz/user-disk-usage?orgId=3&from=1667263812175&to=1667285412175&panelId=1" width="700" height="500" frameborder="0"></iframe>
        </div>
    );
  }
  
  export default GrafanaDashboard;