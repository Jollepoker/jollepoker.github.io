<template>
    <img id="nep-background" src="/assets/images/site/background.webp" />
    <div id="nep-siteWrapper">
        <div id="nep-eyeWrapper">
            <img id="nep-eye" src="/assets/images/site/eye.webp" />
        </div>
        <div id="nep-contentWrapper">
            <header>
                <img id="nep-logo" src="/assets/images/site/logo.webp" />
                <div class="nep-linkWrapper">
                    <a class="nep-twitter" title="twitter" href="https://x.com/neppie_nep"></a>
                    <a class="nep-twitch" title="twitch" href="https://twitch.tv/neppienep"></a>
                    <a
                        class="nep-youtube"
                        title="youtube"
                        href="https://youtube.com/@neppienep"
                    ></a>
                    <a class="nep-discord" title="discord" href="https://discord.gg/SbHQGPppqb"></a>
                </div>
            </header>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>
