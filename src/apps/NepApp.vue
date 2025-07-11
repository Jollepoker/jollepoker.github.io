<template>
    <video autoplay muted loop id="nep-background">
        <source src="/assets/images/site/background.mp4" type="video/mp4" />
    </video>
    <div id="nep-siteWrapper">
        <div id="nep-eyeWrapper">
            <img id="nep-eye" src="/assets/images/site/eye.webp" />
        </div>
        <div id="nep-contentWrapper">
            <header></header>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>
