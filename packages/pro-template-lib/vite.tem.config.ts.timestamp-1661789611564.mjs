// vite.tem.config.ts
import { defineConfig } from "vite";
import * as fs from "fs";
import * as path from "path";
import react from "@vitejs/plugin-react";
var __vite_injected_original_dirname = "/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib";
var entries = {};
var COM_ROOT_PATH = path.resolve(__vite_injected_original_dirname, "./src/components");
var dirs = fs.readdirSync(COM_ROOT_PATH);
dirs.forEach((dir) => {
  if (dir.includes("index")) {
    entries["index"] = `${COM_ROOT_PATH}/${dir}`;
  } else {
    entries[`lib/${dir}`] = `${COM_ROOT_PATH}/${dir}/index.tsx`;
  }
});
console.log("entries", entries);
process.exit();
var vite_tem_config_default = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "antd", "@ant-design/icons", "@ant-design/pro-components"],
      input: {},
      output: [{
        entryFileNames: ""
      }]
    }
  }
});
export {
  vite_tem_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS50ZW0uY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3d4eS9jb2RlV29ya3MvbWVsb2R5TENQL3BhY2thZ2VzL3Byby10ZW1wbGF0ZS1saWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy93eHkvY29kZVdvcmtzL21lbG9keUxDUC9wYWNrYWdlcy9wcm8tdGVtcGxhdGUtbGliL3ZpdGUudGVtLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvd3h5L2NvZGVXb3Jrcy9tZWxvZHlMQ1AvcGFja2FnZXMvcHJvLXRlbXBsYXRlLWxpYi92aXRlLnRlbS5jb25maWcudHNcIjsvKlxuICogQEF1dGhvcjogXHU1MTZEXHU1RjI2KG1lbG9keVd4eSlcbiAqIEBEYXRlOiAyMDIyLTA4LTI5IDIwOjM5OjAyXG4gKiBATGFzdEVkaXRvcnM6IFx1NTE2RFx1NUYyNihtZWxvZHlXeHkpXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTA4LTMwIDAwOjAwOjMzXG4gKiBARmlsZVBhdGg6IC9tZWxvZHlMQ1AvcGFja2FnZXMvcHJvLXRlbXBsYXRlLWxpYi92aXRlLnRlbS5jb25maWcudHNcbiAqIEBEZXNjcmlwdGlvbjogdXBkYXRlIGhlcmVcbiAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5cblxuY29uc3QgZW50cmllcyA9IHt9O1xuXG5jb25zdCBDT01fUk9PVF9QQVRIID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKVxuXG5jb25zdCBkaXJzID0gZnMucmVhZGRpclN5bmMoQ09NX1JPT1RfUEFUSCk7XG5cbmRpcnMuZm9yRWFjaChkaXIgPT4ge1xuICBpZihkaXIuaW5jbHVkZXMoJ2luZGV4Jykpe1xuICAgIGVudHJpZXNbJ2luZGV4J10gPSBgJHtDT01fUk9PVF9QQVRIfS8ke2Rpcn1gO1xuICB9ZWxzZXtcbiAgICBlbnRyaWVzW2BsaWIvJHtkaXJ9YF0gPSBgJHtDT01fUk9PVF9QQVRIfS8ke2Rpcn0vaW5kZXgudHN4YFxuICB9XG59KVxuXG5jb25zb2xlLmxvZygnZW50cmllcycsIGVudHJpZXMpO1xuXG5wcm9jZXNzLmV4aXQoKTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJhbnRkXCIsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiwgXCJAYW50LWRlc2lnbi9wcm8tY29tcG9uZW50c1wiXSxcbiAgICAgIGlucHV0OiB7XG5cbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IFt7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnJ1xuICAgICAgfV1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBUUEsU0FBUyxvQkFBb0I7QUFDN0IsWUFBWSxRQUFRO0FBQ3BCLFlBQVksVUFBVTtBQUN0QixPQUFPLFdBQVc7QUFYbEIsSUFBTSxtQ0FBbUM7QUFjekMsSUFBTSxVQUFVLENBQUM7QUFFakIsSUFBTSxnQkFBcUIsYUFBUSxrQ0FBVyxrQkFBa0I7QUFFaEUsSUFBTSxPQUFVLGVBQVksYUFBYTtBQUV6QyxLQUFLLFFBQVEsU0FBTztBQUNsQixNQUFHLElBQUksU0FBUyxPQUFPLEdBQUU7QUFDdkIsWUFBUSxXQUFXLEdBQUcsaUJBQWlCO0FBQUEsRUFDekMsT0FBSztBQUNILFlBQVEsT0FBTyxTQUFTLEdBQUcsaUJBQWlCO0FBQUEsRUFDOUM7QUFDRixDQUFDO0FBRUQsUUFBUSxJQUFJLFdBQVcsT0FBTztBQUU5QixRQUFRLEtBQUs7QUFHYixJQUFPLDBCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxRQUFRLHFCQUFxQiw0QkFBNEI7QUFBQSxNQUMxRixPQUFPLENBRVA7QUFBQSxNQUNBLFFBQVEsQ0FBQztBQUFBLFFBQ1AsZ0JBQWdCO0FBQUEsTUFDbEIsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
