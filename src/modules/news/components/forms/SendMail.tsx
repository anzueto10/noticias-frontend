import Button from "@/modules/core/ui/Button";
import Input from "@/modules/core/ui/fields/Input";

const SendMail = () => {
  //TODO Integrar con Formik
  return (
    <form className="flex space-x-2">
      <Input placeholder="Ingresa tu email" type="email" />
      <Button variant="primary" color="highlight">
        Suscribirse
      </Button>
    </form>
  );
};

export default SendMail;
