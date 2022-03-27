export interface LinkOption {
  /**
   * Link Type
   * @type {string}
   */
  type: string;
  /**
   * FromNode id of Link
   * @type {string}
   */
  fromNodeId?: string;
  /**
   * FromPort id of Link
   * @type {string}
   */
  fromPortId?: string;
  /**
   * ToNode id of Link
   * @type {string}
   */
  toNodeId?: string;
  /**
   * ToPort id of Link
   * @type {string}
   */
  toPortId?: string;
}