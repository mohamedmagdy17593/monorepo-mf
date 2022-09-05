const path = require('path');
const execSync = require('child_process').execSync;
const fse = require('fs-extra');
const chalk = require('chalk');

function exec(cmd) {
  execSync(cmd, { stdio: 'inherit', env: process.env });
}

console.log(chalk.yellow.bold('build host app'));
process.chdir(path.resolve(__dirname, '../apps/app-host'));
exec('pnpm build');
console.log(chalk.yellow.bold('DONE!!\n'));

console.log(chalk.yellow.bold('build inputs app'));
process.chdir(path.resolve(__dirname, '../apps/inputs'));
exec('pnpm build');
console.log(chalk.yellow.bold('DONE!!\n'));

console.log(chalk.yellow.bold('build result app'));
process.chdir(path.resolve(__dirname, '../apps/result'));
exec('pnpm build');
console.log(chalk.yellow.bold('DONE!!\n'));

/**
 * organize root build folder
 */

fse.moveSync(
  path.resolve(__dirname, '../apps/app-host/build'),
  path.resolve(__dirname, '../build'),
  {
    overwrite: true,
  },
);

fse.moveSync(
  path.resolve(__dirname, '../apps/inputs/build'),
  path.resolve(__dirname, '../build/inputs'),
  {
    overwrite: true,
  },
);

fse.moveSync(
  path.resolve(__dirname, '../apps/result/build'),
  path.resolve(__dirname, '../build/result'),
  {
    overwrite: true,
  },
);
