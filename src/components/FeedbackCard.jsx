import { quotes } from "../assets/static";
const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[1.125rem] max-w-[23.125rem] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="Double quotes"
      className="w-[2.625rem] h-[1.6875rem] object-contain"
    />
    <p className="font-poppins font-normal text-lg leading-8 text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-xl leading-8 text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-base leading-5 text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
