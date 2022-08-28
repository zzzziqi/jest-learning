import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { reducer, RootState } from "store/index";
import { configureStore } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { Provider } from "react-redux";

interface CustomRenderOptions extends RenderOptions {
  preloadedState?: RootState;
  store?: ReturnType<typeof configureStore>;
}

const render = (ui: React.ReactElement, options: CustomRenderOptions) => {
  // 获取自定义的options, 其中有store内容
  const {
    preloadedState = {},
    store = configureStore({
      reducer: reducer,
      preloadedState: preloadedState,
    }),
    ...renderOptions
  } = options;

  // 使用Provider包裹
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  // 使用RTL的render函数
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export default render;
