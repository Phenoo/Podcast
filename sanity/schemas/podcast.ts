import { defineType } from "sanity"

export default defineType({
    name: 'podcast',
    title: 'Podcast',
    description: 'Create and configure a podcast',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        description:
          'Remember that if your title is too long, it may be truncated in various podcatchers-'
      },
      {
        name: 'subtitle',
        type: 'string',
        description: 'That catchy tagline.'
      },
      {
        name: 'slug',
        title: 'Podcast slug',
        type: 'slug',
        description: 'For when you need to refer to your podcast in a url.',
        options: {
          source: 'title',
        }
      },
      {
        name: 'description',
        type: 'text',
        description:
          'What is this podcast about and why should people subscribe to it?'
      },
      {
        name: 'coverArt',
        title: 'Cover art',
        type: 'image',
        description:
          'The image should be either jpg or png. Preferably 3000 x 3000, minimum 1400 x 1400 pixels.'
      },
      {
        name: 'copyright',
        type: 'string',
        description: 'Who owns the rights to this podcast?'
      },
      {
        name: 'explicit',
        type: 'boolean',
        description:
          'Do you need to warn parents about the content in this podcast? (You can set this for individual episodes to)'
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'subtitle',
        description: 'description',
        media: 'coverArt'
      }
    }
  });