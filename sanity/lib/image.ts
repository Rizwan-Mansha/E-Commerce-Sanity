import createImageUrlBuilder from '@sanity/image-url'
import {sanityClient} from '@/lib/sanityClient'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder(sanityClient)

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source)
}
