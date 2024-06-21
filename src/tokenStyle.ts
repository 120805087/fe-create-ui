// 定义 Token 类型
export interface Token {
  boxShadow: string;
  padding: number;
  borderRadius: number;
  colorTextTertiary: string;
  colorBgContainer: string;
  motionEaseInBack: string;
  colorTextSecondary: string;
  boxShadowSecondary: string;
}

export const token: Token = {
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: 16,
  borderRadius: 8,
  colorTextTertiary: "#6b7280",
  colorBgContainer: "#ffffff",
  motionEaseInBack: "ease-in-back",
  colorTextSecondary: "#374151",
  boxShadowSecondary: "0 6px 8px rgba(0, 0, 0, 0.1)",
};
