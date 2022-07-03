import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import selecting from "assets/img/undraw_select_option_re_u4qn.svg";
import filtring from "assets/img/undraw_filter_re_sa16.svg";
import searching from "assets/img/undraw_the_search_s0xf.svg";
import chat from "assets/img/undraw_mobile_messages_re_yx8w.svg";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "ویژگی های این سایت",
    paragraph: "با استفاده از این سایت به مزیت های زیر دست پیدا خواهید کرد.",
  };

  return (
    <section {...props} className={""}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header justify-center flex">
                  <div className="bg-palette1 rounded-full w-32 h-32 justify-center mb-16">
                    <Image
                      src={selecting}
                      alt="Features tile icon 01"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 font-DanaFaNum">تنوع کار فرما</h4>
                  <p className="m-0 text-sm">
                    با استفاده از این سایت پیمانکاران پیشنهاد های کاری در تمام
                    کشور را مشاهده کرده ومتناسب با شرایط خود شانس برنده شدن در
                    آن را دارند
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header justify-center flex">
                  <div className="bg-palette1 rounded-full w-32 h-32 justify-center mb-16">
                    <Image
                      src={filtring}
                      alt="Features tile icon 02"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 font-DanaFaNum">تنوع پیمانکار</h4>
                  <p className="m-0 text-sm">
                    دراین سایت تمامی کسب وکار ها در معرض دید تعداد زیادی از
                    پیمانکاران قرار گرفته و کسب کار ها شانس همکاری با بهترین
                    پیمانکاران و بهترین پیشنهاد های قیمت را دارند.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header justify-center flex">
                  <div className="bg-palette1 rounded-full w-32 h-32 justify-center mb-16">
                    <Image
                      src={searching}
                      alt="Features tile icon 03"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 font-DanaFaNum">
                    شفافیت در معاملات
                  </h4>
                  <p className="m-0 text-sm">
                    با استفاده از این سایت تمامی معاملات به صورت کاملا واضح و
                    روشن صورت گرفته و از تقلب و رانت در برنده شده در
                    مزایده/مناقصه ها خبری نخواهد بود.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header justify-center flex">
                  <div className="bg-palette1 rounded-full w-32 h-32 justify-center mb-16">
                    <Image
                      src={chat}
                      alt="Features tile icon 04"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 font-DanaFaNum">
                    ارتباط مستقیم و راحت بین دو طرف
                  </h4>
                  <p className="m-0 text-sm">
                    در این سایت دو طرف میتوانند با یکدیگر ارتباط بر قرار کرده و
                    از جزییات کار و روند مطلع شوند.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header justify-center flex">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("assets/img/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("assets/img/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
