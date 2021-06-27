import { useState, useEffect, useMemo, useCallback } from 'react'
import { without, pick } from 'lodash-es'
import { textDefaultProps } from 'config/defaultProps'
import { IImageProps, ITextProps } from 'config/type'
import { message } from 'antd'

interface CheckCondition {
  format?: string[]
  // 使用多少 M 为单位
  size?: number
}

type ErrorType = 'size' | 'format' | null

// 防抖
export const useDebounce = (value: string, delay = 1000) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    let timer = setTimeout(() => setDebounceValue(value), delay)
    return clearTimeout(timer)
  }, [value, delay])

  return debounceValue
}

export const textStylePropsName = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)

// 返回组件的style属性和点击事件
export const useComponentCommon = (
  props: Readonly<Partial<ITextProps & IImageProps>>,
  picks: string[]
): [{ [key: string]: any }, React.MouseEventHandler<HTMLDivElement>] => {
  const styleProps = useMemo(() => pick(props, picks), [props, picks])
  const handleClick = useCallback(() => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }, [props])
  return [styleProps, handleClick]
}

export function beforeUploadCheck(file: File, condition: CheckCondition) {
  const { format, size } = condition
  const isValidFormat = format ? format.includes(file.type) : true
  const isValidSize = size ? file.size / 1024 / 1024 < size : true
  let error: ErrorType = null
  if (!isValidFormat) {
    error = 'format'
  }
  if (!isValidSize) {
    error = 'size'
  }
  return {
    passed: isValidFormat && isValidSize,
    error
  }
}

export const commonUploadCheck = (file: File) => {
  const result = beforeUploadCheck(file, {
    format: ['image/jpeg', 'image/png'],
    size: 1
  })
  const { passed, error } = result
  if (error === 'format') {
    message.error('上传图片只能是 JPG/PNG 格式!')
  }
  if (error === 'size') {
    message.error('上传图片大小不能超过 1Mb')
  }
  return passed
}

// 获取图片原始尺寸
export const getImgDimenions = (source: string | File) => {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image()
    img.src =
      typeof source === 'string' ? source : window.URL.createObjectURL(source)
    img.addEventListener('load', () => {
      const { naturalWidth: width, naturalHeight: height } = img
      resolve({
        width,
        height
      })
    })
  })
}
