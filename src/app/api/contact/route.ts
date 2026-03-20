import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Invalid email address." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "hello@smve.cloud";

    if (apiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Academy Demo <noreply@mail.smve.cloud>",
          to: [contactEmail], reply_to: email,
          subject: `Academy Demo inquiry from ${name}`,
          html: `<h2>New Academy Inquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Interest:</strong> ${body.interest || "—"}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        }),
      });
    } else { console.log("Contact form submission:", body); }
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Internal server error" }, { status: 500 }); }
}
