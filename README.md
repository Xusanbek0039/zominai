# ZominAI 🌐

**Zomin tumani o‘quvchilari va jamoasiga oid onlayn platforma**  
ZominAI — bu Zomin tumani o‘quvchilari bilan jamoa o‘rtasida interfaol kommunikatsiya o‘rnatish uchun mo‘ljallangan zamonaviy web-ilova.

---

## 📌 Asosiy imkoniyatlar

- Chatbot integratsiyasi — sun’iy intellekt yordamida foydalanuvchilarning savollariga javob berish.
- Foydalanuvchilarning savollarini va javoblarini tarix boyicha saqlash.
- API bilan muloqot va real‑time chat.
- Zamonaviy front-end: TailwindCSS bilan tezkor va chiroyli UI.
- Orqa tarafni TypeScript va Node.js yordamida qurish.
- MongoDB bilan ma’lumotlar bazasi.
- Ishlab chiqish va joylashtirish uchun Vite.js va Netlify sozlamalari mavjud.

---

## 📁 Fayl tuzilmasi

```bash
├── public/ # Statik fayllar
│ └── favicon.ico
├── src/ # Manba kodlar
│ └── … (komponentlar, servisy va boshqalar)
├── index.html # Asosiy HTML sahifa
├── input.css # Tailwind uchun custom inputlar
├── output.css # Unprocessed Tailwind CSS
├── tailwind.config.js # Tailwind sozlamalari
├── postcss.config.js # PostCSS konfiguratsiyasi
├── eslint.config.js # ESLint qoidalari
├── tsconfig*.json # TypeScript konfiguratsiyasi
├── vite.config.ts # Vite build sozlamalari
├── package.json # Loyihaning nimadir va scriptlari
└── netlify.toml # Netlify hosting uchun sozlamalar
```

---

## 🛠️ Texnologiyalar

| Qism            | Texnologiya              |
|----------------|--------------------------|
| Front-end       | HTML5, TailwindCSS, TypeScript |
| Build         | Vite.js                  |
| Linter       | ESLint                   |
| Orqa taraf (API) | Node.js, TypeScript        |
| DB            | MongoDB                  |
| Joylashtirish   | Netlify                  |

---

## ⚙️ Loyihani ishga tushirish

1. **Kodlarni klon qiling**  
   ```bash
   git clone https://github.com/Xusanbek0039/zominai.git
   cd zominai
    ```


2. Yordamchi kutubxonalarni o‘rnating
```bash
npm install
```
3. Mahalliy serverni ishga tushiring
```bash
npm run dev
```
4. Brauzerda oching
http://localhost:3000 (yoki konsolda yozilgan URL).

🌍 API sozlamalari
vite.config.ts va backend integratsiyasida Chatbot uchun AI API tokenlari kerak.

.env faylida quyidagilar bo‘lishi lozim:
```bash
VITE_API_URL=...
API_TOKEN=...
```
🚀 Deploy qilish (Netlify)
Netlify’dagi loyihangiz uchun netlify.toml fayl tayyor.

build script: npm run build

Netlify saytiga deploy qiling.

OUTPUT_DIR = dist bo‘lishi kerak.

✅ Qo‘shish va hissa qo‘shish
Agar loyihaga hissa qo‘shmoqchi bo‘lsangiz:

Fork qiling.

Yangi branch oching (feat/… yoki fix/…).

O‘zgartirishlar qiling.

Pull request oching — ilovangizni ko‘rib, qayta aloqa beraman.

📞 Aloqa
Loyiha muallifi: Xusanbek0039

📝 Litsenziya
(Bu yerga loyiha litsenziyasini yozing, masalan MIT yoki boshqa)
















# ZominAI 🌐

**An online platform for students and the community of Zomin district**
ZominAI is a modern web application designed to establish interactive communication between students and the community of Zomin district.

---

## 📌 Main features

- Chatbot integration - answering user questions using artificial intelligence.
- Storing user questions and answers in history.
- Communication with API and real-time chat.
- Modern front-end: fast and beautiful UI with TailwindCSS.
- Building the back-end with TypeScript and Node.js.
- Database with MongoDB.
- Vite.js and Netlify settings are available for development and deployment.

---

## 📁 File structure

```bash
├── public/ # Static files
│ └── favicon.ico
├── src/ # Source codes
│ └── … (components, services, etc.)
├── index.html # Main HTML page
├── input.css # Custom inputs for Tailwind
├── output.css # Unprocessed Tailwind CSS
├── tailwind.config.js # Tailwind settings
├── postcss.config.js # PostCSS configuration
├── eslint.config.js # ESLint rules
├── tsconfig*.json # TypeScript configuration
├── vite.config.ts # Vite build settings
├── package.json # Project stuff and scripts
└── netlify.toml # Netlify hosting settings
```

---

## 🛠️ Technologies

| Section | Technology |
|----------------|-------------------|
| Front-end | HTML5, TailwindCSS, TypeScript |
| Build | Vite.js |
| Linter | ESLint |
| Backend (API) | Node.js, TypeScript |
| DB | MongoDB |
| Deployment | Netlify |

---

## ⚙️ Launch the project

1. **Clone the code**
```bash
git clone https://github.com/Xusanbek0039/zominai.git
cd zominai
```

2. Install the supporting libraries
```bash
npm install
```
3. Start the local server
```bash
npm run dev
```
4. Open in the browser
http://localhost:3000 (or the URL typed in the console).

🌍 API settings
vite.config.ts and backend integration require AI API tokens for Chatbot.

The .env file should contain the following:
```bash
VITE_API_URL=...
API_TOKEN=...
```
🚀 Deploy (Netlify)
The netlify.toml file for your Netlify project is ready.

build script: npm run build

Deploy to the Netlify website.

OUTPUT_DIR = dist should be.

✅ Contribute and contribute
If you want to contribute to the project:

Fork.

Open a new branch (feat/… or fix/…).

Make changes.

Open a pull request — I will review your application and get back to you.

📞 Contact
Project author: Xusanbek0039

📝 License
(Write the project license here, for example MIT or other)
