---

# Araç Kiralama Sitesi  

Bu proje, **Next.js** ile geliştirilmiş, araç kiralama hizmeti sunan bir web uygulamasıdır. Backend, **Next.js API** ile oluşturulmuş olup, veri tabanı olarak **MongoDB** kullanılmaktadır. Frontend tasarımı **Tailwind CSS** ile yapılmıştır. Ödeme süreçleri için **Stripe** test modu entegre edilmiştir.  

## Özellikler  

- **Araç Listeleme ve Detaylar:** Araçların listelenmesi, detaylarının görüntülenmesi.  
- **Filtreleme ve Arama:** Kullanıcıların araçları marka, model veya fiyat aralığı gibi kriterlere göre filtreleyebilmesi.  
- **Rezervasyon ve Ödeme:** Stripe ile test modunda ödeme yaparak araç rezervasyonu.  
- **Kullanıcı Dostu Arayüz:** Mobil ve masaüstü cihazlara uyumlu, modern tasarım.  

## Kullanılan Teknolojiler  

- **Frontend:**  
  - [Next.js](https://nextjs.org/)  
  - [Tailwind CSS](https://tailwindcss.com/)  
- **Backend:**  
  - Next.js API Routes  
  - [MongoDB](https://www.mongodb.com/)  
- **Ödeme Sistemi:**  
  - [Stripe](https://stripe.com/) (Test modu)  

## Kurulum  

### 1. Depoyu Klonla  

Proje dosyalarını yerel ortamınıza klonlayın:  
```bash  
git clone https://github.com/cengo14/nextjs-car-rental-project
cd nextjs-car-rental-project  
```  

### 2. Çevre Değişkenlerini Ayarla  

Proje kök dizininde bir `.env.local` dosyası oluşturun ve aşağıdaki değişkenleri doldurun:  
```env  
MONGO_URL=<mongodb-bağlantı-url>  
STRIPE_KEY=<stripe-gizli-anahtar>  
WEBHOOK_KEY=<webhook key>
BASE_API_URL=http://localhost:3000 
```  

### 3. Bağımlılıkları Yükle  

Bağımlılıkları kurmak için aşağıdaki komutu çalıştırın:  
```bash  
npm install  
# veya  
yarn install  
```  

### 4. Geliştirme Sunucusunu Başlat  

Projenin geliştirme modunda çalıştırılması için:  
```bash  
npm run dev  
# veya  
yarn dev  
```  

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz.  

## Ekran Görüntüleri  

![uygulama görüntüsü](./screenshots/ss.gif)


## Geliştirme Notları  

- **MongoDB:** Projede veri tabanı olarak MongoDB kullanılmaktadır. Bağlantı URL'si `.env.local` dosyasında belirtilmelidir.  
- **Stripe:** Stripe test anahtarları kullanılarak ödeme süreçleri simüle edilmiştir. Gerçek ödeme entegrasyonu için canlı anahtarlar kullanılmalıdır.  

## Katkı  

Katkıda bulunmak isterseniz:  
1. Bu repoyu fork edin.  
2. Yeni bir dal oluşturun (`git checkout -b feature/yenilik`).  
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`).  
4. Dalı gönderin (`git push origin feature/yenilik`).  
5. Bir **Pull Request** açın.  

## Lisans  

Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyebilirsiniz.  

---
