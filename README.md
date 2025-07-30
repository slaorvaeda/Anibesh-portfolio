# Anibesh Photography Portfolio

A stunning, modern photography portfolio website built with Next.js, featuring advanced animations, parallax effects, and dynamic components.

## ✨ Features

### 🎨 Modern Design
- **Dark Theme**: Elegant black and gold color scheme
- **Responsive Layout**: Fully responsive design for all devices
- **Typography**: Beautiful typography with custom fonts
- **Glass Morphism**: Modern glass effects and backdrop blur

### 🎬 Advanced Animations
- **GSAP Animations**: Smooth scroll-triggered animations
- **Framer Motion**: Interactive animations and transitions
- **Parallax Effects**: Depth and movement on scroll
- **Hover Effects**: Engaging interactive elements

### 📱 Dynamic Components
- **Hero Section**: Animated collage with scroll-triggered effects
- **Portfolio Gallery**: Filterable gallery with lightbox
- **Services Page**: Interactive service cards with pricing
- **Contact Form**: Functional contact form with animations
- **About Page**: Storytelling with statistics and skills

### 🚀 Performance
- **Next.js 15**: Latest React framework with App Router
- **Tailwind CSS**: Utility-first styling
- **Optimized Images**: Responsive image handling
- **Smooth Scrolling**: Enhanced user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Geist)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
anibesh-portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.jsx          # About page
│   │   ├── contact/
│   │   │   └── page.jsx          # Contact page
│   │   ├── portfolio/
│   │   │   └── page.jsx          # Portfolio gallery
│   │   ├── services/
│   │   │   └── page.jsx          # Services page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.js             # Root layout
│   │   └── page.jsx              # Home page
│   ├── components/
│   │   ├── Hero.jsx              # Hero section
│   │   ├── HomeName.jsx          # Name component
│   │   └── HomeSlider.jsx        # Image slider
│   └── asset/
│       ├── Footer.jsx            # Footer component
│       └── Navbar.jsx            # Navigation
├── public/
│   ├── css/
│   │   ├── home.css              # Home page styles
│   │   └── navbar.css            # Navbar styles
│   └── image/                    # Portfolio images
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd anibesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### 🏠 Home Page (`/`)
- Animated hero section with collage effect
- Featured work showcase
- Client testimonials
- Call-to-action sections

### 📸 Portfolio (`/portfolio`)
- Filterable gallery by category
- Lightbox image viewer
- Responsive grid layout
- Smooth animations

### 👨‍💼 About (`/about`)
- Personal story and background
- Statistics and achievements
- Skills and expertise
- Equipment showcase

### 🎯 Services (`/services`)
- Service categories with pricing
- Process workflow
- Interactive service cards
- Contact call-to-action

### 📞 Contact (`/contact`)
- Functional contact form
- Contact information
- Social media links
- Studio location and hours

## 🎨 Customization

### Colors
The color scheme uses a black and gold theme:
- Primary: `#fbbf24` (Yellow-400)
- Secondary: `#f59e0b` (Orange-500)
- Background: `#000000` (Black)
- Text: `#ffffff` (White)

### Images
Replace images in `public/image/` directory:
- `img1.jpg` to `img8.jpg` for portfolio images
- Ensure images are optimized for web (recommended: 1920x1080px)

### Content
Update content in respective page files:
- Personal information in About page
- Services and pricing in Services page
- Contact details in Contact page
- Portfolio items in Portfolio page

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js`:
- Custom colors and fonts
- Responsive breakpoints
- Animation utilities

### GSAP Animations
Scroll-triggered animations configured in each page:
- Hero section parallax
- Card entrance animations
- Text reveal effects

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **AWS Amplify**: Compatible with Next.js
- **DigitalOcean App Platform**: Supports Node.js

## 🔍 SEO Optimization

- Meta tags for each page
- Open Graph images
- Structured data
- Performance optimization
- Mobile-first design

## 📈 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **GSAP** for powerful animations
- **Framer Motion** for React animations

## 📞 Support

For support or questions:
- Email: hello@anibesh.com
- Website: [anibesh.com](https://anibesh.com)

---

**Built with ❤️ by Anibesh**
