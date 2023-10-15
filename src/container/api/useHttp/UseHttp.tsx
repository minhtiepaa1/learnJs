import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

//  tạo hủy request trước khi gọi một api mới
const UseHttp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [cancelToken, setCancelToken] = useState<any>(null);

  const sendRequest = async (url: string) => {
    if (cancelToken) {
      // Hủy request trước đó nếu có
      cancelToken.cancel("Request đã bị hủy");
    }

    const source = axios.CancelToken.source();
    setCancelToken(source);

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(url, { cancelToken: source.token });
      setData(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Request đã bị hủy, không cần xử lý
      } else {
        setError(error);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    return () => {
      // Hủy request khi component bị unmount
      if (cancelToken) {
        cancelToken.cancel("Request đã bị hủy");
      }
    };
  }, [cancelToken]);

  return { data, loading, error, sendRequest };
};

export default UseHttp;

// Trong đoạn mã trên, chúng ta sử dụng Axios để tạo một biến source
// sử dụng axios.CancelToken.source() để theo dõi request và hủy chúng.
//  Khi bạn muốn hủy request ban đầu, bạn gọi source.cancel(). Sau đó,
//  bạn có thể tiến hành request thứ hai hoặc thực hiện bất kỳ hành động nào bạn muốn.

// Nếu bạn sử dụng thư viện hoặc API HTTP khác, cách hủy request có thể khác nhau,
//  nhưng ý tưởng chính là tạo một cơ chế để hủy request và sau đó thực hiện request mới.

// hướng dẫn trước
// import axios from 'axios';

// // Tạo một biến global để theo dõi request và hủy chúng
// let source = axios.CancelToken.source();

// // Request ban đầu
// axios.get('URL_1', { cancelToken: source.token })
//   .then(response => {
//     // Xử lý response hoặc thực hiện request thứ 2
//     axios.get('URL_2')
//       .then(response => {
//         // Xử lý response từ request thứ 2
//       })
//       .catch(error => {
//         // Xử lý lỗi từ request thứ 2
//       });
//   })
//   .catch(error => {
//     if (axios.isCancel(error)) {
//       console.log('Request ban đầu đã bị hủy');
//     } else {
//       // Xử lý lỗi từ request ban đầu
//     }
//   });

// // Để hủy request ban đầu, bạn có thể gọi source.cancel()
// source.cancel();

// cách dùng useHttp
// import React, { useEffect } from 'react';
// import useHttp from './useHttp'; // Điều này tùy thuộc vào cấu trúc thư mục của bạn

// function MyComponent() {
//   const { data, loading, error, sendRequest } = useHttp();

//   useEffect(() => {
//     // Gọi request khi component được render
//     sendRequest('URL_1');
//   }, [sendRequest]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (data) {
//     // Xử lý dữ liệu từ response ở đây
//     return <div>Data: {JSON.stringify(data)}</div>;
//   }

//   return null;
// }

// export default MyComponent;

// Trong ví dụ trên, useHttp hook giúp quản lý yêu cầu HTTP bằng cách
// sử dụng axios và cung cấp các trạng thái dữ liệu như data, loading,
//  và error cho các thành phần sử dụng nó. Các yêu cầu mới có thể được
//  gửi bằng cách gọi sendRequest(url) trong thành phần của bạn.
