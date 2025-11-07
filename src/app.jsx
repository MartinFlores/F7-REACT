/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import ReactDOM from "react-dom/client";
import { App, Panel, View } from "framework7-react";
import "framework7/css/bundle";
import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import routes from "./routes.js";
import store from "./store.js";

Framework7.use(Framework7React);

const F7App = () => {
  // let theme = 'aurora';
  // if (document.location.search.indexOf('theme=') >= 0) {
  //   theme = document.location.search.split('theme=')[1].split('&')[0];
  // }

  return (
    <App
      id="io.framework7.testapp"
      theme="md"
      routes={routes}
      store={store}
      popup={{ closeOnEscape: true }}
      sheet={{ closeOnEscape: true }}
      popover={{ closeOnEscape: true }}
      actions={{ closeOnEscape: true }}
    >
      <Panel
        left
        cover
        // resizable
        visibleBreakpoint={768}
      >
        <View url="/panel-left/" linksView=".view-main" />
      </Panel>
      <Panel
        right
        reveal
        // resizable
      >
        <View url="/panel-right/" />
      </Panel>
      <View
        browserHistory
        browserHistoryAnimate
        browserHistoryAnimateOnLoad
        browserHistorySeparator={"#"}
        browserHistoryOnLoad
        url="/"
        main
        className="safe-areas"
        // masterDetailBreakpoint={768}
      />
    </App>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<F7App />);
