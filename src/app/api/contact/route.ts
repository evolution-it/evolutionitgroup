import sendgrid, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

const key = process.env.SENDGRID_API_KEY || "";
sendgrid.setApiKey(key);

export async function POST(req: Request) {
  const form: any = await req.json();

  const responeHtml = `
    <div style="padding-bottom: 16px; padding-top: 16px"><strong>RE: ${form.subject}</strong></div>
    <div style="padding-bottom: 16px">${form.name},</div>
    <div style="padding-bottom: 16px">Thanks for getting In touch. Your opinion is important to us. We will review your comments and get back to you soon. We typically respond within 48 hours.</div>
    <div style="padding-bottom: 16px"><strong>Evolution IT Group</strong</div>
  `;

  const notification = `
    <div style="padding-bottom: 16px; padding-top: 16px"><strong>New Contact:</strong></div>
    <div style="padding-bottom: 16px">${form.name}< /br><a href="#"${form.email}</a>< /br><a href="#"${form.number}</a>< /br></div>
    <div style="padding-bottom: 16px"><strong>Subject: ${form.subject}</strong></div>
    <div style="padding-bottom: 16px"><strong>Message:</strong> >${form.message}</div>
  `;

  const memberEmail: MailDataRequired = {
    to: form.email,
    from: "info@evolutionitgroup.com",
    subject: "Evolution IT Group",
    html: responeHtml,
  };

  const notificationEmail: MailDataRequired = {
    to: "info@evolutionitgroup.com",
    from: "info@evolutionitgroup.com",
    subject: "New Contact",
    html: notification,
  };

  try {
    await sendgrid.send(memberEmail);
    await sendgrid.send(notificationEmail);
  } catch (error: any) {
    return NextResponse.json({ error: true, message: "error" });
  }

  return NextResponse.json({ error: false, message: "no error" });
}
