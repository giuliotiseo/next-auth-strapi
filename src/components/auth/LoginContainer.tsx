"use client";
import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toastError, toastSuccess } from "@/lib/toasts/toast-libraries";
import { validateEmail } from "@/lib/helpers/validations";

export interface ErrorProps {
  field: string;
  message: string;
}

interface ValidationProps {
  email: string;
  password: string;
}

const validationFields = ({
  email, password
}: ValidationProps) => {
  let errors = [];

  if(!email) {
    errors = [{ field: 'email', message: 'Username o email errata' }]
    toastError({
      id: 'email-error',
      title: "Errore",
      message: 'L\'email non è valida',
    })

    console.error('Email errata');
    return errors
  }

  if(!password) {
    errors = [{
      field: 'password',
      message: 'Devi inserire una password'
    }]

    toastError({
      id: 'password-error',
      title: "Password errata",
      message: 'La password non è valida',
    })

    console.error('Password errata');
    return errors
  }

  if(!validateEmail(email)) {
    errors = [{ field: 'email', message: 'Il formato dell\'email non è corretto' }]

    toastError({
      id: 'email-error',
      title: "Errore email",
      message: 'Formato email non valido',
    })
     
    console.error('Email non valida');
    return errors
  }
}

const LoginContainer:FC<{}> = () => {
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ errors, setErrors ] = useState<ErrorProps[] | null>(null)
  const searchParams = useSearchParams();
  const isSuccessPage = searchParams.get("success");
  const isErrorPage = searchParams.get("error");

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const validationResult:any = validationFields({
      email, password
    });

    if(validationResult?.length > 0) {
      setErrors(validationResult)
      setLoading(false);
      return null;
    }

    try {
      await signIn("credentials", {
        identifier: email,
        password,
        redirect: true,
        callbackUrl: '/dashboard'
      });

    } catch(err) {
      console.error(err);
      setLoading(false);
    }
  }

  const showSuccessToast = useCallback(() => {
    toastSuccess({
      id: "success",
      title: "Account creato con successo",
      message: "Effettua il login per confermare il profilo"
    })

  }, [])

  const showErrorToast = useCallback(() => {
    toastError({
      id: "error",
      title: "Login fallito",
      message: "Dati inseriti errati o non presenti nel sistema"
    })
  }, [])

  useEffect(() => {
    if(isSuccessPage) {
      showSuccessToast();
    }
  }, [isSuccessPage, showSuccessToast]);

  useEffect(() => {
    if(isErrorPage) {
      showErrorToast();
    }
  }, [isErrorPage, showErrorToast]);

  if(loading) return <p>Accesso in corso...</p>


  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      login={handleSubmit}
    />
  )
}

export default LoginContainer;