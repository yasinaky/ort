import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.jsx'
import { 
  Monitor, 
  Wifi, 
  Printer, 
  Shield, 
  Users, 
  Phone, 
  Mail, 
  Key, 
  Network,
  HelpCircle,
  CheckCircle,
  Clock,
  Settings,
  Laptop,
  Smartphone,
  Server,
  Database,
  Lock,
  Globe,
  FileText,
  MessageSquare,
  AlertTriangle,
  Info,
  Zap,
  Building,
  UserCheck,
  Headphones,
  CreditCard,
  DollarSign,
  Video,
  MessageCircle,
  Timer,
  Star,
  Target,
  BookOpen,
  Lightbulb,
  CheckSquare
} from 'lucide-react'
import './App.css'

// Import images
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import itSupportImg from './assets/GNz044Hb4iOk.webp'
import networkDiagramImg from './assets/agntIGyNicYN.png'
import vpnSetupImg from './assets/iSfAhUhA08yy.jpg'
import printerSetupImg from './assets/kKSP5oyNnTrJ.jpg'

// New images for expanded content
import itArchitectureImg from './assets/mI0UM3tU7v6m.jpg'
import networkSecurityImg from './assets/Xprc2unBzvRO.png'
import backOfficeImg from './assets/16Dl3zb6bSKx.png'
import citrixImg from './assets/SIK5Hx3fX282.png'
import checkpointImg from './assets/zwdfCJ6MmLh4.png'
import helpdeskImg from './assets/Sm7v3YkJbMTF.webp'
import communicationChannelsImg from './assets/CtwxmAUxdTcz.png'

function App() {
  const [currentSection, setCurrentSection] = useState('overview')
  const [completedSections, setCompletedSections] = useState(new Set())
  const [progress, setProgress] = useState(0)

  const sections = [
    { id: 'overview', title: 'Hoş Geldiniz', icon: Monitor, duration: '5 dk' },
    { id: 'accounts', title: 'Kullanıcı Hesapları', icon: Users, duration: '6 dk' },
    { id: 'network', title: 'Wi-Fi ve Ağ', icon: Wifi, duration: '6 dk' },
    { id: 'printers', title: 'Yazıcılar & Ekipmanlar', icon: Printer, duration: '6 dk' },
    { id: 'cards', title: 'Kapı Giriş Kartları', icon: CreditCard, duration: '5 dk' },
    { id: 'expenses', title: 'Masraf Girişleri', icon: DollarSign, duration: '6 dk' },
    { id: 'communication', title: 'İletişim Araçları', icon: MessageCircle, duration: '6 dk' },
    { id: 'support', title: 'Destek & Kapanış', icon: HelpCircle, duration: '5 dk' }
  ]

  const markSectionComplete = (sectionId) => {
    const newCompleted = new Set(completedSections)
    newCompleted.add(sectionId)
    setCompletedSections(newCompleted)
    setProgress((newCompleted.size / sections.length) * 100)
  }

  const SectionCard = ({ children, className = "" }) => (
    <Card className={`mb-6 ${className}`}>
      {children}
    </Card>
  )

  const OverviewSection = () => (
    <div className="space-y-6">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Digiturk IT Oryantasyonu
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Yeni Başlayanlar İçin Kapsamlı Teknoloji Rehberi
        </p>
        <div className="max-w-4xl mx-auto">
          <img src={image1} alt="Digiturk Logo" className="mx-auto mb-6 max-h-32" />
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Timer className="h-5 w-5 text-blue-600" />
              <span className="text-lg font-semibold text-blue-800">Sunum Süresi: 40 Dakika</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Şirketimize Hoş Geldiniz!</strong> Teknoloji, iş süreçlerimizin kalbi. Bu sunumda günlük işlerinizi 
              kolaylaştıracak sistemleri öğreneceksiniz. Doğru teknoloji kullanımı zaman kazandırır, güvenliği artırır 
              ve ekip çalışmasını güçlendirir.
            </p>
          </div>
        </div>
      </div>

      <SectionCard>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Neden Önemli?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800">Zaman Kazandırır</h4>
              <p className="text-sm text-green-700">Verimli sistem kullanımı</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">Güvenliği Artırır</h4>
              <p className="text-sm text-blue-700">Veri ve sistem koruması</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-800">Ekip Çalışması</h4>
              <p className="text-sm text-purple-700">İşbirliğini güçlendirir</p>
            </div>
          </div>
        </CardContent>
      </SectionCard>

      <SectionCard>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            IT Ekibiyle Tanışın
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <Badge variant="outline" className="mb-2">TECH_INFRA</Badge>
              <p className="text-sm text-gray-600 mb-2">Teknoloji Altyapısı</p>
              <p className="text-xs text-gray-500">Sunucular, depolama sistemleri, veri merkezleri</p>
            </div>
            <div className="p-4 border rounded-lg">
              <Badge variant="outline" className="mb-2">TECH_NETSEC</Badge>
              <p className="text-sm text-gray-600 mb-2">Ağ ve Siber Güvenlik</p>
              <p className="text-xs text-gray-500">Güvenlik duvarları, sızma testleri</p>
            </div>
            <div className="p-4 border rounded-lg">
              <Badge variant="outline" className="mb-2">TECH_BACKOFFICE</Badge>
              <p className="text-sm text-gray-600 mb-2">Arka Ofis Teknolojileri</p>
              <p className="text-xs text-gray-500">ERP, CRM, İK sistemleri</p>
            </div>
          </div>
          
          <Alert>
            <Phone className="h-4 w-4" />
            <AlertTitle>Ana İletişim</AlertTitle>
            <AlertDescription>
              <strong>Helpdesk: 0911</strong> - 7/24 teknik destek için ana iletişim noktanız
            </AlertDescription>
          </Alert>
        </CardContent>
      </SectionCard>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('overview')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const AccountsSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Kullanıcı Adı ve Şifre Yönetimi</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="h-4 w-4 text-gray-600" />
          <span className="text-gray-600">6 Dakika</span>
        </div>
        <img src={image2} alt="Account Setup" className="mx-auto max-h-48 mb-4" />
      </div>

      <SectionCard>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Kullanıcı Adı Formatı
          </CardTitle>
          <CardDescription>
            Digiturk sistemlerine erişim için size özel kullanıcı hesapları tanımlanmıştır.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Digiturk Hesapları:</h4>
                <p className="text-gray-700 font-mono text-sm">ad.soyad@digiturk.com.tr</p>
                <p className="text-gray-700 font-mono text-sm">DTYAKYUZLU</p>
                <p className="text-xs text-gray-600 mt-1">İlk gün IT'den e-posta ile teslim edilir</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold mb-2">beIN Hesapları:</h4>
                <p className="text-gray-700 font-mono text-sm">akyuzluy@bein.com</p>
                <p className="text-gray-700 font-mono text-sm">akyuzluy</p>
                <p className="text-xs text-gray-600 mt-1">Global sistemler için</p>
              </div>
            </div>
          </div>
        </CardContent>
      </SectionCard>

      <SectionCard className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <Key className="h-5 w-5" />
            Şifre Kuralları ve Güvenliği
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="font-semibold text-yellow-800">Minimum Kriterler:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Minimum 8 karakter uzunluğunda</li>
                  <li>• Büyük/küçük harf kombinasyonu</li>
                  <li>• En az bir rakam ve özel karakter</li>
                  <li>• Örnek: "Guvenli123!"</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-yellow-800">Yenileme Kuralları:</h5>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 90 günde bir yenileyin</li>
                  <li>• Aynı şifreyi tekrar kullanmayın</li>
                  <li>• E-posta bildirimleri dikkate alın</li>
                  <li>• Unutursanız Helpdesk'i arayın</li>
                </ul>
              </div>
            </div>
            
            <Alert className="border-green-300 bg-green-50">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Çok Faktörlü Doğrulama (MFA)</AlertTitle>
              <AlertDescription className="text-green-700">
                İlk girişte telefonunuza gelen kodu girerek MFA'yı etkinleştirin. 
                Google Authenticator veya SMS kullanılabilir.
              </AlertDescription>
            </Alert>
            
            <img src={image3} alt="Password Setup" className="mx-auto max-h-32 rounded-lg" />
          </div>
        </CardContent>
      </SectionCard>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('accounts')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const NetworkSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Wi-Fi ve Ağ Bağlantıları</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="h-4 w-4 text-gray-600" />
          <span className="text-gray-600">6 Dakika</span>
        </div>
        <img src={networkDiagramImg} alt="Network Diagram" className="mx-auto max-h-48 mb-4 rounded-lg" />
        <p className="text-gray-600 max-w-3xl mx-auto">
          Digiturk kampüsünde ve uzaktan çalışırken güvenli ve kesintisiz ağ bağlantısı 
          sağlamak için çeşitli seçenekler sunulmaktadır.
        </p>
      </div>

      <Tabs defaultValue="corporate" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="corporate">Şirket Wi-Fi</TabsTrigger>
          <TabsTrigger value="guest">Misafir Wi-Fi</TabsTrigger>
          <TabsTrigger value="remote">Uzaktan Erişim</TabsTrigger>
        </TabsList>
        
        <TabsContent value="corporate">
          <SectionCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5" />
                Şirket Wireless Ağı
              </CardTitle>
              <CardDescription>
                Ofis içinde mobilite ve esneklik sağlamak amacıyla kablosuz ağ bağlantısı.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Ağ Adları (SSID):</h4>
                    <ul className="space-y-1">
                      <li className="text-blue-700 font-mono">• DTDATA</li>
                      <li className="text-blue-700 font-mono">• DTDATA2</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Giriş Bilgileri:</h4>
                    <p className="text-green-700">Digiturk kullanıcı adınız ve şifreniz</p>
                  </div>
                </div>
                
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Önemli Not</AlertTitle>
                  <AlertDescription>
                    Kişisel cihazlarınızı bağlamadan önce IT'den onay alın. Bu ağlar şirket içi 
                    kaynaklara ve internete güvenli erişim sağlar.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </SectionCard>
        </TabsContent>
        
        <TabsContent value="guest">
          <SectionCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Misafir Wireless Ağı
              </CardTitle>
              <CardDescription>
                Ziyaretçiler ve harici iş ortakları için ayrı bir misafir ağı.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Ağ Adı (SSID):</h4>
                  <p className="text-orange-700 font-mono text-lg">WiSpotter</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Şifre:</h4>
                  <p className="text-orange-700 font-mono text-lg">Ziyaretci123</p>
                </div>
              </div>
              
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Kısıtlamalar</AlertTitle>
                <AlertDescription>
                  Sadece temel internet erişimi sağlar. Dosya paylaşımı ve şirket içi ağ erişimi yoktur.
                </AlertDescription>
              </Alert>
            </CardContent>
          </SectionCard>
        </TabsContent>
        
        <TabsContent value="remote">
          <SectionCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Uzaktan Çalışma - VPN
              </CardTitle>
              <CardDescription>
                Şirket dışından Digiturk ağına güvenli erişim için VPN bağlantısı.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700">
                  VPN gerekli: IT'den Cisco AnyConnect kurulum linkini talep edin. 
                  VPN şifresi, kullanıcı adınızla aynıdır.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={citrixImg} alt="Citrix" className="h-12 w-12 rounded" />
                      <div>
                        <h4 className="font-semibold">SOHO Citrix</h4>
                        <p className="text-sm text-gray-600">Web tabanlı erişim</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Tarayıcınız üzerinden Citrix portalına bağlanarak şirket içi uygulamalara 
                      erişebilirsiniz. Kurulum gerektirmeyen, hızlı çözüm.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={checkpointImg} alt="Checkpoint" className="h-12 w-12 rounded" />
                      <div>
                        <h4 className="font-semibold">VPN Checkpoint</h4>
                        <p className="text-sm text-gray-600">Uygulama tabanlı erişim</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Bilgisayarınıza yüklenir ve şirket ağına tam erişim sağlar. 
                      Yoğun veri transferi için idealdir.
                    </p>
                  </div>
                </div>
                
                <Alert>
                  <Zap className="h-4 w-4" />
                  <AlertTitle>Sorun Giderme</AlertTitle>
                  <AlertDescription>
                    Wi-Fi bağlanmıyorsa cihazınızı yeniden başlatın veya IT'yi arayın.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </SectionCard>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('network')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const PrintersSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Yazıcılar ve Ofis Ekipmanları</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="h-4 w-4 text-gray-600" />
          <span className="text-gray-600">6 Dakika</span>
        </div>
        <img src={printerSetupImg} alt="Printer Setup" className="mx-auto max-h-48 mb-4 rounded-lg" />
      </div>

      <SectionCard>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Printer className="h-5 w-5" />
            Yazıcı Konumları
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Örnek Konumlar:</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Kat: Koridor sonu, HP LaserJet Pro</li>
                <li>• Kat: Toplantı odası yanı, Canon Pixma</li>
                <li>• Her katta en az bir çok fonksiyonlu yazıcı</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Yazıcı Seçenekleri:</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• "HP_LaserJet_1"</li>
                <li>• "Canon_Pixma_2"</li>
                <li>• Çift taraflı baskı varsayılan açık</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </SectionCard>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="usage">
          <AccordionTrigger className="text-lg font-semibold">
            🖨️ Nasıl Kullanılır?
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li><strong>Belgeyi Gönderin:</strong> Bilgisayarınızdan yazıcıyı seçin</li>
                    <li><strong>Renkli Baskı:</strong> "Renkli" seçeneğini işaretleyin</li>
                    <li><strong>Yazıcıya Gidin:</strong> İlgili kata gidin</li>
                    <li><strong>Kartınızı Okutun:</strong> Personel kartınızı okutun</li>
                    <li><strong>Çıktılarınızı Alın:</strong> Yazdırma başlayacak</li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <img src={image5} alt="Printer Interface" className="rounded-lg max-h-32 w-full object-cover" />
                  <img src={image6} alt="Card Reader" className="rounded-lg max-h-32 w-full object-cover" />
                </div>
              </div>
              
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertTitle>Bekleme Süresi</AlertTitle>
                <AlertDescription>
                  20 dakika havuzda bekler, sonra otomatik silinir. Gereksiz kağıt israfını önler.
                </AlertDescription>
              </Alert>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="troubleshooting">
          <AccordionTrigger className="text-lg font-semibold">
            🔧 Sorun Giderme
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">Kağıt Sıkışması</h5>
                <p className="text-sm text-red-700">Ekran talimatlarını izleyin</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">Bağlantı Hatası</h5>
                <p className="text-sm text-yellow-700">Yazıcıyı kapatıp açın, IT'yi arayın</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Ek Ekipman:</strong> Tarayıcılar yazıcılarla entegre, PDF çıktısı için "Tara" seçeneğini kullanın.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('printers')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const CardsSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Kapı Giriş Kartları</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="h-4 w-4 text-gray-600" />
          <span className="text-gray-600">5 Dakika</span>
        </div>
        <CreditCard className="h-24 w-24 text-blue-600 mx-auto mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Nasıl Alırım?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">İlk gün İnsan Kaynakları'ndan teslim edilir.</p>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Kullanım</AlertTitle>
              <AlertDescription>
                Kartı okuyucuya 2-3 cm uzakta tutun, yeşil ışık yandığında kapıyı açın.
              </AlertDescription>
            </Alert>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Güvenlik Kuralları
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• Kartınızı ofis dışına çıkarmayın</li>
              <li>• Masanızda bırakmayın</li>
              <li>• Kaybolursa derhal güvenliğe haber verin</li>
            </ul>
          </CardContent>
        </SectionCard>
      </div>

      <SectionCard className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertTriangle className="h-5 w-5" />
            Kaybolursa Ne Yapmalı?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-orange-700">
              Derhal IT veya güvenliğe haber verin: <strong>guvenlik@sirket.com</strong> 
              (Digiturk için güncellenecek)
            </p>
            <Alert className="border-green-300 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Geçici Erişim</AlertTitle>
              <AlertDescription className="text-green-700">
                Yeni kart hazırlanana kadar resepsiyondan geçici kart alın.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </SectionCard>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('cards')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const ExpensesSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Masraf Girişleri</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="h-4 w-4 text-gray-600" />
          <span className="text-gray-600">6 Dakika</span>
        </div>
        <DollarSign className="h-24 w-24 text-green-600 mx-auto mb-4" />
      </div>

      <SectionCard>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            ExpenseApp Sistemi
          </CardTitle>
          <CardDescription>
            expense.sirket.com (Digiturk için güncellenecek)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h4 className="font-semibold">Nasıl Kullanılır:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Giriş:</strong> Şirket e-posta ve şifrenizle</li>
              <li><strong>Yeni masraf:</strong> "Masraf Ekle" > Fişi tarat > Kategori seç</li>
              <li><strong>Kategoriler:</strong> Seyahat, Yemek, vs.</li>
              <li><strong>Onay:</strong> Fiş fotoğrafının net olduğundan emin olun</li>
            </ol>
          </div>
        </CardContent>
      </SectionCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckSquare className="h-5 w-5" />
              Politika Kuralları
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-green-700">
              <li>• Seyahat masrafları: Maks. 500 TL/gün (otel hariç)</li>
              <li>• Fişsiz masraf kabul edilmez</li>
              <li>• Detaylar intranet'te bulunur</li>
            </ul>
          </CardContent>
        </SectionCard>

        <SectionCard className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <HelpCircle className="h-5 w-5" />
              Sorun Olursa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700">
              Finans ekibine yazın: <strong>finans@sirket.com</strong> 
              (Digiturk için güncellenecek)
            </p>
          </CardContent>
        </SectionCard>
      </div>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('expenses')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const CommunicationSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">İletişim ve İşbirliği Araçları</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="h-4 w-4 text-gray-600" />
          <span className="text-gray-600">6 Dakika</span>
        </div>
        <img src={communicationChannelsImg} alt="Communication Tools" className="mx-auto max-h-48 mb-4 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SectionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              E-posta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p><strong>Platform:</strong> Microsoft Outlook</p>
              <p><strong>Adres:</strong> ad.soyad@digiturk.com.tr</p>
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>İpucu</AlertTitle>
                <AlertDescription>
                  Gereksiz e-postaları "Arşiv" klasörüne taşıyın.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Anlık Mesajlaşma
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p><strong>Platform:</strong> Microsoft Teams</p>
              <p className="text-sm text-gray-600">
                Ekip kanallarına katılın, "@ad.soyad" ile kişilere ulaşın
              </p>
              <div className="p-2 bg-gray-100 rounded font-mono text-sm">
                "@ayse.yilmaz Toplantı saati?"
              </div>
            </div>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Video Toplantılar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p><strong>Platform:</strong> Zoom</p>
              <p className="text-sm text-gray-600">
                Toplantı linkine tıklayın, kamera/mikrofonu kontrol edin
              </p>
              <Alert>
                <Star className="h-4 w-4" />
                <AlertTitle>İpucu</AlertTitle>
                <AlertDescription>
                  Arka plan bulanıklaştırma özelliğini kullanın.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </SectionCard>
      </div>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('communication')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const SupportSection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Soru-Cevap ve Kapanış</h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Timer className="h-4 w-4 text-gray-600" />
          <span className="text-gray-600">5 Dakika</span>
        </div>
        <img src={helpdeskImg} alt="Support" className="mx-auto max-h-48 mb-4 rounded-lg" />
      </div>

      <SectionCard className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <HelpCircle className="h-5 w-5" />
            Sorular
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 text-lg">
            Teknolojiyle ilgili aklınıza takılan her şeyi sorun!
          </p>
        </CardContent>
      </SectionCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Kaynaklar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Intranet:</strong> intranet.sirket.com (tüm kılavuzlar)</li>
              <li>• <strong>IT Destek:</strong> itdestek@sirket.com, 0911</li>
              <li>• <strong>Geri Bildirim:</strong> [Anket Linki]</li>
            </ul>
          </CardContent>
        </SectionCard>

        <SectionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Sonraki Adımlar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• ExpenseApp eğitimini tamamlayın</li>
              <li>• Teams eğitimini tamamlayın</li>
              <li>• İntranet'ten kılavuzları inceleyin</li>
            </ul>
          </CardContent>
        </SectionCard>
      </div>

      <SectionCard className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Lightbulb className="h-5 w-5" />
            Ek Öneriler
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-blue-700">
            <p><strong>İnteraktiflik:</strong> Teams'te bir deneme mesajı attırın veya ExpenseApp'te sahte bir masraf girişi yaptırın.</p>
            <p><strong>Erişim:</strong> Sunumu PDF olarak intranet'e yükleyin, mobil uyumlu olsun.</p>
            <p><strong>Şirket Kültürü:</strong> Teknolojinin iş birliğini nasıl güçlendirdiğini vurgulayın (örneğin, Teams kanallarıyla hızlı iletişim).</p>
          </div>
        </CardContent>
      </SectionCard>

      <div className="text-center">
        <Button 
          onClick={() => markSectionComplete('support')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Bu Bölümü Tamamladım
        </Button>
      </div>
    </div>
  )

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'overview': return <OverviewSection />
      case 'accounts': return <AccountsSection />
      case 'network': return <NetworkSection />
      case 'printers': return <PrintersSection />
      case 'cards': return <CardsSection />
      case 'expenses': return <ExpensesSection />
      case 'communication': return <CommunicationSection />
      case 'support': return <SupportSection />
      default: return <OverviewSection />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Monitor className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Digiturk IT Oryantasyonu</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                İlerleme: {Math.round(progress)}%
              </div>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">İçindekiler</CardTitle>
                <CardDescription>40 Dakikalık Sunum</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon
                    const isCompleted = completedSections.has(section.id)
                    const isCurrent = currentSection === section.id
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => setCurrentSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          isCurrent 
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <div className="flex-1">
                          <span className="text-sm font-medium">{section.title}</span>
                          <div className="text-xs text-gray-500">{section.duration}</div>
                        </div>
                        {isCompleted && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderCurrentSection()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

