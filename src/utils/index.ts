type AccessType =
  | 'HTMLInputElement'
  | 'String'
  | 'Object'
  | 'Number'
  | 'Boolean'
  | 'Symbol'
  | 'Undefined'
  | 'Null'
  | 'AsyncFunction'
  | 'Function'
  | 'Date'
  | 'Array'
  | 'RegExp'
  | 'Error'
  | 'HTMLDocument'
  | 'global';

/**
 * 类型获取
 * @param access 参数
 */
export const getAccessType = (access: any): AccessType => {
  return Object.prototype.toString.call(access).slice(8, -1) as AccessType;
};
