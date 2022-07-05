import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import logo from "assets/img/gavel.svg";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import { SPLASH } from "./../../../constant/routes";
import { useNavigate } from "react-router-dom";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const navigate = useNavigate();
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <div
              onClick={(e) => navigate(SPLASH)}
              className="flex cursor-pointer"
            >
              <div
                style={{
                  padding: "24px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 18,
                  letterSpacing: "1px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  color: "#8ba8f5",
                }}
              >
                سکو
              </div>
              <img src={logo} alt="hammer" height="40" width="40" />
            </div>
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <div className="footer-copyright">
              ساخته شده توسط <a href="d">CH-305</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
