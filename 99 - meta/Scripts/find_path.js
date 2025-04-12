const path = require('path');
const fs = require('fs');

// Путь к папке
function getFirstThreeFolders(path) {
	console.log(`Ядро расположено в папке : ${path}`);
    const folders = path.split(path.includes('\\') ? '\\' : '/'); // Разделяем путь
    return folders.slice(0, 3).join('\\'); // Извлекаем первые три папки и соединяем их обратно
}

function getLast(path) {
    const folders = path.split(path.includes('\\') ? '\\' : '/'); // Разделяем путь
    return folders.slice(-1).join('');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkFilesInFolder(folder) {
  try {
    const files = await fs.promises.readdir(folder); // Ожидаем чтения папки

    for (const file of files) {
      const filePath = path.join(folder, file);
      const stats = await fs.promises.stat(filePath); // Ожидаем получения статуса файла

      if (stats.isFile()) {
        await checkFileContents(filePath); // Ожидаем проверки содержимого файла
      }
    }
  } catch (err) {
    console.error("Не удалось прочитать папку:", err);
  }
}

async function checkFileContents(filePath) {
  const data = await fs.promises.readFile(filePath, 'utf8').catch(err => {
    console.error("Не удалось прочитать файл:", err);
    return;
  });

  const hasUnchecked = data.includes('- [ ]');
  const hasChecked = data.includes('- [x]');

  if (!hasUnchecked && hasChecked) {
    // Здесь вы можете вызвать вашу команду для удаления события
    await runObsidianCommand(filePath);
    // Убедитесь, что wait завершилась перед удалением файла
    await fs.promises.unlink(filePath).catch(err => {
      console.error(`Ошибка при удалении файла: ${err.message}`);
    });
    console.log('Файл успешно удален.');
  }
}

async function runObsidianCommand(filePath) {
  const vaultName = 'DevBAZA';
  const file = getLast(filePath);
  const url_1 = `obsidian://adv-uri?vault=${vaultName}&filepath=${file}&commandid=google-calendar%3Adelete-google-calendar-event-from-frontmatter%20&`;
  
  console.log(`Запуск команды для удаления события из Google Календаря из файла: ${filePath}`);
  
  window.open(url_1, '_self');
  await new Promise(resolve => setTimeout(resolve, 3500));
}

// Запуск скрипта
(async () => {
  const my_file = context.args.my_file;
  const vaultName = 'DevBAZA';
  const folderPath = getFirstThreeFolders(path.join(__dirname)) + `\\Obsidian\\${vaultName}\\06 - Calendar`;
  
  console.log(`Запуск скрипта для удаления события из gCal в папке : ${folderPath}`);
  console.log(`Скрипт начат из ${my_file}`);

  // Запуск проверки файлов в папке
  await checkFilesInFolder(folderPath, vaultName);

  const url_1 = `obsidian://adv-uri?vault=${vaultName}&filepath=${my_file}`;
  window.open(url_1, '_self');
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  
  await console.log('Скрипт завершен');
})();