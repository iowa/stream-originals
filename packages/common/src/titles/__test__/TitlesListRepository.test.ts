import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import {getDbMock} from '../../db/dbMock.js';
import {DbDrizzle} from '../../db/dbDrizzle.js';
import {PGlite} from '@electric-sql/pglite';
import {TitlesListRepository} from '../TitlesListRepository.js';
import {TestEntities} from '../../utils/testing/TestEntities.js';
import {TitlesRepository} from '../TitlesRepository.js';
import {TestData} from '../../utils/testing/TestData.js';

describe('TitlesListRepository', async () => {
  let pgClient: PGlite;
  let titlesRepository: TitlesRepository;
  let testEntities: TestEntities;
  let cut: TitlesListRepository;

  beforeEach(async () => {
    let {client, db} = await getDbMock();
    pgClient = client;
    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);
    cut = new TitlesListRepository(db as unknown as DbDrizzle);
    testEntities = new TestEntities(titlesRepository, undefined, undefined);
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it('pageSize', async () => {
    await prepareData();

    const result1 = await cut.getTitles(1, 1);

    expect(result1.map(value => value.name)).toMatchInlineSnapshot(`
      [
        "Game of Thrones",
      ]
    `);
    const result2 = await cut.getTitles(1, 2);

    expect(result2.map(value => value.name)).toMatchInlineSnapshot(`
      [
        "Game of Thrones",
        "House of Cards",
      ]
    `);
  });

  it('page', async () => {
    await prepareData();

    const result1 = await cut.getTitles(1, 2);

    expect(result1.map(value => value.name)).toMatchInlineSnapshot(`
      [
        "Game of Thrones",
        "House of Cards",
      ]
    `);
    const result2 = await cut.getTitles(2, 2);

    expect(result2.map(value => value.name)).toMatchInlineSnapshot(`
      [
        "Midnight Mass",
        "The Watcher",
      ]
    `);
  });

  it('streamer', async () => {
    await prepareData();

    const result1 = await cut.getTitles(1, 100, 'netflix');

    expect(result1.map(value => value.name)).toMatchInlineSnapshot(`
      [
        "House of Cards",
        "Midnight Mass",
        "The Watcher",
      ]
    `);
  });

  async function prepareData() {
    await testEntities.insertTitle(TestData.TestTitle_GameOfThrones);
    await testEntities.insertTitle(TestData.TestTitle_HouseOfCards);
    await testEntities.insertTitle(TestData.TestTitle_MidnightMass);
    await testEntities.insertTitle(TestData.TestTitle_TheWatcher);
  }
});
