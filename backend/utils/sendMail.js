// import nodemailer from "nodemailer";

// export const sendMail = async (to, subject, text) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: 'nikunjdharaviya1@gmail.com',
//         pass: "adimbcvlioohewcd", // App password
//       },
//     });

//     await transporter.sendMail({
//       from: `nikunjdharaviya1@gmail.com`,
//       to,
//       subject,
//       text,
//     });

//     console.log("✅ Email sent successfully");
//   } catch (error) {
//     console.error("❌ Email error:", error);
//   }
// };
// utils/sendMail.js
import nodemailer from "nodemailer";

export const sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Grosary App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email error:", error.message);
  }
};
