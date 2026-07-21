import { ref, onMounted, getCurrentInstance } from 'vue';

export enum Theme {
    Main = 'main',
    Summer = 'summer'
};

const themeCssUrls = import.meta.glob('/src/assets/styling/**/main.css', {
    query: '?url',
    import: 'default',
    eager: true
});

const currentTheme = ref<Theme>((localStorage.getItem('theme') as Theme) || Theme.Main);

export function useTheme() {
    const cookies = getCurrentInstance()?.appContext.config.globalProperties.$cookies;

    const getCookie = (key: string): string | null => {
        return cookies?.get(key) ?? null;
    }

    const setCookie = (key: string, value: string) => {
        cookies?.set(key, value);
    }

    const savedTheme = getCookie('theme') as Theme
    if (savedTheme && Object.values(Theme).includes(savedTheme)) {
        currentTheme.value = savedTheme;
    }

    const getThemeUrl = (theme: Theme): string => {
        const path = `/src/assets/styling/${theme}/main.css`;

        if (import.meta.env.PROD) {
            const cssUrl = themeCssUrls[path];
            if (cssUrl) {
                return cssUrl as string;
            }
        }

        return path;
    }

    const removeAllPreviousCss = () => {
        document.querySelectorAll('link[data-theme]').forEach(link => {
            link.remove()
        })
    }

    const loadTheme = async (theme: Theme): Promise<void> => {
        removeAllPreviousCss();

        if (!Object.values(Theme).includes(currentTheme.value)) {
            currentTheme.value = Theme.Main;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = getThemeUrl(theme);
        link.setAttribute('data-theme', theme);
        document.head.appendChild(link);

        currentTheme.value = theme;
        setCookie('theme', theme);
    }

    onMounted(() => {
        loadTheme(currentTheme.value)
    })

    return {
        currentTheme,
        loadTheme,
    } as const
}
