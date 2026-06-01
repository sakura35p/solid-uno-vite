import { defineConfig } from '@unocss/vite';
import { presetMini } from '@unocss/preset-mini';
import presetAttributify from '@unocss/preset-attributify';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  presets: [
    presetMini(),
    presetAttributify({})
  ],

  transformers: [
    transformerAttributifyJsx()
  ],
});

