There are six different types of layout copmonents:
title, titleLogo, lEmote, rEmote and comment, 
These can be used to fill the schedule.
Rules:
A schedule layout HAS to be accompanied with the scheduled time (Format example: 2024-04-08T16:00:00.000+01:00)
The order of the specified components is not important for the current layout
A schedule can also have different settings set to true for additional display effects
However, only one setting can be used at a time.

These are the settings:
discord, glitter, canceled, hideDate

There are no issues in saving mutliple weeks worth of schedule, no matter if the weeks are in the past or the future.

More than 9 streams a week is currently NOT supported.

Examples components:
Title
Used to show a dedicated stream title
type: 'title',
text: 'Stream title',

Title Logo
Used to show a dedicated logo for the stream
type: 'titleLogo',
image: 'name of image in titleimages folder, including filetype',

rEmote
Used to show a twitch emote slightly leaning to the right
type: 'rEmote',
image: 'name of image in twitchEmote folder, including filetype',
wide: true, (optional, will make the emote wide if space allows it)
big: true, (optional, will render the emote a bit bigger if space allows it)

lEmote
Used to show a twitch emote slightly leaning to the left
type: 'lEmote',
image: '20/name of image in twitchEmote folder, including filetype',
wide: true, (optional, will make the emote wide if space allows it)
big: true, (optional, will render the emote a bit bigger if space allows it)

Comment
Used to display a text comment
type: 'comment',
text: 'text comment',

Hover
Used to enable a hover box for the stream that can show additional information that might not fit on the schedule
type: 'hover',
text: 'hover box text content. Can be html',
 