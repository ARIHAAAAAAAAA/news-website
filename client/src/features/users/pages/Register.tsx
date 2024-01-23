import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import { FormWrapper, StyledInput } from "../../global/style/registerStyle";
import { Button } from "../../global/style/buttonStyle";
import { Title } from "../../global/style/cardStyle";

interface IFormValues {
  Username: string;
  Password: string;
  Email: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <StyledInput type={label === "Password" ? "password" : "text"} {...register(label, { required })} />
  </>
);

const Register = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>

    <Title fontSize="3em" >sign up</Title>
    <FormWrapper>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Username" register={register} required />
      <br />
      <Input label="Password" register={register} required />
      <br />
      <Input label="Email" register={register} required />
      <br />
      <Button>submit</Button>
    </form>
    </FormWrapper>
    </>
  );
};

export default Register;
