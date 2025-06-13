import { CartItem } from '@/contexts/cart-context';
import Image from 'next/image';

// UI components
import { Input } from '@/components/ui/input';

// Icons
import { Trash, Trash2 } from 'lucide-react';

// Cart context
import { useCart } from '@/contexts/cart-context';


export function CartItemDisplay({item}: {item: CartItem}) {
    // Display each cart item with image, title, and price

    const updateQuantity = useCart().updateQuantity;
    const removeFromCart = useCart().removefromCart;

    return (
        <div className='flex items-center space-y-4'>
            <div className='relative w-16 h-16'>
                <Image
                 src={item.image}
                 alt={item.title}
                 fill // Fill the container
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // From Nextjs Image docs
                 className='object-cover rounded'
                 loading='lazy' // Defer loading until the image is in view
                 />
            </div>
            <div className='flex-1 ml-5'>
                <h2 className='text-lg font-semibold'>{item.title}</h2>
                <p className='text-sm text-gray-500'>Price: ${item.price.toFixed(2)}</p>
                <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
            </div>

            {/* Add or remove cart items */}
            <div className='flex items-center space-x-2'>
                {/* Add cart items */}
                <Input
                    type='number'
                    value={item.quantity}
                    onChange={(e) => {
                        const newValue = parseInt(e.target.value, 10);

                        if (newValue >= 1) {
                            // Do not allow quantities of 0
                            updateQuantity(item.id, newValue);
                        } 
                    }}
                    className='w-16 text-center'
                />

                {/* Remove cart item */}
                <Trash2
                 onClick={() => removeFromCart(item.id)}
                 className='w-6 h-6 text-red-500 cursor-pointer hover:text-red-700 transition-colors'
                 />

            </div>
        </div>
    )
}