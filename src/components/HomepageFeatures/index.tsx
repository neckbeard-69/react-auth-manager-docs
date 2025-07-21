import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Effortless Integration",
    description: (
      <>
        Drop in the <code>&lt;AuthProvider&gt;</code> and get started in minutes
        with your existing Axios instance and API.
      </>
    ),
  },
  {
    title: "Automatic Token Management",
    description: (
      <>
        Handles tokens, silent refresh, and user state automatically. No more
        boilerplate or manual interceptors.
      </>
    ),
  },
  {
    title: "Conditional Rendering",
    description: (
      <>
        Use <code>&lt;SignedIn&gt;</code>, <code>&lt;SignedOut&gt;</code>, and{" "}
        <code>&lt;AuthSwitch&gt;</code> to build dynamic UIs based on
        authentication state.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
