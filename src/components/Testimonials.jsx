import { card } from "../assets/static";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

// Implicit return.
const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-0 w-[60%] aspect-square -right-[50%] rounded-full blue__gradient"></div>
    <div className="w-ful flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} `}>
        What people are <br />
        saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[29.375rem]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-10">
      {feedback.map((item) => (
        <FeedbackCard key={item.id} {...item} />
      ))}
    </div>
  </section>
);
export default Testimonials;
