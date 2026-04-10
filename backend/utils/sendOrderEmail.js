import nodemailer from 'nodemailer';

export const sendOrderEmail = async (toEmail, order) => {
  try {
    console.log('📧 sendOrderEmail called');
    console.log('📧 To:', 'nikunjdharaviya05@gmail.com');
    console.log('📧 From:', 'nikunjdharaviya1@gmail.com');

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.verify();
    console.log('✅ SMTP connection verified');

    const subtotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const tax = +(subtotal * 0.05).toFixed(2);
    const total = +(subtotal + tax).toFixed(2);

    const itemsHtml = order.items
      .map(
        (item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>₹${item.price}</td>
            <td>₹${item.price * item.quantity}</td>
          </tr>
        `
      )
      .join('');

    const mailOptions = {
      from: `"Grocery Store" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: `Order Bill - ${order.orderId}`,
      html: `
        <h2>Grocery Order Bill</h2>
        <p><b>Order ID:</b> ${order.orderId}</p>

        <table border="1" cellpadding="8" cellspacing="0" width="100%">
          <tr>
            <th>#</th><th>Item</th><th>Qty</th><th>Price</th><th>Total</th>
          </tr>
          ${itemsHtml}
        </table>

        <p><b>Subtotal:</b> ₹${subtotal}</p>
        <p><b>Tax (5%):</b> ₹${tax}</p>
        <h3>Total: ₹${total}</h3>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);

  } catch (error) {
    console.error('❌ Email send failed:', error.message);
  }
};
