import { Inject, Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class SengridService {
  private readonly sendgridClient;
  constructor() {
    this.sendgridClient = sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  }

  sendMailOfConfirmationCode(email: string, tokenEmail: string) {
    const msg = {
      to: email,
      from: 'diana@ravn.co',
      subject: 'Confirm email',
      text: `Link to confirm email: http://localhost:3000/users/${tokenEmail}/confirm`,
    };

    this.sendgridClient
      .send(msg)
      .then((message) => console.log(message))
      .catch((err) => console.log(err));
  }
}
