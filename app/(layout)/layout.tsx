"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

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
  return (
    <ProLayout
      title="久久生活管家"
      defaultCollapsed={false}
      menuData={[
        {
          name: "数据看板",
          path: "/dashboard",
        },
        {
          name: "资源管理",
          path: "/resource",
        },
      ]}
      menuItemRender={(item, dom) => {
        return <Link href={item.path!}>{dom}</Link>;
      }}
    >
      {children}
    </ProLayout>
  );
}
