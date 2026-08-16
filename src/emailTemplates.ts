export interface EmailProjectConfig {
  appName: string;
  companyName: string;
  logoUrl?: string;
  primaryColor?: string;
  supportEmail?: string;
}

export interface AuthEmailTemplateParams {
  recipientEmail: string;
  recipientName?: string;
  actionLink: string;
  type: 'verification' | 'password_reset';
  projectConfig: EmailProjectConfig;
}

export function generateAuthEmailHtml(params: AuthEmailTemplateParams): { subject: string; html: string } {
  const { type, recipientName, actionLink, projectConfig } = params;
  const primaryColor = projectConfig.primaryColor || '#0f172a';
  const appName = projectConfig.appName || 'Nuestra Aplicación';
  const companyName = projectConfig.companyName || 'Nuestra Empresa';
  const nameGreeting = recipientName ? `Hola ${recipientName},` : 'Hola,';

  if (type === 'verification') {
    const subject = `Confirma tu correo electrónico para ${appName}`;
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 20px; color: #333; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { text-align: center; margin-bottom: 24px; }
          .logo { max-height: 48px; margin-bottom: 12px; }
          .title { font-size: 22px; font-weight: 700; color: ${primaryColor}; margin-bottom: 16px; }
          .content { font-size: 15px; line-height: 1.6; color: #4a5568; margin-bottom: 28px; }
          .btn-container { text-align: center; margin: 32px 0; }
          .btn { background-color: ${primaryColor}; color: #ffffff !important; padding: 14px 28px; text-decoration: none; font-weight: 600; border-radius: 8px; display: inline-block; }
          .footer { font-size: 12px; color: #a0aec0; text-align: center; border-top: 1px solid #edf2f7; padding-top: 20px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${projectConfig.logoUrl ? `<img src="${projectConfig.logoUrl}" alt="${appName}" class="logo" />` : ''}
            <div class="title">${appName}</div>
          </div>
          <div class="content">
            <p>${nameGreeting}</p>
            <p>Gracias por registrarte en <strong>${appName}</strong> (${companyName}). Para completar tu registro y verificar tu dirección de correo electrónico, por favor haz clic en el siguiente botón:</p>
            <div class="btn-container">
              <a href="${actionLink}" class="btn" target="_blank">Verificar mi Email</a>
            </div>
            <p>Si no has creado una cuenta en ${appName}, puedes ignorar este correo sin problemas.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${companyName}. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    return { subject, html };
  } else {
    const subject = `Restablecimiento de contraseña para ${appName}`;
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 20px; color: #333; }
          .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { text-align: center; margin-bottom: 24px; }
          .logo { max-height: 48px; margin-bottom: 12px; }
          .title { font-size: 22px; font-weight: 700; color: ${primaryColor}; margin-bottom: 16px; }
          .content { font-size: 15px; line-height: 1.6; color: #4a5568; margin-bottom: 28px; }
          .btn-container { text-align: center; margin: 32px 0; }
          .btn { background-color: ${primaryColor}; color: #ffffff !important; padding: 14px 28px; text-decoration: none; font-weight: 600; border-radius: 8px; display: inline-block; }
          .footer { font-size: 12px; color: #a0aec0; text-align: center; border-top: 1px solid #edf2f7; padding-top: 20px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            ${projectConfig.logoUrl ? `<img src="${projectConfig.logoUrl}" alt="${appName}" class="logo" />` : ''}
            <div class="title">${appName}</div>
          </div>
          <div class="content">
            <p>${nameGreeting}</p>
            <p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en <strong>${appName}</strong>.</p>
            <p>Para definir una nueva contraseña, haz clic en el botón de abajo:</p>
            <div class="btn-container">
              <a href="${actionLink}" class="btn" target="_blank">Restablecer Contraseña</a>
            </div>
            <p>Si no solicitaste este cambio, puedes ignorar este mensaje de forma segura.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} ${companyName}. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;
    return { subject, html };
  }
}
