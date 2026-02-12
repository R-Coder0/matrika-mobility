import nodemailer from "nodemailer";

export async function sendUrbaniaEnquiry(data) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter.sendMail({
    from: `"TaxiTribe Urbania" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: "🚐 New Urbania Booking Enquiry",
    html: `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:30px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:auto;background:#ffffff;border-radius:8px;overflow:hidden;">
      
      <!-- Header -->
      <tr>
        <td style="background:#fe9a00;padding:20px;text-align:center;">
          <h1 style="margin:0;font-size:22px;color:#000;">TaxiTribe</h1>
          <p style="margin:5px 0 0;font-size:14px;color:#000;">
            New Urbania Booking Enquiry
          </p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:25px;color:#333;">
          <p style="font-size:15px;margin-bottom:20px;">
            A new Urbania rental enquiry has been received. Details are below:
          </p>

          <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
            
            <tr style="background:#f8f8f8;">
              <td style="font-weight:600;width:35%;">Customer Name</td>
              <td>${data.name || "-"}</td>
            </tr>

            <tr>
              <td style="font-weight:600;">Phone Number</td>
              <td>${data.phone || "-"}</td>
            </tr>

            <tr style="background:#f8f8f8;">
              <td style="font-weight:600;">Travel Route / City</td>
              <td>${data.city || "-"}</td>
            </tr>

            <tr>
              <td style="font-weight:600;">Trip Details</td>
              <td>${data.details || "-"}</td>
            </tr>

          </table>

          <p style="margin-top:25px;font-size:14px;color:#555;">
            Please contact the customer promptly to confirm availability, pricing and booking details.
          </p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f0f0f0;padding:15px;text-align:center;font-size:12px;color:#777;">
          © ${new Date().getFullYear()} TaxiTribe • Premium Urbania Rental Services  
          <br/>
          Automated booking notification.
        </td>
      </tr>

    </table>
  </div>
`,
  });
}
