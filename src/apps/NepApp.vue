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
                <div class="nep-themeSwitcherWrapper">
                    <div class="nep-themeSwitcher">
                        <div class="nep-themeSwitcherButtonWrapper">
                            <button
                                class="nep-themeSwitcherMain"
                                :class="{
                                    active: currentTheme === Theme.Main
                                }"
                                @click="switchTheme(Theme.Main)"
                            ></button>
                        </div>
                        <div class="nep-themeSwitcherButtonWrapper">
                            <button
                                class="nep-themeSwitcherSummer"
                                :class="{
                                    active: currentTheme === Theme.Summer
                                }"
                                @click="switchTheme(Theme.Summer)"
                            ></button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Theme, useTheme } from '@/composables/nepThemeSwitcher.ts';

export default defineComponent({
    name: 'NepApp',
    data() {
        return {
            activeThemeChange: false,
        }
    },
    setup() {
        const { Theme, currentTheme, loadTheme } = useTheme();

        return {
            Theme,
            currentTheme,
            loadTheme
        }
    },
    methods: {
        async waitForAllImagesToLoad(): Promise<unknown[]> {
            const urls = new Set<string>();
            const allElements = document.querySelectorAll('*');
            const imageProperties = [
                'backgroundImage',
                'borderImageSource',
                'maskImage',
                'WebkitMaskImage',
                'clipPath',
                'listStyleImage'
            ];

            allElements.forEach((el: Element) => {
                const style = window.getComputedStyle(el);

                imageProperties.forEach((prop: string) => {
                    const kebabProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
                    let value = style.getPropertyValue(kebabProp);
                    if (!value) {
                        value = (style as any)[prop]
                    }

                    if (value) {
                        const matches = value.match(/url\(['"]?([^'"()]+)['"]?\)/g);
                        if (matches) {
                            matches.forEach(match => {
                                const url = match.replace(/url\(['"]?|['"]?\)/g, '');
                                if (url && !url.startsWith('data:')) {
                                    urls.add(url);
                                }
                            });
                        }
                    }
                });
            });

            return Promise.all(
                Array.from(urls).map((url: string) => {
                    return new Promise(resolve => {
                        const img = new Image();
                        img.onload = resolve;
                        img.onerror = resolve;
                        img.src = url;
                    });
                })
            )
        },
        async waitForStyleSheetToLoad(theme: Theme): Promise<void> {
            return new Promise<void>((resolve: () => void) => {
                const styleSheet = document.querySelector(`link[data-theme="${theme}"]`) as HTMLLinkElement | undefined;
                if (styleSheet) {
                    if (styleSheet.sheet) {
                        resolve();
                    } else {
                        styleSheet.onload = () => resolve();
                        styleSheet.onerror = () => resolve();
                        setTimeout(resolve, 3000);
                    }
                } else {
                    resolve();
                }
            });
        },
        async waitForAllAssetsToLoad(theme: Theme): Promise<void> {
            const timeout = new Promise<void>((resolve: () => void) =>
                setTimeout(resolve, 3000)
            );

            await Promise.race([
                Promise.all([
                    this.waitForAllImagesToLoad(),
                    this.waitForStyleSheetToLoad(theme)
                ]),
                timeout
            ]);
        },
        switchTheme(theme: Theme): void {
            if (theme !== this.currentTheme && !this.activeThemeChange) {
                this.activeThemeChange = true;
                document.body.classList.add('themeSwitch');

                setTimeout(async () => {
                    this.loadTheme(theme);

                    await this.waitForAllAssetsToLoad(theme);

                    document.body.classList.remove('themeSwitch');
                    document.body.classList.add('themeSwitchDone');
                    setTimeout(() => {
                        document.body.classList.remove('themeSwitchDone');
                        this.activeThemeChange = false;
                    }, 600);
                }, 600);
            }
        }
    }
});
</script>
