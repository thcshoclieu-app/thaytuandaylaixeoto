# Template Website: Học Lái Xe Ô Tô & Đặt Xe Gia Đình (Cyber Neon)

Hệ thống Website sử dụng React, Vite, TypeScript, TailwindCSS và phong cách giao diện Cyber Neon cao cấp.

## Hướng dẫn cài đặt và chạy máy chủ

**1. Cài đặt các thư viện (Dependencies)**

Mở terminal và gõ lệnh sau để cài đặt các gói cần thiết:

```bash
npm install
```

**2. Khởi động server cho môi trường Development**

```bash
npm run dev
```

Server sẽ tự động liên kết trên `http://localhost:3000` hoặc cổng được chỉ định.

## Hướng dẫn đưa lên GitHub (Push GitHub)

1. Khởi tạo repository cục bộ:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cyber Neon Landing Page"
   ```

2. Tạo repository trên Github và add remote URL:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

3. Push source code:
   ```bash
   git push -u origin main
   ```

## Hướng dẫn Deploy lên Netlify

Website được thiết kế hoàn toàn bằng công nghệ Front-end, có thể trực tiếp đưa lên Netlify mà không cần máy chủ Node.js tuỳ chỉnh.

1. Đăng nhập vào [Netlify](https://app.netlify.com/).
2. Chọn **"Add new site"** -> **"Import an existing project"** từ GitHub của bạn.
3. Thiết lập thông số quá trình Build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Ấn **"Deploy site"**. Netlify sẽ tự động build và chạy nền tảng của bạn.

> **Lưu ý về gửi Form:** Tính năng đặt xe và đăng ký khoá học đã được tích hợp liên kết trực tiếp với FormSubmit để dễ dàng sử dụng trên môi trường Hosting tính phí hay miễn phí như Netlify / Vercel. Không cần phải setup back-end!
