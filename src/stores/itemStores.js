import { create } from "zustand";
import { defaultItems } from "../lib/constants";

export const useItemsStore = create((set) => ({
	items: defaultItems,
	addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    set((state) => ({ items: [...state.items, newItem] }));
  },
	removeAllItems: () => {
		set(() => ({ items: [] }));
	},
	resetToInitial: () => {
		set(() => ({ items: defaultItems }));
	},
	markAllAsComplete: () => {
		set((state) => {
			const newItems = state.items.map((item) => {
				return { ...item, packed: true };
			});
			return { items: newItems };
		});
	},
	markAllAsIncomplete: () => {
		set((state) => {
			const newItems = state.items.map((item) => {
				return { ...item, packed: false };
			});
			return { items: newItems };
		});
	},
	deleteItem: (id) => {
		set((state) => {
			const newItems = state.items.filter((item) => item.id !== id);
			return { items: newItems };
		});
	},
	toggleItem: (id) => {
		set((state) => {
			const newItems = state.items.map((item) => {
				if (item.id === id) {
					return { ...item, packed: !item.packed };
				}
				return item;
			});
			return { items: newItems };
		});
	},
}));
