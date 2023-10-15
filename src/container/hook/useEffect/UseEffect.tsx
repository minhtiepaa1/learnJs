import React, { useEffect, useState } from "react";

const UseEffect = () => {
  // những kiến thức cần nắm chắc;
  // events: add / remover event listener
  // observer pattern ; subscribe / unsubscribe
  // timer: setInterval, setTimeOut, clear
  // useState
  // mounted / unmounted
  // call api

  // useEffect sẽ chạy một lần đầu tiên khi component được mounted sau khi giao diện đã được render
  // tức là khi component được mounted sẽ chạy code từ trên xuống return sau đó useEfect mới được chạy

  // side effects -> khi có một tác động sảy ra dẫn tới dữ liệu của trương trình bị thay đổi
  // tại sao phải đưa tác vụ xử lý vào side effect?.  vì có thể khi xử lý sẽ gặp trục trặc vì vậy phải ưu tiên luồn chạy giao diện người dùng
  // trước rồi mới xử lý

  // cấu trúc uesEffect(callBack, [deps])
  // call back một hàm mà ta tự định nghĩa, call back là truyền một hàm vào trong một hàm khác dưới dạng tham số

  // 3 cách dùng
  // useEffect(callback)
  // -gọi call back sau khi component re-render
  // -đưa element vào trong DOM sau đó mới gọi call back

  // useEffect(callback,[])

  // // useEffect(callback,[deps])

  // 1. call back luôn được gọi sau khi component mounted
  // 2.

  // state
  const [state, setState] = useState<any>();

  // 1. chỉ dùng mỗi call back
  useEffect(() => {
    // nó sẽ chỉ gọi callback chạy một lần sau khi component được mounted
    //  gọi call back sau khi component re-render
    // - đưa element vào trong DOM sau đó mới gọi call back
    // - như vậy mỗi khi component re-render hàm này luôn chạy
  });

  // 2. deps trống
  useEffect(() => {
    // nó sẽ chỉ gọi callback chạy một lần sau khi component được mounted
    // và sẽ không chạy lại một lần nào nữa
  }, []);

  return <div></div>;
};

export default UseEffect;
