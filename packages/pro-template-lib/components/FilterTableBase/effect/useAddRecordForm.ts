import { UseAddRecordForm } from './type';

export const useAddRecordForm: UseAddRecordForm = ({ columns, recordFormType, steps }) => {
  const res: any = {
    mergeRecordFormType: recordFormType || 'DrawerForm',
    mergeRecordFormColumns: [],
  };
  if (!columns) {
    return res;
  }
  if (res.mergeRecordFormType === 'StepsForm') {
    if (!steps) {
      res.mergeRecordFormColumns = [columns];
      return res;
    }
    res.mergeRecordFormColumns = steps.map((stepIndexItem) =>
      stepIndexItem?.columns?.map((stepIndex) =>
        columns.find((item) => item?.dataIndex === stepIndex),
      ),
    );
    return res;
  }
  res.mergeRecordFormColumns = columns;
  return res;
};
