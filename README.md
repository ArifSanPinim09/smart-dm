# SMART DM - Website Edukasi Diabetes Mellitus

Website edukasi kesehatan bertema SMART DM (Diabetes Mellitus) yang dirancang untuk remaja dan masyarakat umum.

## 🎯 Fitur Utama

- **Design Clean & Professional**: Warna soft, tidak norak, mudah dibaca
- **Responsive**: Optimal di semua device (mobile, tablet, desktop)
- **Animasi Minimal**: Hanya fade-in halus untuk pengalaman yang smooth
- **Konten Lengkap**: 
  - Edukasi tentang Diabetes Mellitus
  - Nilai normal gula darah (Remaja, Dewasa, Lansia)
  - Faktor risiko dan gejala
  - Penanganan dan pencegahan
  - Video edukasi animasi

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (Static Export)

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build for Production

```bash
npm run build
```

Output akan berada di folder `out/` dan siap di-deploy ke Vercel atau hosting static lainnya.

## 📁 Struktur Project

```
/app
  ├── layout.tsx          # Root layout dengan Inter font
  ├── page.tsx            # Main page (single page app)
  └── globals.css         # Global styles

/components
  ├── Navbar.tsx          # Fixed navbar dengan menu
  ├── Hero.tsx            # Hero section
  ├── EducationSection.tsx
  ├── BloodSugarTabs.tsx  # Tab interface untuk nilai normal
  ├── RiskFactorsSection.tsx
  ├── SymptomsSection.tsx
  ├── TreatmentSection.tsx
  ├── ImpactSection.tsx
  ├── PreventionSection.tsx
  ├── VideoSection.tsx    # YouTube embed dengan scene breakdown
  ├── Footer.tsx
  ├── ImagePlaceholder.tsx
  └── SectionContainer.tsx
```

## 🎨 Color Palette

- **Primary Blue**: #60A5FA (soft blue)
- **Primary Green**: #34D399 (mint green)
- **Background**: #FFFFFF (white), #F8FAFC (slight gray)
- **Text**: #1E293B (dark slate), #64748B (gray)
- **Accent**: #1E40AF (deep blue)
- **Borders**: #E2E8F0 (light gray)

## 📝 Mengganti Placeholder Images

Semua image menggunakan komponen `ImagePlaceholder` yang mudah diganti. Untuk mengganti dengan gambar asli:

1. Tambahkan gambar ke folder `/public/images/`
2. Update komponen yang menggunakan `<ImagePlaceholder />` dengan `<Image />` dari Next.js
3. Contoh:

```tsx
// Sebelum
<ImagePlaceholder text="Hero Image" />

// Sesudah
<Image 
  src="/images/hero.jpg" 
  alt="Hero Image" 
  width={800} 
  height={600}
  className="rounded-xl"
/>
```

## 🎬 Mengganti Video YouTube

Edit file `components/VideoSection.tsx` dan ganti `VIDEO_ID_HERE` dengan ID video YouTube Anda:

```tsx
src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (2-3 columns)

## 🚀 Deploy ke Vercel

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Vercel akan otomatis detect Next.js dan deploy

Atau gunakan Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📄 License

© 2025 SMART DM. All rights reserved.

---

**Sehat Dimulai Sejak Dini** 💙
