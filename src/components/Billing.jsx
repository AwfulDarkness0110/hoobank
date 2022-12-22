import { apple, bill, google } from "../assets/static";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Billing" className="w-full relative z-50" />

        <div className="absolute z-30 -left-1/2 top-0 w-[50%] aspect-square rounded-full white__gradient"></div>
        <div className="absolute z-0 -left-1/2 bottom-0 w-[50%] aspect-square rounded-full pink__gradient"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[29.375rem] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adispicing ultrices ametodio
          oenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="#go_appstore" className="block">
            <img
              src={apple}
              alt="AppStore"
              className="w-32 h-[2.625rem] object-contain mr-5 cursor-pointer"
            />
          </a>
          <a href="#go_playstore" className="block">
            <img
              src={google}
              alt="PlayStore"
              className="w-32 h-[2.625rem] object-contain mr-5 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Billing;
