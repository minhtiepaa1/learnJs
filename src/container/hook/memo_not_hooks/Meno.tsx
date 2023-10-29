import { Button, Input } from "antd";
import React, { useCallback, useState } from "react";
import ContentMemo from "./ContentMemo";
import { MyButton, MyTable } from "../../../components/container/button";
/*
 1. => Higher order component (HOC)
 memo có nghĩa là ghi nhớ lại props của một component để quyết định
 render lại component đó hay không
 (tóm lại nó giúp tránh việc re-render lại component không cần thiết)
 trong react có 3 khái niệm:
 - hooks (gắn vào thì dùng trong component) 
 - HOC
 - render props
thiết kế ra để không lặp lại logic
*/
/*
Tại sao cần dùng memo vì mỗi lần re-render component thì lại khởi tạo lại 
hết các biến và các hàm nên để tối ưu 
*/
/*
ví dụ: bên dưới mỗi khi component Memo render lại 
thì lại gọi thằng ContentMemo nhưng có những lúc không cần thiết phải render lại component ContenMemo
- cheir cần thêm memo vào phần export ContenMemo là sẽ không bị chạy lại khi component 
meno re-render,

+ thằng memo sẽ check props truyền vào component đó
nếu có ít nhất một props thay đổi thì nó mới re-render
nó sử dụng toán tử 3 dấu bằng
*/

/*
Nhưng có một vấn đề của thằng memo là khi truyền một hàm thông qua props
thì mỗi lần re-render lại component Memo thì hàm đó lại khởi tạo 
lại với một địa chỉ bộ nhớ mới khi truyền tham chiếu thông qua props đến 
conponent ContenMemo thì tham chiếu mới sẽ khác với them chiếu trước đó 
-- nên component ContentMemo sẽ re-nder
+ để khắc phục vấn đề này ta dùng useCallback()

*/
console.log("start");
const Meno = () => {
  const [count, setCount] = useState<any>(0);
  const [checker, setChecker] = useState<boolean>(false);
  const [str, setStr] = useState<string>("");

  const handleClick = () => {
    setCount((prev: any) => {
      return prev + 1;
    });
  };

  // use callBack sẽ tạo ra một cái hàm lưu ra ngoài component sau đó
  // return lại tham chiếu nếu dependence trống thì luôn là tham chiếu cũ
  // ở cái lần mount

  // thử chạy sẽ thấy giá trị checker khi suer dụng useCallBack luôn tham
  // chiếu đến giá trị checker === false
  // để set được checker hãy sử dụng callBack() trong setState
  const handleChecker = useCallback((value: any) => {
    // setChecker(!checker);
    setChecker((prev) => {
      return !prev;
    });
    // đối số thứ 2 là một cái mảng chứa dependence
    // hoạt động như useEffect
    setStr(value);
    // console.log("checker", checker, "value:", value);
  }, []);

  console.log("checker-out:", checker, "str:", str);
  return (
    <div>
      <Input
        value={count}
        style={{ width: "50%", display: "flex", alignItems: "center" }}
      />
      <Button onClick={handleClick}> Click</Button>
      <ContentMemo checker={handleChecker} />
      <MyButton> button oki</MyButton>
      <MyTable dataSource={[]} />
    </div>
  );
};

export default Meno;
