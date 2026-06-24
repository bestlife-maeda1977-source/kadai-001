import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // SCSSをコンパイルして生成されるCSSファイル名を固定する設定
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "color-functions",
          "import",
          "global-builtin",
          "slash-div",
        ],
      },
    },
  },
});
