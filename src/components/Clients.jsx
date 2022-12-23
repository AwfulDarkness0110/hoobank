import { clients } from "../constants";
import styles from "../style";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[9rem] min-w-[7.5rem]`}
          >
            <img
              src={client.logo}
              alt="Client"
              className="sm:w-36 w-[6.25rem] object-contain clients"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
