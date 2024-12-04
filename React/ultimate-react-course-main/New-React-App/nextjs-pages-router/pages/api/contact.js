import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.methos !== "POST")
    return res
      .status(405)
      .json({ success: false, message: "Please make a post request" });

  const contactData = {
    fullName: "Umer",
    email: "test",
    subject: "booking",
    message: "HEY!!",
  };

  const { error } = await supabase.from("contact").insert([contactData]);

  if (error) res.status(500).json({ success: false, message: "Try again" });

  // success message
  res.status(200).json({ success: true, message: "thanks" });
}
