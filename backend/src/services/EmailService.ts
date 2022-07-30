interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachments?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IMailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IMailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(
      `Email enviado para ${to.name} no endereço ${to.email}: ${message.subject}`
    );
  }
}

export default EmailService;
