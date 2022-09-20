import type { UseRowKeyProp } from './type';

export const useRowKeyProp: UseRowKeyProp = ({ rowKey }) => {
  return rowKey || 'id';
};
