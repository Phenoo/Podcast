import { MdAttachMoney } from 'react-icons/md'
import { defineType } from 'sanity'



export default defineType({
  name: 'sponsor',
  type: 'document',
  title: 'Sponsor',
  icon: MdAttachMoney,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
})