import React, { useState } from "react";

// State thể hiện trạng thái của dữ liệu
// khi state thay đổi giao diện đó được render lại (nếu set state bằng giá trị giống với giá trị trước
// componet sẽ khong re-render lại (sử dụng toán tử === để so sánh))
// tại sao gọi là hook vì nó gắn vào component
// và tất cả các hook đều là hàm, đã là hàm thì chú ý đầu vào là gì
// dầu ra là gì cách vận hành, nhận vào là gì và return ra cái gì
const orders = [100, 200, 300];

const State = () => {
  const [state, setSate] = useState<String>("initState");
  // nhận vào innitState giá trị đầu chỉ dùng lần đầu
  // return ra một mảng 2 phần tử state và setState để cập nhật giá trị
  // ví dụ click tăng số tăng click giảm số giảm
  const [counter, setCouter] = useState<number>(0);
  // kiểu dữ liệu Number truyền vào giá trị đầu tiên 0
  // lần đầu tiên render sẽ chạy từ trên component xuống chạy các dòng code đồng bộ state chỉ được chạy một lần
  // khi component được mounted sau đó khi set state state render lại component sẽ không chạy lại state nữa mà chỉ cập nhật giá trị
  console.log("re-render");
  const upCounter = () => {
    // giá trị vẫn chỉ tăng lên một
    // cơ chế quản lý nó sẽ chạy xong 3 hàm set mới render lại component
    // vì counter lúc tham chiếu vẫn đang là 0 chưa render lại chưa dk cập nhật
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
    // call back có thể giúp ta lấy dk giá trị trước đó
    // mặc dù counter lúc này chưa dk cập nhật giá trị nhưng trong call back đã được
    // cập nhật và tham chiếu đến
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
      // cần xử lý logic thì sử dụng như này
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
