import { useForm, ValidationError } from '@formspree/react';
import Input from '../Input/Input';
import Textarea from '../TextArea/TextArea';
import { useTranslation } from 'react-i18next';
const ContactForm = () => {
    const { t } = useTranslation()
    const [state, handleSubmit] = useForm("xjvqrdka");
    const handleState = () => {
    if (state.submitting){
        return "bg-gray-500 hover:bg-gray-700 disabled cursor-not-allowed"
    }else if (state.succeeded){
        return "bg-green-500 hover:bg-green-700 cursor-not-allowed"
    }else if (state.errors){
        return "bg-red-500 hover:bg-red-700"
    } else {
        return "bg-[#2E64C1] hover:bg-blue-700"
    }
  }
  const handleLabel = () => {
    if (state.submitting){
        return t('enviando')
    }else if (state.succeeded){
        return t('enviado')
    }else if (state.errors){
        return t('nao_enviado')
    } else {
        return t('enviar')
    }
  }
  if (state.succeeded) {
      return (<p>Mensagem enviada com sucesso</p>)
  }
  return (
    <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
        <div className='flex flex-col gap-[8px] items-start justify-start w-full'>
            <Input
                label={t('nome')}
                id="name"
                type="name" 
                name="name"
                placeholder={t('placeholder_nome')}
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <Input
                label={t('email')}
                id="email"
                type="email" 
                name="email"
                placeholder={t('placeholder_email')}
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <Textarea
                label={t('mensagem')}
                id="message"
                name="message"
                placeholder={t('placeholder_mensagem')}
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" className={`text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-xl w-full ${handleState()}`} disabled={state.submitting}>
                {handleLabel()}
            </button>
        </div>
    </form>
  );
}

export default ContactForm;