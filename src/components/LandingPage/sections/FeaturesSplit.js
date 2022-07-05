import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import profiling from "assets/img/Profiling_Outline.svg";
import completTask from "assets/img/Completed task _Two Color.svg";
import analytics from "assets/img/Finance analytics _Two Color.svg";
import ranking from "assets/img/Ranking_Two Color.svg";
const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "مراحل ثبت مزایده/مناقصه",
    paragraph:
      "با انجام دادن مرحله به مرحله این روند به بهترین شکل و متناسب با کسب کار خود مزایده/مناقصه های خود را ثبت کرده و پیمانکار خود را بیابید.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item justify-center">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  تکمیل اطلاعات شخصی
                </div>
                <h3 className="mt-0 mb-12 font-DanaFaNum">بخش پروفایل</h3>
                <p className="m-0 text-slate-600">
                  با ورود به پروفایل کاربری خود تمامی اطلاعات را به درستی وارد
                  نموده تا در فرایند ثبت ، دچار مشکل نشوید.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom ",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={profiling}
                  alt="Features split 01"
                  width={500}
                  height={180}
                  className="text-center"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8 ">
                  وارد کردن اطلاعات مزایده/مناقصه
                </div>
                <h3 className="mt-0 mb-12 font-DanaFaNum">
                  ایجاد مزایده/مناقصه
                </h3>
                <p className="m-0 text-slate-600">
                  پس از تکمیل اطلاعات شخصی با ورود به بخش ایجاد مزایده/مناقصه و
                  تکمیل اطلاعات میتوانید مزایده خود را ایجاد کرده و تمامی
                  ملاحظات خود را در نظر بگیرید
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={completTask}
                  alt="Features split 02"
                  width={500}
                  height={180}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  مشاهده و بررسی پیشنهاد ها
                </div>
                <h3 className="mt-0 mb-12 font-DanaFaNum">
                  مزایده/مناقصه های من
                </h3>
                <p className="m-0 text-slate-600">
                  با ورود به بخش مزایده/مناقصه های من و انتخاب آن میتوانید
                  جزییاتی از مزایده ایجاد شده خود و قیمت های پیشنهادی را مشاهده
                  کرده و پیشنهاد دهندگان به گفت و گو بپردازید.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={analytics}
                  alt="Features split 03"
                  width={500}
                  height={180}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  پایان مزایده/مناقصه و اعلام برنده
                </div>
                <h3 className="mt-0 mb-12 font-DanaFaNum">
                  صفحه جزییات مزایده/مناقصه
                </h3>
                <p className="m-0 text-slate-600">
                  پس از پایان تاریخ مزایده/مناقصه برنده این رویداد با تایید
                  ایجاد کننده به اطلاع همه خواهد رسید.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={ranking}
                  alt="Features split 03"
                  width={500}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
