import { ImageResponse } from "next/og";
import { headline } from "@/lib/siteData";

export const runtime = "edge";
export const alt = "Aaron Loh — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff",
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#171717",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "JetBrains Mono",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#e4e4e1",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Aaron Loh
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#949494",
            marginTop: 16,
          }}
        >
          toronto, canada
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#949494",
            marginTop: 40,
            lineHeight: 1.6,
            maxWidth: 800,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#525252",
            marginTop: "auto",
          }}
        >
          aaronloh.xyz
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
