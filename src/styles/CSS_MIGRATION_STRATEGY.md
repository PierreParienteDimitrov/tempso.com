# CSS Migration Strategy

## 1. Global Variables & Theme

```js
// tailwind.config.js
{
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        royal: {
          blue: '#0266ff'
        },
        gradient: {
          '01': '#111932',
          '02': '#070b18'
        }
      },
      fontFamily: {
        headings: ['var(--headings)'],
        body: ['var(--paragraphs)']
      }
    }
  }
}
```

## 2. CSS Categories & Migration Approach

### A. Core Typography
- Typography styles from Webflow → Tailwind utility classes + base layer
- Preserve in `globals.css` under `@layer base`
```css
h1 { @apply text-[101px] font-bold leading-tight; }
h2 { @apply text-[80px] font-bold leading-tight; }
h3 { @apply text-[48px] font-medium leading-normal; }
/* etc. */
```

### B. Layout Components
Convert to Tailwind utilities:
- `.container` → `max-w-[1200px] mx-auto py-8`
- `.section` → `relative z-[1] px-0.5`
- Grid systems → Tailwind grid classes

### C. Interactive Elements
Create reusable components with Tailwind:
```jsx
// components/Button.tsx
export const Button = ({ variant = 'default', children }) => {
  const baseStyles = 'font-body text-sm transition-all duration-300 rounded-full px-5.5 py-2.5'
  const variants = {
    default: 'bg-white text-[#070709] shadow-button hover:bg-[#d1d1d1]',
    outline: 'bg-black bg-gradient-to-b from-white/15 to-transparent border border-white/50'
  }
  return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>
}
```

### D. Complex Visual Styles
Keep in CSS modules:
- Gradients
- Complex animations
- Multi-layer backgrounds
- Intricate pseudo-element styles

```css
/* styles/preserved.module.css */
.gradientBackground {
  background-image: linear-gradient(to bottom, var(--gradient-01), var(--gradient-02));
}

.buttonGlow {
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.2);
}
```

### E. Component-Specific Styles
Organize by component in separate modules:
- `styles/components/navbar.module.css`
- `styles/components/footer.module.css`
- etc.

## 3. Migration Priority

1. Global Styles & Typography
2. Layout & Grid Systems
3. Common UI Components (buttons, cards)
4. Complex Visual Elements
5. Component-Specific Styles
6. Animations & Transitions

## 4. Quality Checklist

- [ ] No duplicate styles
- [ ] Consistent naming conventions
- [ ] Mobile responsiveness preserved
- [ ] Performance optimized
- [ ] Accessibility maintained
- [ ] Dark mode compatibility
- [ ] Browser compatibility

## 5. Tools & Techniques

1. Use [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
2. Leverage CSS Modules for complex selectors
3. Use @apply for repeated utility combinations
4. Keep preserved.module.css for complex visual styles
5. Use clsx/cn for conditional classes

## 6. Example Migration

```css
/* Before (Webflow) */
.button {
  font-family: var(--paragraphs);
  color: #070709;
  text-align: center;
  background-color: #fff;
  border-radius: 200px;
  padding: 10px 22px;
  font-size: 16px;
  font-weight: 400;
  transition: background-position .25s, background-color .45s;
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.2);
}

/* After (Tailwind + CSS Module) */
/* components/Button.tsx */
import styles from './Button.module.css'

export const Button = ({ children }) => (
  <button className={clsx(
    'font-body text-[#070709] text-center bg-white',
    'rounded-full px-5.5 py-2.5 text-base font-normal',
    'transition-all duration-300',
    styles.buttonShadow
  )}>
    {children}
  </button>
)

/* Button.module.css */
.buttonShadow {
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.2);
}
```