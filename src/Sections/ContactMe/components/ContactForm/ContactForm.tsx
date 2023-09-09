import { useForm, ValidationError } from '@formspree/react';
import Input from '../Input/Input';
import Textarea from '../TextArea/TextArea';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xjvqrdka");
  const handleState = () => {
    if (state.submitting){
        return "bg-gray-500 hover:bg-gray-700 disabled cursor-not-allowed"
    }else if (state.succeeded){
        return "bg-green-500 hover:bg-green-700 cursor-not-allowed"
    }else if (state.errors){
        return "bg-red-500 hover:bg-red-700"
    } else {
        return "bg-blue-500 hover:bg-blue-700"
    }
  }
  const handleLabel = () => {
    if (state.submitting){
        return "Enviando..."
    }else if (state.succeeded){
        return "Enviado com sucesso"
    }else if (state.errors){
        return "Não enviado, tente novamente"
    } else {
        return "Enviar"
    }
  }
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
        <div className='flex flex-col gap-[8px] items-start justify-start w-full'>
            <Input
                label='Name'
                id="name"
                type="name" 
                name="name"
                placeholder='Your Name'
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <Input
                label='Email Address'
                id="email"
                type="email" 
                name="email"
                placeholder='myemail@example.com'
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <Textarea
                label='Your Message'
                id="message"
                name="message"
                placeholder='Your Message'
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