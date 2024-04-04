import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "FOR 外修",
    Svg: require("@site/static/img/Yunnet-light.svg").default,
    description: <>DNS1:&nbsp;&nbsp;140.125.252.1&nbsp;&nbsp;</>,
    description2: <>DNS2:&nbsp;&nbsp;140.125.253.2&nbsp;&nbsp;</>,
    title2: "交戰手冊",
    link: (
      <>
        <a href={"111/Yunnet/2022-10-05%20新生訓練/part3"}>
          &nbsp;外修小筆記&nbsp;
        </a>{" "}
        <a href={"/111/Yunnet/2022-10-05%20新生訓練/part6"}>
          &nbsp;網路線處置&nbsp;
        </a>
      </>
    ),
    link2: (
      <>
        <a href={"/112/112-1/2023-09-20%20Cisco%202960%20X"}>
          &nbsp;Cisco 2960 X&nbsp;
        </a>
      </>
    ),
  },
];

function Feature({
  Svg,
  title,
  description,
  description2,
  title2,
  link,
  link2,
}) {
  return (
    <div className={clsx("col col--21")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{description2}</p>
        <p>{link}</p>
        <h3>{title2}</h3>
        <p>{link2}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
