import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  const fontRegularData = await fetch(
    "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
  ).then((res) => res.arrayBuffer());

  const fontBoldData = await fetch(
    "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjDV6UsaaDhw.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "1200px",
          height: "630px",
          backgroundColor: "rgb(12, 12, 13)",
          padding: "80px 100px",
          fontFamily: "JetBrains Mono",
          color: "rgb(228, 228, 225)",
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          Aaron Loh
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 22,
            color: "rgb(148, 148, 148)",
            marginBottom: 40,
          }}
        >
          toronto, canada
        </div>

        {/* Current Roles */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: "linear-gradient(135deg, #005daa, #ffd700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              R
            </div>
            <span style={{ fontSize: 22 }}>
              Royal Bank of Canada{" "}
              <span style={{ color: "rgb(148, 148, 148)" }}>
                Software Developer, Cash Management
              </span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: "linear-gradient(135deg, #4f7df9, #6c5ce7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              S
            </div>
            <span style={{ fontSize: 22 }}>
              Stan{" "}
              <span style={{ color: "rgb(148, 148, 148)" }}>Fellow</span>
            </span>
          </div>
        </div>

        {/* Bio */}
        <div
          style={{
            fontSize: 22,
            color: "rgb(148, 148, 148)",
            marginTop: 40,
            lineHeight: 1.6,
          }}
        >
          Software engineer building agentic AI infrastructure. Figuring out how
          to make useful things reach more people.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "JetBrains Mono",
          data: fontRegularData,
          style: "normal" as const,
          weight: 400 as const,
        },
        {
          name: "JetBrains Mono",
          data: fontBoldData,
          style: "normal" as const,
          weight: 700 as const,
        },
      ],
    }
  );
}
