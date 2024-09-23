import { Checkbox, Form, Space } from "antd";
import { Button, Input, Select } from "../../shared/ui";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Form layout="vertical" className="w-[370px]">
        <Input label="Document title" name="document_title" />
        <hr className="mb-4 text-[#0E0E0E1A]" />
        <Input label="Field sequence (weight)" name="field_sequence" />
        <Select
          label="Field type"
          name="field_type"
          placeholder="Select type"
        />
        <Input label="Field name" name="field_name" />
        <Form.Item name="mandatory" valuePropName="checked" noStyle>
          <Checkbox>Mandatory</Checkbox>
        </Form.Item>
        <hr className="mt-4 text-[#0E0E0E1A]" />
        <Form.Item>
          <Space className="w-full flex justify-between mt-5">
            <Button>Add more</Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
