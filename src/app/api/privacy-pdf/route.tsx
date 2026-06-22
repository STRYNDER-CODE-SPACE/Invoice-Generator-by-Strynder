import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { PrivacyPDF } from "@/components/PrivacyPDF";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const buffer = await renderToBuffer(<PrivacyPDF />);

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Strynder-Privacy-Policy.pdf"',
      },
    });
  } catch (error) {
    console.error("Failed to generate privacy PDF:", error);
    return new NextResponse("Failed to generate PDF", { status: 500 });
  }
}
