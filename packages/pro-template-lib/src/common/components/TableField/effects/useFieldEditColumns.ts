/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 20:30:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 01:46:33
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/TableField/effects/useFieldEditColumns.ts
 * @Description: update here
 */

import { ProColumns } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import { getMetadataByModel, getRecordsByModel } from '../../../../sevice';

export const useFieldEditColumns = ({
  cuFormValue,
  individualizedSetup,
  metaData,
}: any) => {
  console.log('...', cuFormValue, individualizedSetup, metaData);
  const [relationModelMap, setRelationModelMap] = useState<Record<string, any>>(
    {}
  );
  const [relationDataMap, setRelationDataMap] = useState<Record<string, any>>(
    {}
  );
  const { linkTableFields, enumTableFields } = individualizedSetup || {};
  const resColumns: ProColumns<Record<string, any>, 'text'>[] = [];
  if (!cuFormValue) {
    return {
      columns: resColumns,
    };
  }
  const modelReqList: string[] = [];
  linkTableFields?.forEach((itemKey: any) => {
    const targetMeta = metaData?.fields?.find(
      (field: any) => field?.fieldName === itemKey
    );
    const cValues = cuFormValue[itemKey];
    if (targetMeta && cValues) {
      const { config } = targetMeta;
      const { relationModel, relationShowField } =
        config?.individualizedSetup || {};
      if (relationModel) {
        const findModelMeta = relationModelMap[relationModel];
        if (!findModelMeta) {
          modelReqList.push(relationModel);
        }
        if (findModelMeta) {
          const targetFormData = relationDataMap[relationModel];
          if (Array.isArray(targetFormData)) {
            const tableFields = targetFormData.filter((item) =>
              cValues?.includes(item._id)
            );
            tableFields.forEach((tF) => {
              let targetKeyNode: any;
              for (const [xKey, xValue] of Object.entries(tF)) {
                if (Array.isArray(xValue)) {
                  targetKeyNode = {
                    key: xKey,
                    value: xValue,
                  };
                }
              }
              resColumns.push({
                valueType: 'select',
                title: tF[relationShowField],
                dataIndex: `${relationModel}_${tF._id}`,
                request: async () => {
                  if (!targetKeyNode) {
                    return [];
                  }
                  const findOne = findModelMeta.fields.find(
                    (fItem: any) => fItem.fieldName === targetKeyNode.key
                  );
                  if (findOne) {
                    const resData = await getRecordsByModel({
                      modelName:
                        findOne.config?.individualizedSetup?.relationModel,
                      params: {
                        pageSize: 999,
                      },
                      sort: {},
                    });
                    const { success, data } = resData || {};
                    if (success) {
                      return (
                        data?.data
                          ?.filter((dItem) =>
                            targetKeyNode.value?.includes(dItem._id)
                          )
                          ?.map((dItem) => ({
                            label:
                              dItem[
                                findOne.config?.individualizedSetup
                                  ?.relationShowField
                              ],
                            value: dItem._id,
                          })) || []
                      );
                    }
                  }

                  return [];
                },
              });
            });
          }
        }
      }

      // resColumns.push({
      //   valueType: 'select',
      //   title: item.title,
      //   dataIndex: item.key,
      // })
    }
    // resColumns.push({
    //   valueType: "select",
    //   dataIndex: `${itemKey} + `

    // });
  });
  useEffect(() => {
    Promise.all(
      modelReqList.map((relationModel) => {
        return getMetadataByModel({
          name: relationModel,
        });
      })
    ).then((res) => {
      res?.forEach((result, index) => {
        const { success, data } = result || {};
        if (success) {
          relationModelMap[modelReqList[index]] = data;
        }
      });
      setRelationModelMap({ ...relationModelMap });
    });
    Promise.all(
      modelReqList.map((relationModel) => {
        return getRecordsByModel({
          modelName: relationModel,
          params: {
            pageSize: 999,
          },
          sort: {},
        });
      })
    ).then((res) => {
      res?.forEach((result, index) => {
        const { success, data } = result || {};
        if (success) {
          relationDataMap[modelReqList[index]] = data?.data;
        }
      });
      setRelationDataMap({ ...relationDataMap });
    });
  }, [modelReqList.join('-')]);
  enumTableFields?.forEach((item: any) => {
    resColumns.push({
      valueType: item.valueType,
      title: item.title,
      dataIndex: item.key,
    });
  });
  return {
    columns: resColumns,
  };
};
