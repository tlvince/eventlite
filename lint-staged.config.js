module.exports = {
  '*.ts': ['eslint --cache --fix', 'git add'],
  '*.{js,ts,json,css,md}': ['prettier --write', 'git add'],
}
