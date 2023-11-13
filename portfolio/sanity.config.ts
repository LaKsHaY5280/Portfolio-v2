import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '6sz5rwpr',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
