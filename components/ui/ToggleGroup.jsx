import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import cn from '@/utilities/cn';
import { cva } from 'class-variance-authority';

const toggleVariants = cva(
	'inline-flex items-center rounded-md text-sm font-inter font-medium ring-offset-[#4D4D4D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[#414141] data-[state=on]:text-white',
	{
		variants: {
			variant: {
				default:
					'bg-[#2F2F2F] text-[#BDBDBD] hover:bg-[#3A3A3A] border border-[#4D4D4D] data-[state=on]:border-[#007AFF9E]',
				outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
			},
			size: {
				default: 'min-h-10 py-4 px-5',
				sm: 'h-9 px-2.5',
				lg: 'h-11 px-5',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const ToggleGroupContext = React.createContext({
	size: 'default',
	variant: 'default',
});

const ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => (
	<ToggleGroupPrimitive.Root ref={ref} className={cn('flex items-center justify-center gap-1', className)} {...props}>
		<ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
	</ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
	const context = React.useContext(ToggleGroupContext);

	return (
		<ToggleGroupPrimitive.Item
			ref={ref}
			className={cn(
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size,
				}),
				className
			)}
			{...props}>
			{children}
		</ToggleGroupPrimitive.Item>
	);
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
