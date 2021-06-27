import React from 'react'

// 右侧属性
import { ITextProps, IImageProps } from './type'

export interface IOption {
  label: string | React.ReactNode
  value: any
}

export interface PropsToForm {
  // 属性对应的组件名
  component: string
  // 属性名称
  text?: string
  // 属性值
  value?: string
  // 属性组件所rops
  extraProps?: { [key: string]: any }
  // 属性组件子组件
  subComponent?: string
  // 子组件数据项
  options?: IOption[]
  // 属性值初始化转换
  initalTransform?: (v: any) => any
  // 组件change时转换
  changeTransform?: (v: any) => any
  // 自定义组件接受的值，默认为value
  valueProp?: string
  eventName?: string
}

export type PropsToForms = {
  [P in keyof (ITextProps & IImageProps)]?: PropsToForm
}

const fontFamilyArr = [
  { label: '宋体', value: '"SimSun","STSong"' },
  { label: '黑体', value: '"SimHei","STHeiti"' },
  { label: '楷体', value: '"KaiTi","STKaiti"' },
  { label: '仿宋', value: '"FangSong","STFangsong"' },
  { text: 'Arial', value: '"Arial", sans-serif' },
  { text: 'Arial Black', value: '"Arial Black", sans-serif' },
  { text: 'Comic Sans MS', value: '"Comic Sans MS"' },
  { text: 'Courier New', value: '"Courier New", monospace' },
  { text: 'Georgia', value: '"Georgia", serif' },
  { text: 'Times New Roman', value: '"Times New Roman", serif' }
]

const fontFamilyOptions = fontFamilyArr.map((font) => {
  return {
    value: font.value,
    label: <span style={{ fontFamily: font.value }}>{font.label}</span>
  }
})

export const mapPropsToForm: PropsToForms = {
  text: {
    text: '文本',
    component: 'a-textarea',
    extraProps: {
      rows: 3
    },
    changeTransform: (e: any) => e.target.value
  },
  fontSize: {
    text: '字号',
    component: 'a-input-number',
    initalTransform: (v: string) => parseInt(v),
    changeTransform: (e: number) => (e ? `${e}px` : '')
  },
  lineHeight: {
    text: '行高',
    component: 'a-slider',
    extraProps: {
      max: 3,
      min: 0,
      step: 0.1
    },
    changeTransform: (e: number) => e.toString()
  },
  textAlign: {
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    text: '对齐',
    options: [
      { value: 'left', label: '左' },
      { value: 'center', label: '中' },
      { value: 'right', label: '右' }
    ],
    changeTransform: (e: any) => e.target.value
  },
  fontFamily: {
    component: 'a-select',
    subComponent: 'a-select-option',
    text: '字体',
    options: [{ value: '', label: '无' }, ...fontFamilyOptions]
  },
  color: {
    component: 'color-picker',
    text: '字体颜色'
  },
  fontWeight: {
    component: 'icon-switch',
    initalTransform: (v: string) => v === 'bold',
    changeTransform: (e: boolean) => (e ? 'bold' : 'normal'),
    valueProp: 'checked',
    extraProps: { iconName: 'BoldOutlined', tip: '加粗' }
  },
  fontStyle: {
    component: 'icon-switch',
    initalTransform: (v: string) => v === 'italic',
    changeTransform: (e: boolean) => (e ? 'italic' : 'normal'),
    valueProp: 'checked',
    extraProps: { iconName: 'ItalicOutlined', tip: '斜体' }
  },
  textDecoration: {
    component: 'icon-switch',
    initalTransform: (v: string) => v === 'underline',
    changeTransform: (e: boolean) => (e ? 'underline' : 'none'),
    valueProp: 'checked',
    extraProps: { iconName: 'UnderlineOutlined', tip: '下划线' }
  },
  src: {
    component: 'image-processer',
    text: '图片'
  }
}
