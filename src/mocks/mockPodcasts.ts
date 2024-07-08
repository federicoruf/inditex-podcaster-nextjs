import { Episode } from "@/interfaces/Episode";
import { PodcastForComponent } from "@/interfaces/PodcastForComponent";

export const mockPodcasts: PodcastForComponent[] = [
  {
    id: '1535809341',
    artist: 'The Joe Budden Podcast',
    name: 'The Joe Budden Podcast',
    summary:
      'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
    imageUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
  },
  {
    id: '1574029840',
    name: 'Friday Night Karaoke',
    artist: 'Friday Night Karaoke',
    summary:
      'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
    imageUrl:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/170x170bb.png',
  },
];

export const mockPodcastEpisodes: Episode[] = [
  {
    trackId: 1000617803512,
    trackName: 'Episode 637 | "Crevices"',
    trackTimeMillis: 12350000,
    description:
      'The Bionic Six is back in full force as the gang starts by recapping their Father’s Day (11:15) before turning to Rico Love (24:10) and Russell Simmons (28:35) being outed by their ex’s over the holiday weekend. Ice addresses the JBP’s takes on the YK Osiris news from the last pod (1:03:17), a submarine slated to view the Titanic wreckage has gone missing (1:06:46), and Michael Jordan has sold his majority stake in the Charlotte Hornets (1:16:30). Also, an ex-Starbucks manager was awarded $25.6 million in a lawsuit over her firing (1:25:43), Ice talks about his vacation (1:53:20), Colts linebacker Zaire Franklin returns (1:58:50), Part of the Show (2:42:22), + MORE! \n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks: \n Joe | PHABO (feat. Arin Ray) - “Stay”\n Ice | Arsonal da Rebel (feat. Symba) - “Slow Down”\n Parks | The Legendary Traxster & IAMGAWD  - “The Master and the Student”\n Ish | Gen Neo - “Called It Love”\n Melyssa | Dijon - “The Dress”\n Zaire | Leaf Ward - “F**k Khalif”',
    episodeUrl:
      'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_637.mp3?dest-id=2422538',
    kind: 'podcast-episode',
    releaseDate: '2023-05-26T00:27:25Z',
  },
  {
    trackId: 1000617345765,
    trackName: 'Episode 636 | "The Funcast"',
    trackTimeMillis: 12554000,
    description:
      'The JBP kicks off this episode discussing new music that was released, including Gunna’s ‘a Gift & a Curse’ (26:27) and Killer Mike’s project ‘MICHAEL’ (37:00). YK Osiris is accused of sexual assault after a run-in with Sukihana as videos surfaced on social media (50:38), the gang reacts to Meek Mill’s tweets (1:01:18), and Ja Morant has officially received a 25-game suspension from the NBA (1:21:43). Also, the latest on the YNW Melly trial (1:38:07), Killer Mike joins the podcast (1:50:33) to discuss his new album (1:59:55), his upbringing in Atlanta (2:19:55), + MORE! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks: \n Joe | Maeta - “F**k Your Friend”\n Parks | femdot. | “2003”\n Ish | Kiana Ledé (feat. Bryson Tiller) - “Gone”\n Melyssa | Doja Cat | “Attention”',
    episodeUrl:
      'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_636.mp3?dest-id=2422538',
    kind: 'podcast-episode',
    releaseDate: '2023-05-26T00:27:25Z',
  },
];

export const mockTopPodcast = [
  {
    'im:name': {
      label: 'The Joe Budden Podcast',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    summary: {
      label:
        'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: '0',
        currency: 'USD',
      },
    },
    'im:contentType': {
      attributes: {
        term: 'Podcast',
        label: 'Podcast',
      },
    },
    rights: {
      label: '© All rights reserved',
    },
    title: {
      label: 'The Joe Budden Podcast - The Joe Budden Network',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
      },
    },
    id: {
      label:
        'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
      attributes: {
        'im:id': '1535809341',
      },
    },
    'im:artist': {
      label: 'The Joe Budden Network',
      attributes: {
        href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
      },
    },
    category: {
      attributes: {
        'im:id': '1310',
        term: 'Music',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music',
      },
    },
    'im:releaseDate': {
      label: '2023-06-24T00:00:00-07:00',
      attributes: {
        label: 'June 24, 2023',
      },
    },
  },
  {
    'im:name': {
      label: 'Friday Night Karaoke',
    },
    'im:image': [
      {
        label:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/5b/88/a1/5b88a186-ce6a-5268-cc49-8e896c737729/mza_7354436562524572096.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    summary: {
      label:
        'No ads, no gimmicks - just Karaoke! Friday Night Karaoke features amateur artists every week singing the songs they love, just for you! Get your weekly dose of vocal expression. Get featured on the podcast by joining the official Friday Night Karaoke Facebook group at https://www.facebook.com/groups/fridaynightkaraoke!',
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: '0',
        currency: 'USD',
      },
    },
    'im:contentType': {
      attributes: {
        term: 'Podcast',
        label: 'Podcast',
      },
    },
    rights: {
      label: '© Copyright Friday Night Karaoke',
    },
    title: {
      label: 'Friday Night Karaoke - Friday Night Karaoke',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2',
      },
    },
    id: {
      label:
        'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2',
      attributes: {
        'im:id': '1574029840',
      },
    },
    'im:artist': {
      label: 'Friday Night Karaoke',
    },
    category: {
      attributes: {
        'im:id': '1310',
        term: 'Music',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music',
      },
    },
    'im:releaseDate': {
      label: '2023-05-16T01:44:00-07:00',
      attributes: {
        label: 'May 16, 2023',
      },
    },
  },
  {
    'im:name': {
      label: 'This Little Light',
    },
    'im:image': [
      {
        label:
          'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/55x55bb.png',
        attributes: {
          height: '55',
        },
      },
      {
        label:
          'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.png',
        attributes: {
          height: '60',
        },
      },
      {
        label:
          'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/170x170bb.png',
        attributes: {
          height: '170',
        },
      },
    ],
    summary: {
      label:
        'Hosted by Flea, founding member and bassist of the Red Hot Chili Peppers, This Little Light is a podcast about falling in love with music. Flea interviews musical guests from all genres to discuss the teachers who guided them, the influences that inspired them, and how the lessons they learned as young musicians have shaped their creativity, resilience, and careers. Guests range from legends to rising stars, and include Rick Rubin, Patti Smith, Thundercat Margo Price, and Cynthia Erivo. The podcast is produced by Cadence13 and Parallel, with proceeds benefiting the Silverlake Conservatory of Music, a Los Angeles-based non-profit that Flea co-founded in 2001.',
    },
    'im:price': {
      label: 'Get',
      attributes: {
        amount: '0',
        currency: 'USD',
      },
    },
    'im:contentType': {
      attributes: {
        term: 'Podcast',
        label: 'Podcast',
      },
    },
    rights: {
      label:
        '© 2023 Cadence13, LLC and Waypoint Wellness, LLC.  All Rights Reserved.',
    },
    title: {
      label: 'This Little Light - Cadence13 and Parallel',
    },
    link: {
      attributes: {
        rel: 'alternate',
        type: 'text/html',
        href: 'https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=2',
      },
    },
    id: {
      label:
        'https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=2',
      attributes: {
        'im:id': '1678378239',
      },
    },
    'im:artist': {
      label: 'Cadence13 and Parallel',
    },
    category: {
      attributes: {
        'im:id': '1525',
        term: 'Music Interviews',
        scheme:
          'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
        label: 'Music Interviews',
      },
    },
    'im:releaseDate': {
      label: '2023-06-22T00:01:00-07:00',
      attributes: {
        label: 'June 22, 2023',
      },
    },
  },
];

export const mockDetails = {
  resultCount: 21,
  results: [
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 1535844019,
      collectionId: 1535809341,
      trackId: 1535809341,
      artistName: 'The Joe Budden Network',
      collectionName: 'The Joe Budden Podcast',
      trackName: 'The Joe Budden Podcast',
      collectionCensoredName: 'The Joe Budden Podcast',
      trackCensoredName: 'The Joe Budden Podcast',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4',
      feedUrl: 'https://jbpod.libsyn.com/applepodcast',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/100x100bb.jpg',
      collectionPrice: 0,
      trackPrice: 0,
      collectionHdPrice: 0,
      releaseDate: '2023-06-24T07:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'explicit',
      trackCount: 400,
      trackTimeMillis: 11544,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Music',
      contentAdvisoryRating: 'Explicit',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
      genreIds: ['1310', '26'],
      genres: ['Music', 'Podcasts'],
    },
    {
      country: 'USA',
      collectionViewUrl:
        'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
      trackTimeMillis: 11544000,
      artistIds: [1535844019],
      feedUrl: 'https://jbpod.libsyn.com/applepodcast',
      closedCaptioning: 'none',
      collectionId: 1535809341,
      collectionName: 'The Joe Budden Podcast',
      episodeFileExtension: 'mp3',
      artworkUrl160:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg',
      episodeContentType: 'audio',
      genres: [
        {
          name: 'Music',
          id: '1310',
        },
      ],
      episodeGuid: 'cd7cfa5e-4c80-4c08-b27e-5aa081f3a374',
      description:
        'The JBP kicks things off by discussing their weekend plans before turning to new music which begins with the Young Thug project ‘Business Is Business’ (21:34). Pusha T responds to Jim Jones in a newly released Clipse record (33:38), the latest news on the OceanGate submersible (56:05), and Taxstone receives 35 years from the Irving Plaza shooting (1:28:00). Also, rumors have it Papoose and Eazy The Block Captain got into a physical altercation (1:56:22), NBA Draft and recent trades (2:30:39), Flip has a question for the room (2:45:33), + MORE! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks: \n Joe | Hrs & Hrs (Remix) (feat. Usher) - Muni Long\n Ice | Young Dom - “Master P”\n Parks | 7xvethegenius & DJ Green Lantern - “The Feel”\n Ish | TA Thomas - “June 15th”\n QueenzFlip | Stack Bundles - “Some Say Its Crazy”',
      shortDescription:
        'The JBP kicks things off by discussing their weekend plans before turning to new music which begins with the Young Thug project ‘Business Is Business’ (21:34). Pusha T responds to Jim Jones in a newly released Clipse record (33:38), the latest...',
      releaseDate: '2023-06-24T07:00:00Z',
      trackId: 1000618165790,
      trackName: 'Episode 638 | "Dudecast"',
      previewUrl:
        'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_638.mp3?dest-id=2422538',
      episodeUrl:
        'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_638.mp3?dest-id=2422538',
      contentAdvisoryRating: 'Explicit',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/episode-638-dudecast/id1535809341?i=1000618165790&uo=4',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg',
      artistViewUrl:
        'https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
      kind: 'podcast-episode',
      wrapperType: 'podcastEpisode',
    },
    {
      country: 'USA',
      collectionViewUrl:
        'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
      trackTimeMillis: 12350000,
      artistIds: [1535844019],
      feedUrl: 'https://jbpod.libsyn.com/applepodcast',
      closedCaptioning: 'none',
      collectionId: 1535809341,
      collectionName: 'The Joe Budden Podcast',
      episodeFileExtension: 'mp3',
      artworkUrl160:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg',
      episodeContentType: 'audio',
      genres: [
        {
          name: 'Music',
          id: '1310',
        },
      ],
      episodeGuid: '79b19055-99ef-4ab7-973a-c074432558e6',
      description:
        'The Bionic Six is back in full force as the gang starts by recapping their Father’s Day (11:15) before turning to Rico Love (24:10) and Russell Simmons (28:35) being outed by their ex’s over the holiday weekend. Ice addresses the JBP’s takes on the YK Osiris news from the last pod (1:03:17), a submarine slated to view the Titanic wreckage has gone missing (1:06:46), and Michael Jordan has sold his majority stake in the Charlotte Hornets (1:16:30). Also, an ex-Starbucks manager was awarded $25.6 million in a lawsuit over her firing (1:25:43), Ice talks about his vacation (1:53:20), Colts linebacker Zaire Franklin returns (1:58:50), Part of the Show (2:42:22), + MORE! \n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks: \n Joe | PHABO (feat. Arin Ray) - “Stay”\n Ice | Arsonal da Rebel (feat. Symba) - “Slow Down”\n Parks | The Legendary Traxster & IAMGAWD  - “The Master and the Student”\n Ish | Gen Neo - “Called It Love”\n Melyssa | Dijon - “The Dress”\n Zaire | Leaf Ward - “F**k Khalif”',
      shortDescription:
        'The Bionic Six is back in full force as the gang starts by recapping their Father’s Day (11:15) before turning to Rico Love (24:10) and Russell Simmons (28:35) being outed by their ex’s over the holiday weekend. Ice addresses the JBP’s takes on...',
      releaseDate: '2023-06-21T07:30:00Z',
      trackId: 1000617803512,
      trackName: 'Episode 637 | "Crevices"',
      previewUrl:
        'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_637.mp3?dest-id=2422538',
      episodeUrl:
        'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_637.mp3?dest-id=2422538',
      contentAdvisoryRating: 'Explicit',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/episode-637-crevices/id1535809341?i=1000617803512&uo=4',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg',
      artistViewUrl:
        'https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
      kind: 'podcast-episode',
      wrapperType: 'podcastEpisode',
    },
    {
      country: 'USA',
      collectionViewUrl:
        'https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4',
      trackTimeMillis: 12554000,
      artistIds: [1535844019],
      feedUrl: 'https://jbpod.libsyn.com/applepodcast',
      closedCaptioning: 'none',
      collectionId: 1535809341,
      collectionName: 'The Joe Budden Podcast',
      episodeFileExtension: 'mp3',
      artworkUrl160:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg',
      episodeContentType: 'audio',
      genres: [
        {
          name: 'Music',
          id: '1310',
        },
      ],
      episodeGuid: '0d6724ac-9ba1-46a9-818e-861b0cd11abe',
      description:
        'The JBP kicks off this episode discussing new music that was released, including Gunna’s ‘a Gift & a Curse’ (26:27) and Killer Mike’s project ‘MICHAEL’ (37:00). YK Osiris is accused of sexual assault after a run-in with Sukihana as videos surfaced on social media (50:38), the gang reacts to Meek Mill’s tweets (1:01:18), and Ja Morant has officially received a 25-game suspension from the NBA (1:21:43). Also, the latest on the YNW Melly trial (1:38:07), Killer Mike joins the podcast (1:50:33) to discuss his new album (1:59:55), his upbringing in Atlanta (2:19:55), + MORE! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks: \n Joe | Maeta - “F**k Your Friend”\n Parks | femdot. | “2003”\n Ish | Kiana Ledé (feat. Bryson Tiller) - “Gone”\n Melyssa | Doja Cat | “Attention”',
      shortDescription:
        'The JBP kicks off this episode discussing new music that was released, including Gunna’s ‘a Gift & a Curse’ (26:27) and Killer Mike’s project ‘MICHAEL’ (37:00). YK Osiris is accused of sexual assault after a run-in with Sukihana as...',
      releaseDate: '2023-06-17T07:00:00Z',
      trackId: 1000617345765,
      trackName: 'Episode 636 | "The Funcast"',
      previewUrl:
        'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_636.mp3?dest-id=2422538',
      episodeUrl:
        'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_636.mp3?dest-id=2422538',
      contentAdvisoryRating: 'Clean',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/episode-636-the-funcast/id1535809341?i=1000617345765&uo=4',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg',
      artistViewUrl:
        'https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg',
      kind: 'podcast-episode',
      wrapperType: 'podcastEpisode',
    },
  ],
};
