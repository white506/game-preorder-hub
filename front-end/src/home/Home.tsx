import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Home.module.css";

const isSuccess = false;

interface IFormState {
  name: string;
  email: string;
}

function Home() {
  const { register, handleSubmit } = useForm<IFormState>();

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>Form sent!</div>
        ) : (
          <>
            <h1>GTA 6 - Preorder</h1>
            <input
              type="name"
              placeholder="Entry your Name:"
              {...register("name")}
            />
            <input
              type="email"
              placeholder="Entry your Email:"
              {...register("email")}
            />
            <button>I want Grand Theft Auto VI</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Home;
