import type { Metadata } from "next";
import "./globals.css";

// 1. 메타데이터 초기화 (보통 : 템플릿 사용)
export const metadata: Metadata = {
  title: {
    template: "%s | 내 서비스명", // 하위 페이지에서 title을 넣으면 자동으로 치환됨
    default: "내 서비스명",       // 메인 페이지용 디폴트 타이틀
  },
  description: "이 서비스가 어떤 서비스인지 설명하는 명확한 한 줄",
  icons: {
    icon: "/favicon.ico", // public 폴더에 본인 로고 favicon 넣고 주석 해제할 것
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. lang="ko" 변경 및 다크모드 에러 방지용 suppressHydrationWarning 추가
    <html lang="ko" suppressHydrationWarning>
      {/* 3. 뷰포트 높이 고정 및 안티앨리어싱(폰트 스무딩) 적용 */}
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}