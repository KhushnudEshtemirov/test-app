import { Form, Input } from "antd";

type PropsType = {
  label?: string;
  name?: string;
};

export function CustomInput({ label, name }: PropsType) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>
  );
}
