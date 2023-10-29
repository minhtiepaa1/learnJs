import { Button, Input } from "antd";
import React, { memo } from "react";
type Dataprops = {
  checker: Function;
};
const ContentMemo = (props: Dataprops) => {
  console.log("conten memo:");
  return (
    <div>
      <Input onChange={(e) => props?.checker(e.target.value)} />
    </div>
  );
};

export default memo(ContentMemo);
