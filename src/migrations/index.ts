import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20260111_061835 from './20260111_061835';
import * as migration_20260318_055420 from './20260318_055420';
import * as migration_20260410_121644 from './20260410_121644';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20260111_061835.up,
    down: migration_20260111_061835.down,
    name: '20260111_061835',
  },
  {
    up: migration_20260318_055420.up,
    down: migration_20260318_055420.down,
    name: '20260318_055420',
  },
  {
    up: migration_20260410_121644.up,
    down: migration_20260410_121644.down,
    name: '20260410_121644'
  },
];
