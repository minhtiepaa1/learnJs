import React from "react";
import {
  Button as AntdButton,
  Table as AntTable,
  List as AntList,
  ButtonProps,
  TableProps,
  ListProps,
  FormItemProps,
} from "antd";
import "./stylesButton.css";

type MyButtonProps = ButtonProps & {
  // Định nghĩa thêm các thuộc tính tùy chỉnh của MyButton tại đây
};

const MyButton: React.FC<MyButtonProps> = ({ children, ...rest }) => {
  return (
    <AntdButton {...rest} type="link" className="myButton">
      {children}
    </AntdButton>
  );
};

const MyTable: React.FC<TableProps<any>> = (rest) => {
  return <AntTable {...rest} />;
};

const MyList: React.FC<ListProps<any>> = (props) => {
  return <AntList {...props}> </AntList>;
};
export { MyButton, MyTable, MyList };
