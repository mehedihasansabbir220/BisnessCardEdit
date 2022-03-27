import { fabric } from 'fabric';

import {
  Arrow,
  Gif,
  Chart,
  Element,
  Iframe,
  Video,
  Node,
  Link,
  CurvedLink,
  OrthogonalLink,
  Line,
  Cube,
} from './objects';
import Svg from './objects/Svg';

export const createCanvasObject = (objectSchema) => objectSchema;

const CanvasObject = {
  'group': {
    create: ({ objects, ...option }) => new fabric.Group(objects, option),
  },
  'i-text': {
    create: ({ text, ...option }) => new fabric.IText(text, option),
  },
  'textbox': {
    create: ({ text, ...option }) => new fabric.Textbox(text, option),
  },
  'triangle': {
    create: (option) => new fabric.Triangle(option),
  },
  'circle': {
    create: (option) => new fabric.Circle(option),
  },
  'rect': {
    create: (option) => new fabric.Rect(option),
  },
  'cube': {
    create: (option) => new Cube(option),
  },
  'image': {
    create: ({ element = new Image(), ...option }) =>
      new fabric.Image(element, {
        ...option,
        crossOrigin: 'anonymous',
      }),
  },
  'polygon': {
    create: ({ points, ...option }) =>
      new fabric.Polygon(points, {
        ...option,
        perPixelTargetFind: true,
      }),
  },
  'line': {
    create: ({ points, ...option }) => new Line(points, option),
  },
  'arrow': {
    create: ({ points, ...option }) => new Arrow(points, option),
  },
  'chart': {
    create: (option) =>
      new Chart(
        option.chartOption || {
          xAxis: {},
          yAxis: {},
          series: [
            {
              type: 'line',
              data: [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
              ],
            },
          ],
        },
        option,
      ),
  },
  'element': {
    create: ({ code, ...option }) => new Element(code, option),
  },
  'iframe': {
    create: ({ src, ...option }) => new Iframe(src, option),
  },
  'video': {
    create: ({ src, file, ...option }) => new Video(src || file, option),
  },
  'gif': {
    create: (option) => new Gif(option),
  },
  'node': {
    create: (option) => new Node(option),
  },
  'link': {
    create: (fromNode, fromPort, toNode, toPort, option) => new Link(fromNode, fromPort, toNode, toPort, option),
  },
  'curvedLink': {
    create: (fromNode, fromPort, toNode, toPort, option) =>
      new CurvedLink(fromNode, fromPort, toNode, toPort, option),
  },
  'orthogonalLink': {
    create: (fromNode, fromPort, toNode, toPort, option) =>
      new OrthogonalLink(fromNode, fromPort, toNode, toPort, option),
  },
  'svg': {
    create: (option) => new Svg(option),
  },
};

export default CanvasObject;
