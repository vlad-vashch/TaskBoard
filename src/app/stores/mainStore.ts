import { create } from 'zustand/react';

export const mainStore = create(() => ({
    tasks: null,
    columns: null
}));
