/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        royal: {
          blue: 'var(--royal-blue)'
        },
        gradient: {
          '01': 'var(--gradient-01)',
          '02': 'var(--gradient-02)'
        }
      },
      fontFamily: {
        headings: ['var(--headings)'],
        body: ['var(--paragraphs)']
      },
      boxShadow: {
        'button': '0 6px 16px rgba(255, 255, 255, 0.2)',
        'button-hover': '0 8px 20px rgba(255, 255, 255, 0.25)',
        'card': '0 4px 4px rgba(0, 0, 0, 0.24), 0 0 14px rgba(0, 0, 0, 0.24), 0 21px 36px rgba(56, 56, 56, 0.12)'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/forms')
  ],
}
