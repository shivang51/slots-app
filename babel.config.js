module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ios.js",
          ".android.js",
          ".js",
          ".jsx",
          ".json",
          ".tsx",
          ".ts",
          ".native.js",
        ],
        alias: {
          "*": ".",
          "@root": "./",
          "@": "./src",
          "@src": "./src",
          "@components": "./src/components/",
          "@globals": "./src/globals/",
          "@icons": "./assets/icons/",
          "@pages": "./src/pages/",
          "@types": "./src/types/",
          "@utils": "./src/utils/",
          "@api": "./src/api/",
        },

        /// For DEBUGGING PURPOSES BY SHIVANG SHARMA

        // resolvePath: (sourcePath, currentFile, opts) => {
        //   // Log the source path and the current file
        //   if (
        //     sourcePath.startsWith("@pages" || "@types" || "@components" || "@/")
        //   )
        //     console.log("\n\n", sourcePath, "========>", currentFile);
        //
        //   // The default resolver
        //   const resolution =
        //     require("babel-plugin-module-resolver").resolvePath(
        //       sourcePath,
        //       currentFile,
        //       opts
        //     );
        //
        //   // Log the resolution
        //   if (
        //     sourcePath.startsWith("@pages" || "@types" || "@components" || "@/")
        //   )
        //     console.log("\t\tResolved to", resolution);
        //
        //   return resolution;
        // },
      },
    ],
    "react-native-paper/babel",
    "react-native-reanimated/plugin",
  ],
};
