/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-03 10:41:06
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 10:53:12
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/commonHooks/useProject.ts
 * @Description: update here
 *
 */

import { useEffect, useState } from "react";
import { findProjectByName } from "../../../../api/projectApi";
import { xFetch } from "../../../utils";

export const useProject = ({ name }) => {
  const [projectData, setProjectData] = useState<Record<string, any>>({});
  useEffect(() => {
    xFetch(
      findProjectByName({
        name,
      })
    ).then((result) => {
      const { success, data } = result || {};
      if (success) {
        setProjectData(data);
      }
    });
  }, [name]);
  return {
    projectData,
  };
};
