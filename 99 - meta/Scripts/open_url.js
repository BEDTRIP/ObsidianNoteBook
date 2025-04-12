const vaultName = 'DevBAZA'; // замените на название вашего хранилища
const filePath = 'my-file'; // путь к вашему файлу
const data = 'Hello Worldaaa'; // данные для передачи

// Кодируем данные для URI
const encodedData = encodeURIComponent(data);

// Формируем полный URL
const url = `obsidian://adv-uri?vault=${vaultName}&filepath=${filePath}&data=${encodedData}`;

// Переходим по созданному URL
window.location.href = url;
