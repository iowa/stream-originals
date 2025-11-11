import {Interest} from '../../db/dbTypes.js';

export class TestInterests {
  public static readonly Action: Interest = {
    id: 'in0000001',
    name: 'Action',
    isSubgenre: null,
    description:
      'The action genre features fast-paced, thrilling, and intense sequences of physical feats, combat, and excitement. The characters of these stories are involved in daring and often dangerous situations, requiring them to rely on their physical prowess, skills, and quick thinking to overcome challenges and adversaries.',
    category: 'Action',
  };

  public static readonly Adventure: Interest = {
    id: 'in0000012',
    name: 'Adventure',
    isSubgenre: null,
    description:
      'The adventure genre features exciting journeys, quests, or expeditions undertaken by characters who often face challenges, obstacles, and risks in pursuit of a goal. Adventures can take place in a wide range of settings, from exotic and fantastical locations to historical or even everyday environments.',
    category: 'Adventure',
  };

  public static readonly Drama: Interest = {
    id: 'in0000076',
    name: 'Drama',
    isSubgenre: null,
    description:
      'The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistic and emotionally impactful way. Dramas delve into the complexities of human life, often exploring themes of love, loss, morality, societal issues, personal growth, with the aim to evoke an emotional response from the audience by presenting relatable and thought-provoking stories.',
    category: 'Drama',
  };

  public static readonly Fantasy: Interest = {
    id: 'in0000098',
    name: 'Fantasy',
    isSubgenre: null,
    description:
      'The fantasy genre features imaginative and often magical worlds, characters, and events. It explores realms beyond the boundaries of reality, featuring elements such as magic, mythical creatures, supernatural powers, and fantastical settings. These stories can take place in entirely fictional worlds or blend fantastical elements with real-world settings.',
    category: 'Fantasy',
  };

  public static readonly Horror: Interest = {
    id: 'in0000112',
    name: 'Horror',
    isSubgenre: null,
    description:
      'The horror genre features stories that aim to elicit fear, suspense, and a sense of dread in its audience. Horror stories often explore themes related to the unknown, the supernatural, and the macabre, and they frequently evoke strong emotional reactions such as anxiety, terror, and unease.',
    category: 'Horror',
  };

  public static readonly Mystery: Interest = {
    id: 'in0000139',
    name: 'Mystery',
    isSubgenre: null,
    description:
      'The mystery genre features the investigation and solving of a puzzle, typically a crime or an enigmatic event. Mysteries are known for their suspenseful narratives, intricate plots, and the challenge they present to readers or viewers to piece together clues and solve the central mystery alongside the characters.',
    category: 'Mystery',
  };

  public static readonly SciFi: Interest = {
    id: 'in0000162',
    name: 'Sci-Fi',
    isSubgenre: null,
    description:
      'The sci-fi genre, short for science fiction, features imaginative and futuristic concepts that are often rooted in scientific principles, technology, and possibilities. These stories delve into "what if" questions and can serve as a platform to address contemporary social, political, and ethical issues by projecting them onto future or alternate settings.',
    category: 'Sci-Fi',
  };

  public static readonly Thriller: Interest = {
    id: 'in0000186',
    name: 'Thriller',
    isSubgenre: null,
    description:
      'The thriller genre features suspense, tension, and excitement. These stories are known for keeping audiences on the edge of their seats and delivering intense emotional experiences by revolving around high-stakes situations, dangerous conflicts, and the constant anticipation of unexpected events.',
    category: 'Thriller',
  };
}

/*
SELECT *
FROM
	interests
WHERE
	ID IN ( SELECT interest_id FROM title_interests WHERE title_id = 'tt1856010' );
*/