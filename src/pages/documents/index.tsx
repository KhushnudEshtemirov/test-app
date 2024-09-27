import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { useQuery } from "@tanstack/react-query";

import { Button } from "../../shared/ui";
import { httpGet } from "../../shared/api";

interface DataType {
  id: number;
  title: string;
  description: string;
  likes: number;
  created_at: string;
}

export default function Page() {
  const { isError, error, isLoading, data } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => await httpGet("/get-posts"),
  });

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  console.log(data, error);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p className="text-red-700">Something went wrong.</p>;

  const posts: DataType[] = data;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-4/5 flex flex-col items-end">
        <Button type="primary">New document form</Button>
        <Table<DataType>
          columns={columns}
          dataSource={posts}
          className="w-full"
        />
      </div>
    </div>
  );
}
