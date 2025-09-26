import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
        gradient: 'text-white font-medium relative overflow-hidden group transition-all duration-300 ease-out transform hover:scale-105 pulse-glow',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, children, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	
  if (variant === 'gradient') {
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-deep-purple"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-deep-purple to-light-orange transform -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0"></span>
        <span className="relative">{children}</span>
      </Comp>
    );
  }

  return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		>
      {children}
    </Comp>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };