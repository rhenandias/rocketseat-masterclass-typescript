import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "Rhenan", email: "rhenan@email.com" },
  { name: "Renato", email: "renato@email.com" },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Rhenan Dias",
        email: "rhenan@gmail.com",
      },
      message: {
        subject: "Bem vindo ao sistema",
        body: "Bem vindo a nossa plataforma",
      },
    });

    return res.json({
      message: "Usuário cadastrado com sucesso.",
    });
  },
};
