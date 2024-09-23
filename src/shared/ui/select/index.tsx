import { Form, Select } from "antd";
const { Option } = Select;

type PropsType = {
  name?: string;
  label?: string;
  placeholder?: string;
};

export function CustomSelect({ name, label, placeholder }: PropsType) {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  return (
    <Form.Item name={name} label={label} rules={[{ required: true }]}>
      <Select placeholder={placeholder} onChange={onGenderChange} allowClear>
        <Option value="male">male</Option>
        <Option value="female">female</Option>
        <Option value="other">other</Option>
      </Select>
    </Form.Item>
  );
}
