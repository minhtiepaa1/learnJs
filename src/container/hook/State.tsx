import React, { useState } from "react";

// State thể hiện trạng thái của dữ liệu
// khi state thay đổi giao diện đó được render lại
// tại sao gọi là hook vì nó gắn vào component
// và tất cả các hook đều là hàm, đã là hàm thì chú ý đầu vào là gì
// dầu ra là gì cách vận hành, nhận vào là gì và return ra cái gì
const orders = [100, 200, 300];

const State = () => {
  const [state, setSate] = useState<String>("initState");
  // nhận vào innitState giá trị đầu chỉ dùng một lần
  // return ra một mảng 2 phần tử state và setState để cập nhật giá trị
  // ví dụ click tăng số tăng click giảm số giảm
  const [counter, setCouter] = useState<number>(0);
  // kiểu dữ liệu Number truyền vào giá trị đầu tiên 0
  // lần đầu tiên render sẽ chạy trong hàm return đầu tiên sau đó mới chạy
  // các properties phía trên return
  console.log("re-render");
  const upCounter = () => {
    // giá trị vẫn chỉ tăng lên một
    setCouter(counter + 1);
    setCouter(counter + 1);
    setCouter(counter + 1);
  };
  const downCounter = () => {
    setCouter(counter - 1);
  };
  // truyền call back trong state
  const callBackState = () => {
    // call back lấy giá trị trước đó
    // giá trị sẽ lấy giá trị trước cộng với + 1
    setCouter((prev) => prev + 1);
    setCouter((prev) => prev + 1);
    setCouter((prev) => prev + 1);
  };
  // truyền call back khỏi tạo giá trị ban dầu cho state
  // dùng để xử lý một số thứ trước
  const [sumOrder, setSumOrder] = useState<number>(() => {
    const total = orders?.reduce((total, cur) => total + cur);
    return total;
  });
  // mỗi lần setState là sẽ thay thế luôn giá trị state
  // ví dụ trong đối tượng muốn thay đổi một thuôc tính mà các thuộc tính khác
  // vẫn giữ nguyên thì có các cách sau
  const [objState, setObjState] = useState<any>(() => {
    const obj = { id: 1, name: "name", age: 23 };
    return obj;
  });

  const handleObjState = () => {
    setObjState((prev: any) => {
      // cần xử lý login thì sử dụng như này
      return { ...prev, name: "name1" };
    });
    // thường sẽ sử dụng như này
    setObjState({ ...objState, name: "name2" });
  };
  console.log("obj", objState);
  return (
    <div>
      <> {console.log("render-first")}</>
      <h1 style={{ border: "1px solid #ccc", width: "20%" }}> {counter}</h1>
      <h1 style={{ border: "1px solid #ccc", width: "20%" }}> {sumOrder}</h1>
      <div
        onClick={upCounter}
        style={{ cursor: "pointer", border: "1px solid #ccc", width: "20%" }}
      >
        up button
      </div>
      <div
        onClick={downCounter}
        style={{ cursor: "pointer", border: "1px solid #ccc", width: "20%" }}
      >
        down button
      </div>
      <div
        onClick={callBackState}
        style={{ cursor: "pointer", border: "1px solid #ccc", width: "20%" }}
      >
        callBack
      </div>
      <div
        onClick={handleObjState}
        style={{ cursor: "pointer", border: "1px solid #ccc", width: "20%" }}
      >
        obj state
      </div>
    </div>
  );
};

export default State;
