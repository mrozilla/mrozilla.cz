// =============================================================================
// Import
// =============================================================================

// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Section, Container, Row, Column } from '../components/Layout';
import { Text } from '../components/Typography';
import { TabButtons, TabButton } from '../components/Buttons';
import { ColourCard } from '../components/Cards';

// =============================================================================
// Component
// =============================================================================

export default class ColoursScreen extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    colours: [
      {
        name: 'aliceblue ',
        hex:  '#f0f8ff',
        rgb:  [240, 248, 255],
        hsb:  [208, 6, 100],
      },
      {
        name: 'antiquewhite ',
        hex:  '#faebd7',
        rgb:  [250, 235, 215],
        hsb:  [34, 14, 98],
      },
      {
        name: 'aqua ',
        hex:  '#00ffff',
        rgb:  [0, 255, 255],
        hsb:  [180, 100, 100],
      },
      {
        name: 'aquamarine ',
        hex:  '#7fffd4',
        rgb:  [127, 255, 212],
        hsb:  [160, 50, 100],
      },
      {
        name: 'azure ',
        hex:  '#f0ffff',
        rgb:  [240, 255, 255],
        hsb:  [180, 6, 100],
      },
      {
        name: 'beige ',
        hex:  '#f5f5dc',
        rgb:  [245, 245, 220],
        hsb:  [60, 10, 96],
      },
      {
        name: 'bisque ',
        hex:  '#ffe4c4',
        rgb:  [255, 228, 196],
        hsb:  [33, 23, 100],
      },
      { name: 'black ', hex: '#000000', rgb: [0, 0, 0], hsb: [0, 0, 0] },
      {
        name: 'blanchedalmond ',
        hex:  '#ffebcd',
        rgb:  [255, 235, 205],
        hsb:  [36, 20, 100],
      },
      { name: 'blue ', hex: '#0000ff', rgb: [0, 0, 255], hsb: [240, 100, 100] },
      {
        name: 'blueviolet ',
        hex:  '#8a2be2',
        rgb:  [138, 43, 226],
        hsb:  [271, 81, 89],
      },
      { name: 'brown ', hex: '#a52a2a', rgb: [165, 42, 42], hsb: [0, 75, 65] },
      {
        name: 'burlywood ',
        hex:  '#deb887',
        rgb:  [222, 184, 135],
        hsb:  [34, 39, 87],
      },
      {
        name: 'cadetblue ',
        hex:  '#5f9ea0',
        rgb:  [95, 158, 160],
        hsb:  [182, 41, 63],
      },
      {
        name: 'chartreuse ',
        hex:  '#7fff00',
        rgb:  [127, 255, 0],
        hsb:  [90, 100, 100],
      },
      {
        name: 'chocolate ',
        hex:  '#d2691e',
        rgb:  [210, 105, 30],
        hsb:  [25, 86, 82],
      },
      {
        name: 'coral ',
        hex:  '#ff7f50',
        rgb:  [255, 127, 80],
        hsb:  [16, 69, 100],
      },
      {
        name: 'cornflowerblue ',
        hex:  '#6495ed',
        rgb:  [100, 149, 237],
        hsb:  [219, 58, 93],
      },
      {
        name: 'cornsilk ',
        hex:  '#fff8dc',
        rgb:  [255, 248, 220],
        hsb:  [48, 14, 100],
      },
      {
        name: 'crimson ',
        hex:  '#dc143c',
        rgb:  [220, 20, 60],
        hsb:  [348, 91, 86],
      },
      {
        name: 'cyan ',
        hex:  '#00ffff',
        rgb:  [0, 255, 255],
        hsb:  [180, 100, 100],
      },
      {
        name: 'darkblue ',
        hex:  '#00008b',
        rgb:  [0, 0, 139],
        hsb:  [240, 100, 55],
      },
      {
        name: 'darkcyan ',
        hex:  '#008b8b',
        rgb:  [0, 139, 139],
        hsb:  [180, 100, 55],
      },
      {
        name: 'darkgoldenrod ',
        hex:  '#b8860b',
        rgb:  [184, 134, 11],
        hsb:  [43, 94, 72],
      },
      {
        name: 'darkgray ',
        hex:  '#a9a9a9',
        rgb:  [169, 169, 169],
        hsb:  [0, 0, 66],
      },
      {
        name: 'darkgrey ',
        hex:  '#a9a9a9',
        rgb:  [169, 169, 169],
        hsb:  [0, 0, 66],
      },
      {
        name: 'darkgreen ',
        hex:  '#006400',
        rgb:  [0, 100, 0],
        hsb:  [120, 100, 39],
      },
      {
        name: 'darkkhaki ',
        hex:  '#bdb76b',
        rgb:  [189, 183, 107],
        hsb:  [56, 43, 74],
      },
      {
        name: 'darkmagenta ',
        hex:  '#8b008b',
        rgb:  [139, 0, 139],
        hsb:  [300, 100, 55],
      },
      {
        name: 'darkolivegreen ',
        hex:  '#556b2f',
        rgb:  [85, 107, 47],
        hsb:  [82, 56, 42],
      },
      {
        name: 'darkorange ',
        hex:  '#ff8c00',
        rgb:  [255, 140, 0],
        hsb:  [33, 100, 100],
      },
      {
        name: 'darkorchid ',
        hex:  '#9932cc',
        rgb:  [153, 50, 204],
        hsb:  [280, 75, 80],
      },
      { name: 'darkred ', hex: '#8b0000', rgb: [139, 0, 0], hsb: [0, 100, 55] },
      {
        name: 'darksalmon ',
        hex:  '#e9967a',
        rgb:  [233, 150, 122],
        hsb:  [15, 48, 91],
      },
      {
        name: 'darkseagreen ',
        hex:  '#8fbc8f',
        rgb:  [143, 188, 143],
        hsb:  [120, 24, 74],
      },
      {
        name: 'darkslateblue ',
        hex:  '#483d8b',
        rgb:  [72, 61, 139],
        hsb:  [248, 56, 55],
      },
      {
        name: 'darkslategray ',
        hex:  '#2f4f4f',
        rgb:  [47, 79, 79],
        hsb:  [180, 41, 31],
      },
      {
        name: 'darkslategrey ',
        hex:  '#2f4f4f',
        rgb:  [47, 79, 79],
        hsb:  [180, 41, 31],
      },
      {
        name: 'darkturquoise ',
        hex:  '#00ced1',
        rgb:  [0, 206, 209],
        hsb:  [181, 100, 82],
      },
      {
        name: 'darkviolet ',
        hex:  '#9400d3',
        rgb:  [148, 0, 211],
        hsb:  [282, 100, 83],
      },
      {
        name: 'deeppink ',
        hex:  '#ff1493',
        rgb:  [255, 20, 147],
        hsb:  [328, 92, 100],
      },
      {
        name: 'deepskyblue ',
        hex:  '#00bfff',
        rgb:  [0, 191, 255],
        hsb:  [195, 100, 100],
      },
      {
        name: 'dimgray ',
        hex:  '#696969',
        rgb:  [105, 105, 105],
        hsb:  [0, 0, 41],
      },
      {
        name: 'dimgrey ',
        hex:  '#696969',
        rgb:  [105, 105, 105],
        hsb:  [0, 0, 41],
      },
      {
        name: 'dodgerblue ',
        hex:  '#1e90ff',
        rgb:  [30, 144, 255],
        hsb:  [210, 88, 100],
      },
      {
        name: 'firebrick ',
        hex:  '#b22222',
        rgb:  [178, 34, 34],
        hsb:  [0, 81, 70],
      },
      {
        name: 'floralwhite ',
        hex:  '#fffaf0',
        rgb:  [255, 250, 240],
        hsb:  [40, 6, 100],
      },
      {
        name: 'forestgreen ',
        hex:  '#228b22',
        rgb:  [34, 139, 34],
        hsb:  [120, 76, 55],
      },
      {
        name: 'fuchsia ',
        hex:  '#ff00ff',
        rgb:  [255, 0, 255],
        hsb:  [300, 100, 100],
      },
      {
        name: 'gainsboro ',
        hex:  '#dcdcdc',
        rgb:  [220, 220, 220],
        hsb:  [0, 0, 86],
      },
      {
        name: 'ghostwhite ',
        hex:  '#f8f8ff',
        rgb:  [248, 248, 255],
        hsb:  [240, 3, 100],
      },
      {
        name: 'gold ',
        hex:  '#ffd700',
        rgb:  [255, 215, 0],
        hsb:  [51, 100, 100],
      },
      {
        name: 'goldenrod ',
        hex:  '#daa520',
        rgb:  [218, 165, 32],
        hsb:  [43, 85, 85],
      },
      { name: 'gray ', hex: '#808080', rgb: [128, 128, 128], hsb: [0, 0, 50] },
      { name: 'grey ', hex: '#808080', rgb: [128, 128, 128], hsb: [0, 0, 50] },
      { name: 'green ', hex: '#008000', rgb: [0, 128, 0], hsb: [120, 100, 50] },
      {
        name: 'greenyellow ',
        hex:  '#adff2f',
        rgb:  [173, 255, 47],
        hsb:  [84, 82, 100],
      },
      {
        name: 'honeydew ',
        hex:  '#f0fff0',
        rgb:  [240, 255, 240],
        hsb:  [120, 6, 100],
      },
      {
        name: 'hotpink ',
        hex:  '#ff69b4',
        rgb:  [255, 105, 180],
        hsb:  [330, 59, 100],
      },
      {
        name: 'indianred  ',
        hex:  '#cd5c5c',
        rgb:  [205, 92, 92],
        hsb:  [0, 55, 80],
      },
      {
        name: 'indigo  ',
        hex:  '#4b0082',
        rgb:  [75, 0, 130],
        hsb:  [275, 100, 51],
      },
      {
        name: 'ivory ',
        hex:  '#fffff0',
        rgb:  [255, 255, 240],
        hsb:  [60, 6, 100],
      },
      {
        name: 'khaki ',
        hex:  '#f0e68c',
        rgb:  [240, 230, 140],
        hsb:  [54, 42, 94],
      },
      {
        name: 'lavender ',
        hex:  '#e6e6fa',
        rgb:  [230, 230, 250],
        hsb:  [240, 8, 98],
      },
      {
        name: 'lavenderblush ',
        hex:  '#fff0f5',
        rgb:  [255, 240, 245],
        hsb:  [340, 6, 100],
      },
      {
        name: 'lawngreen ',
        hex:  '#7cfc00',
        rgb:  [124, 252, 0],
        hsb:  [90, 100, 99],
      },
      {
        name: 'lemonchiffon ',
        hex:  '#fffacd',
        rgb:  [255, 250, 205],
        hsb:  [54, 20, 100],
      },
      {
        name: 'lightblue ',
        hex:  '#add8e6',
        rgb:  [173, 216, 230],
        hsb:  [195, 25, 90],
      },
      {
        name: 'lightcoral ',
        hex:  '#f08080',
        rgb:  [240, 128, 128],
        hsb:  [0, 47, 94],
      },
      {
        name: 'lightcyan ',
        hex:  '#e0ffff',
        rgb:  [224, 255, 255],
        hsb:  [180, 12, 100],
      },
      {
        name: 'lightgoldenrodyellow ',
        hex:  '#fafad2',
        rgb:  [250, 250, 210],
        hsb:  [60, 16, 98],
      },
      {
        name: 'lightgray ',
        hex:  '#d3d3d3',
        rgb:  [211, 211, 211],
        hsb:  [0, 0, 83],
      },
      {
        name: 'lightgrey ',
        hex:  '#d3d3d3',
        rgb:  [211, 211, 211],
        hsb:  [0, 0, 83],
      },
      {
        name: 'lightgreen ',
        hex:  '#90ee90',
        rgb:  [144, 238, 144],
        hsb:  [120, 39, 93],
      },
      {
        name: 'lightpink ',
        hex:  '#ffb6c1',
        rgb:  [255, 182, 193],
        hsb:  [351, 29, 100],
      },
      {
        name: 'lightsalmon ',
        hex:  '#ffa07a',
        rgb:  [255, 160, 122],
        hsb:  [17, 52, 100],
      },
      {
        name: 'lightseagreen ',
        hex:  '#20b2aa',
        rgb:  [32, 178, 170],
        hsb:  [177, 82, 70],
      },
      {
        name: 'lightskyblue ',
        hex:  '#87cefa',
        rgb:  [135, 206, 250],
        hsb:  [203, 46, 98],
      },
      {
        name: 'lightslategray ',
        hex:  '#778899',
        rgb:  [119, 136, 153],
        hsb:  [210, 22, 60],
      },
      {
        name: 'lightslategrey ',
        hex:  '#778899',
        rgb:  [119, 136, 153],
        hsb:  [210, 22, 60],
      },
      {
        name: 'lightsteelblue ',
        hex:  '#b0c4de',
        rgb:  [176, 196, 222],
        hsb:  [214, 21, 87],
      },
      {
        name: 'lightyellow ',
        hex:  '#ffffe0',
        rgb:  [255, 255, 224],
        hsb:  [60, 12, 100],
      },
      { name: 'lime ', hex: '#00ff00', rgb: [0, 255, 0], hsb: [120, 100, 100] },
      {
        name: 'limegreen ',
        hex:  '#32cd32',
        rgb:  [50, 205, 50],
        hsb:  [120, 76, 80],
      },
      {
        name: 'linen ',
        hex:  '#faf0e6',
        rgb:  [250, 240, 230],
        hsb:  [30, 8, 98],
      },
      {
        name: 'magenta ',
        hex:  '#ff00ff',
        rgb:  [255, 0, 255],
        hsb:  [300, 100, 100],
      },
      { name: 'maroon ', hex: '#800000', rgb: [128, 0, 0], hsb: [0, 100, 50] },
      {
        name: 'mediumaquamarine ',
        hex:  '#66cdaa',
        rgb:  [102, 205, 170],
        hsb:  [160, 50, 80],
      },
      {
        name: 'mediumblue ',
        hex:  '#0000cd',
        rgb:  [0, 0, 205],
        hsb:  [240, 100, 80],
      },
      {
        name: 'mediumorchid ',
        hex:  '#ba55d3',
        rgb:  [186, 85, 211],
        hsb:  [288, 60, 83],
      },
      {
        name: 'mediumpurple ',
        hex:  '#9370db',
        rgb:  [147, 112, 219],
        hsb:  [260, 49, 86],
      },
      {
        name: 'mediumseagreen ',
        hex:  '#3cb371',
        rgb:  [60, 179, 113],
        hsb:  [147, 66, 70],
      },
      {
        name: 'mediumslateblue ',
        hex:  '#7b68ee',
        rgb:  [123, 104, 238],
        hsb:  [249, 56, 93],
      },
      {
        name: 'mediumspringgreen ',
        hex:  '#00fa9a',
        rgb:  [0, 250, 154],
        hsb:  [157, 100, 98],
      },
      {
        name: 'mediumturquoise ',
        hex:  '#48d1cc',
        rgb:  [72, 209, 204],
        hsb:  [178, 66, 82],
      },
      {
        name: 'mediumvioletred ',
        hex:  '#c71585',
        rgb:  [199, 21, 133],
        hsb:  [322, 89, 78],
      },
      {
        name: 'midnightblue ',
        hex:  '#191970',
        rgb:  [25, 25, 112],
        hsb:  [240, 78, 44],
      },
      {
        name: 'mintcream ',
        hex:  '#f5fffa',
        rgb:  [245, 255, 250],
        hsb:  [150, 4, 100],
      },
      {
        name: 'mistyrose ',
        hex:  '#ffe4e1',
        rgb:  [255, 228, 225],
        hsb:  [6, 12, 100],
      },
      {
        name: 'moccasin ',
        hex:  '#ffe4b5',
        rgb:  [255, 228, 181],
        hsb:  [38, 29, 100],
      },
      {
        name: 'navajowhite ',
        hex:  '#ffdead',
        rgb:  [255, 222, 173],
        hsb:  [36, 32, 100],
      },
      { name: 'navy ', hex: '#000080', rgb: [0, 0, 128], hsb: [240, 100, 50] },
      {
        name: 'oldlace ',
        hex:  '#fdf5e6',
        rgb:  [253, 245, 230],
        hsb:  [39, 9, 99],
      },
      {
        name: 'olive ',
        hex:  '#808000',
        rgb:  [128, 128, 0],
        hsb:  [60, 100, 50],
      },
      {
        name: 'olivedrab ',
        hex:  '#6b8e23',
        rgb:  [107, 142, 35],
        hsb:  [80, 75, 56],
      },
      {
        name: 'orange ',
        hex:  '#ffa500',
        rgb:  [255, 165, 0],
        hsb:  [39, 100, 100],
      },
      {
        name: 'orangered ',
        hex:  '#ff4500',
        rgb:  [255, 69, 0],
        hsb:  [16, 100, 100],
      },
      {
        name: 'orchid ',
        hex:  '#da70d6',
        rgb:  [218, 112, 214],
        hsb:  [302, 49, 85],
      },
      {
        name: 'palegoldenrod ',
        hex:  '#eee8aa',
        rgb:  [238, 232, 170],
        hsb:  [55, 29, 93],
      },
      {
        name: 'palegreen ',
        hex:  '#98fb98',
        rgb:  [152, 251, 152],
        hsb:  [120, 39, 98],
      },
      {
        name: 'paleturquoise ',
        hex:  '#afeeee',
        rgb:  [175, 238, 238],
        hsb:  [180, 26, 93],
      },
      {
        name: 'palevioletred ',
        hex:  '#db7093',
        rgb:  [219, 112, 147],
        hsb:  [340, 49, 86],
      },
      {
        name: 'papayawhip ',
        hex:  '#ffefd5',
        rgb:  [255, 239, 213],
        hsb:  [37, 16, 100],
      },
      {
        name: 'peachpuff ',
        hex:  '#ffdab9',
        rgb:  [255, 218, 185],
        hsb:  [28, 27, 100],
      },
      { name: 'peru ', hex: '#cd853f', rgb: [205, 133, 63], hsb: [30, 69, 80] },
      {
        name: 'pink ',
        hex:  '#ffc0cb',
        rgb:  [255, 192, 203],
        hsb:  [350, 25, 100],
      },
      {
        name: 'plum ',
        hex:  '#dda0dd',
        rgb:  [221, 160, 221],
        hsb:  [300, 28, 87],
      },
      {
        name: 'powderblue ',
        hex:  '#b0e0e6',
        rgb:  [176, 224, 230],
        hsb:  [187, 23, 90],
      },
      {
        name: 'purple ',
        hex:  '#800080',
        rgb:  [128, 0, 128],
        hsb:  [300, 100, 50],
      },
      {
        name: 'rebeccapurple ',
        hex:  '#663399',
        rgb:  [102, 51, 153],
        hsb:  [270, 67, 60],
      },
      { name: 'red ', hex: '#ff0000', rgb: [255, 0, 0], hsb: [0, 100, 100] },
      {
        name: 'rosybrown ',
        hex:  '#bc8f8f',
        rgb:  [188, 143, 143],
        hsb:  [0, 24, 74],
      },
      {
        name: 'royalblue ',
        hex:  '#4169e1',
        rgb:  [65, 105, 225],
        hsb:  [225, 71, 88],
      },
      {
        name: 'saddlebrown ',
        hex:  '#8b4513',
        rgb:  [139, 69, 19],
        hsb:  [25, 86, 55],
      },
      {
        name: 'salmon ',
        hex:  '#fa8072',
        rgb:  [250, 128, 114],
        hsb:  [6, 54, 98],
      },
      {
        name: 'sandybrown ',
        hex:  '#f4a460',
        rgb:  [244, 164, 96],
        hsb:  [28, 61, 96],
      },
      {
        name: 'seagreen ',
        hex:  '#2e8b57',
        rgb:  [46, 139, 87],
        hsb:  [146, 67, 55],
      },
      {
        name: 'seashell ',
        hex:  '#fff5ee',
        rgb:  [255, 245, 238],
        hsb:  [25, 7, 100],
      },
      {
        name: 'sienna ',
        hex:  '#a0522d',
        rgb:  [160, 82, 45],
        hsb:  [19, 72, 63],
      },
      {
        name: 'silver ',
        hex:  '#c0c0c0',
        rgb:  [192, 192, 192],
        hsb:  [0, 0, 75],
      },
      {
        name: 'skyblue ',
        hex:  '#87ceeb',
        rgb:  [135, 206, 235],
        hsb:  [197, 43, 92],
      },
      {
        name: 'slateblue ',
        hex:  '#6a5acd',
        rgb:  [106, 90, 205],
        hsb:  [248, 56, 80],
      },
      {
        name: 'slategray ',
        hex:  '#708090',
        rgb:  [112, 128, 144],
        hsb:  [210, 22, 56],
      },
      {
        name: 'slategrey ',
        hex:  '#708090',
        rgb:  [112, 128, 144],
        hsb:  [210, 22, 56],
      },
      { name: 'snow ', hex: '#fffafa', rgb: [255, 250, 250], hsb: [0, 2, 100] },
      {
        name: 'springgreen ',
        hex:  '#00ff7f',
        rgb:  [0, 255, 127],
        hsb:  [150, 100, 100],
      },
      {
        name: 'steelblue ',
        hex:  '#4682b4',
        rgb:  [70, 130, 180],
        hsb:  [207, 61, 71],
      },
      { name: 'tan ', hex: '#d2b48c', rgb: [210, 180, 140], hsb: [34, 33, 82] },
      {
        name: 'teal ',
        hex:  '#008080',
        rgb:  [0, 128, 128],
        hsb:  [180, 100, 50],
      },
      {
        name: 'thistle ',
        hex:  '#d8bfd8',
        rgb:  [216, 191, 216],
        hsb:  [300, 12, 85],
      },
      {
        name: 'tomato ',
        hex:  '#ff6347',
        rgb:  [255, 99, 71],
        hsb:  [9, 72, 100],
      },
      {
        name: 'turquoise ',
        hex:  '#40e0d0',
        rgb:  [64, 224, 208],
        hsb:  [174, 71, 88],
      },
      {
        name: 'violet ',
        hex:  '#ee82ee',
        rgb:  [238, 130, 238],
        hsb:  [300, 45, 93],
      },
      {
        name: 'wheat ',
        hex:  '#f5deb3',
        rgb:  [245, 222, 179],
        hsb:  [39, 27, 96],
      },
      {
        name: 'white ',
        hex:  '#ffffff',
        rgb:  [255, 255, 255],
        hsb:  [0, 0, 100],
      },
      {
        name: 'whitesmoke ',
        hex:  '#f5f5f5',
        rgb:  [245, 245, 245],
        hsb:  [0, 0, 96],
      },
      {
        name: 'yellow ',
        hex:  '#ffff00',
        rgb:  [255, 255, 0],
        hsb:  [60, 100, 100],
      },
      {
        name: 'yellowgreen ',
        hex:  '#9acd32',
        rgb:  [154, 205, 50],
        hsb:  [80, 76, 80],
      },
    ],
    sortBy: 'name',
    isAsc:  true,
  };

  sortByHSB = (sortBy) => {
    const indexHSB = sortBy === 'hue' ? 0 : sortBy === 'saturation' ? 1 : 2;
    this.setState({
      colours: this.state.colours
        .slice()
        .sort(
          (a, b) =>
            this.state.isAsc
              ? a.hsb[indexHSB] - b.hsb[indexHSB]
              : b.hsb[indexHSB] - a.hsb[indexHSB],
        ),
    });
  };
  sortByName = () => {
    this.setState({
      colours: this.state.colours.slice().sort((a, b) => {
        if (a.name < b.name) return this.state.isAsc ? -1 : 1;
        if (a.name > b.name) return this.state.isAsc ? 1 : -1;
        return 0;
      }),
    });
  };

  handleSort = (sortBy) => {
    this.setState(
      {
        sortBy,
        isAsc: this.state.sortBy === sortBy ? !this.state.isAsc : true,
      },
      () => (sortBy === 'name' ? this.sortByName() : this.sortByHSB(sortBy)),
    );
  };

  renderArrow = type =>
    this.state.sortBy === type ? (this.state.isAsc ? '⇡' : '⇣') : null;

  render() {
    const { sortBy, colours } = this.state;
    return (
      <main>
        <Section marginTop="20vh">
          <Container>
            <Row>
              <Column xs="12">
                <Text marginBottom="1rem" textAlign="center">
                  Sort by:
                </Text>
                <TabButtons marginBottom="1rem">
                  <TabButton
                    onClick={() => this.handleSort('name')}
                    isActive={sortBy === 'name'}
                  >
                    name {this.renderArrow('name')}
                  </TabButton>
                  <TabButton
                    onClick={() => this.handleSort('hue')}
                    isActive={sortBy === 'hue'}
                  >
                    hue {this.renderArrow('hue')}
                  </TabButton>
                  <TabButton
                    onClick={() => this.handleSort('saturation')}
                    isActive={sortBy === 'saturation'}
                  >
                    saturation {this.renderArrow('saturation')}
                  </TabButton>
                  <TabButton
                    onClick={() => this.handleSort('brightness')}
                    isActive={sortBy === 'brightness'}
                  >
                    brightness {this.renderArrow('brightness')}
                  </TabButton>
                </TabButtons>
              </Column>
            </Row>
            <Row isCentered>
              {colours.map(color => (
                <ColourCard key={color.name} colour={color} />
              ))}
            </Row>
          </Container>
        </Section>
      </main>
    );
  }
}
