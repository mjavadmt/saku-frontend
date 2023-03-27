import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../utils/SectionProps";
import start from "assets/img/Startup_Two Color.svg";
import Image from "../elements/Image";
import { LOGIN } from "constant/routes";
import { useNavigate } from "react-router-dom";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const navigate = useNavigate();
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner p-0 ",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );
  return (
    <section {...props} className={outerClasses}>
      <div className="container cursor-pointer ">
        <div onClick={() => navigate(LOGIN)} className={innerClasses}>
          <div className="flex ">
            <h3 className="m-0 font-DanaFaNum text-slate-800 text-2xl mt-24 ">
              برای شروع فعالیت در سایت کلیک کنید
            </h3>
            <Image
              src={start}
              alt="Features tile icon 02"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
