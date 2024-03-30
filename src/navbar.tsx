import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useMedia from "use-media";
import App from "./App";
import VisitorsPage from "./customer";
import "./navbar.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const eventNameStyle: React.CSSProperties = {
    marginLeft: "10px",
    fontSize: "20px",
    fontFamily: "'MidashiGoPr5 MB31-83pv-RKSJ-H*', sans-serif",
    fontWeight: "bold",
    color: "white",
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
  const isWide = useMedia({ minWidth: "768px" });

  return (
    <Router>
      <div>
        <nav className="navBar">
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
            {isWide ? (
              <span style={eventNameStyle}>境内アート×苗市</span>
            ) : (
              <div></div>
            )}
          </div>
          {isWide ? (
            <div className={`navLinks ${open ? "open" : ""}`}>
              <Link to="/">来場者の方はこちら</Link>
              <Link to="/exhibitors">出展者の方はこちら</Link>
            </div>
          ) : (
            <>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ color: "#fff" }}
              >
                <MenuIcon /> {/* ハンバーガーメニューのアイコン */}
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/">
                  来場者の方はこちら
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/exhibitors"
                >
                  出展者の方はこちら
                </MenuItem>
              </Menu>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<VisitorsPage />} />
          <Route path="/exhibitors" element={<App />} />
          {/* 他のルートもこちら */}
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
