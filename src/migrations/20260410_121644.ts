import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Clean up partial state left by previous failed runs of this migration
  await db.run(sql`DROP TABLE IF EXISTS \`authors_expertise\`;`)
  await db.run(sql`DROP TABLE IF EXISTS \`__new_authors\`;`)

  await db.run(sql`ALTER TABLE \`tenants\` ADD \`legal_content_privacy_policy\` text;`)
  await db.run(sql`ALTER TABLE \`tenants\` ADD \`legal_content_terms_and_conditions\` text;`)
  await db.run(sql`ALTER TABLE \`tenants\` ADD \`legal_content_disclosure\` text;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`tenants\` DROP COLUMN \`legal_content_privacy_policy\`;`)
  await db.run(sql`ALTER TABLE \`tenants\` DROP COLUMN \`legal_content_terms_and_conditions\`;`)
  await db.run(sql`ALTER TABLE \`tenants\` DROP COLUMN \`legal_content_disclosure\`;`)
}
