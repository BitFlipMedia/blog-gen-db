import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'domain', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Site Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier for the site',
      },
    },
    {
      name: 'domain',
      type: 'text',
      admin: {
        description: 'Custom domain for the site (optional)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of the blog site',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'deployHookUrl',
      type: 'text',
      admin: {
        description: 'Cloudflare Pages deploy hook URL to trigger site rebuild on publish',
      },
    },
    {
      name: 'legalContent',
      type: 'group',
      label: 'Legal Page Content',
      admin: {
        description: 'CMS-managed legal pages. Leave blank to use auto-generated templates.',
      },
      fields: [
        {
          name: 'privacyPolicy',
          type: 'richText',
          label: 'Privacy Policy Content',
          admin: {
            description: 'Full privacy policy. If empty, a template is generated from site config.',
          },
        },
        {
          name: 'termsAndConditions',
          type: 'richText',
          label: 'Terms & Conditions Content',
          admin: {
            description: 'Full T&C content. If empty, a template is generated from site config.',
          },
        },
        {
          name: 'disclosure',
          type: 'richText',
          label: 'Disclosure Content',
          admin: {
            description: 'Affiliate and advertising disclosure. If empty, a template is generated.',
          },
        },
      ],
    },
  ],
}
