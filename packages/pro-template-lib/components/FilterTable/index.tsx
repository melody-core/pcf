// /*
//  * @Author: 六弦(melodyWxy)
//  * @Date: 2022-06-14 15:08:32
//  * @LastEditors: 六弦(melodyWxy)
//  * @LastEditTime: 2022-09-16 13:57:23
//  * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/components/FilterTableBase/index.tsx
//  * @Description: update here
//  */

// import React, { FC, useRef } from 'react';

// import { ActionType, ProTable, BetaSchemaForm } from '@ant-design/pro-components';

// // import {
// //   useAddRecordForm,
// //   useAddRecordWrap,
// //   useColumnsProp,
// //   useEditableProp,
// //   usePaginationProp,
// //   useRowKeyProp,
// //   useSearchProp,
// //   useToolBarRender,
// // } from './effect';

// // import type { XTableBaseProps } from './type';

// export const FilterTableBase: FC<Record<any, any>> = ({
//   autoRowEditConfig,
//   autoAddRecordConfig,
//   editable,
//   search,
//   pagination,
//   toolBarRender,
//   request,
//   rowKey,
//   columns,
//   ...otherProps
// }) => {
//   // 内置功能处理 - start
//   // 内置功能处理 - end

//   // 属性封装处理 - start
//   // 属性封装处理 - end
//   return (
//     <>
//       <ProTable
//         dateFormatter="string"
//         editable={mergeEditable}
//         search={mergeSearch}
//         actionRef={actionRef}
//         pagination={mergePagination}
//         cardBordered
//         toolBarRender={mergeToolBarRender}
//         request={request}
//         columns={mergeColumns}
//         rowKey={mergeRowKey}
//         {...otherProps}
//       />
//       <BetaSchemaForm
//         layoutType={mergeRecordFormType}
//         columns={mergeRecordFormColumns}
//         visible={addRecordWrapVisible}
//         drawerProps={
//           mergeRecordFormType === 'DrawerForm'
//             ? {
//                 title: autoAddRecordConfig?.formTitle || '新增',
//                 destroyOnClose: true,
//                 onClose: () => setAddRecordWrap(false),
//               }
//             : undefined
//         }
//         modalProps={
//           mergeRecordFormType === 'ModalForm'
//             ? {
//                 title: autoAddRecordConfig?.formTitle || '新增',
//                 destroyOnClose: true,
//                 onCancel: () => setAddRecordWrap(false),
//               }
//             : undefined
//         }
//         onFinish={async (values) => {
//           await autoAddRecordConfig?.onSave(values);
//           setAddRecordWrap(false);
//           actionRef.current?.reload();
//         }}
//       />
//     </>
//   );
// };

// export default FilterTableBase;
