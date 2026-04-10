import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'tenant', 'createdAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
      hasMany: false,
      admin: {
        description: 'The site this author belongs to',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. "jane-smith") — powers /author/{slug} pages',
      },
      validate: (value: string | null | undefined) => {
        if (!value) return 'Slug is required'
        if (!/^[a-z0-9-]+$/.test(value)) {
          return 'Slug must be lowercase alphanumeric with hyphens only'
        }
        return true
      },
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'bio',
      type: 'richText',
      admin: {
        description: 'Author bio — aim for 100+ words to support E-E-A-T signals',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Author headshot (recommended: 400×400px)',
      },
    },
    {
      name: 'social',
      type: 'group',
      label: 'Social Media',
      fields: [
        {
          name: 'twitter',
          type: 'text',
          admin: {
            placeholder: 'https://twitter.com/username',
          },
        },
        {
          name: 'linkedin',
          type: 'text',
          admin: {
            placeholder: 'https://linkedin.com/in/username',
          },
        },
        {
          name: 'website',
          type: 'text',
          admin: {
            placeholder: 'https://example.com',
          },
        },
      ],
    },
    {
      name: 'expertise',
      type: 'array',
      label: 'Areas of Expertise',
      admin: {
        description: 'Topics this author covers — used for E-E-A-T credibility signals',
      },
      fields: [
        {
          name: 'topic',
          type: 'text',
        },
      ],
    },
  ],
}
