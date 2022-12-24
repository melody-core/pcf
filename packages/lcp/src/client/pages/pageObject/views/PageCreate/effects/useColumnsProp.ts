/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-07 15:08:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 13:03:09
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/pageObject/views/PageCreate/effects/useColumnsProp.ts
 * @Description: update here
 */

import { useEffect, useState } from "react";
import { INIT_PAGE_CREATE_FORM_COLUMNS } from "./const";
import * as TEMPLATE_MAPS from "melody-template-core";
import { ProFormColumnsType } from "@ant-design/pro-components";

export const useColumnsProp = ({ cuTem }) => {
  const [mergeColumns, setMergeColumns] = useState([
    INIT_PAGE_CREATE_FORM_COLUMNS,
    [],
    [],
  ]);
  useEffect(() => {
    if (cuTem) {
      const targetC = TEMPLATE_MAPS[cuTem].PAGE_CONFIG || {};
      const { modelConfig, actionConfig } = targetC;
      const modelConfigColumns: ProFormColumnsType<
        Record<string, any>,
        "text"
      >[] = modelConfig.map((config) => ({
        ...config,
        dataIndex: ["modelConfig", config.dataIndex],
      }));
      const actionConfigColumns: ProFormColumnsType<
        Record<string, any>,
        "text"
      >[] = actionConfig.map((config) => ({
        ...config,
        dataIndex: ["actionConfig", config.dataIndex],
      }));
      setMergeColumns([
        INIT_PAGE_CREATE_FORM_COLUMNS,
        modelConfigColumns,
        actionConfigColumns,
      ]);
    }
  }, [cuTem]);
  // const initColumns = Array.from(INIT_PAGE_CREATE_FORM_COLUMNS);
  return {
    columns: mergeColumns,
  };
};
