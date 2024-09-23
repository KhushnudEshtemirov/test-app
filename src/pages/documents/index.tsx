import { Form } from "antd";
import { Input, Button, Select } from "../../shared/ui";

export default function Page() {
  return (
    <div className="w-[400px] mx-auto border border-red-700">
      <h1>Documents list page</h1>
      <Form layout="vertical">
        <Input />
        <Select />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
