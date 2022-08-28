import * as userUtils from "apis/user";
import { AxiosResponse } from "axios";
import { render, screen } from "@testing-library/react";
import AuthButton from "components/AuthButton";
import React from "react";

describe("AuthButton Mock Axios", () => {
  it("可以展示普通用户内容", async () => {
    jest.spyOn(userUtils, "getUserRole").mockResolvedValueOnce({
      data: { userType: "user" },
    } as AxiosResponse);
    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
  });

  it("可以展示管理员内容", async () => {
    jest.spyOn(userUtils, "getUserRole").mockResolvedValueOnce({
      data: { userType: "admin" },
    } as AxiosResponse);
    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("管理员你好")).toBeInTheDocument();
  });
});
