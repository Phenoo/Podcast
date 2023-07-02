//import { createClient } from 'next-sanity'
import { createClient, type ClientConfig } from '@sanity/preview-kit/client'


import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
