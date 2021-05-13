import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import SearchBar from './components/searchBar';
import MovieList from './components/movieList';
import { API_KEY } from '@env';
import { getDiscover } from './apiServices';

const App = () => {
  let [discover, setDiscover] = useState([
    {
      video: false,
      vote_average: 7.7,
      overview:
        "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      release_date: '2021-04-07',
      title: 'Mortal Kombat',
      adult: false,
      backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
      id: 460465,
      genre_ids: [28, 14, 12],
      original_language: 'en',
      original_title: 'Mortal Kombat',
      poster_path: '/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg',
      vote_count: 2335,
      popularity: 5358.559,
      media_type: 'movie',
    },
    {
      adult: false,
      backdrop_path: '/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
      genre_ids: [28, 12, 53, 10752],
      original_language: 'en',
      original_title: "Tom Clancy's Without Remorse",
      poster_path: '/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
      vote_count: 757,
      id: 567189,
      vote_average: 7.3,
      video: false,
      overview:
        'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
      release_date: '2021-04-29',
      title: "Tom Clancy's Without Remorse",
      popularity: 8361.714,
      media_type: 'movie',
    },
    {
      original_language: 'en',
      original_title: 'The Mitchells vs. The Machines',
      poster_path: '/mI2Di7HmskQQ34kz0iau6J1vr70.jpg',
      video: false,
      vote_average: 8.1,
      overview:
        "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity's unlikeliest last hope.",
      release_date: '2021-04-22',
      vote_count: 504,
      adult: false,
      backdrop_path: '/egxe0rPverBETHzV6COXFGL4edC.jpg',
      id: 501929,
      genre_ids: [16, 12, 35, 10751, 878],
      title: 'The Mitchells vs. The Machines',
      popularity: 240.34,
      media_type: 'movie',
    },
    {
      overview:
        'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      release_date: '2021-03-24',
      title: 'Godzilla vs. Kong',
      adult: false,
      backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      genre_ids: [878, 28, 18],
      id: 399566,
      original_language: 'en',
      original_title: 'Godzilla vs. Kong',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      vote_count: 5403,
      video: false,
      vote_average: 8.1,
      popularity: 3621.502,
      media_type: 'movie',
    },
    {
      overview:
        'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
      release_date: '2021-03-26',
      title: 'Nobody',
      adult: false,
      backdrop_path: '/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
      genre_ids: [28, 53, 80],
      id: 615457,
      original_language: 'en',
      original_title: 'Nobody',
      poster_path: '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
      vote_count: 1346,
      video: false,
      vote_average: 8.4,
      popularity: 2861.481,
      media_type: 'movie',
    },
    {
      original_language: 'ja',
      original_title: '劇場版「鬼滅の刃」無限列車編',
      poster_path: '/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
      video: false,
      vote_average: 8.4,
      overview:
        "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      release_date: '2020-10-16',
      vote_count: 900,
      title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
      adult: false,
      backdrop_path: '/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg',
      id: 635302,
      genre_ids: [16, 28, 12, 14, 18],
      popularity: 1519.593,
      media_type: 'movie',
    },
    {
      overview:
        'A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.',
      release_date: '2021-01-29',
      title: 'Nomadland',
      adult: false,
      backdrop_path: '/gOvUJzah5i3DMf3mGUjqfcP05tp.jpg',
      genre_ids: [18, 37],
      id: 581734,
      original_language: 'en',
      original_title: 'Nomadland',
      poster_path: '/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg',
      vote_count: 963,
      video: false,
      vote_average: 7.3,
      popularity: 136.639,
      media_type: 'movie',
    },
    {
      genre_ids: [27, 9648, 18, 53],
      overview:
        'Catherine Clare reluctantly trades life in 1980 Manhattan for a remote home in the tiny hamlet of Chosen, New York, after her husband George lands a job teaching art history at a small Hudson Valley college. Even as she does her best to transform the old dairy farm into a place where young daughter Franny will be happy, Catherine increasingly finds herself isolated and alone. She soon comes to sense a sinister darkness lurking both in the walls of the ramshackle property—and in her marriage to George.',
      original_title: 'Things Heard & Seen',
      poster_path: '/9tSkNmGt1K5Lgf0L0BTHHYJNz0W.jpg',
      video: false,
      vote_average: 5.9,
      id: 631060,
      vote_count: 288,
      release_date: '2021-04-29',
      title: 'Things Heard & Seen',
      adult: false,
      backdrop_path: '/owOBJlzH3j3YHUbr3XqSH10CWzo.jpg',
      original_language: 'en',
      popularity: 72.887,
      media_type: 'movie',
    },
    {
      backdrop_path: '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
      genre_ids: [28, 12, 14, 878],
      original_language: 'en',
      original_title: "Zack Snyder's Justice League",
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
      video: false,
      vote_average: 8.5,
      id: 791373,
      overview:
        "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      release_date: '2021-03-18',
      vote_count: 5373,
      title: "Zack Snyder's Justice League",
      adult: false,
      popularity: 1894.472,
      media_type: 'movie',
    },
    {
      genre_ids: [18, 14, 878, 53],
      original_language: 'fr',
      original_title: 'Oxygène',
      poster_path: '/9djnXnD9JiuR5WngLDD3pSmiGYu.jpg',
      video: false,
      vote_average: 7.1,
      id: 471498,
      release_date: '2021-05-12',
      vote_count: 33,
      overview:
        'A woman wakes in a cryogenic chamber with no recollection of how she got there, and must find a way out before running out of air.',
      adult: false,
      backdrop_path: '/jedggylU3FyIN7XRAl9WY8mrT6H.jpg',
      title: 'Oxygen',
      popularity: 64.739,
      media_type: 'movie',
    },
    {
      overview:
        'While speeding off to help in an impromptu battle, The Flash blazes and rips through time, only to find himself dropped into the middle of World War II. It’s here that The Flash meets Wonder Woman and her top secret team, known as the Justice Society of America. Amidst the raging tides of war, gripping combat and the velocity of valor, The Flash must fight to return to his own timeline.',
      release_date: '2021-04-27',
      title: 'Justice Society: World War II',
      adult: false,
      backdrop_path: '/8LHSDyRizQ4kQz5rEHPKyXPvMG3.jpg',
      genre_ids: [16, 10752, 878],
      id: 736069,
      original_language: 'en',
      original_title: 'Justice Society: World War II',
      poster_path: '/e4REOC6CZW8J6FslA4nRvdQXFXR.jpg',
      vote_count: 163,
      video: false,
      vote_average: 8.1,
      popularity: 714.787,
      media_type: 'movie',
    },
    {
      video: false,
      vote_average: 6.1,
      overview:
        'A three-person crew on a mission to Mars faces an impossible choice when an unplanned passenger jeopardizes the lives of everyone on board.',
      release_date: '2021-04-22',
      title: 'Stowaway',
      adult: false,
      backdrop_path: '/lLUTG4e3asScennW3qryoXjG48Q.jpg',
      id: 559581,
      genre_ids: [18, 878, 53],
      original_language: 'en',
      original_title: 'Stowaway',
      poster_path: '/yOscLK7KzEPDdi1P8RmevGIjOSp.jpg',
      vote_count: 452,
      popularity: 219.362,
      media_type: 'movie',
    },
    {
      overview:
        'With the future of the human race at stake, a group of young men and women -- bred for intelligence and obedience -- embark on an expedition to colonize a distant planet. When they uncover disturbing secrets about the mission, they defy their training and begin to explore their most primitive natures. As life on the ship descends into chaos, they soon become consumed by fear, lust and an insatiable hunger for power.',
      release_date: '2021-04-08',
      adult: false,
      backdrop_path: '/9dBSwftCzkC4K4zgMZTwcm58VUR.jpg',
      vote_count: 71,
      genre_ids: [878, 10749, 53],
      title: 'Voyagers',
      original_language: 'en',
      original_title: 'Voyagers',
      poster_path: '/gn2vCmWO7jQBBto9SYuBHYZARaU.jpg',
      id: 597890,
      video: false,
      vote_average: 6.5,
      popularity: 55.664,
      media_type: 'movie',
    },
    {
      genre_ids: [16, 12, 14, 10751, 28],
      original_language: 'en',
      original_title: 'Raya and the Last Dragon',
      poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
      video: false,
      vote_average: 8.2,
      id: 527774,
      release_date: '2021-03-03',
      vote_count: 2744,
      overview:
        'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
      adult: false,
      backdrop_path: '/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg',
      title: 'Raya and the Last Dragon',
      popularity: 1094.846,
      media_type: 'movie',
    },
    {
      overview:
        'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.',
      release_date: '2021-01-15',
      title: 'The Marksman',
      adult: false,
      backdrop_path: '/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg',
      genre_ids: [28, 53, 80],
      id: 634528,
      original_language: 'en',
      original_title: 'The Marksman',
      poster_path: '/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
      vote_count: 434,
      video: false,
      vote_average: 7.4,
      popularity: 1238.222,
      media_type: 'movie',
    },
    {
      backdrop_path: '/9ns9463dwOeo1CK1JU2wirL5Yi1.jpg',
      genre_ids: [35, 10751, 16],
      original_language: 'en',
      original_title: 'Tom & Jerry',
      poster_path: '/8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg',
      video: false,
      vote_average: 7.3,
      id: 587807,
      overview:
        'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.',
      release_date: '2021-02-11',
      vote_count: 1332,
      title: 'Tom & Jerry',
      adult: false,
      popularity: 625.836,
      media_type: 'movie',
    },
    {
      backdrop_path: '/EBfcY3sguZcAWVZdGkwIIr1RjB.jpg',
      genre_ids: [18],
      original_language: 'en',
      original_title: 'Monster',
      poster_path: '/jds6n8dUaixg0diKYlCta5nS6BV.jpg',
      video: false,
      vote_average: 7.4,
      id: 489932,
      overview:
        'The story of Steve Harmon, a 17-year-old honor student whose world comes crashing down around him when he is charged with felony murder.',
      release_date: '2018-01-22',
      vote_count: 46,
      title: 'Monster',
      adult: false,
      popularity: 64.039,
      media_type: 'movie',
    },
    {
      genre_ids: [53, 28, 80],
      original_language: 'en',
      original_title: 'The Virtuoso',
      poster_path: '/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
      video: false,
      vote_average: 6.6,
      id: 808023,
      release_date: '2021-04-30',
      vote_count: 33,
      overview:
        "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
      adult: false,
      backdrop_path: '/3Ef8PWUiP1ehO1ESEroxb736srR.jpg',
      title: 'The Virtuoso',
      popularity: 46.075,
      media_type: 'movie',
    },
    {
      original_language: 'en',
      original_title: 'The Courier',
      poster_path: '/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg',
      video: false,
      vote_average: 6.9,
      overview:
        'Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.',
      release_date: '2020-09-27',
      vote_count: 79,
      adult: false,
      backdrop_path: '/3pIqd1hgZ2xqzWEyiYp4blqE9Fi.jpg',
      id: 522241,
      genre_ids: [18, 53],
      title: 'The Courier',
      popularity: 38.938,
      media_type: 'movie',
    },
    {
      video: false,
      vote_average: 8.3,
      vote_count: 625,
      overview:
        'A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.',
      release_date: '2020-12-23',
      adult: false,
      backdrop_path: '/h3weAFgg06GqchI2xDfufBgSFTj.jpg',
      genre_ids: [18],
      title: 'The Father',
      original_language: 'en',
      original_title: 'The Father',
      poster_path: '/uxWXW1YYQENSv7OzHB4Hds0bK3b.jpg',
      id: 600354,
      popularity: 76.004,
      media_type: 'movie',
    },
  ]);

  useEffect(() => {
    // getDiscover(setDiscover);
  }, []);

  useEffect(() => {
    console.log(discover);
  }, [discover]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <SearchBar />
        <MovieList discover={discover} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#222222',
    height: '100%',
  },
  safeAreaContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
});

export default App;
