<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'DiscordRedirect',
    props: {
        server: {
            type: String,
            required: false,
            default: 'neppienep',
        },
    },
    setup(props) {
        const server = !props.server || props.server === '' ? 'neppienep' : props.server;
        switch (server) {
            case "katabasis":
                window.location.href = "https://discord.gg/6W8zcgQVH6";
                break;
            default:
                window.location.href = "https://discord.gg/cC4jNz8utg";
        }
    },
});
</script>
