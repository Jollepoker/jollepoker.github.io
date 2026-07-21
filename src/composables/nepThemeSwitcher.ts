import { ref, onMounted, getCurrentInstance } from 'vue';

export enum Theme {
    Main = 'main',
    Summer = 'summer'
};

const currentTheme = ref<Theme>(Theme.Main);

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

    const getThemeUrl = async (theme: Theme): Promise<string> => {
        const module = await import(`@/assets/styling/${theme}/main.css?url`);
        return module.default;
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
        link.href = await getThemeUrl(theme);
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
