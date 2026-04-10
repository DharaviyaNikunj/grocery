import axios from "axios";

export const sendWhatsAppMessage = async (phone, order) => {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_ID;

  const itemsText = order.items
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} x${item.quantity} = ₹${item.price * item.quantity}`
    )
    .join("\n");

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = (subtotal * 0.05).toFixed(2);
  const total = (subtotal + Number(tax)).toFixed(2);

  const message = `
🛒 *Grocery Order Bill*

👤 Name: ${order.customer.name}
📞 Phone: ${order.customer.phone}

📦 Items:
${itemsText}

Subtotal: ₹${subtotal}
Tax (5%): ₹${tax}
💰 *Total: ₹${total}*

Thank you for your order 🙏
`;

  await axios.post(
    `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`,
    {
      messaging_product: "whatsapp",
      to: phone,
      type: "text",
      text: { body: message }
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
  console.log("✅ WhatsApp message sent");
};
