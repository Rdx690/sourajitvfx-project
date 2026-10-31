// ImgBB proxy for SOURAJITVFX Image-to-Link tool.
// Configure IMGBB_API_KEY in Vercel Project Settings > Environment Variables.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }
  try {
    const key = process.env.IMGBB_API_KEY;
    if (!key) return res.status(503).json({ success: false, error: "ImgBB API is not configured. Add IMGBB_API_KEY in Vercel environment variables." });
    const { image, name, mimeType } = req.body || {};
    if (!image || typeof image !== "string") return res.status(400).json({ success: false, error: "Image data is required." });
    if (image.length > 4_000_000) return res.status(413).json({ success: false, error: "Image is too large. Please use an image under 3 MB." });
    if (!/^image\/(png|jpeg|jpg|gif|webp|bmp)$/i.test(mimeType || "")) return res.status(400).json({ success: false, error: "Unsupported image type." });
    const form = new FormData();
    form.append("key", key);
    form.append("image", image);
    if (name) form.append("name", String(name).slice(0, 120));
    const upstream = await fetch("https://api.imgbb.com/1/upload", { method: "POST", body: form });
    const data = await upstream.json();
    if (!upstream.ok || !data.success) return res.status(upstream.status || 502).json({ success: false, error: data?.error?.message || "ImgBB upload failed." });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ success: false, error: "Upload failed. Please try again." });
  }
}