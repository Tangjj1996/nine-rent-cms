"use client";

import dynamic from "next/dynamic";

/**
 * https://github.com/ant-design/pro-components/issues/8622
 * 临时解决 ssr 问题
 */
const ProLayout = dynamic(
  () => import("@ant-design/pro-components").then((mod) => mod.ProLayout),
  {
    ssr: false,
  }
);

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProLayout title="久久生活管家">{children}</ProLayout>;
}
