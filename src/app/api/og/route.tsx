import { ImageResponse } from "@vercel/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

// Cache the font fetch so it only happens once
const fontRegular = fetch(
  "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2"
).then((res) => res.arrayBuffer());

const fontBold = fetch(
  "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjDV6UsaaDhw.woff2"
).then((res) => res.arrayBuffer());

export async function GET() {
  const [fontRegularData, fontBoldData] = await Promise.all([
    fontRegular,
    fontBold,
  ]);

  // Read company logos as base64
  const rbcLogo = fs.readFileSync(
    path.join(process.cwd(), "public/work-experience-images/rbc.webp")
  );
  const stanLogo = fs.readFileSync(
    path.join(process.cwd(), "public/work-experience-images/stan.webp")
  );
  const rbcSrc = `data:image/webp;base64,${rbcLogo.toString("base64")}`;
  const stanSrc = `data:image/webp;base64,${stanLogo.toString("base64")}`;

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
            <img
              src={rbcSrc}
              width={28}
              height={28}
              style={{ borderRadius: 6 }}
            />
            <span style={{ fontSize: 22 }}>
              Royal Bank of Canada{" "}
              <span style={{ color: "rgb(148, 148, 148)" }}>
                Software Developer, Cash Management
              </span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src={stanSrc}
              width={28}
              height={28}
              style={{ borderRadius: 6 }}
            />
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
          style: "normal",
          weight: 400,
        },
        {
          name: "JetBrains Mono",
          data: fontBoldData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
