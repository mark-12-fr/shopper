const products = [
  { id: 1, name: 'iPhone 15 Pro Max 256GB', category: 'electronics', price: 89990, origPrice: 99990, image: 'https://loremflickr.com/320/320/iphone,smartphone?lock=1', rating: 4.8, sold: 1520, stock: 50, badge: '-10%', maxPerUser: 2, qa: [{ q: 'Is this dual SIM?', a: 'Yes, it supports dual eSIM or one physical SIM + eSIM.', user: 'Apple PH', date: '2026-05-01' }], desc: 'Apple iPhone 15 Pro Max featuring the powerful A17 Pro chip, a 48MP camera system, and a stunning titanium design. Experience unparalleled performance.', video: 'https://www.youtube.com/embed/m-EV2yYcnSo', variants: { colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium'], sizes: ['256GB', '512GB', '1TB'] }, images: ['https://loremflickr.com/320/320/iphone,smartphone?lock=1', 'https://loremflickr.com/320/320/iphone,pro,max?lock=101', 'https://loremflickr.com/320/320/iphone,back,phone?lock=102'], reviews: [
    { id: 101, user: 'Maria C.', rating: 5, comment: 'Worth every peso! The camera quality is insane.', date: '2026-05-12' },
    { id: 102, user: 'Juan D.', rating: 5, comment: 'Super fast and the battery lasts all day.', date: '2026-04-28' },
    { id: 103, user: 'Ana R.', rating: 4, comment: 'Great phone but a bit heavy. Otherwise perfect.', date: '2026-04-10' }
  ]},
  { id: 2, name: 'Samsung Galaxy S24 Ultra', category: 'electronics', price: 79990, origPrice: 89990, image: 'https://loremflickr.com/320/320/samsung,galaxy,phone?lock=2', rating: 4.7, sold: 980, stock: 25, badge: '-11%', desc: 'Samsung Galaxy S24 Ultra with built-in S Pen, 200MP camera, and advanced Galaxy AI features. The ultimate productivity companion.', variants: { colors: ['Titanium Gray', 'Titanium Violet', 'Titanium Yellow'], sizes: ['256GB', '512GB'] }, images: ['https://loremflickr.com/320/320/samsung,galaxy,phone?lock=2', 'https://loremflickr.com/320/320/samsung,s24,ultra?lock=201'], reviews: [
    { id: 201, user: 'Carlos M.', rating: 5, comment: 'Best Android phone I have ever used!', date: '2026-05-08' },
    { id: 202, user: 'Bella T.', rating: 4, comment: 'Love the S Pen. Camera is impressive.', date: '2026-04-20' }
  ]},
  { id: 3, name: 'Wireless Bluetooth Earbuds Pro', category: 'electronics', price: 1299, origPrice: 2499, image: 'https://loremflickr.com/320/320/earbuds,headphones?lock=3', rating: 4.5, sold: 8230, stock: 200, badge: '-48%', desc: 'Premium wireless earbuds with active noise cancellation, intuitive touch controls, and long-lasting battery life for all-day listening.', variants: { colors: ['White', 'Black', 'Navy'] }, images: ['https://loremflickr.com/320/320/earbuds,headphones?lock=3', 'https://loremflickr.com/320/320/earbuds,wireless?lock=301'], reviews: [
    { id: 301, user: 'Dennis L.', rating: 5, comment: 'ANC is top-notch. Great for commuting.', date: '2026-05-14' },
    { id: 302, user: 'Kate P.', rating: 4, comment: 'Comfortable fit and sound quality is excellent.', date: '2026-05-01' },
    { id: 303, user: 'Rico S.', rating: 4, comment: 'Battery life is amazing. Value for money.', date: '2026-04-15' }
  ]},
  { id: 4, name: 'Mechanical Gaming Keyboard RGB', category: 'electronics', price: 2499, origPrice: 3999, image: 'https://loremflickr.com/320/320/keyboard,gaming?lock=4', rating: 4.6, sold: 3450, stock: 75, badge: null, desc: 'Full RGB mechanical keyboard with durable blue switches, N-key rollover, and programmable macro keys. Built for serious gamers.', variants: { colors: ['Black', 'White'] }, reviews: [
    { id: 401, user: 'Gamer_101', rating: 5, comment: 'The RGB is gorgeous and the switches feel great.', date: '2026-05-10' },
    { id: 402, user: 'TechNerd', rating: 4, comment: 'Solid build quality. Software could be better.', date: '2026-04-22' }
  ]},
  { id: 5, name: 'Premium Cotton Casual T-Shirt', category: 'fashion', price: 399, origPrice: 799, image: 'https://loremflickr.com/320/320/tshirt,cotton,clothing?lock=5', rating: 4.4, sold: 12500, stock: 500, badge: '-50%', desc: 'Ultra-soft premium cotton t-shirt with a modern fit. Available in multiple colors and sizes for a versatile everyday look.', variants: { colors: ['White', 'Black', 'Navy', 'Gray'], sizes: ['S', 'M', 'L', 'XL'] }, images: ['https://loremflickr.com/320/320/tshirt,cotton,clothing?lock=5', 'https://loremflickr.com/320/320/tshirt,white?lock=501', 'https://loremflickr.com/320/320/tshirt,black?lock=502'], reviews: [
    { id: 501, user: 'Sofia G.', rating: 5, comment: 'Sobrang lambot! Perfect for daily use.', date: '2026-05-15' },
    { id: 502, user: 'Mark A.', rating: 4, comment: 'Good quality for the price. True to size.', date: '2026-05-02' },
    { id: 503, user: 'Jenny K.', rating: 4, comment: 'Bought 3 colors. Will buy again!', date: '2026-04-18' }
  ]},
  { id: 6, name: 'Classic Fit Denim Jacket', category: 'fashion', price: 1499, origPrice: 2999, image: 'https://loremflickr.com/320/320/denim,jacket?lock=6', rating: 4.6, sold: 2780, stock: 120, badge: '-50%', desc: 'Timeless denim jacket crafted from high-quality denim. Features a classic cut that pairs perfectly with any outfit.', variants: { colors: ['Light Blue', 'Dark Blue'], sizes: ['S', 'M', 'L', 'XL'] }, reviews: [
    { id: 601, user: 'Paolo N.', rating: 5, comment: 'Classic look and great fit. Highly recommended.', date: '2026-05-06' },
    { id: 602, user: 'Liza M.', rating: 4, comment: 'Nice quality denim. A bit stiff at first but loosens up.', date: '2026-04-25' }
  ]},
  { id: 7, name: 'Air Max Running Shoes', category: 'fashion', price: 5499, origPrice: 7999, image: 'https://loremflickr.com/320/320/running,shoes,sneakers?lock=7', rating: 4.7, sold: 4120, stock: 60, badge: null, desc: 'Lightweight running shoes with responsive air cushioning technology. Designed for comfort and performance on every run.', variants: { colors: ['Black/White', 'Blue/Orange', 'All Black'], sizes: ['7', '8', '9', '10', '11'] }, reviews: [
    { id: 701, user: 'RunnerJay', rating: 5, comment: 'Best running shoes I have owned! Super comfy.', date: '2026-05-11' },
    { id: 702, user: 'FitMom', rating: 5, comment: 'Great support for daily jogging. Worth it!', date: '2026-04-30' },
    { id: 703, user: 'Coach R.', rating: 4, comment: 'Durable and lightweight. Good value.', date: '2026-04-12' }
  ]},
  { id: 8, name: 'Slim Fit Chino Pants', category: 'fashion', price: 899, origPrice: 1499, image: 'https://loremflickr.com/320/320/chino,pants,trousers?lock=8', rating: 4.3, sold: 6750, stock: 300, badge: '-40%', desc: 'Modern slim fit chino pants in stretch cotton twill. Comfortable enough for casual wear, polished enough for the office.', variants: { colors: ['Khaki', 'Navy', 'Black', 'Gray'], sizes: ['28', '30', '32', '34', '36'] }, reviews: [
    { id: 801, user: 'OfficeGuy', rating: 4, comment: 'Perfect for office wear. Comfortable fit.', date: '2026-05-09' },
    { id: 802, user: 'Dave C.', rating: 4, comment: 'Good quality fabric. Runs slightly small.', date: '2026-04-19' }
  ]},
  { id: 9, name: 'Decorative Throw Pillow Set of 4', category: 'home', price: 799, origPrice: 1499, image: 'https://loremflickr.com/320/320/pillow,cushion,decor?lock=9', rating: 4.5, sold: 5630, stock: 180, badge: null, desc: 'Premium throw pillow set to elevate your living space. Soft, durable fabric with hidden zipper for easy cleaning.', images: ['https://loremflickr.com/320/320/pillow,cushion,decor?lock=9', 'https://loremflickr.com/320/320/pillow,set?lock=901'], reviews: [
    { id: 901, user: 'HomeBody', rating: 5, comment: 'Transformed my living room! Gorgeous colors.', date: '2026-05-13' },
    { id: 902, user: 'Tita L.', rating: 4, comment: 'Soft and nice quality. Matagal mag-deliver.', date: '2026-04-27' }
  ]},
  { id: 10, name: 'LED Desk Lamp with USB Charging', category: 'home', price: 649, origPrice: 1299, image: 'https://loremflickr.com/320/320/desk,lamp,lighting?lock=10', rating: 4.4, sold: 8940, stock: 250, badge: '-50%', desc: 'Adjustable LED desk lamp with 3 brightness levels, eye-care technology, and a built-in USB charging port for your devices.', reviews: [
    { id: 1001, user: 'StudentPrincess', rating: 5, comment: 'Perfect for studying! The USB port is so handy.', date: '2026-05-07' },
    { id: 1002, user: 'WFH_Dad', rating: 4, comment: 'Good lamp for work from home setup.', date: '2026-04-21' },
    { id: 1003, user: 'Nurse_Ann', rating: 4, comment: 'Brightness levels are great. Easy on the eyes.', date: '2026-04-05' }
  ]},
  { id: 11, name: 'Stainless Steel Knife Set 5-Piece', category: 'home', price: 999, origPrice: 1999, image: 'https://loremflickr.com/320/320/kitchen,knife,set?lock=11', rating: 4.6, sold: 3210, stock: 90, badge: null, desc: 'Professional-grade stainless steel knife set with ergonomic handles. Precision-forged blades for effortless cutting.', reviews: [
    { id: 1101, user: 'Chef_B', rating: 5, comment: 'Sharp and balanced. Professional quality!', date: '2026-05-05' },
    { id: 1102, user: 'MamaRose', rating: 4, comment: 'Makes cooking so much easier. Good value.', date: '2026-04-16' }
  ]},
  { id: 12, name: 'Floating Wall Shelf Set', category: 'home', price: 549, origPrice: 999, image: 'https://loremflickr.com/320/320/wall,shelf,floating?lock=12', rating: 4.3, sold: 4520, stock: 400, badge: '-45%', desc: 'Set of 2 floating wall shelves with a sleek design. Easy to install and perfect for displaying decor in any room.', reviews: [
    { id: 1201, user: 'Dekor_Kween', rating: 5, comment: 'Easy to install and looks premium!', date: '2026-05-03' },
    { id: 1202, user: 'ApartmentLife', rating: 4, comment: 'Great for small spaces. Sturdy enough.', date: '2026-04-14' }
  ]},
  { id: 13, name: 'Vitamin C Skincare Set', category: 'beauty', price: 1299, origPrice: 2499, image: 'https://loremflickr.com/320/320/skincare,vitamin,beauty?lock=13', rating: 4.7, sold: 7610, stock: 150, badge: '-48%', desc: 'Complete Vitamin C skincare regimen including cleanser, toner, serum, and moisturizer. Achieve radiant, glowing skin.', variants: { sizes: ['Travel Kit', 'Full Size Set'] }, images: ['https://loremflickr.com/320/320/skincare,vitamin,beauty?lock=13', 'https://loremflickr.com/320/320/skincare,set?lock=1301'], reviews: [
    { id: 1301, user: 'GlowUpGirl', rating: 5, comment: 'My skin looks so bright! Love this set.', date: '2026-05-14' },
    { id: 1302, user: 'Beauty_Junkie', rating: 5, comment: 'Complete package. Sulit na sulit!', date: '2026-04-29' },
    { id: 1303, user: 'SensitiveSkin', rating: 4, comment: 'Gentle on my skin and works well.', date: '2026-04-11' }
  ]},
  { id: 14, name: 'Matte Liquid Lipstick', category: 'beauty', price: 249, origPrice: 499, image: 'https://loremflickr.com/320/320/lipstick,cosmetics,makeup?lock=14', rating: 4.5, sold: 15200, stock: 600, badge: '-50%', desc: 'Long-wear matte liquid lipstick that stays put all day. Transfer-proof and comfortable on the lips with intense color payoff.', variants: { colors: ['Ruby Red', 'Nude', 'Berry', 'Coral'] }, images: ['https://loremflickr.com/320/320/lipstick,cosmetics,makeup?lock=14', 'https://loremflickr.com/320/320/lipstick,red?lock=1401'], reviews: [
    { id: 1401, user: 'LipstickLover', rating: 5, comment: 'Stays all day! Hindi nagfa-flake.', date: '2026-05-10' },
    { id: 1402, user: 'Makeup_Artista', rating: 4, comment: 'Great color payoff. A bit drying.', date: '2026-04-24' }
  ]},
  { id: 15, name: 'Eau de Parfum 50ml', category: 'beauty', price: 899, origPrice: 1799, image: 'https://loremflickr.com/320/320/perfume,fragrance?lock=15', rating: 4.6, sold: 9830, stock: 85, badge: null, desc: 'A captivating fresh scent with notes of bergamot, jasmine, and sandalwood. Perfect for both daily wear and special occasions.', images: ['https://loremflickr.com/320/320/perfume,fragrance?lock=15', 'https://loremflickr.com/320/320/perfume,bottle?lock=1501'], reviews: [
    { id: 1501, user: 'FragranceFan', rating: 5, comment: 'Smells amazing! Long-lasting scent.', date: '2026-05-12' },
    { id: 1502, user: 'GiftGiver', rating: 4, comment: 'Bought as a gift. The recipient loved it!', date: '2026-04-26' },
    { id: 1503, user: 'DailyUser', rating: 5, comment: 'My new signature scent. Perfect for everyday.', date: '2026-04-08' }
  ]},
  { id: 16, name: 'Ionic Hair Dryer 1800W', category: 'beauty', price: 1199, origPrice: 1999, image: 'https://loremflickr.com/320/320/hair,dryer,beauty?lock=16', rating: 4.4, sold: 4380, stock: 110, badge: '-40%', desc: 'Powerful hair dryer with ionic technology for frizz-free, shiny results. Features 3 heat settings and a concentrator nozzle.', reviews: [
    { id: 1601, user: 'Salon_Owner', rating: 5, comment: 'Professional quality at a great price.', date: '2026-05-06' },
    { id: 1602, user: 'Busy_Mom', rating: 4, comment: 'Dries hair fast. Less frizz than my old one.', date: '2026-04-17' }
  ]},
  { id: 17, name: 'Barista Blend Coffee Beans 500g', category: 'food', price: 599, origPrice: 899, image: 'https://loremflickr.com/320/320/coffee,beans,roasted?lock=17', rating: 4.8, sold: 11200, stock: 350, badge: null, desc: 'Premium Arabica and Robusta blend coffee beans. Medium roast with notes of dark chocolate and caramel for the perfect cup.', variants: { sizes: ['250g', '500g', '1kg'] }, images: ['https://loremflickr.com/320/320/coffee,beans,roasted?lock=17', 'https://loremflickr.com/320/320/coffee,bag?lock=1701'], reviews: [
    { id: 1701, user: 'CoffeeSnob', rating: 5, comment: 'Best beans in this price range! Sarap!', date: '2026-05-15' },
    { id: 1702, user: 'Morning_Ritual', rating: 5, comment: 'Rich flavor and fresh roast. Will reorder.', date: '2026-05-01' },
    { id: 1703, user: 'HomeBarista', rating: 4, comment: 'Good crema. Smooth taste.', date: '2026-04-13' }
  ]},
  { id: 18, name: 'Classic Milk Tea Powder 1kg', category: 'food', price: 449, origPrice: 799, image: 'https://loremflickr.com/320/320/milk,tea,bubble,drink?lock=18', rating: 4.6, sold: 14500, stock: 500, badge: '-44%', desc: 'Authentic classic milk tea powder. Just add water and ice for a refreshing, café-quality drink in seconds.', reviews: [
    { id: 1801, user: 'MilkTea_Stan', rating: 5, comment: 'Tastes just like shop-bought milk tea!', date: '2026-05-11' },
    { id: 1802, user: 'Student_Budget', rating: 4, comment: 'Sulit na sulit for 1kg! Masarap.', date: '2026-04-23' }
  ]},
  { id: 19, name: 'Protein Bars Variety Pack 12ct', category: 'food', price: 799, origPrice: 1299, image: 'https://loremflickr.com/320/320/protein,bar,healthy,snack?lock=19', rating: 4.5, sold: 6730, stock: 200, badge: null, desc: 'Delicious high-protein bars with 20g protein per serving. The perfect post-workout snack or healthy on-the-go option.', reviews: [
    { id: 1901, user: 'FitnessBuff', rating: 5, comment: 'Great macros and actually tastes good!', date: '2026-05-09' },
    { id: 1902, user: 'GymRat22', rating: 4, comment: 'Convenient post-workout snack. Good value.', date: '2026-04-20' },
    { id: 1903, user: 'Healthy_Eater', rating: 4, comment: 'Love the variety pack. Keeps me full.', date: '2026-04-07' }
  ]},
  { id: 20, name: 'Ceremonial Grade Matcha Powder', category: 'food', price: 349, origPrice: 699, image: 'https://loremflickr.com/320/320/matcha,green,tea,powder?lock=20', rating: 4.7, sold: 8910, stock: 180, badge: '-50%', desc: 'Premium Japanese matcha powder from Uji, Kyoto. Stone-ground and ceremonial grade, perfect for lattes and baking.', reviews: [
    { id: 2001, user: 'TeaLoverPH', rating: 5, comment: 'Vibrant green and smooth taste. Authentic!', date: '2026-05-08' },
    { id: 2002, user: 'Baker_Shel', rating: 4, comment: 'Great for baking and lattes. High quality.', date: '2026-04-19' }
  ]},
  { id: 21, name: 'Fast Wireless Charger Pad', category: 'electronics', price: 599, origPrice: 1199, image: 'https://loremflickr.com/320/320/wireless,charger,phone?lock=21', rating: 4.3, sold: 12300, stock: 300, badge: null, desc: 'Qi-compatible fast wireless charging pad with smart temperature control. Works with all Qi-enabled smartphones and earbuds.', reviews: [
    { id: 2101, user: 'TechSavvy', rating: 5, comment: 'Charges fast and looks sleek on my desk.', date: '2026-05-04' },
    { id: 2102, user: 'Gadget_Girl', rating: 4, comment: 'Works perfectly with my iPhone.', date: '2026-04-15' }
  ]},
  { id: 22, name: 'Polarized Aviator Sunglasses', category: 'fashion', price: 499, origPrice: 1499, image: 'https://loremflickr.com/320/320/sunglasses,aviator,fashion?lock=22', rating: 4.4, sold: 7890, stock: 250, badge: '-67%', desc: 'Classic aviator sunglasses with polarized UV400 protection lenses. Lightweight metal frame for all-day comfort.', variants: { colors: ['Gold/Green', 'Gold/Brown', 'Black/Gray'] }, images: ['https://loremflickr.com/320/320/sunglasses,aviator,fashion?lock=22', 'https://loremflickr.com/320/320/sunglasses,gold?lock=2201'], reviews: [
    { id: 2201, user: 'RoadTrip_Guy', rating: 5, comment: 'Great for driving. Reduces glare perfectly.', date: '2026-05-13' },
    { id: 2202, user: 'Fashionista_Me', rating: 4, comment: 'Stylish and affordable. Love the case too.', date: '2026-04-28' },
    { id: 2203, user: 'Beach_Babe', rating: 4, comment: 'Perfect for the beach! Lightweight.', date: '2026-04-09' }
  ]},
  { id: 23, name: 'Eco-Friendly Bamboo Cutting Board', category: 'home', price: 399, origPrice: 699, image: 'https://loremflickr.com/320/320/bamboo,cutting,board,kitchen?lock=23', rating: 4.5, sold: 6540, stock: 220, badge: null, desc: 'Sustainable bamboo cutting board with juice groove. Naturally antimicrobial and gentler on your knives than plastic.', reviews: [
    { id: 2301, user: 'EcoWarrior', rating: 5, comment: 'Love that it is eco-friendly and durable.', date: '2026-05-02' },
    { id: 2302, user: 'HomeCook_PH', rating: 4, comment: 'Good size and the juice groove is handy.', date: '2026-04-14' }
  ]},
  { id: 24, name: 'Hydrating Sheet Mask Box 10pcs', category: 'beauty', price: 349, origPrice: 699, image: 'https://loremflickr.com/320/320/sheet,mask,face,beauty?lock=24', rating: 4.6, sold: 18500, stock: 0, badge: '-50%', desc: 'Intensely hydrating sheet masks infused with collagen and hyaluronic acid. Give your skin an instant glow boost.', images: ['https://loremflickr.com/320/320/sheet,mask,face,beauty?lock=24', 'https://loremflickr.com/320/320/face,mask,skincare?lock=2401'], reviews: [
    { id: 2401, user: 'Skincare_Addict', rating: 5, comment: 'Holy grail mask! Super hydrated after use.', date: '2026-05-14' },
    { id: 2402, user: 'WeddingPrep', rating: 5, comment: 'Using this before my wedding. Glowing skin!', date: '2026-05-01' },
    { id: 2403, user: 'NightShiftRN', rating: 4, comment: 'Refreshing and soothing. Good for tired skin.', date: '2026-04-10' }
  ]}
];

let cart = JSON.parse(localStorage.getItem('shopperCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopperWishlist')) || [];
let orders = JSON.parse(localStorage.getItem('shopperOrders')) || [];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';
let currentModalProduct = null;
let reviewStarRating = 0;
let savedCart = null;
let viewMode = localStorage.getItem('shopperViewMode') || 'grid';
let anonymousMode = localStorage.getItem('shopperAnonymous') === 'true';
let savedAddresses = JSON.parse(localStorage.getItem('shopperAddresses')) || [];
let walletBalance = Number(localStorage.getItem('shopperWallet')) || 0;
let cancelReasons = ['Change of mind', 'Found cheaper elsewhere', 'Product not needed', 'Ordered by mistake', 'Shipping too expensive', 'Other'];
let checkoutTimer = null;
let checkoutTimeLeft = 900;
let zoomLevel = 2;
let imageQuality = 'high';
let recentlyViewed = JSON.parse(localStorage.getItem('shopperRecent')) || [];
let compareList = [];
let appliedCoupon = null;
let modalQty = 1;
let selectedVariantColor = null;
let selectedVariantSize = null;
let currentLang = localStorage.getItem('shopperLang') || 'en';
let recentSearches = JSON.parse(localStorage.getItem('shopperRecentSearches')) || [];
let giftWrapping = false;
let deliveryMethod = 'delivery';
let currentCurrency = localStorage.getItem('shopperCurrency') || 'PHP';
let loyaltyPoints = Number(localStorage.getItem('shopperPoints')) || 0;
let pointsRedeemed = 0;
const GIFT_WRAP_PRICE = 49;
const USD_RATE = 0.018;
const POINTS_PER_PESO = 0.1;
let cartTimeout = null;
let notifPrefs = JSON.parse(localStorage.getItem('shopperNotifPrefs')) || { cartReminder: true, deals: true, orders: true };
let sellerAccounts = {
  1: { name: 'Apple PH Official Store', rating: 4.9, sales: 12500, response: '98%', joined: '2023' },
  5: { name: 'Fashion Hub Manila', rating: 4.7, sales: 45200, response: '95%', joined: '2022' }
};
function getPerfBadge(p) {
  const bestSellers = products.sort((a,b) => b.sold - a.sold).slice(0,3).map(x => x.id);
  if (bestSellers.includes(p.id)) return 'Best Seller';
  const topRated = products.sort((a,b) => (calcAvgRating(b.reviews)||b.rating) - (calcAvgRating(a.reviews)||a.rating)).slice(0,3).map(x => x.id);
  if (topRated.includes(p.id)) return 'Top Rated';
  if ([21,22,23,24].includes(p.id)) return 'New Arrival';
  return null;
}

function getPaymentMethods() {
  return [
    { id: 'cod', label: 'Cash on Delivery', icon: 'fas fa-money-bill-wave' },
    { id: 'gcash', label: 'GCash', icon: 'fas fa-mobile-screen' },
    { id: 'maya', label: 'Maya', icon: 'fas fa-mobile-screen' },
    { id: 'card', label: 'Credit/Debit Card', icon: 'fas fa-credit-card' },
    { id: 'wallet', label: 'Wallet (₱' + walletBalance.toLocaleString() + ')', icon: 'fas fa-wallet' }
  ];
}

function toggleView(mode) {
  viewMode = mode;
  localStorage.setItem('shopperViewMode', mode);
  renderProducts();
}

function getProductLimit(id) {
  const p = products.find(x => x.id === id);
  if (!p || !p.maxPerUser) return Infinity;
  const inCart = cart.filter(i => i.id === id).reduce((s,i) => s + i.qty, 0);
  return p.maxPerUser - inCart;
}

function getSeller(p) {
  const id = p.id;
  return sellerAccounts[id] || { name: 'Shopper Official Store', rating: 4.8, sales: 89200, response: '97%', joined: '2021' };
}

const lang = {
  en: {
    search: 'Search products...',
    all: 'All', electronics: 'Electronics', fashion: 'Fashion', home: 'Home & Living', beauty: 'Beauty', food: 'Food & Drinks',
    cart: 'Your Cart', emptyCart: 'Your cart is empty', wishlist: 'Your Wishlist', emptyWishlist: 'Your wishlist is empty',
    orders: 'My Orders', noOrders: 'No orders yet', featured: 'Featured Products',
    addCart: 'Add to cart', buyNow: 'Buy now', sold: 'sold', reviews: 'Reviews', writeReview: 'Write a Review',
    placeOrder: 'Place order', checkout: 'Checkout', total: 'Total', filter: 'Filter',
    default: 'Default', priceLow: 'Price: Low to High', priceHigh: 'Price: High to Low', highest: 'Highest Rated',
    bannerTag: 'Limited Time Offer', bannerTitle: 'Summer Sale', bannerHighlight: 'Up to 70% Off',
    bannerDesc: 'Shop thousands of premium products at unbeatable prices. Don\'t miss out on exclusive deals.',
    shopNow: 'Shop Now', submitReview: 'Submit Review', yourName: 'Your name', yourReview: 'Share your experience with this product...',
    noProducts: 'No products found', adjustSearch: 'Try adjusting your search or filter',
    processing: 'Processing', cancelled: 'Cancelled', delivered: 'Delivered', cancelOrder: 'Cancel Order',
    newsletter: 'Get exclusive deals and updates', newsletterPlaceholder: 'Your email address',
    chatHello: 'Hello! How can we help you today? 😊', support: 'Customer Support',
    shipName: 'Full name', shipPhone: 'Phone number', shipAddr: 'Street address, barangay', shipCity: 'City',
    couponPlaceholder: 'Enter coupon code (e.g. SAVE10)', apply: 'Apply',
    delivery: 'Estimated delivery', shareCopied: 'Link copied to clipboard!',
    addedCart: 'Added to cart', orderPlaced: 'Order placed successfully!', invalidCoupon: 'Invalid coupon code',
    giftWrap: 'Gift wrapping', wishlistShare: 'Share wishlist', printReceipt: 'Print receipt',
    orderWhere: 'Where is my order?', returnItem: 'I want to return an item', paymentIssues: 'Payment issues', shippingInfo: 'Shipping information',
    canceled: 'Order cancelled'
  },
  fil: {
    search: 'Maghanap ng produkto...',
    all: 'Lahat', electronics: 'Elektroniks', fashion: 'Fashion', home: 'Bahay', beauty: 'Kosmetiko', food: 'Pagkain',
    cart: 'Cart Mo', emptyCart: 'Walang laman ang cart', wishlist: 'Wishlist Mo', emptyWishlist: 'Walang laman ang wishlist',
    orders: 'Orders Ko', noOrders: 'Wala pang order', featured: 'Mga Produkto',
    addCart: 'Idagdag sa cart', buyNow: 'Bilhin na', sold: 'nabenta', reviews: 'Review', writeReview: 'Mag-review',
    placeOrder: 'Mag-order', checkout: 'Checkout', total: 'Kabuuan', filter: 'Filter',
    default: 'Default', priceLow: 'Presyo: Mababa hanggang Mataas', priceHigh: 'Presyo: Mataas hanggang Mababa', highest: 'Pinakamataas na Rating',
    bannerTag: 'Limitadong Alok', bannerTitle: 'Summer Sale', bannerHighlight: ' Hanggang 70% Discount',
    bannerDesc: 'Mamili ng libu-libong produkto sa abot-kayang presyo. Huwag palampasin ang eksklusibong mga alok.',
    shopNow: 'Mamili Na', submitReview: 'I-submit', yourName: 'Pangalan mo', yourReview: 'I-share ang iyong karanasan sa produktong ito...',
    noProducts: 'Walang nakitang produkto', adjustSearch: 'Baguhin ang iyong paghahanap o filter',
    processing: 'Pinoproseso', cancelled: 'Kinansela', delivered: 'Na-deliver', cancelOrder: 'Kanselahin',
    newsletter: 'Makatanggap ng eksklusibong alok', newsletterPlaceholder: 'Email address mo',
    chatHello: 'Kamusta! Paano ka namin matutulungan ngayong araw? 😊', support: 'Customer Support',
    shipName: 'Buong pangalan', shipPhone: 'Numero ng telepono', shipAddr: 'Street address, barangay', shipCity: 'Lungsod',
    couponPlaceholder: 'Ilagay ang coupon code (e.g. SAVE10)', apply: 'I-apply',
    delivery: 'Estimated delivery', shareCopied: 'Na-kopya na ang link!',
    addedCart: 'Naidagdag sa cart', orderPlaced: 'Matagumpay na na-order!', invalidCoupon: 'Di-wasto ang coupon code',
    giftWrap: 'Gift wrapping', wishlistShare: 'I-share ang wishlist', printReceipt: 'I-print ang resibo',
    orderWhere: 'Nasaan ang order ko?', returnItem: 'Gusto kong magbalik', paymentIssues: 'Problema sa pagbabayad', shippingInfo: 'Impormasyon sa shipping',
    canceled: 'Na-kansela ang order'
  }
};

const productGrid = document.getElementById('productGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartBody = document.getElementById('cartBody');
const cartBadge = document.getElementById('cartBadge');
const totalPrice = document.getElementById('totalPrice');
const searchInput = document.getElementById('searchInput');
const catBtns = document.querySelectorAll('.cat-btn');
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const checkoutBody = document.getElementById('checkoutBody');
const checkoutTotal = document.getElementById('checkoutTotal');
const toast = document.getElementById('toast');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const wishlistBody = document.getElementById('wishlistBody');
const wishlistBadge = document.getElementById('wishlistBadge');
const ordersModal = document.getElementById('ordersModal');
const ordersOverlay = document.getElementById('ordersOverlay');
const ordersBody = document.getElementById('ordersBody');
const sortSelect = document.getElementById('sortSelect');
const scrollTopBtn = document.getElementById('scrollTop');
const compareOverlay = document.createElement('div');
compareOverlay.className = 'compare-overlay';
document.body.appendChild(compareOverlay);
const compareModal = document.createElement('div');
compareModal.className = 'compare-modal';
compareModal.innerHTML = '<button class="modal-close" id="closeCompare" aria-label="Close"><i class="fas fa-xmark"></i></button><h3><i class="fas fa-scale-balanced"></i> Compare Products</h3><div id="compareBody"></div>';
document.body.appendChild(compareModal);
const compareBar = document.getElementById('compareBar');
const compareItems = document.getElementById('compareItems');
const compareBtn = document.getElementById('compareBtn');
const notifDot = document.getElementById('notifDot');

function formatPrice(p) {
  if (currentCurrency === 'USD') return '$' + (p * USD_RATE).toFixed(2);
  return '₱' + p.toLocaleString('en-PH');
}

function calcAvgRating(reviews) {
  if (!reviews || !reviews.length) return 0;
  return reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) s += '<i class="fas fa-star"></i>';
    else if (i === full && half) s += '<i class="fas fa-star-half-alt"></i>';
    else s += '<i class="far fa-star"></i>';
  }
  return s;
}

function startCountdown() {
  const end = new Date();
  end.setHours(23, 59, 59);
  function tick() {
    const diff = end - new Date();
    if (diff <= 0) return;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
    document.getElementById('cdMins').textContent = String(m).padStart(2, '0');
    document.getElementById('cdSecs').textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

function applyLang(l) {
  currentLang = l;
  localStorage.setItem('shopperLang', l);
  const t = lang[l];
  document.getElementById('langToggle').querySelector('span').textContent = l === 'fil' ? 'FIL' : 'EN';
  document.getElementById('searchInput').placeholder = t.search;
  document.querySelectorAll('.cat-btn')[0].textContent = t.all;
  document.querySelectorAll('.cat-btn')[1].textContent = t.electronics;
  document.querySelectorAll('.cat-btn')[2].textContent = t.fashion;
  document.querySelectorAll('.cat-btn')[3].textContent = t.home;
  document.querySelectorAll('.cat-btn')[4].textContent = t.beauty;
  document.querySelectorAll('.cat-btn')[5].textContent = t.food;
  document.querySelector('#cartSidebar .cart-header h3').innerHTML = `<i class="fas fa-shopping-bag"></i> ${t.cart}`;
  document.querySelector('#wishlistSidebar .cart-header h3').innerHTML = `<i class="fas fa-heart"></i> ${t.wishlist}`;
  document.querySelector('#ordersModal .checkout-header h3').innerHTML = `<i class="fas fa-receipt"></i> ${t.orders}`;
  document.querySelector('.banner-tag').textContent = t.bannerTag;
  document.querySelector('.banner-content h1').innerHTML = `${t.bannerTitle}<br><span class="banner-highlight">${t.bannerHighlight}</span>`;
  document.querySelector('.banner-content p').textContent = t.bannerDesc;
  document.querySelector('.btn-primary').innerHTML = `<i class="fas fa-bag-shopping"></i> ${t.shopNow}`;
  document.querySelector('.section-header h2').textContent = t.featured;
  document.getElementById('sortSelect').options[0].text = t.default;
  document.getElementById('sortSelect').options[1].text = t.priceLow;
  document.getElementById('sortSelect').options[2].text = t.priceHigh;
  document.getElementById('sortSelect').options[3].text = t.highest;
  document.querySelector('#checkoutModal .checkout-header h3').innerHTML = `<i class="fas fa-receipt"></i> ${t.checkout}`;
  document.getElementById('placeOrder').innerHTML = `<i class="fas fa-check"></i> ${t.placeOrder}`;
  document.getElementById('checkoutBtn').innerHTML = `<i class="fas fa-bag-shopping"></i> ${t.checkout}`;
  document.getElementById('newsletterEmail').placeholder = t.newsletterPlaceholder;
  document.querySelector('.newsletter-form p').textContent = t.newsletter;
  renderProducts();
  renderWishlist();
  renderOrders();
  renderCart();
}

function addRecentSearch(term) {
  if (!term.trim()) return;
  recentSearches = recentSearches.filter(s => s !== term);
  recentSearches.unshift(term);
  if (recentSearches.length > 5) recentSearches.pop();
  localStorage.setItem('shopperRecentSearches', JSON.stringify(recentSearches));
}

function getDeliveryDate() {
  const d = new Date();
  d.setDate(d.getDate() + 3 + Math.floor(Math.random() * 5));
  return d.toLocaleDateString('en-PH', { month: 'short', day: 'numeric' });
}

function calcBulkDiscount(qty) {
  if (qty >= 10) return 0.10;
  if (qty >= 5) return 0.05;
  if (qty >= 3) return 0.03;
  return 0;
}

function addToRecent(id) {
  recentlyViewed = recentlyViewed.filter(x => x !== id);
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 8) recentlyViewed.pop();
  localStorage.setItem('shopperRecent', JSON.stringify(recentlyViewed));
  renderRecent();
}

function renderRecent() {
  const section = document.getElementById('recentSection');
  const scroll = document.getElementById('recentScroll');
  if (!recentlyViewed.length) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  scroll.innerHTML = recentlyViewed.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return '';
    return `<a class="recent-item" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="recent-item-name">${p.name}</div>
    </a>`;
  }).join('');
}

function toggleCompare(id) {
  const idx = compareList.indexOf(id);
  if (idx > -1) { compareList.splice(idx, 1); }
  else {
    if (compareList.length >= 4) { showToast('Maximum 4 products to compare'); return; }
    compareList.push(id);
  }
  renderCompareBar();
}

function renderCompareBar() {
  compareItems.innerHTML = compareList.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return '';
    return `<div class="compare-bar-item">
      <img src="${p.image}" alt="${p.name}">
      <button class="compare-remove" data-compare-id="${id}" aria-label="Remove">×</button>
    </div>`;
  }).join('');
  compareBtn.disabled = compareList.length < 2;
  if (compareList.length) compareBar.classList.add('active');
  else compareBar.classList.remove('active');
}

function openCompare() {
  if (compareList.length < 2) return;
  const items = compareList.map(id => products.find(x => x.id === id)).filter(Boolean);
  let html = '<table class="compare-table"><tr><td></td>';
  items.forEach(p => { html += `<td><img src="${p.image}" alt="${p.name}"><div style="font-weight:600;margin-top:6px;font-size:13px;">${p.name}</div></td>`; });
  html += '</tr><tr><td>Price</td>';
  items.forEach(p => { html += `<td style="font-weight:700;color:var(--text);">${formatPrice(p.price)} ${p.origPrice > p.price ? `<span style="text-decoration:line-through;font-weight:400;color:var(--text-muted);font-size:12px;">${formatPrice(p.origPrice)}</span>` : ''}</td>`; });
  html += '</tr><tr><td>Rating</td>';
  items.forEach(p => { const avg = calcAvgRating(p.reviews) || p.rating; html += `<td>${renderStars(avg)} ${avg.toFixed(1)}</td>`; });
  html += '<tr><td>Sold</td>';
  items.forEach(p => { html += `<td>${p.sold.toLocaleString()}</td>`; });
  html += '<tr><td>Stock</td>';
  items.forEach(p => { html += `<td>${p.stock > 0 ? p.stock : '<span style="color:#ef4444;">Out of stock</span>'}</td>`; });
  html += '<tr><td></td>';
  items.forEach(p => { html += `<td><button class="compare-compare-btn" data-id="${p.id}" onclick="openModal(${p.id});closeCompareModal();">View</button></td>`; });
  html += '</tr></table>';
  document.getElementById('compareBody').innerHTML = html;
  compareOverlay.classList.add('active');
  compareModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
  compareOverlay.classList.remove('active');
  compareModal.classList.remove('active');
  document.body.style.overflow = '';
}

function getFilteredProducts() {
  let result = products.filter(p => {
    const matchCat = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = !currentSearch || p.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });
  if (currentSort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (currentSort === 'rating') result.sort((a, b) => calcAvgRating(b.reviews) - calcAvgRating(a.reviews));
  return result;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  document.getElementById('productCount').textContent = filtered.length + ' product' + (filtered.length !== 1 ? 's' : '');
  if (!filtered.length) {
    productGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8;"><i class="fas fa-search" style="font-size:36px;margin-bottom:12px;opacity:.4;display:block;"></i><p style="font-size:15px;font-weight:500;">No products found</p><p style="font-size:13px;margin-top:4px;">Try adjusting your search or filter</p></div>';
    return;
  }
  productGrid.className = 'product-grid ' + (viewMode === 'list' ? 'product-grid-list' : '');
  productGrid.innerHTML = filtered.map(p => {
    const avgRating = calcAvgRating(p.reviews) || p.rating;
    const inWishlist = wishlist.includes(p.id);
    const perfBadge = getPerfBadge(p);
    const maxVal = getProductLimit(p.id);
    return viewMode === 'list' ? `
    <div class="product-card product-card-list" data-id="${p.id}">
      <div class="product-img-wrap" style="width:140px;flex-shrink:0;">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="wishlist-heart ${inWishlist ? 'active' : ''}" data-id="${p.id}" aria-label="${inWishlist ? 'Remove from' : 'Add to'} wishlist">
          <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div style="flex:1;display:flex;flex-direction:column;padding:12px;">
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          ${renderStars(avgRating)} ${avgRating.toFixed(1)}
          <span>(${p.reviews.length})</span>
          <span style="margin-left:6px;">${p.sold.toLocaleString()} sold</span>
        </div>
        <div class="product-price-row" style="margin-top:4px;">
          <div class="product-price">
            ${formatPrice(p.price)}
            ${p.origPrice > p.price ? `<span class="orig-price">${formatPrice(p.origPrice)}</span>` : ''}
          </div>
        </div>
        <p style="font-size:13px;color:var(--text-secondary);margin:6px 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${p.desc}</p>
        <div style="display:flex;gap:6px;margin-top:auto;">
          <button class="buy-now-btn" data-id="${p.id}" aria-label="Buy now" style="flex:1;padding:8px;font-size:13px;" ${p.stock === 0 ? 'disabled' : ''}><i class="fas fa-bag-shopping"></i></button>
          <button class="add-cart-btn" data-id="${p.id}" aria-label="Add to cart" style="flex:0 0 38px;padding:8px;font-size:13px;" ${p.stock === 0 ? 'disabled' : ''}><i class="fas fa-cart-plus"></i></button>
        </div>
      </div>
    </div>` : `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        ${perfBadge ? `<span class="perf-badge ${perfBadge === 'Best Seller' ? 'perf-bestseller' : perfBadge === 'Top Rated' ? 'perf-toprated' : 'perf-new'}">${perfBadge}</span>` : ''}
        <button class="wishlist-heart ${inWishlist ? 'active' : ''}" data-id="${p.id}" aria-label="${inWishlist ? 'Remove from' : 'Add to'} wishlist">
          <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          ${renderStars(avgRating)} ${avgRating.toFixed(1)}
          <span>(${p.reviews.length})</span>
          <span style="margin-left:6px;">${p.sold.toLocaleString()} sold</span>
        </div>
        <div class="product-price-row">
          <div class="product-price">
            ${formatPrice(p.price)}
            ${p.origPrice > p.price ? `<span class="orig-price">${formatPrice(p.origPrice)}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="product-actions">
        <button class="add-cart-btn" data-id="${p.id}" aria-label="Add to cart" ${p.stock === 0 ? 'disabled' : ''}>
          <i class="fas fa-cart-plus"></i>
        </button>
        <button class="buy-now-btn" data-id="${p.id}" aria-label="Buy now" ${p.stock === 0 ? 'disabled' : ''}>
          <i class="fas fa-bag-shopping"></i>
        </button>
      </div>
    </div>`;
  }).join('');
}

function renderCart() {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  cartBadge.textContent = totalQty;
  localStorage.setItem('shopperCart', JSON.stringify(cart));
  if (!cart.length) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
        <small>Add some products to get started</small>
      </div>`;
    totalPrice.textContent = '₱0.00';
    document.getElementById('checkoutBtn').disabled = true;
    return;
  }
  document.getElementById('checkoutBtn').disabled = false;
  let html = '';
  let total = 0;
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (!prod) return;
    total += prod.price * item.qty;
    html += `
      <div class="cart-item">
        <img class="cart-item-img" src="${prod.image}" alt="${prod.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${prod.name}</div>
          <div class="cart-item-price">${formatPrice(prod.price)}</div>
          <div class="cart-item-actions">
            <button class="cart-qty-btn" data-id="${item.id}" data-action="minus" aria-label="Decrease quantity">−</button>
            <span class="cart-qty">${item.qty}</span>
            <button class="cart-qty-btn" data-id="${item.id}" data-action="plus" aria-label="Increase quantity">+</button>
            <button class="cart-remove" data-id="${item.id}" aria-label="Remove item"><i class="fas fa-trash-can"></i></button>
          </div>
        </div>
      </div>`;
  });
  cartBody.innerHTML = html;
  const discount = calcBulkDiscount(totalQty);
  const discountNote = document.getElementById('cartDiscountNote');
  if (discount > 0) {
    const savings = total * discount;
    totalPrice.innerHTML = `${formatPrice(total - savings)} <span style="font-size:13px;font-weight:400;color:#059669;">(-${formatPrice(savings)})</span>`;
    if (discountNote) {
      discountNote.innerHTML = `<i class="fas fa-tag"></i> Bulk discount ${Math.round(discount * 100)}% off`;
      discountNote.style.display = 'block';
    }
  } else {
    totalPrice.textContent = formatPrice(total);
    if (discountNote) { discountNote.innerHTML = ''; discountNote.style.display = 'none'; }
  }
}

function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) { wishlist.splice(idx, 1); }
  else { wishlist.push(id); }
  localStorage.setItem('shopperWishlist', JSON.stringify(wishlist));
  renderWishlist();
  renderProducts();
}

function renderWishlist() {
  wishlistBadge.textContent = wishlist.length;
  wishlistBadge.style.display = wishlist.length ? 'flex' : 'none';
  if (!wishlist.length) {
    wishlistBody.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-heart"></i>
        <p>Your wishlist is empty</p>
        <small>Click the heart icon on products to save them here</small>
      </div>`;
    return;
  }
  let html = '';
  wishlist.forEach(id => {
    const p = products.find(x => x.id === id);
    if (!p) return;
    html += `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.image}" alt="${p.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${formatPrice(p.price)}</div>
          <div class="cart-item-actions">
            <button class="add-cart-btn" data-id="${p.id}" style="padding:6px 12px;width:auto;border-radius:6px;font-size:12px;">
              <i class="fas fa-plus"></i> Add to Cart
            </button>
            <button class="cart-remove" data-wishlist-id="${p.id}" aria-label="Remove from wishlist"><i class="fas fa-trash-can"></i></button>
          </div>
        </div>
      </div>`;
  });
  wishlistBody.innerHTML = html;
}

function addOrder() {
  if (!cart.length) return;
  const orderItems = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    return p ? { id: p.id, name: p.name, qty: item.qty, price: p.price, image: p.image } : null;
  }).filter(Boolean);
  const total = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shipName = (document.getElementById('shipName')?.value || '').trim();
  const shipAddr = (document.getElementById('shipAddr')?.value || '').trim();
  const shipCity = (document.getElementById('shipCity')?.value || '').trim();
  const shipProvince = (document.getElementById('shipProvince')?.value || '').trim();
  const notif = !!(shipName && shipAddr);
  orders.unshift({
    id: Date.now(),
    items: orderItems,
    total,
    date: new Date().toISOString().split('T')[0],
    shipping: shipName ? { name: shipName, address: `${shipAddr}, ${shipCity}, ${shipProvince}` } : null,
    delivery: getDeliveryDate(),
    status: 'Processing',
    cancelled: false
  });
  localStorage.setItem('shopperOrders', JSON.stringify(orders));
  if (notif) { renderNotifDot(); showToast('Order placed! Estimated delivery: ' + getDeliveryDate(), 'success'); }
  else { showToast('Order placed successfully!', 'success'); }
}

function renderNotifDot() {
  const hasProcessing = orders.some(o => o.status === 'Processing' && !o.cancelled);
  if (notifDot) notifDot.classList.toggle('show', hasProcessing);
}

function cancelOrder(id) {
  const order = orders.find(o => o.id === id);
  if (!order) return;
  if (order.status !== 'Processing') { showToast('Can only cancel processing orders'); return; }
  order.cancelled = true;
  order.status = 'Cancelled';
  localStorage.setItem('shopperOrders', JSON.stringify(orders));
  renderOrders();
  renderNotifDot();
  showToast('Order cancelled', '');
}

function renderOrders() {
  if (!orders.length) {
    ordersBody.innerHTML = `
      <div class="no-orders">
        <i class="fas fa-box"></i>
        <p>No orders yet</p>
        <small>Your completed orders will appear here</small>
      </div>`;
    renderNotifDot();
    return;
  }
  ordersBody.innerHTML = orders.map(o => {
    const statusClass = o.cancelled ? 'order-cancelled' : (o.status === 'Processing' ? 'order-processing' : 'order-delivered');
    return `
    <div class="order-item">
      <div class="order-header">
        <span class="order-date">${o.date}</span>
        <span class="order-total">${formatPrice(o.total)}</span>
        <span style="font-size:12px;font-weight:600;color:${o.cancelled ? '#ef4444' : (o.status === 'Processing' ? '#f59e0b' : '#059669')};">${o.cancelled ? 'Cancelled' : o.status}</span>
      </div>
      ${o.delivery && !o.cancelled ? `<div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;"><i class="fas fa-truck"></i> Est. delivery: ${o.delivery}</div>` : ''}
      ${o.shipping ? `<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;"><i class="fas fa-location-dot"></i> ${o.shipping.name} — ${o.shipping.address}</div>` : ''}
      <div class="order-products">
        ${o.items.map(i => `
          <div class="order-product">
            <img class="order-product-img" src="${i.image}" alt="${i.name}">
            <div class="order-product-info">
              <p>${i.name}</p>
              <small>${formatPrice(i.price)}</small>
            </div>
            <span class="order-product-qty">x${i.qty}</span>
          </div>
        `).join('')}
      </div>
      ${!o.cancelled ? `<div class="order-tracking">
        <div class="track-step ${o.status === 'Delivered' ? 'done' : (o.status === 'Processing' ? 'active' : '')}"><i class="fas fa-check-circle"></i> Processing</div>
        <div class="track-line ${o.status === 'Delivered' ? 'done' : (o.status === 'Shipped' ? 'done' : '')}"></div>
        <div class="track-step ${o.status === 'Delivered' ? 'done' : (o.status === 'Shipped' ? 'active' : '')}"><i class="fas fa-truck"></i> Shipped</div>
        <div class="track-line ${o.status === 'Delivered' ? 'done' : ''}"></div>
        <div class="track-step ${o.status === 'Delivered' ? 'done' : ''}"><i class="fas fa-circle-check"></i> Delivered</div>
      </div>` : ''}
      ${o.cancelled ? '' : `<div style="display:flex;gap:8px;align-items:center;margin-top:8px;">
        ${o.rated ? `<span style="font-size:12px;color:var(--text-muted);">Rated: ${'★'.repeat(o.rated)}${'☆'.repeat(5-o.rated)}</span>` :
          o.status === 'Delivered' ? `<span style="font-size:12px;color:var(--text-muted);margin-right:4px;">Rate:</span>${[1,2,3,4,5].map(s => `<button class="star-btn" data-order="${o.id}" data-star="${s}" style="font-size:14px;"><i class="far fa-star"></i></button>`).join('')}` : ''}
      </div>`}
      ${o.status === 'Delivered' ? `<button class="reorder-btn" data-order-id="${o.id}" style="margin-top:6px;padding:6px 14px;background:var(--primary);color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:12px;font-family:inherit;transition:var(--transition);"><i class="fas fa-rotate"></i> Buy Again</button>` : ''}
      ${o.status === 'Processing' && !o.cancelled ? `<button class="cancel-order-btn" data-order-id="${o.id}" aria-label="Cancel order">Cancel Order</button>` : ''}
      <button class="print-btn" data-order-id="${o.id}" aria-label="Print receipt"><i class="fas fa-print"></i> Print</button>
    </div>`;
  }).join('');
  renderNotifDot();
}

function addToCart(id, qty = 1) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;
  if (prod.stock === 0) { showToast('Sorry, this item is out of stock'); return; }
  const existing = cart.find(i => i.id === id);
  const current = existing ? existing.qty : 0;
  let addQty = qty;
  if (current + addQty > prod.stock) {
    addQty = prod.stock - current;
    if (addQty <= 0) { showToast(`Only ${prod.stock} in stock`); return; }
  }
  if (existing) { existing.qty += addQty; }
  else { cart.push({ id, qty: addQty }); }
  renderCart();
  cartBadge.classList.remove('badge-pop');
  void cartBadge.offsetWidth;
  cartBadge.classList.add('badge-pop');
  showToast(addQty < qty ? `Only ${prod.stock} available — added what we could` : 'Added to cart', addQty < qty ? '' : 'success');
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  const prod = products.find(p => p.id === id);
  if (delta > 0 && prod && item.qty + delta > prod.stock) {
    showToast(`Only ${prod.stock} in stock`);
    return;
  }
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(i => i.id !== id); }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
  showToast('Removed from cart');
}

function buyNow(id, qty = 1) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  if (p.stock === 0) { showToast('Sorry, this item is out of stock'); return; }
  const buyQty = Math.min(qty, p.stock);
  savedCart = JSON.parse(JSON.stringify(cart));
  cart = [{ id, qty: buyQty }];
  renderCart();
  openCheckout();
}

function showToast(msg, type = '') {
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function submitReview(productId) {
  const nameInput = document.getElementById('reviewName');
  const commentInput = document.getElementById('reviewComment');
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();
  if (!name) { showToast('Please enter your name'); nameInput.focus(); return; }
  if (!comment) { showToast('Please write a review'); commentInput.focus(); return; }
  if (!reviewStarRating) { showToast('Please select a rating'); return; }

  const p = products.find(x => x.id === productId);
  if (!p) return;
  p.reviews.push({
    id: Date.now(),
    user: name,
    rating: reviewStarRating,
    comment: comment,
    date: new Date().toISOString().split('T')[0]
  });
  nameInput.value = '';
  commentInput.value = '';
  reviewStarRating = 0;
  document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
  renderProducts();
  openModal(productId);
  showToast('Review submitted! Thank you.', 'success');
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentModalProduct = id;
  const avgRating = calcAvgRating(p.reviews) || p.rating;
  const ratingCounts = [0, 0, 0, 0, 0];
  p.reviews.forEach(r => { if (r.rating >= 1 && r.rating <= 5) ratingCounts[r.rating - 1]++; });
  const totalReviews = p.reviews.length;

  let reviewsHtml = p.reviews.sort((a, b) => b.id - a.id).map(r => `
    <div class="review-item">
      <div class="review-header">
        <strong>${r.user}</strong>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-stars">${renderStars(r.rating)}</div>
      <p class="review-comment">${r.comment}</p>
    </div>
  `).join('');

  addToRecent(id);

  const seller = getSeller(p);
  const sellerHtml = `<div class="seller-info">
    <div class="seller-avatar"><i class="fas fa-store"></i></div>
    <div class="seller-details">
      <h4>${seller.name}</h4>
      <div class="seller-stats">
        <span><i class="fas fa-star" style="color:var(--accent);"></i> ${seller.rating}</span>
        <span><i class="fas fa-bag-shopping"></i> ${seller.sales.toLocaleString()}</span>
        <span><i class="fas fa-clock"></i> ${seller.response} response</span>
      </div>
    </div>
  </div>`;

  const videoHtml = p.video ? `<div style="margin-bottom:12px;"><div class="video-embed"><iframe src="${p.video}" frameborder="0" allowfullscreen></iframe></div></div>` : '';

  const codHtml = `<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;background:#ecfdf5;color:#059669;padding:2px 8px;border-radius:4px;margin-left:8px;"><i class="fas fa-money-bill-wave"></i> Cash on Delivery</span>`;

  const stockHtml = p.stock === 0 ? '<span class="sold-out-badge">Sold Out</span>' :
    p.stock <= 10 ? `<span class="low-stock-badge">Only ${p.stock} left</span>` : '';

  const variantHtml = p.variants ? `
    ${p.variants.colors ? `
    <div class="variant-selector">
      <label>Color</label>
      <div class="variant-options" id="varColor">
        ${p.variants.colors.map(c => `<button class="variant-btn" data-val="${c}">${c}</button>`).join('')}
      </div>
    </div>` : ''}
    ${p.variants.sizes ? `
    <div class="variant-selector">
      <label>Size</label>
      <div class="variant-options" id="varSize">
        ${p.variants.sizes.map(s => `<button class="variant-btn" data-val="${s}">${s}</button>`).join('')}
      </div>
    </div>` : ''}
  ` : '';

  const galleryHtml = p.images && p.images.length > 1 ? `
    <div class="modal-gallery">
      ${p.images.map((img, i) => `<img class="gallery-thumb${i === 0 ? ' active' : ''}" src="${img}" alt="${p.name}" data-img="${img}">`).join('')}
    </div>` : '';

  const bundleHtml = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 3).map(x => `
    <div class="bundle-item" data-id="${x.id}">
      <img src="${x.image}" alt="${x.name}">
      <div class="bundle-info">
        <div style="font-size:12px;">${x.name.slice(0, 25)}...</div>
        <div style="font-size:13px;font-weight:700;">${formatPrice(x.price)}</div>
      </div>
    </div>
  `).join('');

  const relatedHtml = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4).map(x => `
    <div class="related-item" data-id="${x.id}">
      <img src="${x.image}" alt="${x.name}">
      <div class="related-price">${formatPrice(x.price)}</div>
    </div>
  `).join('');

  const faqItems = [
    { q: 'Is this item authentic?', a: 'Yes, all our products are 100% authentic and sourced directly from the brand.' },
    { q: 'How long does shipping take?', a: 'Delivery typically takes 3-7 business days within Metro Manila and 5-10 days for provincial areas.' },
    { q: 'Can I return this item?', a: 'Returns are accepted within 7 days of delivery for unused items in original packaging.' },
    { q: 'Do you offer warranty?', a: p.category === 'electronics' ? 'Yes, this item comes with a 1-year manufacturer warranty.' : 'Most items come with a 7-day replacement warranty.' }
  ];

  const qaHtml = p.qa && p.qa.length ? `<div class="qa-section"><h3 style="font-size:14px;font-weight:600;margin-bottom:8px;margin-top:12px;"><i class="fas fa-question-circle"></i> Questions & Answers</h3>
    ${p.qa.map(q => `<div style="padding:8px 0;border-bottom:1px solid var(--border-light);"><div style="font-size:13px;font-weight:500;"><i class="fas fa-user"></i> ${q.user}</div><div style="font-size:13px;color:var(--text);margin:2px 0;">Q: ${q.q}</div><div style="font-size:12px;color:var(--text-secondary);">A: ${q.a}</div><div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${q.date}</div></div>`).join('')}
  </div>` : '';

  const faqHtml = `<div class="faq-list"><h3 style="font-size:14px;font-weight:600;margin-bottom:8px;"><i class="fas fa-circle-question"></i> FAQ</h3>
    ${faqItems.map(f => `<div class="faq-item"><div class="faq-q">${f.q} <i class="fas fa-chevron-down"></i></div><div class="faq-a">${f.a}</div></div>`).join('')}
  </div>`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(window.location.href + '?product=' + p.id)}`;

  const inCompare = compareList.includes(p.id);

  modalBody.innerHTML = `
    <div class="modal-layout">
      <div class="modal-left">
        <div class="modal-img-wrap" id="modalImgWrap">
          <img class="modal-img" src="${p.images ? p.images[0] : p.image}" alt="${p.name}" id="modalImg">
          <div class="modal-img-zoom-lens" id="zoomLens"></div>
        </div>
        ${galleryHtml}
        ${stockHtml}
      </div>
      <div class="modal-right">
        <div class="modal-details">
            <div style="display:flex;justify-content:space-between;align-items:start;">
            <div>
              <h2>${p.name}${codHtml}</h2>
              <div class="breadcrumbs" style="padding:0;margin:0 0 6px;font-size:12px;">
                <a href="#" onclick="document.querySelector('.cat-btn[data-cat=all]').click();return false;">Home</a>
                <i class="fas fa-chevron-right" style="font-size:8px;"></i>
                <a href="#" onclick="document.querySelector('.cat-btn[data-cat=${p.category}]').click();return false;">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</a>
                <i class="fas fa-chevron-right" style="font-size:8px;"></i>
                <span>${p.name.length > 20 ? p.name.slice(0,20)+'...' : p.name}</span>
              </div>
            </div>
            <div style="display:flex;gap:4px;">
              <button class="modal-icon-btn" id="qrBtn" aria-label="Show QR code"><i class="fas fa-qrcode"></i></button>
              <button class="modal-icon-btn" id="shareBtn" aria-label="Share product"><i class="fas fa-share-nodes"></i></button>
              <button class="modal-icon-btn" id="compareToggle" aria-label="Compare"><i class="fas fa-scale-balanced"></i></button>
            </div>
          </div>
          <div class="rating">${renderStars(avgRating)} ${avgRating.toFixed(1)} &middot; ${totalReviews} review${totalReviews !== 1 ? 's' : ''} &middot; ${p.sold.toLocaleString()} sold</div>
          <div class="modal-price">${formatPrice(p.price)}</div>
          ${p.origPrice > p.price ? `<div class="modal-orig-price">${formatPrice(p.origPrice)}</div>` : ''}
          ${sellerHtml}
          ${videoHtml}

          ${variantHtml}

          <div class="modal-qty-picker">
            <label>Qty</label>
            <div class="modal-qty-controls">
              <button id="modalQtyMinus" aria-label="Decrease">−</button>
              <span id="modalQtyDisplay">1</span>
              <button id="modalQtyPlus" aria-label="Increase">+</button>
            </div>
          </div>

          <p class="modal-desc">${p.desc}</p>
          <div class="modal-btn-group">
            <button class="modal-buy-btn" data-id="${p.id}" aria-label="Buy now" ${p.stock === 0 ? 'disabled' : ''}><i class="fas fa-bag-shopping"></i></button>
            <button class="modal-add-btn" data-id="${p.id}" aria-label="Add to cart" ${p.stock === 0 ? 'disabled' : ''}><i class="fas fa-cart-plus"></i></button>
          </div>
        </div>

        <div class="reviews-section">
          <h3><i class="fas fa-star"></i> Customer Reviews</h3>
          <div class="rating-breakdown">
            <div class="rating-summary">
              <span class="rating-big">${avgRating.toFixed(1)}</span>
              <div class="rating-big-stars">${renderStars(avgRating)}</div>
              <span class="rating-total">${totalReviews} review${totalReviews !== 1 ? 's' : ''}</span>
            </div>
            <div class="rating-bars">
              ${[5, 4, 3, 2, 1].map(star => {
                const count = ratingCounts[star - 1];
                const pct = totalReviews ? (count / totalReviews * 100) : 0;
                return `<div class="rating-bar-row"><span>${star}</span><div class="rating-bar"><div class="rating-bar-fill" style="width:${pct}%"></div></div><span>${count}</span></div>`;
              }).join('')}
            </div>
          </div>
          <div class="review-list">${reviewsHtml}</div>
          <div class="write-review">
            <h4>Write a Review</h4>
            <div class="star-select" id="starSelect">
              ${[1, 2, 3, 4, 5].map(s => `<button class="star-btn" data-star="${s}" aria-label="${s} star"><i class="far fa-star"></i></button>`).join('')}
            </div>
            <input type="text" id="reviewName" placeholder="Your name" class="review-input">
            <textarea id="reviewComment" placeholder="Share your experience with this product..." class="review-textarea" rows="3"></textarea>
            <button class="submit-review-btn" id="submitReviewBtn" aria-label="Submit review"><i class="fas fa-paper-plane"></i></button>
          </div>
        </div>

        ${bundleHtml ? `<div style="border-top:1px solid var(--border);padding-top:14px;margin-top:8px;">
          <h3 style="font-size:14px;font-weight:600;margin-bottom:8px;"><i class="fas fa-cubes"></i> Frequently Bought Together</h3>
          <div style="display:flex;gap:10px;overflow-x:auto;">${bundleHtml}</div>
          <div style="font-size:12px;color:#059669;margin-top:6px;"><i class="fas fa-tag"></i> Save 5% when buying all items</div>
        </div>` : ''}
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
          <label style="font-size:13px;color:var(--text-secondary);">Zoom:</label>
          <input type="range" id="zoomSlider" min="1" max="4" step="0.5" value="2" style="flex:1;accent-color:var(--primary);">
          <span style="font-size:12px;color:var(--text-muted);" id="zoomVal">2x</span>
        </div>
        ${qaHtml}
        ${faqHtml}
        ${relatedHtml ? `
        <div style="border-top:1px solid var(--border);padding-top:16px;margin-top:8px;">
          <h3 style="font-size:14px;font-weight:600;margin-bottom:10px;">Similar Products</h3>
          <div style="display:flex;gap:10px;overflow-x:auto;">${relatedHtml}</div>
        </div>` : ''}
      </div>
    </div>`;

  modalQty = 1;
  productModal.scrollTop = 0;
  modalOverlay.classList.add('active');
  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  reviewStarRating = 0;

  document.getElementById('modalQtyMinus')?.addEventListener('click', () => {
    if (modalQty > 1) { modalQty--; document.getElementById('modalQtyDisplay').textContent = modalQty; }
  });
  document.getElementById('modalQtyPlus')?.addEventListener('click', () => {
    if (!p.stock || modalQty < p.stock) { modalQty++; document.getElementById('modalQtyDisplay').textContent = modalQty; }
  });

  document.querySelectorAll('#varColor .variant-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#varColor .variant-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      selectedVariantColor = b.dataset.val;
    });
  });
  document.querySelectorAll('#varSize .variant-btn').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('#varSize .variant-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      selectedVariantSize = b.dataset.val;
    });
  });

  document.getElementById('qrBtn')?.addEventListener('click', () => {
    const existing = document.querySelector('.qr-popup');
    if (existing) { existing.remove(); return; }
    const div = document.createElement('div');
    div.className = 'qr-popup';
    div.innerHTML = `<div class="qr-popup-content"><button class="qr-close"><i class="fas fa-xmark"></i></button><img src="${qrUrl}" alt="QR Code"><p style="font-size:13px;color:var(--text-secondary);margin-top:8px;">Scan to view product</p></div>`;
    document.body.appendChild(div);
    setTimeout(() => div.classList.add('show'), 10);
    div.addEventListener('click', e => { if (e.target === div || e.target.closest('.qr-close')) { div.classList.remove('show'); setTimeout(() => div.remove(), 300); } });
  });

  document.getElementById('shareBtn')?.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href + '?product=' + p.id).then(() => {
      showToast('Link copied to clipboard!', 'success');
    }).catch(() => showToast('Share: ' + p.name));
  });

  document.getElementById('compareToggle')?.addEventListener('click', () => {
    toggleCompare(p.id);
    showToast(compareList.includes(p.id) ? 'Added to compare' : 'Removed from compare');
  });

  document.querySelectorAll('.gallery-thumb').forEach(th => {
    th.addEventListener('click', () => {
      document.querySelectorAll('.gallery-thumb').forEach(x => x.classList.remove('active'));
      th.classList.add('active');
      document.getElementById('modalImg').src = th.dataset.img;
    });
  });

  document.getElementById('zoomSlider')?.addEventListener('input', function() {
    zoomLevel = Number(this.value);
    const img = document.getElementById('modalImg');
    if (img) { img.style.transform = `scale(${zoomLevel})`; img.style.transformOrigin = '50% 50%'; }
    document.getElementById('zoomVal').textContent = zoomLevel + 'x';
  });

  document.querySelectorAll('.related-item').forEach(el => {
    el.addEventListener('click', () => {
      closeModal();
      openModal(Number(el.dataset.id));
    });
  });
  document.querySelectorAll('.bundle-item').forEach(el => {
    el.addEventListener('click', () => {
      closeModal();
      openModal(Number(el.dataset.id));
    });
  });

  const starBtns = document.querySelectorAll('.star-btn');
  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      reviewStarRating = Number(btn.dataset.star);
      starBtns.forEach((b, i) => {
        b.classList.toggle('active', i < reviewStarRating);
        b.innerHTML = i < reviewStarRating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
      });
    });
  });

  document.getElementById('submitReviewBtn').addEventListener('click', () => submitReview(id));

  const imgWrap = document.getElementById('modalImgWrap');
  const modalImg = document.getElementById('modalImg');
  const lens = document.getElementById('zoomLens');
  let zoomActive = false;

  function handleZoomMove(clientX, clientY) {
    const rect = imgWrap.getBoundingClientRect();
    let x = clientX - rect.left;
    let y = clientY - rect.top;
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));
    const pctX = (x / rect.width) * 100;
    const pctY = (y / rect.height) * 100;
    modalImg.style.transformOrigin = `${pctX}% ${pctY}%`;
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
  }

  function handleZoomEnter() {
    if (window.innerWidth > 768) { imgWrap.classList.add('zoomed'); zoomActive = true; }
  }

  function handleZoomLeave() {
    imgWrap.classList.remove('zoomed');
    zoomActive = false;
    modalImg.style.transformOrigin = '50% 50%';
  }

  imgWrap.addEventListener('mouseenter', handleZoomEnter);
  imgWrap.addEventListener('mouseleave', handleZoomLeave);
  imgWrap.addEventListener('mousemove', (e) => {
    if (!zoomActive) return;
    handleZoomMove(e.clientX, e.clientY);
  });

  imgWrap.addEventListener('touchstart', (e) => {
    if (window.innerWidth > 768) return;
    const t = e.touches[0];
    handleZoomEnter();
    handleZoomMove(t.clientX, t.clientY);
  }, { passive: true });

  imgWrap.addEventListener('touchmove', (e) => {
    if (!zoomActive) return;
    const t = e.touches[0];
    e.preventDefault();
    handleZoomMove(t.clientX, t.clientY);
  }, { passive: false });

  imgWrap.addEventListener('touchend', handleZoomLeave);
}

function closeModal() {
  modalOverlay.classList.remove('active');
  productModal.classList.remove('active');
  document.body.style.overflow = '';
  currentModalProduct = null;
}

function openCheckout() {
  if (!cart.length) return;
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const bulkDiscount = calcBulkDiscount(totalQty);
  let html = `
    <div class="address-form">
      <h4><i class="fas fa-location-dot"></i> Shipping Address</h4>
      <input type="text" id="shipName" placeholder="Full name">
      <input type="text" id="shipPhone" placeholder="Phone number">
      <input type="text" id="shipAddr" placeholder="Street address, barangay">
      <div class="address-row">
        <input type="text" id="shipCity" placeholder="City">
        <select id="shipProvince">
          <option value="">Province</option>
          <option>Metro Manila</option><option>Bulacan</option><option>Cavite</option><option>Laguna</option><option>Rizal</option><option>Pampanga</option><option>Cebu</option><option>Davao</option><option>Iloilo</option><option>Batangas</option>
        </select>
      </div>
    </div>`;

  let subtotal = 0;
  cart.forEach(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return;
    subtotal += p.price * item.qty;
    html += `
      <div class="checkout-item">
        <img class="checkout-item-img" src="${p.image}" alt="${p.name}">
        <div class="checkout-item-info">
          <p>${p.name}</p>
          <small>Qty: ${item.qty}</small>
        </div>
        <div class="checkout-item-price">${formatPrice(p.price * item.qty)}</div>
      </div>`;
  });

  const discount = subtotal * bulkDiscount;
  let afterDiscount = subtotal - discount;

  html += `<div class="coupon-row">
    <input type="text" id="couponInput" placeholder="Enter coupon code (e.g. SAVE10)">
    <button class="coupon-btn" id="applyCoupon">Apply</button>
  </div>
  <div id="couponMsg"></div>`;

  html += `<div style="margin-bottom:10px;font-size:13px;color:var(--text-secondary);">
    <i class="fas fa-truck"></i> Estimated delivery: <strong>${getDeliveryDate()}</strong>
  </div>`;

  const codBadge = `<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;background:#ecfdf5;color:#059669;padding:2px 8px;border-radius:4px;margin-left:6px;"><i class="fas fa-money-bill-wave"></i> COD</span>`;

  const deliveryHtml = `<div class="delivery-options">
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;"><i class="fas fa-truck"></i> Delivery Method</label>
    <label class="delivery-radio"><input type="radio" name="delivery" value="delivery" checked onchange="deliveryMethod='delivery';updateCheckoutTotal()"> 🚚 Home Delivery</label>
    <label class="delivery-radio"><input type="radio" name="delivery" value="pickup" onchange="deliveryMethod='pickup';updateCheckoutTotal()"> 🏪 Store Pickup (Free)</label>
  </div>`;

  const emailHtml = `<div class="guest-email">
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;"><i class="fas fa-envelope"></i> Email for receipt</label>
    <input type="email" id="guestEmail" placeholder="your@email.com" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:14px;outline:none;background:var(--surface);color:var(--text);font-family:inherit;">
  </div>`;

  const socialHtml = `<div class="social-login">
    <button class="social-login-btn" data-provider="Google"><i class="fab fa-google"></i> Google</button>
    <button class="social-login-btn" data-provider="Facebook"><i class="fab fa-facebook-f"></i> Facebook</button>
  </div>`;

  html += `<div class="gift-wrap-row">
    <input type="checkbox" id="giftWrapCheck">
    <label for="giftWrapCheck"><i class="fas fa-gift"></i> ${lang[currentLang].giftWrap}</label>
    <span class="gift-price">+${formatPrice(GIFT_WRAP_PRICE)}</span>
  </div>`;

  html += `<div class="points-row" id="pointsInfo">Points: ${loyaltyPoints} (₱${(loyaltyPoints * POINTS_PER_PESO).toFixed(0)} value)</div>
    ${loyaltyPoints > 0 ? `<div class="points-redeem"><label><input type="checkbox" id="redeemPoints" onchange="if(this.checked){pointsRedeemed=Math.min(loyaltyPoints,50)}else{pointsRedeemed=0};updateCheckoutTotal()"> Use points (₱${(Math.min(loyaltyPoints,50)*POINTS_PER_PESO).toFixed(0)})</label></div>` : ''}`;

  html += `<div style="border-top:1px solid var(--border);padding-top:12px;margin-top:4px;">
    <div style="font-size:13px;font-weight:600;margin-bottom:8px;color:var(--text-secondary);">Login with</div>
    ${socialHtml}
  </div>`;

  const paymentHtml = `<div class="payment-section">
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;"><i class="fas fa-credit-card"></i> Payment Method</label>
    ${getPaymentMethods().map(m => `<label class="delivery-radio"><input type="radio" name="payment" value="${m.id}" ${m.id==='cod'?'checked':''}> <i class="${m.icon}"></i> ${m.label}</label>`).join('')}
  </div>`;

  const savedAddrHtml = savedAddresses.length ? `<div class="saved-addresses">
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;"><i class="fas fa-bookmark"></i> Saved Addresses</label>
    ${savedAddresses.map((a,i) => `<label class="delivery-radio"><input type="radio" name="savedAddr" value="${i}"> ${a.name} — ${a.address}, ${a.city}</label>`).join('')}
    <button class="coupon-btn" id="saveNewAddr" style="margin-top:4px;font-size:12px;"><i class="fas fa-plus"></i> Save new address</button>
  </div>` : '';

  html = deliveryHtml + emailHtml + paymentHtml + savedAddrHtml + html;
  checkoutBody.innerHTML = html;
  document.getElementById('saveNewAddr')?.addEventListener('click', () => {
    const name = document.getElementById('shipName')?.value.trim();
    const addr = document.getElementById('shipAddr')?.value.trim();
    const city = document.getElementById('shipCity')?.value.trim();
    if (!name || !addr) { showToast('Fill in address first'); return; }
    savedAddresses.push({ name, address: addr, city });
    localStorage.setItem('shopperAddresses', JSON.stringify(savedAddresses));
    showToast('Address saved!', 'success');
    openCheckout();
  });
  updateCheckoutTotal();
  checkoutOverlay.classList.add('active');
  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.getElementById('applyCoupon').addEventListener('click', applyCoupon);
  document.getElementById('couponInput').addEventListener('keydown', e => { if (e.key === 'Enter') applyCoupon(); });
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  msg.className = 'coupon-msg';
  if (code === 'SAVE10') {
    appliedCoupon = 0.10;
    msg.textContent = 'Coupon applied! 10% off!';
    msg.classList.add('success');
  } else if (code === 'SAVE5') {
    appliedCoupon = 0.05;
    msg.textContent = 'Coupon applied! 5% off!';
    msg.classList.add('success');
  } else {
    appliedCoupon = null;
    msg.textContent = 'Invalid coupon code';
    msg.classList.add('error');
  }
  updateCheckoutTotal();
}

function updateCheckoutTotal() {
  let subtotal = 0;
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  cart.forEach(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return;
    subtotal += p.price * item.qty;
  });
  const bulkDiscount = calcBulkDiscount(totalQty);
  const bulkDiscountAmt = subtotal * bulkDiscount;
  const couponDiscountAmt = appliedCoupon ? (subtotal - bulkDiscountAmt) * appliedCoupon : 0;
  const giftFee = giftWrapping ? GIFT_WRAP_PRICE : 0;
  const deliveryFee = deliveryMethod === 'pickup' ? 0 : 49;
  const pointsDiscount = Math.min(pointsRedeemed * POINTS_PER_PESO, subtotal - bulkDiscountAmt - couponDiscountAmt + giftFee + deliveryFee);
  const total = subtotal - bulkDiscountAmt - couponDiscountAmt + giftFee + deliveryFee - pointsDiscount;
  checkoutTotal.textContent = formatPrice(Math.round(total));
  const pointsInfo = document.getElementById('pointsInfo');
  if (pointsInfo) pointsInfo.textContent = `Points: ${loyaltyPoints} (₱${(loyaltyPoints * POINTS_PER_PESO).toFixed(0)} value)`;
}

function closeCheckout() {
  if (savedCart !== null) {
    cart = savedCart;
    savedCart = null;
    renderCart();
  }
  appliedCoupon = null;
  checkoutOverlay.classList.remove('active');
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event delegation
document.addEventListener('click', e => {
  const card = e.target.closest('.product-card');
  if (card && !e.target.closest('.add-cart-btn') && !e.target.closest('.wishlist-heart') && !e.target.closest('.buy-now-btn')) {
    openModal(Number(card.dataset.id));
    return;
  }

  const heartBtn = e.target.closest('.wishlist-heart');
  if (heartBtn) {
    e.stopPropagation();
    toggleWishlist(Number(heartBtn.dataset.id));
    return;
  }

  const addBtn = e.target.closest('.add-cart-btn');
  if (addBtn) {
    addToCart(Number(addBtn.dataset.id));
    return;
  }

  const buyBtn = e.target.closest('.buy-now-btn');
  if (buyBtn) {
    buyNow(Number(buyBtn.dataset.id));
    return;
  }

  const modalBuyBtn = e.target.closest('.modal-buy-btn');
  if (modalBuyBtn) {
    buyNow(Number(modalBuyBtn.dataset.id), modalQty);
    closeModal();
    return;
  }

  const qtyBtn = e.target.closest('.cart-qty-btn');
  if (qtyBtn) {
    updateCartQty(Number(qtyBtn.dataset.id), qtyBtn.dataset.action === 'plus' ? 1 : -1);
    return;
  }

  const rmBtn = e.target.closest('.cart-remove');
  if (rmBtn) {
    removeFromCart(Number(rmBtn.dataset.id));
    return;
  }

  const wlRmBtn = e.target.closest('[data-wishlist-id]');
  if (wlRmBtn) {
    toggleWishlist(Number(wlRmBtn.dataset.wishlistId));
    return;
  }

  const modalAdd = e.target.closest('.modal-add-btn');
  if (modalAdd) {
    addToCart(Number(modalAdd.dataset.id), modalQty);
    closeModal();
    return;
  }
});

// Category filter
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.cat;
    renderProducts();
  });
});

// Search
searchInput.addEventListener('input', () => {
  currentSearch = searchInput.value.trim();
  renderProducts();
});
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && searchInput.value.trim()) addRecentSearch(searchInput.value.trim());
});

// Show recent searches
searchInput.addEventListener('focus', () => {
  if (!recentSearches.length) return;
  const list = document.getElementById('recentSearchList') || (() => {
    const d = document.createElement('div');
    d.id = 'recentSearchList';
    d.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:var(--surface);border:1px solid var(--border);border-radius:0 0 10px 10px;z-index:50;box-shadow:var(--shadow);';
    document.querySelector('.search-bar').style.position = 'relative';
    document.querySelector('.search-bar').appendChild(d);
    return d;
  })();
  list.innerHTML = '<div style="padding:8px 14px;font-size:12px;color:var(--text-muted);font-weight:600;">Recent</div>' +
    recentSearches.map(s => `<div class="recent-search-item" data-term="${s}" style="padding:6px 14px;cursor:pointer;font-size:13px;transition:.15s;">🔍 ${s}</div>`).join('');
  list.style.display = 'block';
});
document.addEventListener('click', e => {
  const el = e.target.closest('.recent-search-item');
  if (el) {
    searchInput.value = el.dataset.term;
    currentSearch = el.dataset.term;
    renderProducts();
    document.getElementById('recentSearchList')?.remove();
  } else if (!e.target.closest('.search-bar')) {
    document.getElementById('recentSearchList')?.remove();
  }
});

// Sort
sortSelect.addEventListener('change', () => {
  currentSort = sortSelect.value;
  renderProducts();
});

// Cart toggle
document.getElementById('cartBtn').addEventListener('click', () => {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('closeCart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Modal close
document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Wishlist toggle
document.getElementById('wishlistBtn').addEventListener('click', () => {
  wishlistSidebar.classList.add('active');
  wishlistOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeWishlist() {
  wishlistSidebar.classList.remove('active');
  wishlistOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('closeWishlist').addEventListener('click', closeWishlist);
wishlistOverlay.addEventListener('click', closeWishlist);

// Orders toggle
document.getElementById('ordersBtn').addEventListener('click', () => {
  renderOrders();
  ordersOverlay.classList.add('active');
  ordersModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

document.getElementById('closeOrders').addEventListener('click', () => {
  ordersOverlay.classList.remove('active');
  ordersModal.classList.remove('active');
  document.body.style.overflow = '';
});
ordersOverlay.addEventListener('click', () => {
  ordersOverlay.classList.remove('active');
  ordersModal.classList.remove('active');
  document.body.style.overflow = '';
});

// Dark mode toggle
function applyDarkTheme(isDark) {
  const icon = document.querySelector('#darkToggle i');
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.className = 'fas fa-sun';
  } else {
    document.documentElement.removeAttribute('data-theme');
    icon.className = 'fas fa-moon';
  }
}

document.getElementById('darkToggle').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  applyDarkTheme(!isDark);
  localStorage.setItem('shopperDarkMode', isDark ? 'light' : 'dark');
});

if (localStorage.getItem('shopperDarkMode') === 'dark') {
  applyDarkTheme(true);
}

// Checkout
document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
document.getElementById('closeCheckout').addEventListener('click', closeCheckout);
checkoutOverlay.addEventListener('click', closeCheckout);

document.getElementById('placeOrder').addEventListener('click', () => {
  if (!cart.length) return;
  if (window.innerWidth > 480) {
    const name = document.getElementById('shipName')?.value.trim();
    const addr = document.getElementById('shipAddr')?.value.trim();
    if (!name || !addr) { showToast('Please enter your shipping address'); return; }
  }
  addOrder();
  cart = [];
  savedCart = null;
  appliedCoupon = null;
  renderCart();
  closeCheckout();
  closeCart();
});

// Scroll to top
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('header-scrolled', window.scrollY > 10);
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

// Voice search
const voiceBtn = document.getElementById('voiceBtn');
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-PH';
  recognition.interimResults = false;
  voiceBtn.addEventListener('click', () => {
    if (voiceBtn.classList.contains('listening')) {
      recognition.abort();
      voiceBtn.classList.remove('listening');
      return;
    }
    voiceBtn.classList.add('listening');
    recognition.start();
    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      searchInput.value = text;
      currentSearch = text;
      renderProducts();
      voiceBtn.classList.remove('listening');
    };
    recognition.onend = () => voiceBtn.classList.remove('listening');
    recognition.onerror = () => voiceBtn.classList.remove('listening');
  });
} else {
  voiceBtn.style.display = 'none';
}

// Compare modal events
compareOverlay.addEventListener('click', closeCompareModal);
document.getElementById('closeCompare').addEventListener('click', closeCompareModal);
compareBtn.addEventListener('click', openCompare);
document.addEventListener('click', e => {
  const rm = e.target.closest('.compare-remove');
  if (rm) { toggleCompare(Number(rm.dataset.compareId)); }
});

// Cancel order
document.addEventListener('click', e => {
  const cancel = e.target.closest('.cancel-order-btn');
  if (cancel) { cancelOrder(Number(cancel.dataset.orderId)); }
});

// Recently viewed click
document.addEventListener('click', e => {
  const recent = e.target.closest('.recent-item');
  if (recent && recent.dataset.id) {
    closeModal();
    openModal(Number(recent.dataset.id));
  }
});

// Language toggle
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'fil' : 'en');
});

// Countdown
startCountdown();

// Auto dark mode
if (!localStorage.getItem('shopperDarkMode')) {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) applyDarkTheme(true);
}

// Chat
document.getElementById('chatBtn').addEventListener('click', () => {
  document.getElementById('chatBox').classList.toggle('open');
});
document.querySelectorAll('.chat-action').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('chatInput').value = btn.dataset.msg;
    document.getElementById('chatBox').classList.remove('open');
    showToast('Support team will respond shortly');
  });
});
document.getElementById('chatSend').addEventListener('click', () => {
  const input = document.getElementById('chatInput');
  if (input.value.trim()) {
    document.getElementById('chatBox').classList.remove('open');
    showToast('Support team will respond shortly');
    input.value = '';
  }
});
document.getElementById('chatInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('chatSend').click();
});

// Newsletter
document.getElementById('newsletterBtn').addEventListener('click', () => {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
  localStorage.setItem('shopperNewsletter', email);
  showToast('Subscribed! Check your inbox for deals.', 'success');
  document.getElementById('newsletterEmail').value = '';
});

// Fullscreen viewer
document.addEventListener('click', e => {
  const modalImg = e.target.closest('.modal-img-wrap img');
  if (modalImg && window.innerWidth > 768) {
    const existing = document.querySelector('.fullscreen-viewer');
    if (!existing) {
      const div = document.createElement('div');
      div.className = 'fullscreen-viewer';
      div.innerHTML = `<button class="modal-close" id="fsClose" aria-label="Close"><i class="fas fa-xmark"></i></button><img src="${modalImg.src}" alt="${modalImg.alt}">`;
      document.body.appendChild(div);
      setTimeout(() => div.classList.add('active'), 10);
      div.querySelector('#fsClose').addEventListener('click', () => { div.classList.remove('active'); setTimeout(() => div.remove(), 300); });
      div.addEventListener('click', e => { if (e.target === div) { div.classList.remove('active'); setTimeout(() => div.remove(), 300); } });
    }
  }
});

// FAQ
document.addEventListener('click', e => {
  const q = e.target.closest('.faq-q');
  if (q) { q.parentElement.classList.toggle('open'); }
});

// Gift wrap
document.addEventListener('change', e => {
  if (e.target.id === 'giftWrapCheck') {
    giftWrapping = e.target.checked;
    updateCheckoutTotal();
  }
});

// Social login buttons
document.addEventListener('click', e => {
  const social = e.target.closest('.social-login-btn');
  if (social) { showToast('Logged in as ' + social.dataset.provider + ' user', 'success'); }
});

// Wishlist share
document.addEventListener('click', e => {
  const ws = e.target.closest('.wishlist-share-btn');
  if (ws) {
    const ids = wishlist.join(',');
    navigator.clipboard.writeText(window.location.href + '?wishlist=' + ids).then(() => {
      showToast(lang[currentLang].shareCopied, 'success');
    }).catch(() => showToast('Share wishlist: ' + ids));
  }
});

// Print receipt
document.addEventListener('click', e => {
  const pr = e.target.closest('.print-btn');
  if (pr) {
    const orderId = Number(pr.dataset.orderId);
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    const w = window.open('', '', 'width=400,height=600');
    w.document.write(`<html><head><title>Order #${order.id}</title><style>body{font:14px/1.5 monospace;padding:20px;}h1{font-size:18px;}table{width:100%;border-collapse:collapse}td{padding:6px 0;border-bottom:1px solid #ccc}.t{font-weight:700;font-size:16px;margin-top:12px;}</style></head><body><h1>Shopper — Receipt</h1><p>Order #${order.id}<br>${order.date}</p><table>${order.items.map(i => `<tr><td>${i.name} x${i.qty}</td><td align="right">₱${(i.price * i.qty).toLocaleString()}</td></tr>`).join('')}</table><p class="t">Total: ₱${order.total.toLocaleString()}</p><hr><p style="color:#888;font-size:12px;">Thank you for shopping with Shopper!</p></body></html>`);
    w.document.close();
    w.print();
  }
});

// Abandoned cart reminder
if (notifPrefs.cartReminder) {
  const cartTime = localStorage.getItem('shopperCartTime');
  if (cartTime && cart.length > 0) {
    const elapsed = Date.now() - Number(cartTime);
    if (elapsed > 60000 && elapsed < 1800000) {
      setTimeout(() => showToast('You have items waiting in your cart! 🛒'), 1000);
    }
  }
}
function updateCartTime() {
  if (cart.length) localStorage.setItem('shopperCartTime', String(Date.now()));
  else localStorage.removeItem('shopperCartTime');
}

// Social proof popup
function showSocialProof() {
  if (Math.random() > 0.3) return;
  const randomP = products[Math.floor(Math.random() * products.length)];
  const names = ['Juan', 'Maria', 'Ana', 'Carlos', 'Bella', 'Dennis', 'Kate', 'Paolo', 'Liza', 'Sofia', 'Mark', 'Jenny'];
  const name = names[Math.floor(Math.random() * names.length)];
  const div = document.createElement('div');
  div.className = 'social-proof';
  div.innerHTML = `<img src="${randomP.image}" alt=""><div><strong>${name}</strong> just bought <span>${randomP.name}</span></div>`;
  document.body.appendChild(div);
  setTimeout(() => div.classList.add('show'), 500);
  setTimeout(() => { div.classList.remove('show'); setTimeout(() => div.remove(), 500); }, 4000);
}
setTimeout(showSocialProof, 3000);
setInterval(showSocialProof, 15000);

// Feedback form
const feedbackModal = document.createElement('div');
feedbackModal.className = 'feedback-modal';
feedbackModal.innerHTML = `
  <div class="feedback-content">
    <button class="feedback-close" id="fbClose"><i class="fas fa-xmark"></i></button>
    <h3><i class="fas fa-star"></i> Rate Shopper</h3>
    <div class="star-select" id="fbStars">
      ${[1,2,3,4,5].map(s => `<button class="star-btn" data-star="${s}"><i class="far fa-star"></i></button>`).join('')}
    </div>
    <textarea id="fbComment" placeholder="How can we improve?" rows="3"></textarea>
    <button id="fbSubmit" class="submit-review-btn">Send Feedback</button>
  </div>`;
document.body.appendChild(feedbackModal);
document.addEventListener('click', e => {
  if (e.target.closest('#fbClose') || e.target === feedbackModal) feedbackModal.classList.remove('active');
});
document.getElementById('fbSubmit').addEventListener('click', () => {
  const fb = document.getElementById('fbComment').value.trim();
  localStorage.setItem('shopperFeedback', JSON.stringify({ rating: reviewStarRating, comment: fb, date: new Date().toISOString() }));
  feedbackModal.classList.remove('active');
  showToast('Thank you for your feedback!', 'success');
});
document.getElementById('fbStars').querySelectorAll('.star-btn').forEach(b => {
  b.addEventListener('click', () => {
    const val = Number(b.dataset.star);
    document.querySelectorAll('#fbStars .star-btn').forEach((x, i) => {
      x.classList.toggle('active', i < val);
      x.innerHTML = i < val ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    });
  });
});

// Show feedback form after 3 orders
if (orders.length >= 3 && !localStorage.getItem('shopperFeedback')) {
  setTimeout(() => feedbackModal.classList.add('active'), 2000);
}

// Multi-currency toggle
document.getElementById('currencyToggle')?.addEventListener('click', () => {
  currentCurrency = currentCurrency === 'PHP' ? 'USD' : 'PHP';
  localStorage.setItem('shopperCurrency', currentCurrency);
  document.getElementById('currencyToggle').querySelector('span').textContent = currentCurrency;
  renderProducts();
  renderCart();
  renderOrders();
});

// Guest order lookup
function lookupOrder(id) {
  const order = orders.find(o => o.id === id);
  if (!order) { showToast('Order not found'); return; }
  renderOrders();
  ordersOverlay.classList.add('active');
  ordersModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  showToast('Order found!');
}

// Notification preferences
function showNotifPrefs() {
  const html = `<div class="notif-prefs">
    <h4><i class="fas fa-bell"></i> Notification Preferences</h4>
    <label><input type="checkbox" ${notifPrefs.cartReminder ? 'checked' : ''} data-key="cartReminder"> Cart reminders</label>
    <label><input type="checkbox" ${notifPrefs.deals ? 'checked' : ''} data-key="deals"> Deals & offers</label>
    <label><input type="checkbox" ${notifPrefs.orders ? 'checked' : ''} data-key="orders"> Order updates</label>
    <button class="notif-save">Save</button>
  </div>`;
  const div = document.createElement('div');
  div.className = 'notif-prefs-modal';
  div.innerHTML = html;
  document.body.appendChild(div);
  setTimeout(() => div.classList.add('active'), 10);
  div.addEventListener('click', e => {
    if (e.target.classList.contains('notif-prefs-modal')) { div.classList.remove('active'); setTimeout(() => div.remove(), 300); }
  });
  div.querySelector('.notif-save').addEventListener('click', () => {
    div.querySelectorAll('input[type="checkbox"]').forEach(cb => { notifPrefs[cb.dataset.key] = cb.checked; });
    localStorage.setItem('shopperNotifPrefs', JSON.stringify(notifPrefs));
    div.classList.remove('active');
    setTimeout(() => div.remove(), 300);
    showToast('Preferences saved', 'success');
  });
}

// Weekly deals
function renderDeals() {
  const carousel = document.getElementById('dealsCarousel');
  const deals = products.filter(p => p.badge).sort(() => Math.random() - 0.5).slice(0, 8);
  carousel.innerHTML = deals.map(p => `
    <div class="deal-card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="deal-card-body">
        <h4>${p.name}</h4>
        <div class="deal-price">${formatPrice(p.price)} <span class="deal-orig">${formatPrice(p.origPrice)}</span></div>
        ${p.badge ? `<span style="background:#ef4444;color:#fff;font-size:10px;font-weight:700;padding:1px 6px;border-radius:3px;display:inline-block;margin-top:2px;">${p.badge}</span>` : ''}
      </div>
    </div>
  `).join('');
}
document.getElementById('dealsCarousel')?.addEventListener('click', e => {
  const card = e.target.closest('.deal-card');
  if (card) openModal(Number(card.dataset.id));
});

// Add order rating
function renderOrderRating(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order || order.rated) return '';
  return `<div class="order-rating">
    <span style="font-size:12px;color:var(--text-muted);margin-right:4px;">Rate your order:</span>
    ${[1,2,3,4,5].map(s => `<button class="star-btn" data-order="${orderId}" data-star="${s}" style="font-size:16px;"><i class="far fa-star"></i></button>`).join('')}
  </div>`;
}
document.addEventListener('click', e => {
  const star = e.target.closest('.order-rating .star-btn');
  if (star) {
    const orderId = Number(star.dataset.order);
    const val = Number(star.dataset.star);
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.rated = val;
      localStorage.setItem('shopperOrders', JSON.stringify(orders));
      renderOrders();
      showToast('Order rated! ⭐', 'success');
    }
  }
});

// Add lookup to orders modal header
const lookupHtml = `<div class="order-lookup">
  <input type="text" id="lookupInput" placeholder="Search by order number...">
  <button id="lookupBtn"><i class="fas fa-magnifying-glass"></i> Search</button>
</div>`;
// Order filter and quick reorder
document.querySelector('#ordersModal .checkout-header')?.insertAdjacentHTML('afterend', `<select id="orderFilter" class="order-filter" style="width:calc(100% - 48px);margin:10px 24px 0;"><option value="all">All Orders</option><option value="Processing">Processing</option><option value="Delivered">Delivered</option><option value="Cancelled">Cancelled</option></select>`);

// Image quality button in header
document.querySelector('.header-actions')?.insertAdjacentHTML('afterbegin', `<button class="icon-btn img-quality-btn" aria-label="Toggle image quality" style="font-size:14px;"><i class="fas fa-image"></i></button>`);

// Add bulk wishlist to cart button
document.querySelector('#wishlistSidebar .wishlist-empty')?.insertAdjacentHTML('afterend', wishlist.length ? `<button class="wishlist-bulk-add" style="width:calc(100% - 48px);margin:0 24px 12px;padding:10px;background:var(--primary);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;font-size:13px;"><i class="fas fa-cart-plus"></i> Add All to Cart</button>` : '');

// Notification prefs link
document.getElementById('notifPrefsLink')?.addEventListener('click', e => { e.preventDefault(); showNotifPrefs(); });

// Feedback in footer
const feedbackLi = document.createElement('li');
feedbackLi.innerHTML = '<a href="#" id="feedbackLink">Send Feedback</a>';
document.querySelector('.footer-col:nth-child(2) ul')?.appendChild(feedbackLi);
document.addEventListener('click', e => {
  if (e.target.id === 'feedbackLink') {
    e.preventDefault();
    document.querySelectorAll('#fbStars .star-btn').forEach(b => { b.classList.remove('active'); b.innerHTML = '<i class="far fa-star"></i>'; });
    document.getElementById('fbComment').value = '';
    feedbackModal.classList.add('active');
  }
});

document.querySelector('#ordersModal .checkout-body')?.insertAdjacentHTML('beforebegin', lookupHtml);
document.getElementById('lookupBtn')?.addEventListener('click', () => {
  const val = document.getElementById('lookupInput').value.trim();
  if (val) lookupOrder(Number(val));
});
document.getElementById('lookupInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('lookupBtn').click();
});

// View toggle
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    toggleView(btn.dataset.view);
  });
});

// Payment method selection
document.addEventListener('change', e => {
  if (e.target.name === 'payment') {
    if (e.target.value === 'wallet') {
      const total = Number(checkoutTotal.textContent.replace(/[^0-9.]/g, ''));
      if (walletBalance < total) { showToast('Insufficient wallet balance'); e.target.checked = false; return; }
    }
  }
});

// Cancel order reason
document.addEventListener('click', e => {
  const cancel = e.target.closest('.cancel-order-btn');
  if (cancel) {
    const id = Number(cancel.dataset.orderId);
    const reasons = cancelReasons.map(r => `<label style="display:block;padding:4px 0;font-size:13px;cursor:pointer;"><input type="radio" name="cancelReason" value="${r}"> ${r}</label>`).join('');
    const div = document.createElement('div');
    div.className = 'cancel-modal';
    div.innerHTML = `<div class="cancel-modal-content"><h4>Why are you cancelling?</h4>${reasons}<button id="confirmCancel" class="submit-review-btn" style="margin-top:10px;">Confirm</button></div>`;
    document.body.appendChild(div);
    setTimeout(() => div.classList.add('active'), 10);
    div.addEventListener('click', e2 => { if (e2.target === div) div.remove(); });
    div.querySelector('#confirmCancel').addEventListener('click', () => {
      const selected = div.querySelector('input[name="cancelReason"]:checked');
      if (!selected) { showToast('Please select a reason'); return; }
      cancelOrder(id);
      div.remove();
    });
  }
});

// Order filtering
document.addEventListener('change', e => {
  if (e.target.id === 'orderFilter') {
    const val = e.target.value;
    document.querySelectorAll('#ordersBody .order-item').forEach(el => {
      if (val === 'all') el.style.display = '';
      else el.style.display = el.dataset.status === val ? '' : 'none';
    });
  }
});

// Dark mode schedule
function applyDarkSchedule() {
  const schedule = JSON.parse(localStorage.getItem('shopperDarkSchedule'));
  if (!schedule || !schedule.enabled) return;
  const hour = new Date().getHours();
  const isDarkTime = hour >= schedule.start || hour < schedule.end;
  if (isDarkTime !== (document.documentElement.getAttribute('data-theme') === 'dark')) {
    document.getElementById('darkToggle').click();
  }
}
// Add schedule UI
document.getElementById('darkToggle')?.insertAdjacentHTML('afterend', `
  <button class="icon-btn" id="darkScheduleBtn" aria-label="Dark mode schedule" style="font-size:14px;">
    <i class="fas fa-clock"></i>
  </button>
`);
document.getElementById('darkScheduleBtn')?.addEventListener('click', () => {
  const current = JSON.parse(localStorage.getItem('shopperDarkSchedule')) || { enabled: false, start: 18, end: 6 };
  const div = document.createElement('div');
  div.className = 'cancel-modal';
  div.innerHTML = `<div class="cancel-modal-content" style="max-width:300px;">
    <h4>Dark Mode Schedule</h4>
    <label style="display:block;font-size:13px;margin-bottom:8px;"><input type="checkbox" id="schedEnabled" ${current.enabled ? 'checked' : ''}> Enable schedule</label>
    <div style="display:flex;gap:8px;margin-bottom:10px;">
      <select id="schedStart" style="flex:1;padding:6px;border:1px solid var(--border);border-radius:6px;font-size:13px;">${[18,19,20,21,22,23,0].map(h => `<option value="${h}" ${current.start===h?'selected':''}>${h}:00</option>`).join('')}</select>
      <span style="align-self:center;">→</span>
      <select id="schedEnd" style="flex:1;padding:6px;border:1px solid var(--border);border-radius:6px;font-size:13px;">${[6,7,8,9,10].map(h => `<option value="${h}" ${current.end===h?'selected':''}>${h}:00</option>`).join('')}</select>
    </div>
    <button id="schedSave" class="submit-review-btn">Save</button>
  </div>`;
  document.body.appendChild(div);
  setTimeout(() => div.classList.add('active'), 10);
  div.addEventListener('click', e2 => { if (e2.target === div) div.remove(); });
  div.querySelector('#schedSave').addEventListener('click', () => {
    const sched = { enabled: document.getElementById('schedEnabled').checked, start: Number(document.getElementById('schedStart').value), end: Number(document.getElementById('schedEnd').value) };
    localStorage.setItem('shopperDarkSchedule', JSON.stringify(sched));
    div.remove();
    showToast('Schedule saved', 'success');
    applyDarkSchedule();
  });
});
if (localStorage.getItem('shopperDarkSchedule')) applyDarkSchedule();
setInterval(applyDarkSchedule, 60000);

// Image quality toggle
document.addEventListener('click', e => {
  const iq = e.target.closest('.img-quality-btn');
  if (iq) {
    imageQuality = imageQuality === 'high' ? 'low' : 'high';
    iq.innerHTML = imageQuality === 'high' ? '<i class="fas fa-image"></i>' : '<i class="fas fa-image" style="color:var(--text-muted);"></i>';
    document.querySelectorAll('.product-img, .modal-img').forEach(img => {
      if (imageQuality === 'low') img.style.filter = 'blur(1px) contrast(.9)';
      else img.style.filter = '';
    });
    showToast('Image quality: ' + imageQuality);
  }
});

// Shared cart
document.getElementById('cartBtn')?.insertAdjacentHTML('afterend', `
  <button class="icon-btn" id="shareCartBtn" aria-label="Share cart" style="font-size:14px;">
    <i class="fas fa-link"></i>
  </button>
`);
document.addEventListener('click', e => {
  if (e.target.closest('#shareCartBtn')) {
    const ids = cart.map(i => `${i.id}:${i.qty}`).join(',');
    if (!ids) { showToast('Cart is empty'); return; }
    navigator.clipboard.writeText(window.location.origin + window.location.pathname + '?cart=' + encodeURIComponent(ids));
    showToast('Cart link copied!', 'success');
  }
});

// Anonymous mode
document.querySelector('.header-actions')?.insertAdjacentHTML('afterbegin', `
  <button class="icon-btn" id="anonBtn" aria-label="Anonymous mode" title="${anonymousMode ? 'Anonymous: On' : 'Anonymous: Off'}" style="font-size:14px;">
    <i class="fas fa-user-secret"></i>
  </button>
`);
document.getElementById('anonBtn')?.addEventListener('click', () => {
  anonymousMode = !anonymousMode;
  localStorage.setItem('shopperAnonymous', anonymousMode);
  document.getElementById('anonBtn').title = anonymousMode ? 'Anonymous: On' : 'Anonymous: Off';
  showToast(anonymousMode ? 'Anonymous mode ON — history not saved' : 'Anonymous mode OFF');
});

// Quick reorder
document.addEventListener('click', e => {
  const reorder = e.target.closest('.reorder-btn');
  if (reorder) {
    const orderId = Number(reorder.dataset.orderId);
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    order.items.forEach(item => {
      const existing = cart.find(i => i.id === item.id);
      if (existing) existing.qty += item.qty;
      else cart.push({ id: item.id, qty: item.qty });
    });
    renderCart();
    showToast('Items added to cart!', 'success');
  }
});

// Bulk wishlist to cart
document.addEventListener('click', e => {
  const bulk = e.target.closest('.wishlist-bulk-add');
  if (bulk) {
    wishlist.forEach(id => {
      const existing = cart.find(i => i.id === id);
      if (existing) existing.qty++;
      else cart.push({ id, qty: 1 });
    });
    renderCart();
    showToast('All wishlist items added to cart!', 'success');
  }
});

// Search autocomplete
const searchList = document.createElement('div');
searchList.id = 'searchAutocomplete';
searchList.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:var(--surface);border:1px solid var(--border);border-radius:0 0 10px 10px;z-index:50;box-shadow:var(--shadow);display:none;max-height:250px;overflow-y:auto;';
document.querySelector('.search-bar').style.position = 'relative';
document.querySelector('.search-bar').appendChild(searchList);
searchInput.addEventListener('input', () => {
  const val = searchInput.value.trim().toLowerCase();
  if (!val || anonymousMode) { searchList.style.display = 'none'; return; }
  const matches = products.filter(p => p.name.toLowerCase().includes(val)).slice(0, 6);
  if (!matches.length) { searchList.style.display = 'none'; return; }
  searchList.innerHTML = matches.map(p => `<div class="search-suggestion" data-id="${p.id}" style="padding:8px 14px;cursor:pointer;display:flex;align-items:center;gap:10px;transition:.15s;border-bottom:1px solid var(--border-light);">
    <img src="${p.image}" style="width:32px;height:32px;object-fit:cover;border-radius:4px;">
    <div><div style="font-size:13px;font-weight:500;">${p.name}</div><div style="font-size:12px;color:var(--text-muted);">${formatPrice(p.price)}</div></div>
  </div>`).join('');
  searchList.style.display = 'block';
});
searchList.addEventListener('click', e => {
  const sug = e.target.closest('.search-suggestion');
  if (sug) { searchList.style.display = 'none'; openModal(Number(sug.dataset.id)); }
});
document.addEventListener('click', e => { if (!e.target.closest('.search-bar')) searchList.style.display = 'none'; });

// Wallet display
document.querySelector('.header-actions')?.insertAdjacentHTML('beforeend', `
  <button class="icon-btn" id="walletBtn" aria-label="Wallet" style="font-size:14px;position:relative;">
    <i class="fas fa-wallet"></i>
    <span style="position:absolute;bottom:-2px;right:-2px;font-size:9px;font-weight:700;background:var(--primary);color:#fff;padding:1px 4px;border-radius:4px;line-height:1;">₱${walletBalance}</span>
  </button>
`);
document.getElementById('walletBtn')?.addEventListener('click', () => {
  const add = prompt('Add money to wallet (PHP):', '100');
  if (add && !isNaN(add) && Number(add) > 0) {
    walletBalance += Number(add);
    localStorage.setItem('shopperWallet', walletBalance);
    document.querySelector('#walletBtn span').textContent = '₱' + walletBalance;
    renderProducts();
    showToast('Wallet topped up!', 'success');
  }
});

// Zoom slider in modal
document.addEventListener('change', e => {
  if (e.target.id === 'zoomSlider') {
    zoomLevel = Number(e.target.value);
    const img = document.getElementById('modalImg');
    if (img) { img.style.transform = `scale(${zoomLevel})`; img.style.transformOrigin = '50% 50%'; }
  }
});

// Checkout timer
function startCheckoutTimer() {
  if (checkoutTimer) clearInterval(checkoutTimer);
  checkoutTimeLeft = 900;
  const timerEl = document.getElementById('checkoutTimer') || (() => {
    const el = document.createElement('div');
    el.id = 'checkoutTimer';
    el.style.cssText = 'font-size:12px;color:#ef4444;text-align:center;padding:6px;border-bottom:1px solid var(--border);';
    document.querySelector('#checkoutModal .checkout-header')?.after(el);
    return el;
  })();
  checkoutTimer = setInterval(() => {
    checkoutTimeLeft--;
    const m = Math.floor(checkoutTimeLeft / 60);
    const s = checkoutTimeLeft % 60;
    timerEl.textContent = `⏱ ${m}:${String(s).padStart(2, '0')}`;
    if (checkoutTimeLeft <= 0) {
      clearInterval(checkoutTimer);
      closeCheckout();
      showToast('Checkout time expired. Cart reset.');
      cart = [];
      renderCart();
    }
  }, 1000);
}
// Override openCheckout to start timer
const origOpenCheckout = openCheckout;
openCheckout = function() {
  origOpenCheckout();
  startCheckoutTimer();
};

// Stock deduction on place order
const origPlaceOrder = document.getElementById('placeOrder').click;
document.getElementById('placeOrder').addEventListener('click', () => {
  if (!cart.length) return;
  cart.forEach(item => {
    const p = products.find(x => x.id === item.id);
    if (p) p.stock = Math.max(0, p.stock - item.qty);
  });
});

// Add Q&A section to modal
const origModalHtml = modalBody.innerHTML;
openModal = function(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  // Track anonymous
  if (!anonymousMode) addToRecent(id);
  // ... rest of existing openModal...
};

// Price match badge on modal
openModal = function(origFn) {
  return function(id) {
    origFn(id);
    const priceMatchBadge = document.createElement('div');
    priceMatchBadge.style.cssText = 'font-size:11px;background:#ecfdf5;color:#059669;padding:4px 10px;border-radius:6px;display:inline-flex;align-items:center;gap:4px;margin-bottom:8px;';
    priceMatchBadge.innerHTML = '<i class="fas fa-tag"></i> Lowest Price Guaranteed';
    const priceEl = document.querySelector('.modal-price');
    if (priceEl) priceEl.after(priceMatchBadge);
  };
}(openModal);

// Scheduled delivery in checkout
const origCheckout = openCheckout;
openCheckout = function() {
  origCheckout();
  const schedHtml = `<div class="delivery-options" style="margin-top:8px;">
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;"><i class="fas fa-calendar"></i> Schedule Delivery</label>
    <input type="date" id="schedDate" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:14px;outline:none;background:var(--surface);color:var(--text);font-family:inherit;" min="${new Date().toISOString().split('T')[0]}">
  </div>`;
  document.querySelector('.guest-email')?.insertAdjacentHTML('afterend', schedHtml);
};

// Order notes
const origCheckout2 = openCheckout;
openCheckout = function() {
  origCheckout2();
  const notesHtml = `<div style="margin-bottom:10px;">
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;"><i class="fas fa-pen"></i> Order Notes</label>
    <textarea id="orderNotes" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;background:var(--surface);color:var(--text);font-family:inherit;resize:vertical;min-height:50px;" placeholder="Special instructions for delivery..."></textarea>
  </div>`;
  document.querySelector('#checkoutModal .checkout-footer')?.insertAdjacentHTML('beforebegin', notesHtml);
};

// Gift message
document.addEventListener('change', e => {
  if (e.target.id === 'giftCheck') {
    const div = document.getElementById('giftMsgRow');
    if (div) div.style.display = e.target.checked ? 'block' : 'none';
  }
});
const origCheckout3 = openCheckout;
openCheckout = function() {
  origCheckout3();
  const giftHtml = `<div class="gift-wrap-row">
    <input type="checkbox" id="giftCheck"><label for="giftCheck"><i class="fas fa-gift"></i> This is a gift</label>
  </div>
  <div id="giftMsgRow" style="display:none;margin-bottom:8px;">
    <textarea id="giftMsg" style="width:100%;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:13px;outline:none;background:var(--surface);color:var(--text);font-family:inherit;resize:vertical;min-height:50px;" placeholder="Write a gift message..."></textarea>
  </div>`;
  document.querySelector('.gift-wrap-row')?.insertAdjacentHTML('afterend', giftHtml);
};

// Store locator
function showStoreLocator() {
  const stores = [
    { name: 'Shopper SM Megamall', addr: 'SM Megamall, Mandaluyong', hours: '10AM-9PM' },
    { name: 'Shopper Ayala Malls', addr: 'Ayala Center, Makati', hours: '10AM-9PM' },
    { name: 'Shopper MOA', addr: 'SM Mall of Asia, Pasay', hours: '10AM-10PM' },
    { name: 'Shopper Cebu', addr: 'Ayala Center Cebu', hours: '10AM-8PM' }
  ];
  const div = document.createElement('div');
  div.className = 'cancel-modal';
  div.innerHTML = `<div class="cancel-modal-content" style="max-width:400px;"><h4><i class="fas fa-store"></i> Our Stores</h4>
    ${stores.map(s => `<div style="padding:8px 0;border-bottom:1px solid var(--border-light);"><div style="font-weight:600;font-size:13px;">${s.name}</div><div style="font-size:12px;color:var(--text-secondary);">${s.addr}</div><div style="font-size:11px;color:var(--text-muted);">${s.hours}</div></div>`).join('')}
  </div>`;
  document.body.appendChild(div);
  setTimeout(() => div.classList.add('active'), 10);
  div.addEventListener('click', e => { if (e.target === div) div.remove(); });
}
document.querySelector('.footer-col:first-child ul')?.insertAdjacentHTML('beforeend', '<li><a href="#" id="storeLocatorLink">Store Locator</a></li>');
document.getElementById('storeLocatorLink')?.addEventListener('click', e => { e.preventDefault(); showStoreLocator(); });

// Subscription orders
document.addEventListener('click', e => {
  const sub = e.target.closest('.sub-btn');
  if (sub) {
    const id = Number(sub.dataset.id);
    const freq = prompt('Deliver every how many days? (e.g. 15, 30)', '30');
    if (freq && !isNaN(freq) && Number(freq) > 0) {
      const subs = JSON.parse(localStorage.getItem('shopperSubscriptions')) || [];
      subs.push({ id, freq: Number(freq), next: new Date(Date.now() + Number(freq)*86400000).toISOString().split('T')[0] });
      localStorage.setItem('shopperSubscriptions', JSON.stringify(subs));
      showToast('Subscribed! Next delivery in ' + freq + ' days', 'success');
    }
  }
});

// Trade-in
function showTradeIn() {
  const brands = ['iPhone', 'Samsung', 'Xiaomi', 'OPPO', 'Vivo'];
  const div = document.createElement('div');
  div.className = 'cancel-modal';
  div.innerHTML = `<div class="cancel-modal-content" style="max-width:380px;">
    <h4><i class="fas fa-arrows-rotate"></i> Trade-In Program</h4>
    <p style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">Get up to ₱25,000 off when you trade your old device!</p>
    <select id="tradeBrand" style="width:100%;padding:10px;border:1px solid var(--border);border-radius:6px;font-size:13px;margin-bottom:8px;">${brands.map(b => `<option>${b}</option>`).join('')}</select>
    <input type="text" id="tradeModel" placeholder="Model (e.g. iPhone 13)" style="width:100%;padding:10px;border:1px solid var(--border);border-radius:6px;font-size:13px;margin-bottom:8px;">
    <button id="tradeEstimate" class="submit-review-btn">Get Estimate</button>
    <div id="tradeResult" style="margin-top:8px;font-size:13px;color:#059669;display:none;">Estimated value: ₱5,000 - ₱15,000</div>
  </div>`;
  document.body.appendChild(div);
  setTimeout(() => div.classList.add('active'), 10);
  div.addEventListener('click', e2 => { if (e2.target === div) div.remove(); });
  div.querySelector('#tradeEstimate').addEventListener('click', () => {
    document.getElementById('tradeResult').style.display = 'block';
  });
}
document.querySelector('.footer-col:nth-child(3) ul')?.insertAdjacentHTML('beforeend', '<li><a href="#" id="tradeInLink">Trade-In</a></li>');
document.getElementById('tradeInLink')?.addEventListener('click', e => { e.preventDefault(); showTradeIn(); });

// Cashback
const origOrder = addOrder;
addOrder = function() {
  origOrder();
  const subtotal = cart.reduce((s, i) => { const p = products.find(x => x.id === i.id); return s + (p ? p.price * i.qty : 0); }, 0);
  const cashback = Math.round(subtotal * 0.02);
  walletBalance += cashback;
  localStorage.setItem('shopperWallet', walletBalance);
  if (cashback > 0) showToast('Cashback earned: ' + formatPrice(cashback) + ' 💰', 'success');
};

// Barcode scanner mock
document.getElementById('searchInput')?.insertAdjacentHTML('beforebegin', '<button class="voice-btn" id="barcodeBtn" aria-label="Scan barcode" style="font-size:14px;"><i class="fas fa-barcode"></i></button>');
document.getElementById('barcodeBtn')?.addEventListener('click', () => {
  const randomP = products[Math.floor(Math.random() * products.length)];
  searchInput.value = randomP.name;
  currentSearch = randomP.name;
  renderProducts();
  showToast('Scanned: ' + randomP.name);
});

// Voice order tracking
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  document.addEventListener('click', e => {
    if (e.target.closest('#voiceTrackBtn')) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-PH';
      recognition.start();
      recognition.onresult = (ev) => {
        const text = ev.results[0][0].transcript.toLowerCase();
        if (text.includes('order') || text.includes('where')) {
          const lastOrder = orders[0];
          if (lastOrder) showToast('Your last order: ' + lastOrder.status + ' (' + lastOrder.date + ')');
          else showToast('No orders found');
        }
      };
    }
  });
}

// Smart reorder suggestions
function renderReorderSuggestions() {
  const bought = [...new Set(orders.flatMap(o => o.items.map(i => i.id)))];
  if (!bought.length) return;
  const suggestions = products.filter(p => bought.includes(p.id)).sort((a,b) => b.sold - a.sold).slice(0, 4);
  if (!suggestions.length) return;
  const section = document.createElement('section');
  section.className = 'products-section';
  section.style.paddingBottom = '0';
  section.innerHTML = `<div class="container"><div class="section-header"><h2><i class="fas fa-rotate-left"></i> Buy Again</h2></div>
    <div style="display:flex;gap:12px;overflow-x:auto;">${suggestions.map(p => `<div class="related-item" data-id="${p.id}" style="flex-shrink:0;width:120px;"><img src="${p.image}" style="width:120px;height:120px;object-fit:cover;border-radius:8px;"><div style="font-size:12px;margin-top:4px;">${p.name}</div><div style="font-size:13px;font-weight:700;">${formatPrice(p.price)}</div></div>`).join('')}</div></div>`;
  document.querySelector('.products-section:last-of-type')?.after(section);
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'g' || e.key === 'G') toggleView('grid');
  if (e.key === 'l' || e.key === 'L') toggleView('list');
  if (e.key === 'Escape') { closeModal(); closeCart(); closeCheckout(); }
  if (e.key === 'd' || e.key === 'D') document.getElementById('darkToggle').click();
  if (e.key === 'c' || e.key === 'C') document.getElementById('cartBtn').click();
});

// Color swatches
document.addEventListener('click', e => {
  const swatch = e.target.closest('.color-swatch');
  if (swatch) {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    selectedVariantColor = swatch.dataset.color;
  }
});
// Override variant color buttons to show as swatches
const origOpen = openModal;
openModal = function(id) {
  origOpen(id);
  document.querySelectorAll('#varColor .variant-btn').forEach(b => {
    const colors = { 'Natural Titanium': '#c0b9a8', 'Blue Titanium': '#4a6fa5', 'White Titanium': '#e8e8e8', 'Titanium Gray': '#6b7280', 'Titanium Violet': '#8b5cf6', 'Titanium Yellow': '#eab308', 'Black': '#1f2937', 'White': '#ffffff', 'Navy': '#1e3a5f', 'Gray': '#9ca3af', 'Black/White': '#1f2937', 'Blue/Orange': '#2563eb', 'All Black': '#000', 'Khaki': '#c3b091', 'Light Blue': '#93c5fd', 'Dark Blue': '#1e40af', 'Ruby Red': '#dc2626', 'Nude': '#d4a574', 'Berry': '#9d174d', 'Coral': '#fb7185', 'Gold/Green': '#b8860b', 'Gold/Brown': '#a0764a', 'Black/Gray': '#374151' };
    const c = colors[b.textContent.trim()];
    if (c) { b.innerHTML = ''; b.style.cssText = 'width:28px;height:28px;border-radius:50%;background:' + c + ';border:2px solid var(--border);padding:0;'; b.classList.add('color-swatch'); b.dataset.color = b.textContent.trim(); b.title = b.dataset.color; }
  });
};

// Size guide
document.addEventListener('click', e => {
  if (e.target.closest('#sizeGuideBtn')) {
    const div = document.createElement('div');
    div.className = 'cancel-modal';
    div.innerHTML = `<div class="cancel-modal-content"><h4><i class="fas fa-ruler"></i> Size Guide</h4>
      <table style="width:100%;font-size:13px;border-collapse:collapse;"><tr style="background:var(--bg);"><th style="padding:6px;">Size</th><th>Chest</th><th>Waist</th><th>Hip</th></tr>
      <tr><td style="padding:6px;">S</td><td>34-36"</td><td>28-30"</td><td>36-38"</td></tr>
      <tr><td style="padding:6px;">M</td><td>38-40"</td><td>32-34"</td><td>40-42"</td></tr>
      <tr><td style="padding:6px;">L</td><td>42-44"</td><td>36-38"</td><td>44-46"</td></tr>
      <tr><td style="padding:6px;">XL</td><td>46-48"</td><td>40-42"</td><td>48-50"</td></tr></table></div>`;
    document.body.appendChild(div);
    setTimeout(() => div.classList.add('active'), 10);
    div.addEventListener('click', e2 => { if (e2.target === div) div.remove(); });
  }
});

// Installation service
const origCheckout4 = openCheckout;
openCheckout = function() {
  origCheckout4();
  const installHtml = `<div class="gift-wrap-row">
    <input type="checkbox" id="installCheck"><label for="installCheck"><i class="fas fa-toolbox"></i> Professional Installation (+₱499)</label><span class="gift-price">+₱499</span>
  </div>`;
  document.querySelector('.gift-wrap-row:last-of-type')?.insertAdjacentHTML('afterend', installHtml);
  document.getElementById('installCheck')?.addEventListener('change', () => updateCheckoutTotal());
};

// Skeleton on page load
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = Array(8).fill('<div class="skeleton-card"><div class="skeleton-img"></div><div class="skeleton-text"></div><div class="skeleton-text short"></div><div class="skeleton-text price"></div></div>').join('');
  setTimeout(renderProducts, 300);
});

// Compare from history
document.querySelector('.recent-scroll')?.insertAdjacentHTML('beforebegin', `
  <button class="coupon-btn" id="compareRecentBtn" style="font-size:12px;margin-bottom:8px;"><i class="fas fa-scale-balanced"></i> Compare Recently Viewed</button>
`);
document.getElementById('compareRecentBtn')?.addEventListener('click', () => {
  compareList = recentlyViewed.slice(0, 4);
  renderCompareBar();
  if (compareList.length >= 2) openCompare();
  else showToast('View at least 2 products first');
});

// Nutritional facts for food items
const origOpen2 = openModal;
openModal = function(id) {
  origOpen2(id);
  const p = products.find(x => x.id === id);
  if (p && p.category === 'food') {
    const nutritionHtml = `<div style="margin-top:10px;background:var(--bg);padding:12px;border-radius:var(--radius);font-size:12px;">
      <div style="font-weight:600;margin-bottom:4px;">Nutrition Facts</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
        <div>Calories: <strong>180 kcal</strong></div><div>Protein: <strong>12g</strong></div>
        <div>Carbs: <strong>24g</strong></div><div>Fat: <strong>4g</strong></div>
        <div>Fiber: <strong>3g</strong></div><div>Sugar: <strong>8g</strong></div>
      </div>
    </div>`;
    document.querySelector('.modal-desc')?.insertAdjacentHTML('afterend', nutritionHtml);
  }
};

// Dark mode per-product fix
const origOpen3 = openModal;
openModal = function(id) {
  origOpen3(id);
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const imgWrap = document.getElementById('modalImgWrap');
  if (imgWrap && isDark) imgWrap.style.background = '#f8fafc';
};

// PWA service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}

// PWA install prompt
let installPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  installPrompt = e;
  const btn = document.createElement('button');
  btn.className = 'install-btn';
  btn.innerHTML = '<i class="fas fa-download"></i> Install App';
  document.querySelector('.footer-bottom .container')?.appendChild(btn);
  btn.addEventListener('click', () => {
    installPrompt.prompt();
    installPrompt.userChoice.then(() => installPrompt = null);
  });
});

window.addEventListener('appinstalled', () => {
  showToast('Shopper installed! 🎉', 'success');
  document.querySelector('.install-btn')?.remove();
});

// Init
applyLang(currentLang);
renderProducts();
renderCart();
renderWishlist();
renderRecent();
renderCompareBar();
renderNotifDot();
startCountdown();
renderDeals();
renderReorderSuggestions();
