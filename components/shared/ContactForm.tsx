import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subj: string;
  msg: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <form
      className=" flex flex-col space-y-2 w-fit mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" flex space-x-2">
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="contactInput"
          type="text"
          name="name"
          id="name"
        />
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          className="contactInput"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <input
        {...register("subj", { required: true })}
        placeholder="Subject"
        className="contactInput"
        type="text"
        name="subj"
        id="subj"
      />
      <textarea
        {...register("msg", { required: true })}
        placeholder="Message or even for a coffee"
        className="contactInput"
        name="msg"
        id="msg"
      />
      <button className=" bg-secondary py-5 px-10 text-black font-bold text-lg">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
