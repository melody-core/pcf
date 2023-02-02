/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 16:55:31
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 16:55:31
 * @FilePath: /melodyLCP/packages/lcp/src/client/components/DocLinkIcon/index.tsx
 * @Description: update here
 */

import { QuestionCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";

import styles from "./index.module.less";

export const DocLinkIcon = () => {
  return (
    <a href="https://www.yuque.com/sff4rc/mngp0u" target="_blank">
      <Tooltip title="查看文档">
        <QuestionCircleOutlined
          className={styles["ques-icon"]}
          style={{ color: "#fff" }}
        />
      </Tooltip>
    </a>
  );
};
