import {Dimensions, PixelRatio} from 'react-native'

const {width} = Dimensions.get('window')

const baseRem = width / 375

export const rem = (value: number) => {
  return PixelRatio.roundToNearestPixel(baseRem * value)
}
