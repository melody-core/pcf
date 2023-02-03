/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 19:44:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 11:57:59
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectConfig/views/MenuConfig/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";

export const CREATE_MENU_ITEM_SCHEMA = ({
  project,
}: {
  project: string;
}): ProFormColumnsType<Record<string, any>, "text">[] => [
  {
    title: "菜单标题",
    dataIndex: "label",
    tip: "此菜单节点的标题",
    fieldProps: {
      placeholder: "例: 班级管理模块",
    },
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: "菜单路径",
    dataIndex: "key",
    tip: "此菜单节点对应的路径, 如果不填则表达为菜单分组，体验版需要手动填写，可以参考文档说明！",
    fieldProps: {
      addonBefore: `/pro/${project}`,
      placeholder:
        "如: /common/Student/record/list ,如果是菜单分组则不需要填写",
    },
  },
  {
    title: "菜单图标",
    dataIndex: "icon",
    tip: "体验版不支持菜单icon记录!",
    fieldProps: {
      disabled: true,
    },
    valueType: "select",
  },
];
