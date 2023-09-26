import React from "react";
import { Table } from "antd";
// import "antd/dist/antd.css"; // Import CSS của Ant Design
import "./MyTable.css";
const columns = [
  {
    title: "Cột 1",
    dataIndex: "column1",
  },
  {
    title: "Cột 2",
    dataIndex: "column2",
  },
];

const data = [
  {
    key: "1",
    column1: "Dòng 1, Cột 1",
    column2: "Dòng 1, Cột 2",
  },
  {
    key: "2",
    column1: "Dòng 2, Cột 1",
    column2: "Dòng 2, Cột 2",
  },
];

const MyTable = () => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      showHeader={false}
      rowClassName="table-row-animation" // Thêm class cho dòng để thực hiện hiệu ứng chuyển động
    />
  );
};

export default MyTable;
