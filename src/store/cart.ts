import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string) => void;
  updateQty: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        const quantity = item.quantity || 1;
        const existingItem = state.items.find(i => i.productId === item.productId);
        
        if (existingItem) {
          return {
            items: state.items.map(i =>
              i.productId === item.productId
                ? { ...i, quantity: i.quantity + quantity }
                : i
            )
          };
        } else {
          return {
            items: [...state.items, { ...item, quantity }]
          };
        }
      }),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.productId !== productId)
      })),
      updateQty: (productId, quantity) => set((state) => ({
        items: state.items.map(i =>
          i.productId === productId
            ? { ...i, quantity: Math.max(1, quantity) }
            : i
        )
      })),
      clearCart: () => set({ items: [] }),
      total: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);