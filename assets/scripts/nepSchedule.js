/*
 * There are six different types of layout copmonents:
 * title, titleLogo, titleLogoText, lEmote, rEmote and comment, 
 * These can be used to fill the schedule.
 * Rules:
 * A schedule layout HAS to include ONLY ONE of the "title" types
 * A schedule layout HAS to be accompanied with the scheduled time (Format example: 2024-04-08T16:00:00.000+01:00)
 * The components gets put on the schedule in the order specified
 * A schedule can also have different settings set to true for additional display effects
 * However, only one setting can be used at a time.
 * 
 * These are the settings:
 * discord, glitter, canceled
 * 
 * There are no issues in saving mutliple weeks worth of schedule, no matter if the weeks are in the past or the future.
 * 
 * More than 2 streams a day is currently NOT supported.
 * 
 * Examples components:
 * Title
 * Used to show a dedicated stream title
 * type: 'title',
 * text: 'Stream title',
 * 
 * Title Logo
 * Used to show a dedicated logo for the stream
 * type: 'titleLogo',
 * image: 'name of image in titleimages folder, including filetype',
 * 
 * Title Logo Text
 * Used to save space in case the schedule is too large by placing a text row underneath the image logo
 * type: 'titleLogoText',
 * image: 'name of image in titleimages folder, including filetype',
 * text: 'text to accompany the image'
 * 
 * rEmote
 * Used to show a twitch emote slightly leaning to the right
 * type: 'rEmote',
 * image: 'name of image in twitchEmote folder, including filetype',
 * wide: true, (optional, will make the emote wide if space allows it)
 * big: true, (optional, will render the emote a bit bigger if space allows it)
 * 
 * lEmote
 * Used to show a twitch emote slightly leaning to the left
 * type: 'lEmote',
 * image: '20/name of image in twitchEmote folder, including filetype',
 * wide: true, (optional, will make the emote wide if space allows it)
 * big: true, (optional, will render the emote a bit bigger if space allows it)
 * 
 * Comment
 * Used to display a text comment
 * type: 'comment',
 * text: 'text comment',
 * 
 * Hover
 * Used to enable a hover box for the stream that can show additional information that might not fit on the schedule
 * type: 'hover',
 * text: 'hover box text content. Can be html',
 *
 */

const schedule = [
    {
        time: "2024-04-08T16:00:00.000+01:00",
        layout: [
            { 
                type: 'title',
                text: 'Gurumin: A Monsterous Adventure',
            },
            {
                type: 'rEmote',
                image: '20/nepuLove.webp',
            },
            {
                type: 'comment',
                text: 'POCOOO',
            }
        ]
    },
    {
        time: "2024-04-09T18:00:00.000+01:00",
        layout: [
            { 
                type: 'rEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'comment',
                text: '+ heartrate monitor !',
            },
            {
                type: 'title',
                text: 'Buckshot Roulette',
            }
        ]
    },
    {
        time: "2024-04-10T16:00:00.000+01:00",
        layout: [
            { 
                type: 'title',
                text: 'Halo 2: Anniversary',
            },
            {
                type: 'comment',
                text: 'kill',
            },
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            }
        ]
    },
    {
        time: "2024-04-12T16:00:00.000+01:00",
        layout: [
            { 
                type: 'comment',
                text: 'FINAL!!',
            },
            {
                type: 'lEmote',
                image: '20/nepuPray.webp',
            },
            {
                type: 'title',
                text: 'Final Fantasy VII: Rebirth',
            }
        ]
    },
    {
        time: "2024-04-12T20:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Watchalong: Godzilla Movies!',
            }
        ]
    },
    {
        time: "2024-04-13T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: '(the remake)',
            },
            {
                type: 'lEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'title',
                text: 'The Legend of Zelda: Link\'s Awakening',
            }
        ]
    },
    {
        time: "2024-04-14T18:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Needy Streamer Overload',
            },
            {
                type: 'comment',
                text: 'ill fix her!',
            },
            {
                type: 'rEmote',
                image: '20/nepuSweat.webp',
            }
        ]
    },
    {
        time: "2024-04-23T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'DLC!',
            },
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'ds2.webp',
            },
        ]
    },
    {
        time: "2024-04-24T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'oldschoolrs.webp',
            },
            {
                type: 'comment',
                text: 'play with me? :D',
            },
        ]
    },
    {
        time: "2024-04-25T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
            {
                type: 'comment',
                text: 'finale!',
            },
            {
                type: 'titleLogo',
                image: 'linksawakening.webp',
            },
        ]
    },
    {
        time: "2024-04-26T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogoText',
                image: '20/warhammer40k.webp',
                text: 'handcam',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
        ]
    },
    {
        time: "2024-04-26T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong monty python (the holy grail & life of brian)',
            },
        ]
    },
    {
        time: "2024-04-27T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'civilizationvi.webp',
            },
            {
                type: 'comment',
                text: 'long!!!',
            },
        ]
    },
    {
        time: "2024-04-28T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuCool.webp',
            },
            {
                type: 'comment',
                text: 'women amirite',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
        ]
    },
    {
        time: "2024-04-29T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ds2.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuF.webp',
            },
            {
                type: 'comment',
                text: 'DLC',
            },
        ]
    },
    {
        time: "2024-04-30T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'comment',
                text: '(AKA fatal frame)',
            },
            {
                type: 'titleLogo',
                image: 'projectzero.webp',
            },
        ]
    },
    {
        time: "2024-05-01T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'hollowknight.webp',
            },
            {
                type: 'comment',
                text: 'extra stuff!',
            },
            {
                type: 'lEmote',
                image: '20/nepuPeek.webp',
            },
        ]
    },
    {
        time: "2024-05-02T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'onwards!',
            },
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
        ]
    },
    {
        time: "2024-05-03T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'doom2.webp',
            },
        ]
    },
    {
        time: "2024-05-03T21:00:00.000+01:00",
        discord: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'projectzomboid.webp',
            },
        ]
    },
    {
        time: "2024-05-04T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mhworld.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp'
            },
        ]
    },
    {
        time: "2024-05-04T22:00:00.000+01:00",
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'sus tier list',
            },
        ]
    },
    {
        time: "2024-05-05T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogoText',
                image: '20/duolingo.svg',
                text: 'nihongo!',
            },
            {
                type: 'lEmote',
                image: '20/nepuSweat.webp',
            },
            {
                type: 'rEmote',
                image: '20/duolingobird.webp',
            }
        ]
    },
    {
        time: "2024-05-06T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'hollowknight.webp',
            },
            {
                type: 'comment',
                text: 'path of pain...',
            },
            {
                type: 'rEmote',
                image: '20/nepuNotlikethis.webp',
            }
        ]
    },
    {
        time: "2024-05-07T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'comment',
                text: 'arson is cool!',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            }
        ]
    },
    {
        time: "2024-05-08T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'doom2.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuConfused.webp',
            },
            {
                type: 'comment',
                text: 'try not get lost :D',
            }
        ]
    },
    {
        time: "2024-05-09T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'need maid',
            },
            {
                type: 'titleLogo',
                image: 'nobeta.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuCry.webp',
            }
        ]
    },
    {
        time: "2024-05-10T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogoText',
                image: '20/warhammer40k.webp',
                text: 'handcam!',
            },
        ]
    },
    {
        time: "2024-05-10T21:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuSalute.webp',
            },
            {
                type: 'titleLogo',
                image: 'mhworld.webp',
            },
        ]
    },
    {
        time: "2024-05-11T21:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'title',
                text: 'watchalong: Godzilla (1954) and Shin Godzilla (2016)',
            },
        ]
    },
    {
        time: "2024-05-12T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuStraight.webp',
            },
            {
                type: 'title',
                text: 'straightface hunger games!',
            },
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
        ]
    },
    {
        time: "2024-05-13T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'neppieshoppityhop.webp',
            },
            {
                type: 'comment',
                text: 'mum im on tv!!!',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-05-14T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'cute girl death',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlush.webp',
            },
            {
                type: 'titleLogo',
                image: 'nobeta.webp',
            },
        ]
    },
    {
        time: "2024-05-15T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
            {
                type: 'comment',
                text: 'da darknes...',
            },
        ]
    },
    {
        time: "2024-05-16T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'loli hollow knight?',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
        ]
    },
    {
        time: "2024-05-17T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'new hairstyle reveal + karaoke!',
            },
        ]
    },
    {
        time: "2024-05-17T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: Shin Godzilla',
            },
        ]
    },
    {
        time: "2024-05-18T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'projectzero.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'comment',
                text: 'punishment stream!!! nii nii..',
            },
        ]
    },
    {
        time: "2024-05-19T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuHmm.webp',
            },
            {
                type: 'comment',
                text: 'akiramenai!',
            },
            {
                type: 'titleLogo',
                image: 'shashingo.webp',
            },
        ]
    },
    {
        time: "2024-05-21T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'pokemonmysterydungeonresuceteamdx.webp',
            },
            {
                type: 'comment',
                text: 'first time!!',
            },
            {
                type: 'rEmote',
                image: '20/nepuHmm.webp',
            },
        ]
    },
    {
        time: "2024-05-22T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'fr...!',
            },
            {
                type: 'rEmote',
                image: '20/nepuCool.webp',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
        ]
    },
    {
        time: "2024-05-23T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuBlush.webp',
            },
            {
                type: 'titleLogo',
                image: 'nobeta.webp',
            },
            {
                type: 'comment',
                text: 'boobie lady',
            },
        ]
    },
    {
        time: "2024-05-24T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'enderlilies.webp',
            },
        ]
    },
    {
        time: "2024-05-24T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: moshi monsters the movie (2013) & my little pony the movie (2017)',
            },
        ]
    },
    {
        time: "2024-05-25T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'small announcement + file inspection!!',
            },
        ]
    },
    {
        time: "2024-05-25T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mhworld.webp',
            },
        ]
    },
    {
        time: "2024-05-26T18:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'eledees.webp',
            },
            {
                type: 'comment',
                text: 'bunch of silly guys',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-05-28T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'comment',
                text: 'fire!!!!!!!!!',
            },
        ]
    },
    {
        time: "2024-05-29T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'comment',
                text: 'gameing',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.webp',
            },
        ]
    },
    {
        time: "2024-05-30T18:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'punishment math test',
            },
            {
                type: 'rEmote',
                image: '20/nepuSalute.webp',
            },
        ]
    },
    {
        time: "2024-05-31T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'nobeta.webp',
            },
        ]
    },
    {
        time: "2024-05-31T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: kizumonogatari (all 3 movies)',
            },
        ]
    },
    {
        time: "2024-06-01T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newoutfitreveal.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-06-01T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
        ]
    },
    {
        time: "2024-06-02T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuLove.webp',
            },
            {
                type: 'titleLogo',
                image: 'pokemonmysterydungeonresuceteamdx.webp',
            },
            {
                type: 'comment',
                text: 'bulbasaur love',
            },
        ]
    },
    {
        time: "2024-06-10T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuLove.webp',
            },
            {
                type: 'titleLogo',
                image: 'pokemonmysterydungeonresuceteamdx.webp',
            },
            {
                type: 'comment',
                text: 'bulbasaur love',
            },
        ]
    },
    {
        time: "2024-06-11T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'comment',
                text: 'fire!!!!!!!!!',
            },
        ]
    },
    {
        time: "2024-06-12T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'comment',
                text: 'gameing',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.webp',
            },
        ]
    },
    {
        time: "2024-06-13T18:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'punishment math test',
            },
            {
                type: 'rEmote',
                image: '20/nepuSalute.webp',
            },
        ]
    },
    {
        time: "2024-06-14T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'nobeta.webp',
            },
        ]
    },
    {
        time: "2024-06-14T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: kizumonogatari (all 3 movies)',
            },
        ]
    },
    {
        time: "2024-06-15T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newoutfitreveal.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-06-15T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
        ]
    },
    {
        time: "2024-06-17T18:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuCheer.webp',
            },
            {
                type: 'comment',
                text: 'for real this time!!',
            },
        ]
    },
    {
        time: "2024-06-19T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'grand!',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuPray.webp',
            },
        ]
    },
    {
        time: "2024-06-20T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'comment',
                text: 'we end',
            },
            {
                type: 'titleLogo',
                image: 'enderlilies.webp',
            },
        ]
    },
    {
        time: "2024-06-21T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'christmas karaoke',
            },
            {
                type: 'lEmote',
                image: '20/nepuCheer.webp',
            },
        ]
    },
    {
        time: "2024-06-21T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'godzilla watchalong (minus one + final wars)',
            },
        ]
    },
    {
        time: "2024-06-22T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'titleLogo',
                image: 'dontscream.webp',
            },
        ]
    },
    {
        time: "2024-06-22T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ART!!!',
            },
        ]
    },
    {
        time: "2024-06-23T18:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'yay',
            },
            {
                type: 'titleLogo',
                image: 'littlefriendsdogsandcats.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuLove.webp',
            },
        ]
    },
    {
        time: "2024-06-24T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuCool.webp',
            },
            {
                type: 'comment',
                text: 'yeaaaaaaaa',
            },
        ]
    },
    {
        time: "2024-06-25T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuStare.webp',
            },
            {
                type: 'title',
                text: 'i peel an orange',
            },
        ]
    },
    {
        time: "2024-06-26T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: ':DD',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
        ]
    },
    {
        time: "2024-06-27T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'our server!',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'titleLogo',
                image: 'minecraft.webp',
            },
        ]
    },
    {
        time: "2024-06-28T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
        ]
    },
    {
        time: "2024-06-28T24:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ASMR(?) reading WH40K wiki',
            },
        ]
    },
    {
        time: "2024-06-29T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'enderlilies.webp',
            },
        ]
    },
    {
        time: "2024-06-29T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Watchalong: Alien (1979) & The Lighthouse (2019)',
            },
        ]
    },
    {
        time: "2024-06-30T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-01T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-02T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-03T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-04T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'until i finish',
            }, 
        ]
    },
    {
        time: "2024-07-05T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuCheer.webp',
            }, 
            {
                type: 'title',
                text: '2nd anniversary stream!!!!',
            },
            {
                type: 'lEmote',
                image: '20/nepuYay.webp',
            },
        ]
    },
    {
        time: "2024-07-15T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'im back!!',
            },
            {
                type: 'lEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
        ]
    },
    {
        time: "2024-07-17T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'more...',
            },
            {
                type: 'lEmote',
                image: '20/nepuPeek.webp',
            },
        ]
    },
    {
        time: "2024-07-18T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'more!!!',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
        ]
    },
    {
        time: "2024-07-19T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'grandia2.webp',
            },
            {
                type: 'comment',
                text: 'finale!!',
            },
        ]
    },
    {
        time: "2024-07-20T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'enderlilies.webp',
            },
        ]
    },
    {
        time: "2024-07-20T24:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ASMR(?) reading WH40K wiki',
            },
        ]
    },
    {
        time: "2024-07-22T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
            {
                type: 'comment',
                text: 'going back to new vegas!!',
            },
            {
                type: 'rEmote',
                image: '20/nepuCool.webp',
            },
        ]
    },
    {
        time: "2024-07-23T18:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuLove.webp',
            },
            {
                type: 'comment',
                text: 'WAN WAN',
            },
            {
                type: 'titleLogo',
                image: 'pupperazzi.webp',
            },
        ]
    },
    {
        time: "2024-07-24T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'thebouncer.webp',
            },
            {
                type: 'comment',
                text: 'PS2',
            },
            {
                type: 'lEmote',
                image: '20/nepuPeek.webp',
            },
            {
                type: 'comment',
                text: 'pyon pyon',
            },
        ]
    },
    {
        time: "2024-07-25T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
        ]
    },
    {
        time: "2024-07-26T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mario64.webp',
            },
        ]
    },
    {
        time: "2024-07-26T22:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: nisemonogatari ep 1-5',
            },
        ]
    },
    {
        time: "2024-07-27T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'loong',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
        ]
    },
    {
        time: "2024-07-29T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuCool.webp',
            },
            {
                type: 'comment',
                text: 'howdy!!!',
            },
        ]
    },
    {
        time: "2024-07-30T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'comment',
                text: 'we win!!!',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
        ]
    },
    {
        time: "2024-08-01T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuHmm.webp',
            },
            {
                type: 'title',
                text: '???',
            },
            {
                type: 'comment',
                text: '+ summertime karaoke',
            },
            {
                type: 'lEmote',
                image: '20/nepuCheer.webp',
            },
        ]
    },
    {
        time: "2024-08-02T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mario64.webp',
            },
        ]
    },
    {
        time: "2024-08-02T22:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'watchalong: nisemonogatari ep 6-11',
            },
        ]
    },
    {
        time: "2024-08-03T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'looong',
            },
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-08-04T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'pegglenights.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'comment',
                text: 'neppie edition?!?!',
            },
        ]
    },
    {
        time: "2024-08-05T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.webp',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
            {
                type: 'rEmote',
                image: '20/nepuPog.webp',
                wide: true,
            },
        ]
    },
    {
        time: "2024-08-06T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuPray.webp',
            },
            {
                type: 'title',
                text: 'banana bread',
            },
            {
                type: 'comment',
                text: 'handcam!'
            }
        ]
    },
    {
        time: "2024-08-07T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'mmm stars',
            },
            {
                type: 'lEmote',
                image: '20/nepuD.webp',
            },
            {
                type: 'titleLogo',
                image: 'mario64.webp',
            },
        ]
    },
    {
        time: "2024-08-08T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'finale!',
            },
            {
                type: 'lEmote',
                image: '20/nepuCry.webp',
            },
        ]
    },
    {
        time: "2024-08-09T17:00:00.000+01:00",
        glitter: true,
        layout: [
            {
                type: 'title',
                text: 'new outfit!',
            },
        ]
    },
    {
        time: "2024-08-09T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mariokart8.webp',
            },
        ]
    },
    {
        time: "2024-08-10T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuPeek.webp',
                wide: true,
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.webp',
            },
            {
                type: 'comment',
                text: 'yuna!!!',
            },
        ]
    },
    {
        time: "2024-08-11T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'subnautica.webp',
            },
            {
                type: 'comment',
                text: 'eeee',
            },
            {
                type: 'rEmote',
                image: '20/nepuSweat.webp',
            },
        ]
    },
    {
        time: "2024-08-12T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.webp',
            },
        ]
    },
    {
        time: "2024-08-13T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ffxivdawntrail.webp',
            },
            {
                type: 'comment',
                text: 'final!!',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-08-14T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuBlush.webp',
            },
            {
                type: 'title',
                text: 'drawing swimsuit neppie!!',
            },
        ]
    },
    {
        time: "2024-08-15T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: '70 stars..?',
            },
            {
                type: 'lEmote',
                image: '20/nepuSalute.webp',
            },
            {
                type: 'titleLogo',
                image: 'mario64.webp',
            },
        ]
    },
    {
        time: "2024-08-16T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'puyopuyotetris2.webp',
            },
        ]
    },
    {
        time: "2024-08-16T21:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'Watchalong: 4 Movies!',
            },
        ]
    },
    {
        time: "2024-08-17T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'YRP!!!',
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuCheer.webp',
            },
        ]
    },
    {
        time: "2024-08-18T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'animalcrossingnewhorizons.webp',
            },
            {
                type: 'comment',
                text: 'fish!',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
        ]
    },
    {
        time: "2024-08-18T24:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'ASMR YT upload',
            },
        ]
    },
    {
        time: "2024-08-19T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuConfused.webp',
            },
            {
                type: 'comment',
                text: 'Oracle of Seasons!',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.webp',
            },
        ]
    },
    {
        time: "2024-08-20T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'painting handcam!',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'comment',
                text: 'with nep ross!!',
            },
        ]
    },
    {
        time: "2024-08-21T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'touhou10.webp',
            },
            {
                type: 'comment',
                text: 'touhou 10!',
            },
            {
                type: 'lEmote',
                image: '20/nepuRage.webp',
            },
        ]
    },
    {
        time: "2024-08-22T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'yippeee',
            },
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'comment',
                text: 'sunshine!',
            },
        ]
    },
    {
        time: "2024-08-23T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'segasuperstarstennis.webp',
            },
            {
                type: 'comment',
                text: 'wii!',
            },
        ]
    },
    {
        time: "2024-08-23T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mhworld.webp',
            },
        ]
    },
    {
        time: "2024-08-24T17:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: '??? + chatting!',
            },
        ]
    },
    {
        time: "2024-08-24T21:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'planetarian.webp',
            },
        ]
    },
    {
        time: "2024-08-25T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuSalute.webp',
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.webp',
            },
            {
                type: 'comment',
                text: 'sphere hunter neppie!!!',
            },
        ]
    },
    {
        time: "2024-08-26T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuConfused.webp',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
        ]
    },
    {
        time: "2024-08-27T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'finishing!',
            },
            {
                type: 'titleLogo',
                image: 'planetarian.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuCry.webp',
            },
        ]
    },
    {
        time: "2024-08-28T17:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuPog.webp',
            },
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'comment',
                text: 'yahoooooo',
            },
        ]
    },
    {
        time: "2024-08-29T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'pew pew',
            },
            {
                type: 'titleLogo',
                image: 'ffx-2.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuCool.webp',
            },
        ]
    },
    {
        time: "2024-08-30T17:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'touhou10.webp',
            },
        ]
    },
    {
        time: "2024-08-30T21:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'title',
                text: 'karaoke!',
            },
        ]
    },
    {
        time: "2024-08-31T17:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'title',
                text: 'looking at ur outside pictures! + announcement!',
            },
        ]
    },
    {
        time: "2024-08-31T21:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'lethalcompany.webp',
            },
        ]
    },
    {
        time: "2024-09-30T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuHug.webp',
            },
            {
                type: 'comment',
                text: 'making friends!!',
            },
        ]
    },
    {
        time: "2024-10-02T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.webp',
            },
            {
                type: 'comment',
                text: 'oracle of seasons!',
            },
            {
                type: 'lEmote',
                image: '20/nepuHmm.webp',
            },
        ]
    },
    {
        time: "2024-10-03T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'comment',
                text: 'ehe',
            },
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
            {
                type: 'comment',
                text: 'probably crimes',
            },
        ]
    },
    {
        time: "2024-10-04T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuPog.webp',
            },
            {
                type: 'title',
                text: 'Your Summer Pictures!',
            },
        ]
    },
    {
        time: "2024-10-04T21:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'newvegas.webp',
            },
        ]
    },
    {
        time: "2024-10-05T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'legologo.svg',
            },
            {
                type: 'comment',
                text: 'Handcam',
            },
        ]
    },
    {
        time: "2024-10-05T21:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'civilizationvi.webp',
            },
            {
                type: 'comment',
                text: 'together!',
            },
        ]
    },
    {
        time: "2024-10-07T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuCool.webp',
            },
            {
                type: 'titleLogo',
                image: 'babaisyou.webp',
            },
            {
                type: 'comment',
                text: 'locking in',
            },
        ]
    },
    {
        time: "2024-10-08T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'comment',
                text: 'cute spooky game?',
            },
            {
                type: 'titleLogo',
                image: 'littlegoodytwoshoes.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuSweat.webp',
            },
        ]
    },
    {
        time: "2024-10-09T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'littlegoodytwoshoes.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuPog.webp',
            },
            {
                type: 'comment',
                text: 'kissing women?',
            },
        ]
    },
    {
        time: "2024-10-10T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
            {
                type: 'comment',
                text: 'escaping!!',
            },
            {
                type: 'titleLogo',
                image: 'awarenessrooms.webp',
            },
        ]
    },
    {
        time: "2024-10-11T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'title',
                text: 'your summer pictures! (real)',
            },
        ]
    },
    {
        time: "2024-10-11T22:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofseasons.webp',
            },
        ]
    },
    {
        time: "2024-10-12T16:00:00.000+01:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'civilizationvi.webp',
            },
            {
                type: 'comment',
                text: 'together!',
            },
            {
                type: 'lEmote',
                image: '20/nepuHug.webp',
            },
        ]
    },
    {
        time: "2024-10-14T18:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'smarterthan5thgrader.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuHmm.webp',
            },
            {
                type: 'comment',
                text: 'yes! i am!',
            },
        ]
    },
    {
        time: "2024-10-15T17:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuRage.webp',
            },
            {
                type: 'comment',
                text: 'war!!!!!',
            },
            {
                type: 'titleLogo',
                image: 'dawnofwar.webp',
            },
        ]
    },
    {
        time: "2024-10-16T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'comment',
                text: 'sunshine in october',
            },
            {
                type: 'rEmote',
                image: '20/nepuPray.webp',
            },
        ]
    },
    {
        time: "2024-10-17T18:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
            {
                type: 'titleLogo',
                image: 'awarenessrooms.webp',
            },
        ]
    },
    {
        time: "2024-10-18T16:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                text: 'summer pics... real...',
            },
        ]
    },
    {
        time: "2024-10-18T18:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'littlegoodytwoshoes.webp',
            },
        ]
    },
    {
        time: "2024-10-19T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'civilizationvi.webp',
            },
            {
                type: 'comment',
                text: 'together!',
            },
        ]
    },
    {
        time: "2024-10-21T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'signalis.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuSweat.webp',
            },
        ]
    },
    {
        time: "2024-10-22T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: '(1998)',
            },
            {
                type: 'lEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'titleLogo',
                image: 're2-1998.webp',
            },
        ]
    },
    {
        time: "2024-10-23T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
            {
                type: 'comment',
                text: 'finally!!',
            },
        ]
    },
    {
        time: "2024-10-24T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'rozenmarine my beloved',
            },
            {
                type: 'titleLogo',
                image: 'littlegoodytwoshoes.webp',
            },
        ]
    },
    {
        time: "2024-10-25T16:00:00.000+01:00",
        layout: [
            {
                type: 'title',
                effect: 'halloween',
                text: 'scary movie night!*',
            },
            {
                type: 'lEmote',
                image: '20/nepuBlanky.webp',
            },
        ]
    },
    {
        time: "2024-10-26T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'comment',
                text: 'mmmblood',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
        ]
    },
    {
        time: "2024-11-04T17:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'titleLogo',
                image: 'signalis.webp',
            },
        ]
    },
    {
        time: "2024-11-05T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: '(1998)',
            },
            {
                type: 'titleLogo',
                image: 're2-1998.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuNAILS.webp',
            },
        ]
    },
    {
        time: "2024-11-06T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'comment',
                text: 'exploring a mansion!',
            },
        ]
    },
    {
        time: "2024-11-08T16:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'littlegoodytwoshoes.webp',
            },
        ]
    },
    {
        time: "2024-11-08T22:00:00.000+00:00",
        discord: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'amongus.webp',
            },
        ]
    },
    {
        time: "2024-11-09T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
            {
                type: 'titleLogo',
                alignSelf: 'end',
                image: '20/finalfantasy-pr.webp',
            },
            {
                type: 'comment',
                text: 'pixel remaster!',
            },
        ]
    },
    {
        time: "2024-11-10T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'pooping myself',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuF.webp',
            },
        ]
    },
    {
        time: "2024-11-11T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'signalis.webp',
            },
            {
                type: 'title',
                text: '+',
            },
            {
                type: 'titleLogo',
                image: 'littlegoodytwoshoes.webp',
            },
        ]
    },
    {
        time: "2024-11-12T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ff14crossroads.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-11-13T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'nov 13th..',
            },
            {
                type: 'rEmote',
                image: '20/nepuPray.webp',
            },
            {
                type: 'titleLogo',
                image: 'blasphemous.webp',
            },
        ]
    },
    {
        time: "2024-11-14T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
            {
                type: 'comment',
                text: 'uu uuu',
            },
            {
                type: 'title',
                text: 'u',
            },
        ]
    },
    {
        time: "2024-11-15T15:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'chiikawa watchalong',
            },
            {
                type: 'comment',
                text: 'on mikan\'s channel',
            },
        ]
    },
    {
        time: "2024-11-15T22:00:00.000+00:00",
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                alignSelf: 'end',
                image: '20/finalfantasy-pr.webp',
            },
        ]
    },
    {
        time: "2024-11-16T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'touhou10.webp',
            },
        ]
    },
    {
        time: "2024-11-16T21:00:00.000+00:00",
        discord: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'crabgame.webp',
            },
        ]
    },
    {
        time: "2024-11-18T18:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuHmm.webp',
            },
            {
                type: 'comment',
                text: 'oracle of ages!',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
        ]
    },
    {
        time: "2024-11-19T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'comment',
                text: 'its been 84 years...',
            },
            {
                type: 'lEmote',
                image: '20/nepuPog.webp',
            },
        ]
    },
    {
        time: "2024-11-20T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'hola :D',
            },
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'blasphemous.webp',
            },
        ]
    },
    {
        time: "2024-11-21T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'titleLogo',
                alignSelf: 'end',
                image: '20/finalfantasy-pr.webp',
            },
            {
                type: 'comment',
                text: '1 down 3 to go!!',
            },
        ]
    },
    {
        time: "2024-11-22T15:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'yap and draw! w/ <span class="mikanColour">mikan</span>, <span class="maikaColour">maika</span>, <span class="kikiColour">kiki</span> and <span class="chaiColour">chai</span>',
            },
        ]
    },
    {
        time: "2024-11-22T20:00:00.000+00:00",
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'FFXIV Mount Farming',
            },
        ]
    },
    {
        time: "2024-11-23T16:00:00.000+00:00",
        layout: [
            {
                type: 'title',
                text: 'surprise? (maybe)',
            },
            {
                type: 'title',
                text: '+',
            },
            {
                type: 'comment',
                text: 'godzilla watchalong!*',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
        ]
    },
    {
        time: "2024-11-25T15:00:00.000+00:00",
        layout: [
            {
                type: 'title',
                text: 'drawing together!',
            },
            {
                type: 'comment',
                text: 'w/ <span class="mikanColour">mikan</span>, <span class="maikaColour">maika</span>, <span class="kikiColour">kiki</span> and <span class="chaiColour">chai</span>',
            },
        ]
    },
    {
        time: "2024-11-26T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'comment',
                text: 'sunshine in november!',
            },
            {
                type: 'rEmote',
                image: '20/nepuCool.webp',
            },
        ]
    },
    {
        time: "2024-11-27T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'oracles of ages!',
            },
            {
                type: 'lEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
        ]
    },
    {
        time: "2024-11-29T17:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuConfused.webp',
            },
            {
                type: 'titleLogo',
                alignSelf: 'end',
                image: '20/finalfantasy-pr.webp',
            },
            {
                type: 'comment',
                text: '2 moreee!!!',
            },
        ]
    },
    {
        time: "2024-12-01T17:00:00.000+00:00",
        layout: [
            {
                type: 'title',
                text: 'Surprise + Christmas Karaoke!',
            },
            {
                type: 'comment',
                text: '<span class="twitchColour">twitch only!</span>',
            },
            {
                type: 'rEmote',
                big: true,
                image: '20/nepuCheer.webp',
            },
        ]
    },
    {
        time: "2024-12-02T17:30:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                big: true,
                image: '20/nepuPadoru.webp',
            },
            {
                type: 'title',
                text: 'Surprise + Christmas Karaoke!',
            },
        ]
    },
    {
        time: "2024-12-03T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
            {
                type: 'comment',
                text: 'oracle of ages!',
            },
            {
                type: 'lEmote',
                image: '20/nepuHmm.webp',
            },
            
        ]
    },
    {
        time: "2024-12-04T17:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuConfused.webp',
            },
            {
                type: 'comment',
                text: '<--- lost',
            },
            {
                type: 'titleLogo',
                alignSelf: 'end',
                image: '20/finalfantasy-pr.webp',
            },
        ]
    },
    {
        time: "2024-12-05T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'harvester.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'comment',
                text: 'farming?',
            },
        ]
    },
    {
        time: "2024-12-06T14:30:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'portal2.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span>',
            },
        ]
    },
    {
        time: "2024-12-06T18:00:00.000+00:00",
        layout: [
            {
                type: 'title',
                text: 'making a christmas song!',
            },
        ]
    },
    {
        time: "2024-12-07T16:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'comment',
                text: 'Ys Origin (first time!)',
            },
            {
                type: 'titleLogo',
                image: 'ysorigin.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
        ]
    },
    {
        time: "2024-12-09T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ysorigin.webp',
            },
            {
                type: 'comment',
                text: 'Ys origin first time!',
            },
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
        ]
    },
    {
        time: "2024-12-10T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'comment',
                text: 'meat!',
            },
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'harvester.webp',
            },
        ]
    },
    {
        time: "2024-12-11T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuConfused.webp',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
            {
                type: 'comment',
                text: 'oracle of ages!',
            },
        ]
    },
    {
        time: "2024-12-12T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'i wont fall asleep',
            },
            {
                type: 'lEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'titleLogo',
                alignSelf: 'end',
                image: '20/finalfantasy-pr.webp',
            },
            {
                type: 'comment',
                text: 'then THE GAME AWARDS!',
            },
        ]
    },
    {
        time: "2024-12-13T11:30:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'portal2.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span>',
            },
        ]
    },
    {
        time: "2024-12-13T20:00:00.000+00:00",
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'FFXIV mount farm',
            },
        ]
    },
    {
        time: "2024-12-14T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'comment',
                text: 'full body exploration!',
            },
            {
                type: 'titleLogo',
                image: 'vrchat.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
        ]
    },
    {
        time: "2024-12-19T22:30:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
            {
                type: 'title',
                text: '<span class="kikiColour">/pyon/</span>craft',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span>, <span class="maikaColour">maika</span>, <span class="irinaColour">irina</span> and <span class="chaiColour">chai</span>',
            },
        ]
    },
    {
        time: "2024-12-20T12:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuHmm.webp',
            },
            {
                type: 'titleLogo',
                image: 'portal2.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span>',
            },
            {
                type: 'rEmote',
                reverse: true,
                image: '20/nepuHmm.webp',
            },
        ]
    },
    {
        time: "2024-12-21T20:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'full body exploration!',
            },
            {
                type: 'titleLogo',
                image: 'vrchat.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
        ]
    },
    {
        time: "2024-12-22T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ysorigin.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'comment',
                text: 'Ys origin!',
            },
        ]
    },
    {
        time: "2024-12-30T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
            {
                type: 'comment',
                text: 'oracle of ages!',
            },
            {
                type: 'lEmote',
                image: '20/nepuHmm.webp',
            },
        ]
    },
    {
        time: "2024-12-31T15:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'title',
                text: '12 hr new years hangout!',
            },
        ]
    },
    {
        time: "2025-01-01T16:00:00.000+00:00",
        layout: [
            {
                type: 'title',
                text: 'gingerbread straightface handcam',
            },
            {
                type: 'comment',
                text: '+ raising a baby!',
            },
        ]
    },
    {
        time: "2025-01-01T19:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
        ]
    },
    {
        time: "2025-01-02T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'horror game?',
            },
            {
                type: 'titleLogo',
                image: 'miside.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuScared.webp',
            },
        ]
    },
    {
        time: "2025-01-04T16:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ysorigin.webp',
            },
            {
                type: 'comment',
                text: 'ys origin!',
            },
        ]
    },
    {
        time: "2025-01-04T21:00:00.000+00:00",
        layout: [
            {
                type: 'title',
                text: 'Godzilla watchalong!',
            },
        ]
    },
    {
        time: "2025-01-05T17:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'harvester.webp',
            },
            {
                type: 'comment',
                text: 'harvesting commies!',
            },
        ]
    },
    {
        time: "2025-01-07T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuConfused.webp',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
            {
                type: 'comment',
                text: 'oracle of ages!',
            },
        ]
    },
    {
        time: "2025-01-09T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'comment',
                text: 'oracle of ages!',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
        ]
    },
    {
        time: "2025-01-10T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuSweat.webp',
            },
        ]
    },
    {
        time: "2025-01-10T17:00:00.000+00:00",
        discord: true,
        hideDate: true,
        layout: [
            {
                type: 'titleLogo',
                filter: 'drop-shadow(0px 4px 4px #333)',
                image: '20/l4d2.webp',
            },
        ]
    },
    {
        time: "2025-01-11T17:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'titleLogo',
                image: 'ysorigin.webp',
            },
            {
                type: 'comment',
                text: 'Ys Origin! (im scared)',
            },
        ]
    },
    {
        time: "2025-01-12T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'Warhammer 40k: Dawn of War',
            },
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'dawnofwar.webp',
            },
        ]
    },
    {
        time: "2025-01-13T18:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'Oracle of Ages!',
            },
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuConfused.webp',
            },
        ]
    },
    {
        time: "2025-01-14T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuScared.webp',
            },
            {
                type: 'titleLogo',
                image: 'ysorigin.webp',
            },
            {
                type: 'comment',
                text: 'Ys Origin (final?)',
            },
        ]
    },
    {
        time: "2025-01-15T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'comment',
                text: 'Super Mario Sunshine!',
            },
        ]
    },
    {
        time: "2025-01-16T17:00:00.000+00:00",
        layout: [
            {
                type: 'comment',
                text: 'Warhammer 40K: Dawn of War',
            },
            {
                type: 'comment',
                text: '(if my pc lets me)',
            },
            {
                type: 'rEmote',
                image: '20/nepuSalute.webp',
            },
            {
                type: 'titleLogo',
                image: 'dawnofwar.webp',
            },
        ]
    },
    {
        time: "2025-01-17T16:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'zeldaoracleofages.webp',
            },
            {
                type: 'lEmote',
                image: '20/nepuPeek.webp',
            },
        ]
    },
    {
        time: "2025-01-17T22:00:00.000+00:00",
        layout: [
            {
                type: 'title',
                text: 'godzilla watchalong*',
            },
        ]
    },
    {
        time: "2025-01-19T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'postal2.webp',
            },
            {
                type: 'comment',
                text: 'a taste of America!',
            },
        ]
    },
    {
        time: "2025-01-27T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuYay.webp',
                wide: true,
            },
            {
                type: 'title',
                text: 'i\'m back! karaoke!',
            },
        ]
    },
    {
        time: "2025-01-28T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuRage.webp',
            },
            {
                type: 'titleLogo',
                image: 'mariosunshine.webp',
            },
            {
                type: 'comment',
                text: 'actual final???',
            },
        ]
    },
    {
        time: "2025-01-29T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'comment',
                text: 'yippee!!',
            },
            {
                type: 'titleLogo',
                image: 'postal2.webp',
            },
            {
                type: 'rEmote',
                image: '20/nepuPeek.webp',
            },
        ]
    },
    {
        time: "2025-01-30T17:00:00.000+00:00",
        layout: [
            {
                type: 'lEmote',
                image: '20/nepuMurder.webp',
            },
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
            {
                type: 'comment',
                text: 'is real?',
            },
        ]
    },
    {
        time: "2025-01-31T17:00:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'bloodborne.webp',
            },
        ]
    },
    {
        time: "2025-02-01T01:45:00.000+00:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ff14.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span> & <span class="chaiColour">chai</span>',
            },
        ]
    },
    {
        time: "2025-02-01T17:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'title',
                text: 'undecided!',
            },
        ]
    },
    {
        time: "2025-02-01T21:00:00.000+00:00",
        canceled: true,
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuBlanky.webp',
            },
            {
                type: 'title',
                text: 'Godzilla watchalong*',
            },
            {
                type: 'hover',
                text: 'Godzilla Against Mechagodzilla (2002) & Godzilla: Tokyo S. O. S. (2003)',
            },
        ]
    },
    {
        time: "2025-02-11T16:00:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuYay.webp',
            },
            {
                type: 'title',
                text: 'Birthday Party!!',
            },
            {
                type: 'lEmote',
                image: '20/nepuYay.webp',
            },
        ]
    },
    {
        time: "2025-02-13T12:30:00.000+00:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuPog.webp',
            },
            {
                type: 'titleLogo',
                image: 'ff14.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span> & <span class="chaiColour">chai</span>',
            },
        ]
    },
    {
        time: "2025-05-02T18:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '20/nepuCheer.webp',
            },
            {
                type: 'title',
                text: '3.0 DEBUT!!',
            },
            {
                type: 'lEmote',
                image: '20/nepu30New.webp',
            },
        ]
    },
    {
        time: "2025-05-03T12:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'stardewvalley.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuOsaka.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span>',
            },
        ]
    },
    {
        time: "2025-05-03T19:00:00.000+01:00",
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'Discord Movie Night (Godzilla)*',
            },
            {
                type: 'hover',
                text: 'Godzilla Against Mechagodzilla (2002) & Godzilla: Tokyo S. O. S. (2003)',
            },
        ]
    },
    {
        time: "2025-05-04T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '30/nepuGun.webp',
            },
            {
                type: 'titleLogo',
                image: 'undertale.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuHeart.webp',
            },
        ]
    },
    {
        time: "2025-05-06T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '30/nepuHeart.webp',
            },
            {
                type: 'titleLogo',
                image: 'undertale.webp',
            },
            {
                type: 'comment',
                text: 'finish?',
            }
        ]
    },
    {
        time: "2025-05-07T12:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'stardewvalley.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuLyna.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span>',
            },
        ]
    },
    {
        time: "2025-05-08T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '30/nepuGun.webp',
            },
            {
                type: 'titleLogo',
                image: 'metroidprimeremastered.webp',
            },
        ]
    },
    {
        time: "2025-05-09T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'elderscrollsoblivion.webp',
            },
            {
                type: 'comment',
                text: '(the original!)',
            },
            {
                type: 'lEmote',
                image: '30/nepuKuru.webp',
            },
        ]
    },
    {
        time: "2025-05-10T16:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '30/nepuCheer.webp',
            },
            {
                type: 'title',
                text: 'KARAOKE !!!!',
            },
        ]
    },
    {
        time: "2025-05-10T19:00:00.000+01:00",
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'Discord Movie Night (Godzilla)*',
            },
            {
                type: 'hover',
                text: 'Godzilla Raids Again (1955) & King Kong vs. Godzilla (1962)',
            },
        ]
    },
    {
        time: "2025-05-11T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'utawarerumonopreludetothefallen.webp',
            },
        ]
    },
    {
        time: "2025-05-12T12:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'stardewvalley.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="kikiColour">kiki</span>',
            },
        ]
    },
    {
        time: "2025-05-12T18:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'undertale.webp',
            },
        ]
    },
    {
        time: "2025-05-13T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '30/nepuKuru.webp',
            },
            {
                type: 'comment',
                text: 'PC98',
            },
            {
                type: 'titleLogo',
                image: 'madoumonogatari123.webp',
            },
        ]
    },
    {
        time: "2025-05-14T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                reverse: true,
                image: '30/nepuGun.webp',
            },
            {
                type: 'titleLogo',
                image: 'metroidprimeremastered.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuGun.webp',
            },
        ]
    },
    {
        time: "2025-05-15T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'psychopompgold.webp',
            },
            {
                type: 'rEmote',
                image: '30/nepuSweat.webp',
            },
        ]
    },
    {
        time: "2025-05-16T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'The adventures of Storpy Stevens',
            },
            {
                type: 'titleLogo',
                image: 'elderscrollsoblivion.webp',
            },
        ]
    },
    {
        time: "2025-05-17T16:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'utawarerumonopreludetothefallen.webp',
            },
        ]
    },
    {
        time: "2025-05-17T20:00:00.000+01:00",
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'Discord Movie Night (Godzilla)*',
            },
            {
                type: 'hover',
                text: 'Mothra (1961) & Mothra vs. Godzilla (1964)',
            },
        ]
    },
    {
        time: "2025-05-19T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'undertale.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuLove.webp',
            },
        ]
    },
    {
        time: "2025-05-20T16:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'i love my wife and daughter',
            },
            {
                type: 'titleLogo',
                image: 'utawarerumonopreludetothefallen.webp',
            },
        ]
    },
    {
        time: "2025-05-21T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'metroidprimeremastered.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuGun.webp',
            },
            {
                type: 'rEmote',
                image: '30/nepuGun.webp',
            },
        ]
    },
    {
        time: "2025-05-23T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '30/nepuCheer.webp',
            },
            {
                type: 'title',
                text: 'karaoke!',
            },
        ]
    },
    {
        time: "2025-05-23T22:00:00.000+01:00",
        discord: true,
        hideDate: true,
        layout: [
            {
                type: 'title',
                text: 'and then discord movie night!*',
            },
            {
                type: 'hover',
                text: 'Mothra vs. Godzilla (1964)',
            },
        ]
    },
    {
        time: "2025-05-24T16:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                image: '30/nepuCool.webp',
            },
            {
                type: 'comment',
                text: 'lizardman',
            },
            {
                type: 'titleLogo',
                image: 'elderscrollsoblivion.webp',
            },
        ]
    },
    {
        time: "2025-05-26T18:00:00.000+01:00",
        layout: [
            {
                type: 'rEmote',
                reverse: true,
                image: '30/nepuGun.webp',
            },
            {
                type: 'titleLogo',
                image: 'metroidprimeremastered.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuGun.webp',
            },
        ]
    },
    {
        time: "2025-05-27T18:00:00.000+01:00",
        layout: [
            
            {
                type: 'comment',
                text: 'opening hololive cards!',
            },
            {
                type: 'title',
                text: 'Handcam stream',
            },
            {
                type: 'rEmote',
                image: '30/nepuThumbsup.webp',
            },
        ]
    },
    {
        time: "2025-05-28T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '30/nepuHug.webp',
            },
            {
                type: 'title',
                text: 'Game together!',
            },
            {
                type: 'comment',
                text: 'Pangya reborn/Roblox/Skribbl.io',
            },
            
        ]
    },
    {
        time: "2025-06-16T17:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'a new adventure!!',
            },
            {
                type: 'titleLogo',
                image: 'finalfantasy2-pr.webp',
            },
            {
                type: 'rEmote',
                image: '30/nepuSalute.webp',
            },
        ]
    },
    {
        time: "2025-06-17T17:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'utawarerumonopreludetothefallen.webp',
            },
        ]
    },
    {
        time: "2025-06-18T16:00:00.000+01:00",
        layout: [
            {
                type: 'titleLogo',
                image: 'ds.webp',
            },
            {
                type: 'comment',
                text: 'w/ <span class="chaiColour">chai</span> & <span class="kikiColour">kiki</span>',
            },
        ]
    },
    {
        time: "2025-06-19T19:00:00.000+01:00",
        layout: [
            {
                type: 'comment',
                text: 'w/ <span class="chaiColour">chai</span> & <span class="kikiColour">kiki</span>',
            },
            {
                type: 'titleLogo',
                image: 'ds.webp',
            },
        ]
    },
    {
        time: "2025-06-20T17:00:00.000+01:00",
        canceled: true,
        layout: [
            {
                type: 'titleLogo',
                image: 'elderscrollsoblivion.webp',
            },
            {
                type: 'lEmote',
                image: '30/nepuHug.webp',
            },
            {
                type: 'comment',
                text: 'i have a new family now!',
            },
        ]
    },
    {
        time: "2025-06-21T18:00:00.000+01:00",
        layout: [
            {
                type: 'lEmote',
                image: '30/nepuCheer.webp',
            },
            {
                type: 'title',
                text: 'KARAOKE !!!',
            },
        ]
    },
    {
        time: "2025-06-21T22:00:00.000+01:00",
        hideDate: true,
        discord: true,
        layout: [
            {
                type: 'title',
                text: 'after: watchalong*',
            },
            {
                type: 'hover',
                text: 'Rodan (1956) & The Mysterians (1957)',
            }
        ]
    },
].sort((streamA, streamB) => {
    if (streamA[0] === streamB[0]) {
        return 0;
    } else {
        return (streamA[0] < streamB[0]) ? -1 : 1;
    }
});
