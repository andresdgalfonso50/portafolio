// Netlify Function: Proxy para MailerSend
// Esta función se ejecuta en el servidor de Netlify, evitando problemas de CORS
// Configuración: el token debe estar en las variables de entorno de Netlify
// (Settings -> Environment Variables -> MAILERSEND_API_TOKEN)

exports.handler = async (event) => {
  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);

    const response = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERSEND_API_TOKEN}`
      },
      body: JSON.stringify({
        from: {
          email: process.env.MAILERSEND_FROM_EMAIL,
          name: 'Portfolio Yeison'
        },
        to: body.to,
        subject: body.subject,
        text: body.text,
        html: body.html,
        reply_to: body.reply_to
      })
    });

    const responseBody = await response.text();

    return {
      statusCode: response.status,
      headers: { 'Content-Type': 'application/json' },
      body: responseBody
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error', error: error.message })
    };
  }
};
