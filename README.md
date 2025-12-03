# Cafe Bloom - Specialty Coffee Shop Website

A modern, responsive marketing website for **Cafe Bloom**, a specialty coffee shop located in Santa Catarina, Nuevo León (near Monterrey, Mexico).

## 🎨 Design Features

- **Modern & Responsive**: Mobile-first design that looks great on all devices
- **Brand Colors**: Warm latte beige (#F5E9DA), coffee brown (#2C1810), soft green (#8FB996), and pastel pink (#F4C2C2)
- **Typography**: Elegant Playfair Display serif for headings, clean Inter sans-serif for body text
- **Real Content**: All copy based on actual Google review insights (4.8★ with 72+ reviews)
- **Hidden Gem Aesthetic**: Industrial-meets-botanical vibe with cozy, warm atmosphere

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📁 Project Structure

```
CafeBloom/
├── app/
│   ├── page.tsx           # Home page
│   ├── menu/page.tsx      # Menu page
│   ├── reviews/page.tsx   # Reviews page
│   ├── about/page.tsx     # About page
│   ├── visit/page.tsx     # Visit/Contact page
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   └── globals.css        # Global styles & Tailwind config
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── SectionHeading.tsx # Reusable section headings
│   ├── ReviewCard.tsx     # Review display card
│   ├── MenuItemCard.tsx   # Menu item card
│   ├── DrinkCard.tsx      # Featured drink card
│   ├── FeatureCard.tsx    # Feature highlight card
│   └── Badge.tsx          # Menu item tags/badges
└── data/
    ├── types.ts           # TypeScript type definitions
    ├── menu.ts            # Menu items data
    ├── reviews.ts         # Customer reviews data
    └── info.ts            # Business info, hours, contact
```

## 🌟 Pages

1. **Home** (`/`) - Hero, features, signature drinks, workspace, reviews preview, location
2. **Menu** (`/menu`) - Full menu with category filtering
3. **Reviews** (`/reviews`) - Customer testimonials with category filters
4. **About** (`/about`) - Brand story, values, team
5. **Visit** (`/visit`) - Location, hours, contact form, practical info

## 🛠️ Getting Started

### Prerequisites

**Important**: This project requires **Node.js version 20.9.0 or higher**.

Check your Node.js version:
```bash
node --version
```

If you need to upgrade Node.js:
- **Using nvm** (recommended):
  ```bash
  nvm install 20
  nvm use 20
  ```
- **Direct download**: Visit [nodejs.org](https://nodejs.org/) and download the latest LTS version

### Installation & Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Highlights

### Signature Drinks
- Bloom Latte (house specialty)
- Strawberry Matcha Latte
- Iced Hazelnut Latte
- Affogato
- Lavender Lemonade

### Key Features
- ☕ Specialty coffee & signature drinks
- 🍰 Delicious desserts (tiramisu, cheesecake, croissants)
- 💻 Perfect workspace with fast Wi-Fi
- 🌿 Bright, plant-filled atmosphere
- 👥 Friendly, attentive service

## 🎯 Future Enhancements

- Add real Google Maps integration
- Implement backend for contact form
- Add image gallery
- Integrate online ordering system
- Add Instagram feed integration
- Implement animations and scroll effects

## 📄 License

This project is created for Cafe Bloom. All rights reserved.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
