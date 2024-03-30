import ReactDOM from "react-dom";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import VisitorsPage from "./customer"; // 来場者用

// スタイルオブジェクト
const navBarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(211, 211, 211, 0.5)", // 薄い灰色にして透過率を上げる
  padding: "10px 20px",
};

const navLinksStyle: React.CSSProperties = {
  fontFamily: "'MidashiGoPr5 MB31-83pv-RKSJ-H*', sans-serif",
  color: "white",
  fontSize: "18px",
};

const socialIconsStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: "24px",
  color: "white",
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  margin: "0 15px",
};

const eventNameStyle: React.CSSProperties = {
  marginLeft: "10px",
  fontSize: "20px",
  fontFamily: "'MidashiGoPr5 MB31-83pv-RKSJ-H*', sans-serif",
};

ReactDOM.render(
  <Router>
    <div>
      {/* メニューバー */}
      <nav style={navBarStyle}>
        {/* ソーシャルメディアアイコンとイベント名 */}
        <div style={socialIconsStyle}>
          <a
            href="https://www.facebook.com/keidaiart/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/obuse.keidaiart/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i className="fab fa-instagram"></i>
          </a>
          {/* イベント名 */}
          <span style={eventNameStyle}>境内アート×苗市</span>
        </div>
        {/* ナビゲーションリンク */}
        <div style={navLinksStyle}>
          <Link to="/" style={linkStyle}>
            来場者の方はこちら
          </Link>{" "}
          |{" "}
          <Link to="/exhibitors" style={linkStyle}>
            出展者の方はこちら
          </Link>
        </div>
      </nav>

      {/* ルート定義 */}
      <Routes>
        <Route path="/" element={<VisitorsPage />} />
        <Route path="/exhibitors" element={<App />} />
        {/* 他のルートもここに追加 */}
      </Routes>
    </div>
  </Router>,
  document.getElementById("root")
);
