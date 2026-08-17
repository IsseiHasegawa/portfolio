import { ImageResponse } from "next/og";

export const alt = "Issei Hasegawa - Computer Science, Allegheny College";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// SNS でシェアされたときのカード画像をビルド時に生成する。
// ImageResponse の既定フォントは日本語グリフを持たないため、
// 表示は英語のみに揃える（日本語を入れると豆腐文字になる）。
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          padding: "0 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Issei Hasegawa
        </div>

        {/* 名前と肩書きを視覚的に区切るアクセント線 */}
        <div
          style={{
            display: "flex",
            width: 120,
            height: 8,
            margin: "40px 0",
            backgroundColor: "#38bdf8",
          }}
        />

        <div style={{ display: "flex", fontSize: 40, color: "#cbd5e1" }}>
          Computer Science · Allegheny College
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: "#7c8da6",
          }}
        >
          ML Systems · Distributed Systems · Software Reliability
        </div>
      </div>
    ),
    size,
  );
}
