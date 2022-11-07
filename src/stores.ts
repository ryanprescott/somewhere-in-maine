import { writable } from "svelte/store";

interface MetaStore {
    site: {
        name: string,
    },
    page: {
        title: string,
        description: string,
    },
};

export const meta = writable({
    site: {
        name: '',
    },
    page: {
        title: '',
        description: '',
    }
} as MetaStore);
