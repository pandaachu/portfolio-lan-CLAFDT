const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/js/**/*.js`,
      `!${srcPath}/css/*`,
      `!${srcPath}/css/**/*.scss`,
      `!${srcPath}/css/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/css/**/*.scss`,
      `${srcPath}/css/**/*.sass`,
    ],
    outputStyle: 'expanded',
    includePaths: [
      `${nodePath}/bootstrap/scss`,
    ],
    path: `${distPath}/css`,
  },
  javascript: {
    src: [
      `${srcPath}/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.slim.min.js`,
      `${nodePath}/bootstrap/dist/js/**/bootstrap.bundle.min.js`, // 已包含 popper.js
    ],
    concat: 'vendors.js',
    path: `${distPath}/js`,
  },
  img: {
    src: [
      `${srcPath}/images/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserSetting: {
    dir: distPath,
    port: 8080,
  },
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
