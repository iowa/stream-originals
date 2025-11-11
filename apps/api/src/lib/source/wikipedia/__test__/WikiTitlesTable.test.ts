import {describe, expect, it} from 'vitest';
import {WikiTitlesTable} from '../WikiTitlesTable.js';
import {TestFiles} from '@repo/common';

describe('WikiTitlesTable', () => {
  it('parseRow For All Mankind', () => {
    const html = TestFiles.load(__dirname, '/data/tr_For_All_Mankind.html');

    const result = new WikiTitlesTable().parseRow({
      html: html,
      streamer: 'appleTV+',
      titleIndex: 0,
      premiereIndex: 2,
      seasonsIndex: 3,
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 40,
        "finale": null,
        "id": "",
        "name": "For All Mankind",
        "premiere": "2019-11-01",
        "seasons": 4,
        "streamer": "appleTV+",
      }
    `);
  });

  it('parseRow The Savant', () => {
    const html = TestFiles.load(__dirname, '/data/tr_The_Savant.html');

    const result = new WikiTitlesTable().parseRow({
      html: html,
      streamer: 'appleTV+',
      titleIndex: 0,
      premiereIndex: 2,
      seasonsIndex: 3,
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 8,
        "finale": null,
        "id": "",
        "name": "The Savant",
        "premiere": "2025-09-26",
        "seasons": null,
        "streamer": "appleTV+",
      }
    `);
  });

  it('parseRow Eva the Owlet', () => {
    const html = TestFiles.load(__dirname, '/data/tr_Eva_the_Owlet.html');

    const result = new WikiTitlesTable().parseRow({
      html: html,
      streamer: 'appleTV+',
      titleIndex: 0,
      premiereIndex: 2,
      seasonsIndex: 3,
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 17,
        "finale": null,
        "id": "",
        "name": "Eva the Owlet",
        "premiere": "2023-03-31",
        "seasons": 2,
        "streamer": "appleTV+",
      }
    `);
  });

  it('parseRow Neuromancer', () => {
    const html = TestFiles.load(__dirname, '/data/tr_Neuromancer.html');

    const result = new WikiTitlesTable().parseRow({
      html: html,
      streamer: 'appleTV+',
      titleIndex: 0,
      premiereIndex: 2,
      seasonsIndex: 3,
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 10,
        "finale": null,
        "id": "",
        "name": "Neuromancer",
        "premiere": null,
        "seasons": 1,
        "streamer": "appleTV+",
      }
    `);
  });

  it('parseRow Defending Jacob', () => {
    const html = TestFiles.load(__dirname, '/data/tr_Defending_Jacob.html');

    const result = new WikiTitlesTable().parseRow({
      html: html,
      streamer: 'appleTV+',
      titleIndex: 0,
      premiereIndex: 2,
      finaleIndex: 3,
      seasonsIndex: 4,
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 8,
        "finale": "2020-05-29",
        "id": "",
        "name": "Defending Jacob",
        "premiere": "2020-04-24",
        "seasons": null,
        "streamer": "appleTV+",
      }
    `);
  });

  it('parseRow Surfside Girls', () => {
    const html = TestFiles.load(__dirname, '/data/tr_Surfside_Girls.html');

    const result = new WikiTitlesTable().parseRow({
      html: html,
      streamer: 'appleTV+',
      titleIndex: 0,
      premiereIndex: 2,
      finaleIndex: 3,
      seasonsIndex: 4,
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 10,
        "finale": "2022-08-19",
        "id": "",
        "name": "Surfside Girls",
        "premiere": "2022-08-19",
        "seasons": 1,
        "streamer": "appleTV+",
      }
    `);
  });

  it('parseRow Ahsoka', () => {
    const html = TestFiles.load(__dirname, '/data/tr_Ahsoka.html');

    const result = new WikiTitlesTable().parseRow({
      html: html,
      streamer: 'disney+',
      titleIndex: 0,
      premiereIndex: 2,
      seasonsIndex: 3,
    });
    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 8,
        "finale": null,
        "id": "",
        "name": "Ahsoka",
        "premiere": "2023-08-22",
        "seasons": 1,
        "streamer": "disney+",
      }
    `);
  });
});
