# Chat Backend API with Admin Panel

MongoDB Atlas va OpenAI integratsiyasi bilan to'liq chat backend API va admin panel.

## Xususiyatlar

- ✅ Foydalanuvchi ro'yxatdan o'tkazish va tizimga kirish
- ✅ JWT autentifikatsiya
- ✅ OpenAI GPT modellari bilan chat
- ✅ So'rovlar uchun limit (kunlik/oylik/yillik)
- ✅ Chat tarixini saqlash va boshqarish
- ✅ Profil ma'lumotlarini ko'rish va tahrirlash
- ✅ Admin panel (foydalanuvchilarni boshqarish, statistika)
- ✅ Xavfsizlik (CORS, Helmet, Rate Limiting)
- ✅ MongoDB Atlas integratsiyasi

## O'rnatish

1. Loyihani klonlash:
\`\`\`bash
git clone <repository-url>
cd chat-backend-api
\`\`\`

2. Paketlarni o'rnatish:
\`\`\`bash
npm install
\`\`\`

3. `.env` faylini sozlash:
\`\`\`env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
ADMIN_SECRET_KEY=your_admin_secret_key
PORT=5000
\`\`\`

4. Serverni ishga tushirish:
\`\`\`bash
# Development
npm run dev

# Production
npm start
\`\`\`

## API Endpoints

### Autentifikatsiya

#### POST /api/auth/register
Yangi foydalanuvchi ro'yxatdan o'tkazish.

**Request Body:**
\`\`\`json
{
  "firstName": "Ism",
  "lastName": "Familiya",
  "email": "email@example.com",
  "phone": "+998901234567",
  "password": "parol123"
}
\`\`\`

#### POST /api/auth/login
Tizimga kirish.

**Request Body:**
\`\`\`json
{
  "email": "email@example.com",
  "password": "parol123"
}
\`\`\`

#### GET /api/auth/verify
Token tekshirish (himoyalangan).

**Headers:**
\`\`\`
Authorization: Bearer <jwt_token>
\`\`\`

### Chat

#### POST /api/chat
Yangi chat yuborish (himoyalangan).

**Headers:**
\`\`\`
Authorization: Bearer <jwt_token>
\`\`\`

**Request Body:**
\`\`\`json
{
  "question": "Sizning savolingiz",
  "model": "gpt-3.5-turbo" // ixtiyoriy
}
\`\`\`

#### GET /api/chats
Chatlar ro'yxatini olish (himoyalangan).

**Query Parameters:**
- `page` - sahifa raqami (default: 1)
- `limit` - sahifadagi elementlar soni (default: 20)

#### GET /api/chats/:id
Bitta chatni olish (himoyalangan).

#### DELETE /api/chats/:id
Chatni o'chirish (himoyalangan).

### Profil

#### GET /api/profile
Profil ma'lumotlarini olish (himoyalangan).

#### PUT /api/profile
Profil ma'lumotlarini yangilash (himoyalangan).

**Request Body:**
\`\`\`json
{
  "firstName": "Yangi ism",
  "lastName": "Yangi familiya",
  "phone": "+998901234567"
}
\`\`\`

#### GET /api/usage
Usage statistikasini olish (himoyalangan).

### Admin Panel

#### POST /api/admin/login
Admin sifatida tizimga kirish.

**Request Body:**
\`\`\`json
{
  "email": "admin@example.com",
  "password": "admin_password"
}
\`\`\`

#### POST /api/admin/create-admin
Birinchi admin yaratish (faqat bir marta).

**Request Body:**
\`\`\`json
{
  "firstName": "Admin",
  "lastName": "User",
  "email": "admin@example.com",
  "phone": "+998901234567",
  "password": "admin_password",
  "secretKey": "your_admin_secret_key"
}
\`\`\`

#### GET /api/admin/users
Barcha foydalanuvchilar ro'yxatini olish (admin).

**Query Parameters:**
- `page` - sahifa raqami (default: 1)
- `limit` - sahifadagi elementlar soni (default: 20)
- `search` - qidiruv so'zi (ixtiyoriy)

#### GET /api/admin/users/:id
Bitta foydalanuvchi ma'lumotlarini olish (admin).

#### PUT /api/admin/users/:id/limit
Foydalanuvchi limitlarini yangilash (admin).

**Request Body:**
\`\`\`json
{
  "daily": 50,
  "monthly": 500,
  "yearly": 2000
}
\`\`\`

#### PUT /api/admin/users/:id/status
Foydalanuvchini faollashtirish/bloklash (admin).

**Request Body:**
\`\`\`json
{
  "active": true
}
\`\`\`

#### GET /api/admin/stats
Statistikani olish (admin).

**Query Parameters:**
- `period` - davr (daily, weekly, monthly)

## Limitlar

- **Kunlik:** 30 ta chat so'rovi (default)
- **Oylik:** 300 ta chat so'rovi (default)
- **Yillik:** 1000 ta chat so'rovi (default)

## Xavfsizlik

- Parollar bcrypt bilan hash qilinadi
- JWT tokenlar bilan autentifikatsiya
- Admin va oddiy foydalanuvchi ajratilgan
- CORS himoyasi
- Helmet xavfsizlik headerlar
- Rate limiting (15 daqiqada 100 ta so'rov)
- Input validatsiya

## Texnologiyalar

- **Backend:** Node.js + Express.js
- **Ma'lumotlar bazasi:** MongoDB Atlas + Mongoose
- **AI:** OpenAI GPT API
- **Autentifikatsiya:** JWT
- **Xavfsizlik:** bcryptjs, helmet, cors, express-rate-limit

## Loyiha strukturasi

\`\`\`
├── server.js              # Asosiy server fayli
├── models/
│   ├── User.js           # Foydalanuvchi modeli
│   ├── Chat.js           # Chat modeli
│   └── Stat.js           # Statistika modeli
├── routes/
│   ├── auth.js           # Autentifikatsiya routelari
│   ├── chat.js           # Chat routelari
│   ├── profile.js        # Profil routelari
│   └── admin.js          # Admin routelari
├── middleware/
│   └── auth.js           # JWT middleware
├── utils/
│   └── statUpdater.js    # Statistika yangilash utilitasi
├── package.json
├── .env
└── README.md
\`\`\`

## Ishga tushirish

1. MongoDB Atlas klasterini yarating
2. OpenAI API kalitini oling
3. `.env` faylini to'ldiring
4. `npm install` buyrug'ini bajaring
5. `npm run dev` bilan serverni ishga tushiring
6. Admin yaratish uchun `/api/admin/create-admin` endpointiga so'rov yuboring

Server http://localhost:5000 da ishga tushadi.
