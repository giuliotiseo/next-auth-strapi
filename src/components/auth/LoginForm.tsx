import { FC, FormEvent } from "react"
import Link from "next/link";
import InputEmail from "../form/InputEmail";
import InputPassword from "../form/InputPassword";

interface LoginFormProps {
  email: string;
  setEmail(name:string): any;
  password: string;
  setPassword(name:string): any;
  login(value: FormEvent): any;
}


// Main component ------------------------------------------------------------------------------------------------------------------------------
const LoginForm:FC<LoginFormProps> = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    login
  } = props;

  return (
    <form className="space-y-8" onSubmit={login}>
      <div className="space-y-4">
        <InputEmail
          value={email}
          setValue={(value: string) => setEmail(value)}
          withAsterisk={true}
        />

        <InputPassword
          value={password}
          setValue={setPassword}
          placeholder="Almeno 8 caratteri"
          label="Password"
        />
      </div>

      {/* <p className="text-right">
        <Link href="#" className="text-primary font-bold opacity-80 hover:opacity-100 transition-all">Hai dimenticato la password?</Link>
      </p> */}

      <button
        className="bg-opacity-80 hover:bg-opacity-100 bg-primary p-4 w-full text-center font-bold text-xl rounded-lg text-white font-title tracking-wide transition-all"
      >
        Login
      </button>

      <div className="mt-4 text-center text-sm">
        <p>Non hai un account?</p>
        <Link href="/register" className="text-primary font-bold">Registrati</Link>
      </div>
    </form>
  )
}

export default LoginForm;