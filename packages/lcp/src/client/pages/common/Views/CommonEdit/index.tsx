import { NormalEditForm } from "@melody-core/melody-template-core";
import React from "react";
import { useParams } from "react-router-dom";

export const CommonEdit = () => {
  const { model } = useParams();
  return (
    <NormalEditForm
      modelConfig={{
        mainModel: model,
      }}
      actionConfig={{}}
    />
  );
};
