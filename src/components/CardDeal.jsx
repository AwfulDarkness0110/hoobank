import { card } from "../assets/static";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[29.375rem] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Alliquet quis
          aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Cards" className="w-full" />
      </div>
    </section>
  );
};

export default CardDeal;
