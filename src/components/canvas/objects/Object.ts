import { FabricObject } from '../utils';

export interface LinkObject extends FabricObject<fabric.Line> {
  fromNode?: NodeObject;
  toNode?: NodeObject;
  fromPort?: PortObject;
  toPort?: PortObject;
  fromPortIndex?: number;
  setPort?: (fromNode: NodeObject, fromPort: PortObject, toNode: NodeObject, toPort: PortObject) => void;
  setPortEnabled?: (node: NodeObject, port: PortObject, enabled: boolean) => void;
}

export interface NodeObject extends FabricObject<fabric.Group> {
  errorFlag?: fabric.IText;
  label?: fabric.Text;
  toPort?: PortObject;
  errors?: any;
  fromPort?: PortObject[];
  descriptor?: Record<string, any>;
  nodeClazz?: string;
  configuration?: Record<string, any>;
  defaultPortOption?: () => Partial<PortObject>;
  toPortOption?: () => Partial<PortObject>;
  fromPortOption?: () => Partial<PortObject>;
  createToPort?: (left: number, top: number) => PortObject;
  createFromPort?: (left: number, top: number) => PortObject[];
  singlePort?: (portOption: Partial<PortObject>) => PortObject[];
  staticPort?: (portOption: Partial<PortObject>) => PortObject[];
  dynamicPort?: (portOption: Partial<PortObject>) => PortObject[];
  broadcastPort?: (portOption: Partial<PortObject>) => PortObject[];
  setErrors?: (errors: any) => void;
  duplicate?: () => NodeObject;
}

export interface PortObject extends FabricObject<fabric.Rect> {
  links?: LinkObject[];
  nodeId?: string;
  enabled?: boolean;
  hoverFill?: string;
  selectFill?: string;
}
