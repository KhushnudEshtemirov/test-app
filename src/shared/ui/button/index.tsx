import { Button, Form } from "antd";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  htmlType?: "button" | "submit" | "reset" | undefined;
};

export function CustomButton({ children, type, htmlType }: PropsType) {
  return (
    <Form.Item>
      <Button type={type} htmlType={htmlType}>
        {children}
      </Button>
    </Form.Item>
  );
}
