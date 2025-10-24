<template>
    <div id="nep-siteWrapper">
        <div id="nep-eyeWrapper">
            <img id="nep-eye" src="/assets/images/site/eye.webp" />
        </div>
        <div id="nep-contentWrapper">
            <header>
                <RouterLink :to="`/${$route.name === 'NepSchedule' ? 'nepsweeper' : ''}`"
                    ><img id="nep-logo" src="/assets/images/site/logo.webp"
                /></RouterLink>
                <div class="nep-linkWrapper">
                    <a class="nep-twitter" title="twitter" href="https://x.com/neppie_nep"></a>
                    <a class="nep-twitch" title="twitch" href="https://twitch.tv/neppienep"></a>
                    <a
                        class="nep-youtube"
                        title="youtube"
                        href="https://youtube.com/@neppienep"
                    ></a>
                    <a class="nep-discord" title="discord" href="https://discord.gg/SbHQGPppqb"></a>
                    <a class="nep-katabasis-discord" title="katabasis discord" href="https://discord.gg/FHTzjrFJrH"></a>
                    <a class="nep-katabasis" title="katabasis website" href="https://katabasis.moe/"></a>
                </div>
            </header>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>
