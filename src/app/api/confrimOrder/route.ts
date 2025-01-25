import { NextResponse } from "next/server";
const sendgrid = require("@sendgrid/mail");

const apiKey = process.env.SENDGRID_API_KEY;
console.log(apiKey, "apiKey");
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is not defined");
}

sendgrid.setApiKey(apiKey);

export async function POST(request: Request) {
  try {
    const { productId, variant, quantity, userName, phoneNumber, address } =
      await request.json();

    // Construct the email content
    const message = {
      to: "shadab.uok@gmail.com", // The user receiving the email
      from: "watchglamix@gmail.com", // Your verified email address in SendGrid
      subject: `Order Confirmation: Product #${productId}`,
      html: `
        <h2>Order Confirmation</h2>
        <p>This is the order from, ${userName}!</p>
        <p><strong>Product ID:</strong> ${productId}</p>
        <p><strong>Variant:</strong> ${variant}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Address:</strong> ${address}</p>
      `,
    };

    // Send the email
    await sendgrid.send(message);

    // Return a success response
    return NextResponse.json({
      message: "Order confirmation sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send order confirmation" },
      { status: 500 }
    );
  }
}
