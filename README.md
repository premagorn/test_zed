# 📄 CV — GitHub Pages (Flask + React)

A minimal, white & blue CV/resume page built with **Flask** (backend API) and **React + Vite** (frontend).

---

## 🗂️ Project Structure

```
cv/
├── backend/
│   ├── app.py            ← Flask REST API
│   ├── cv_data.py        ← ✏️  แก้ข้อมูล CV ของคุณที่นี่
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── styles/
        │   ├── global.css
        │   ├── Header.css
        │   └── Section.css
        └── components/
            ├── Header.jsx
            ├── About.jsx
            ├── Experience.jsx
            ├── Education.jsx
            ├── Projects.jsx
            ├── Skills.jsx
            ├── Languages.jsx
            └── Footer.jsx
```

---

## ✏️ แก้ไขข้อมูล CV

เปิดไฟล์ **`backend/cv_data.py`** แล้วแก้ไข `CV_DATA` ให้เป็นข้อมูลของคุณ

```python
CV_DATA = {
    "name": "ชื่อ-นามสกุล ของคุณ",
    "title": "Software Engineer",
    "email": "your@email.com",
    ...
}
```

---

## 🚀 วิธีรันในเครื่อง (Local Development)

### 1. Backend — Flask

```bash
cd backend

# สร้าง virtual environment (แนะนำ)
python -m venv venv
source venv/bin/activate        # macOS / Linux
venv\Scripts\activate           # Windows

# ติดตั้ง dependencies
pip install -r requirements.txt

# รัน Flask server (port 5000)
python app.py
```

Flask API จะพร้อมใช้งานที่ → `http://localhost:5000/api/cv`

---

### 2. Frontend — React + Vite

เปิด Terminal อีกหน้าต่าง:

```bash
cd frontend

# ติดตั้ง dependencies
npm install

# รัน dev server (port 3000)
npm run dev
```

เปิดเบราว์เซอร์ที่ → `http://localhost:3000`

> Vite จะ proxy `/api/*` ไปยัง Flask โดยอัตโนมัติ (ตั้งค่าไว้ใน `vite.config.js`)

---

## 🏗️ Build สำหรับ Production

```bash
cd frontend
npm run build
```

ไฟล์ที่ build แล้วจะอยู่ในโฟลเดอร์ `frontend/dist/`

---

## 🌐 Deploy บน GitHub Pages

### วิธีที่ 1 — Static Export (แนะนำสำหรับ GitHub Pages)

1. Build frontend:
   ```bash
   cd frontend && npm run build
   ```
2. Copy ทุกอย่างใน `frontend/dist/` ไปไว้ที่ root ของ repository
3. Push ขึ้น GitHub
4. ไปที่ **Settings → Pages → Source** → เลือก branch `main` → Save
5. รอ ~1 นาที แล้วเข้าที่ `https://<username>.github.io/<repo-name>`

### วิธีที่ 2 — ใช้ gh-pages package

```bash
cd frontend

# ติดตั้ง gh-pages
npm install --save-dev gh-pages

# เพิ่มใน package.json
# "homepage": "https://<username>.github.io/<repo-name>",
# "scripts": { "deploy": "gh-pages -d dist" }

npm run build
npm run deploy
```

---

## 🛠️ Tech Stack

| Layer    | Technology          |
|----------|---------------------|
| Backend  | Python 3, Flask, flask-cors |
| Frontend | React 18, Vite 5    |
| Styling  | Pure CSS (Minimal white & blue) |
| Font     | Inter (Google Fonts) |

---

## 📋 API Endpoint

| Method | Endpoint  | Description         |
|--------|-----------|---------------------|
| GET    | `/api/cv` | Returns CV data as JSON |

---

## 📝 License

MIT