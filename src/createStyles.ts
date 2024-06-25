import { css, cx, CSSObject } from "@emotion/css";
import { token, Token } from "./tokenStyle";
import { useMemo } from "react";

// 定义参数类型
interface StylesCreatorParams {
  token: Token;
}

// 定义 Styles 对象类型
type Styles = Record<string, CSSObject>;

// 定义 stylesCreator 类型
type StylesCreator<T extends Styles> = (params: StylesCreatorParams) => T;

const createStyles = <T extends Styles>(stylesCreator: StylesCreator<T>) => {
  const useStyles = () => {
    // 生成样式对象
    const stylesObject = stylesCreator({ token });

    // 使用 keyof 和 typeof 获取 stylesObject 的键类型
    type StylesKeys = keyof typeof stylesObject;

    // 使用 Emotion 的 css 函数将样式对象转为类名字符串
    const styles = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(stylesObject).map(([key, value]) => [
            key,
            css(value as CSSObject),
          ])
        ) as Record<StylesKeys, string>,
      [stylesObject]
    );

    return {
      styles,
      cx,
    };
  };

  return useStyles;
};

export default createStyles;
