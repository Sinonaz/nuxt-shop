import { defineConfig, presetWind4, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetWind4()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      accent: '#a18a68',
      gray: {
        dark: '#707070',
        DEFAULT: '#d8d8d8'
      }
    }
  }
})
