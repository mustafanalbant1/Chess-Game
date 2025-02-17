# ♟️ Chess Game

## 📝 Proje Açıklaması
Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, interaktif bir çevrimiçi satranç oyunudur. Kullanıcılar hem bilgisayara karşı hem de gerçek rakiplerle çevrimiçi olarak satranç oynayabilirler.

## 🛠️ Kullanılan Teknolojiler
**Frontend:** React.js  
**Backend:** Node.js & Express.js  
**Veritabanı:** MongoDB  
**Gerçek Zamanlı İletişim:** Socket.io  
**Satranç Motoru:** Stockfish.js  
**Stil:** CSS3 & Material-UI  
**State Management:** Redux  
**Testing:** Jest  

## ⚙️ Kurulum

Aşağıdaki adımları takip ederek projeyi yerel ortamınızda çalıştırabilirsiniz:

```bash
# Repository'yi klonlayın
git clone https://github.com/kullaniciadi/chess-game.git

# Proje dizinine gidin
cd chess-game

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## 🔑 Ortam Değişkenleri
Projeyi çalıştırmak için aşağıdaki ortam değişkenlerini `.env` dosyanızda tanımlamanız gerekmektedir:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STOCKFISH_PATH=your_stockfish_path
SOCKET_PORT=your_socket_port
```

## 🤝 Katkıda Bulunma
Projeye katkıda bulunmak için aşağıdaki adımları takip edebilirsiniz:

1. Projeyi **fork** edin.
2. Yeni bir **feature** branch oluşturun:
   ```bash
   git checkout -b feature/YeniOzellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m 'Yeni özellik eklendi'
   ```
4. Branch'inizi push edin:
   ```bash
   git push origin feature/YeniOzellik
   ```
5. Bir **Pull Request** oluşturun.

## 🙏 Teşekkürler
- **Stockfish** - Satranç motoru
- **chess.js** - Satranç kütüphanesi
- **chessboard.js** - Satranç tahtası UI

