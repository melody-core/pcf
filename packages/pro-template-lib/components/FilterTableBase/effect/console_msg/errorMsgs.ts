/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-14 19:46:14
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-17 18:06:10
 * @FilePath: /@bui/bui-pro/src/SPTable/components/SPTableBase/effect/console_msg/errorMsgs.ts
 * @Description: update here
 */

export const ERROR_MSG_MAP = {
  autoLineEditConfigWithOutRequest: `要开启自动化编辑配置能力, 请务必使用request参数, 
  @六弦为您写好了该能力的demo，请点击链接前往： `,
  autoLineEditOnSaveRunError: `传入的autoLineEditOnSave函数请求失败了！`,
  autoLineEditOnDeleteRunError: `传入的autoLineEditOnDetele函数请求失败了！`,
  autoLineEditConfigWithOutOndelete: `需要传入autoLineEditConfig.onDelete以开启此功能！`,
  autoAddRecordConfigWithOutOnSave: `需要传入autoAddRecordConfig.onSave函数以开启自动化新增功能!`,
};
