import { ERROR_MSG_MAP } from './console_msg/errorMsgs';
import type { EditableProp, UseEditableProp } from './type';

export const useEditableProp: UseEditableProp = ({
  editable,
  actionRef,
  request,
  autoRowEditConfig,
}) => {
  // 如果传了editable，以用户传的为第一优先级。
  if (editable !== undefined) {
    return editable;
  }

  const editableAutoConfig: EditableProp = {
    type: 'single',
    actionRender: (_row, _config, defaultDom) => [defaultDom.save, defaultDom.cancel],
  };
  if (autoRowEditConfig) {
    if (!request) {
      console.error(ERROR_MSG_MAP.autoLineEditConfigWithOutRequest);
      return editable;
    }
    const { onSave } = autoRowEditConfig;
    // 开启自动化编辑保存并且reload的能力
    if (actionRef) {
      // request和actionRef配置了的话，编辑保存后, 可以自动reload，回显table数据。
      if (onSave) {
        editableAutoConfig.onSave = async (...params) => {
          try {
            await onSave(...params);
          } catch (error) {
            console.error(ERROR_MSG_MAP.autoLineEditOnSaveRunError);
            throw error;
          }
          const res = await actionRef.current?.reload();
          return res;
        };
      }
    }
    return editableAutoConfig;
  }
};
