import { Button, ButtonProps, message } from "antd";
import { getUserRole, UserRoleType } from "apis/user";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.less";
import classnames from "classnames";

type Props = ButtonProps;

const mapper: Record<UserRoleType, string> = {
  user: "普通用户",
  admin: "管理员",
};

const AuthButton: FC<Props> = (props) => {
  const { children, className, ...restRrops } = props;
  console.log(props);
  console.log(restRrops);
  console.log(className);

  const [userType, setUserType] = useState<UserRoleType>();

  const getLoginState = async () => {
    const res = await getUserRole();
    setUserType(res.data.userType);
  };

  useEffect(() => {
    getLoginState().catch((e) => message.error(e.message));
  }, []);

  return (
    <Button {...restRrops} className={classnames(className, styles.authButton)}>
      {mapper[userType!] || ""}
      {children}
    </Button>
  );
};
export default AuthButton;
