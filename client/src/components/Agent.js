import { useEffect, useState } from "react";
import MDSpinner from "react-md-spinner";


const agentUID = "agent123";
const appID = "2177267a06836b61";
const region = 'us';
const AUTH_KEY = '0f525fc6b7b4c13d37595a4f6078156808ecb3d1';
const wid = "102eca63-88d9-4cfa-bafa-dab33f141ae1";

const Agent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.CometChatWidget.init({
      appID: appID,
      appRegion: region,
      authKey: AUTH_KEY,
    }).then(
      (response) => {
        console.log("Initialization completed successfully");
        //You can now call login function.
        window.CometChatWidget.login({
          uid: agentUID,
        }).then(
          (response) => {
            window.CometChatWidget.launch({
              widgetID: wid,
              target: "#cometchat",
              roundedCorners: "true",
              height: "600px",
              width: "100%",
              defaultID: "", //default UID (user) or GUID (group) to show,
              defaultType: "user", //user or group
            });
            setLoading(false);
          },
          (error) => {
            console.log("User login failed with error:", error);
            //Check the reason for error and take appropriate action.
          }
        );
      },
      (error) => {
        console.log("Initialization failed with error:", error);
        //Check the reason for error and take appropriate action.
      }
    );
  }, []);
  if (loading) {
    return (
      <div>
        <MDSpinner />
      </div>
    );
  }
  return <div id="cometchat" style={{ margin: "0 auto", width: "60%" }} />;
};
export default Agent;