import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[2.5rem] text-[1.875rem] xs:leading-[3.3125rem] leading-[2.6875rem] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-xl text-[0.9375rem] xs:leading-[1.625rem] leading-[1.3125rem] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
