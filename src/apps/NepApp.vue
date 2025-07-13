<template>
    <video autoplay muted loop id="nep-background">
        <source src="/assets/images/site/background.mp4" type="video/mp4" />
    </video>
    <div id="nep-siteWrapper">
        <div id="nep-eyeWrapper">
            <img id="nep-eye" src="/assets/images/site/eye.webp" />
        </div>
        <div id="nep-contentWrapper">
            <header>
                <img id="nep-logo" src="/assets/images/site/logo.webp" />
                <div class="nep-linkWrapper">
                    <a class="nep-twitter" title="twitter" href="https://x.com/neppie_nep">
                        <img class="nep-twitter-logo" src="/assets/images/site/twitterlogo.webp" />
                    </a>
                    <a class="nep-twitch" title="twitch" href="https://twitch.tv/neppienep">
                        <img class="nep-twitch-logo" src="/assets/images/site/twitchlogo.webp" />
                    </a>
                    <a class="nep-youtube" title="youtube" href="https://youtube.com/@neppienep">
                        <img class="nep-youtube-logo" src="/assets/images/site/youtubelogo.webp" />
                    </a>
                    <a class="nep-discord" title="discord" href="https://discord.gg/SbHQGPppqb">
                        <img class="nep-discord-logo" src="/assets/images/site/discordlogo.webp" />
                    </a>
                </div>
            </header>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>
