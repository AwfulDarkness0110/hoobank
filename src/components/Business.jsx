import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[1.25rem] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-16 aspect-square rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-5 mb-1">
        {title}
      </h4>
      <p className="font-poppins text-dimWhite font-normal text-base leading-5">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[29.375rem] mt-5 leading-8`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feat, i) => (
          <FeatureCard key={feat.id} {...feat} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
