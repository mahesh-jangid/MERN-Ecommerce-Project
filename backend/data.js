import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mahesh Jangid",
      email: "maheshjangid7568@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Nike",
        logo: "/images/hero2.jpg",
        description: "best seller",
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: "user",
      email: "user255@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "HP Folio 9470M,",
      category: "laptop",
      image: "/images/hp-folio.jpg",
      price: 2500,
      countInStock: 2,
      brand: "hp",
      rating: 4.8,
      numReviews: 10,
      description:
        "Having some work or assignment you would like finished without the hustle of visiting a cyber cafe? Then look no further. This is a strong Core i7 performance laptop that has stylish design and meets durability standards. It’s also attractive and feature-packed business laptop. Order for your laptop from Jumia Kenya & have it delivered to your doorstep. Powerful Processor:This HP Folio 9470M comes equipped with an Intel Core i7 processor to ensure fast processing of data for your heavy tasks and browsing. Business Features: The metal lid on the HP Folio 9470M  is not just for looks; it also helps protect the notebook from the hazards of travel, being able to withstand up to 300 pounds of pressure. Also, a spill-resistant keyboard with drains keeps small amounts of liquid from damaging the system. Connectivity: Two of the four USB ports run the new USB 3.0 standard. The other two are only available with USB 2.0, one of which acts as an eSATA/USB combination port.",
      specification:
        "Model: 9470M,	Weight (kg): 2.5 Main, Material: PVC	Display Size (in): 14.0, 	RAM : 4 Memory Size (GB): 500,	Processor : Intel Core i7	Operating System: Windows",
    },

    {
      name: "Lenovo - 4GB RAM ",
      category: "laptop",
      image: "/images/hp24f3.jpg",
      price: 35000,
      countInStock: 20,
      brand: "lenovo",
      rating: 4.5,
      numReviews: 10,
      description:
        'Built to last. Engineered for long-lasting performance, the Lenovo Laptop delivers, powerful, smooth processing in a stylish, light design. Perfect for everyday computing on the go, this durable 14-inch laptop boasts exceptional audio and fast, secure storage options. Order this Lenovo Laptop online from Jumia Kenya and have it delivered to your doorstep.Packs a real punch: With Intel Celeron processor, the Lenovo Laptop is designed to keep pace with you—no matter the task. It also comes with a range of secure storage options, ensuring even faster response times. Unleash your inner traveler:With a starting weight of just 1.6kg, the Lenovo Laptop is ideal for when you’re on the go. Its narrow bezel makes for a cleaner design and larger display area. And with a choice of colors in a textured or glossy finish, this very affordable laptop is sure to impress, too. Great sounds, great visuals: Whether you’re watching a video, streaming music, or video-chatting, you will love what you hear on the Lenovo Laptop—crystal-clear Dolby Audio™. And with the 14-inch anti-glare display available in HD, you will love what you see as well.Kaspersky, Best Antivirus Blocks the latest viruses, ransomware, spyware, cryptolockers & more – and helps stop cryptocurrency mining malware damaging your PC’s performance. Technical Specifications Display, 	14" HD TNSystem ,	Processor: Intel Celeron 	Graphics: Intel Graphics•	Operating System: Windows 10 ProStorage & Memory,	Hard Disk: 1TB,RAM: 4GBInputs & Outputs 	2x USB-A 3.1 Gen 1	1x USB-A 2.0,	HDMI,	SD card reader,	Headphone / mic combo Connectivity,	WiFi: 802.11 AC 1x1 & 2x2 ,	Bluetooth® 4.2 Power & Battery ,	Battery: 2 Cell',
      specification:
        'Display: 14" HD TN	Processor: Intel Celeron	Storage: 1TB HDD	Memory: 4GB RAM	OS: Windows 10 Pro	Bluetooth, WiFi, Webcam	MS OFFICE + LICENSED KASPERSKY ANTIVIRUS',
    },

    {
      name: "Ultra-Slim HP 24f",
      category: "jeans trouser",
      image: "/images/sumsungc22.jpg",
      price: 28000,
      countInStock: 20,
      brand: "fashion",
      rating: 4.8,
      numReviews: 10,
      description:
        "Get the crisp picture quality you crave with this ultra-slim, micro-edge display, featuring eye-catching aluminium design and immersive ultra-wide viewing angles. From browsing content to streaming entertainment - it allows you to see your world in a whole new way. Appealing, ultra-thin design Built from lightweight, high-strength metal with a matte finish and high-polished resin, this ultra-slim display brings home a modern look and feel without the premium price tag. Stunning from edge-to-edge With its vivid IPS panel, this micro-edge display delivers ultra-wide viewing angles and crisp, clear picture quality. It’s an expansive viewing experience, perfect for dual display setups. Packed with entertainment features Experience the sharp, clear difference FHD resolution brings to all your content. And thanks to AMD FreeSync™, PC gaming is free of blur and lag.",
      specification:
        'Display: 14" HD TN	Processor: Intel Celeron	Storage: 1TB HDD	Memory: 4GB RAM	OS: Windows 10 Pro	Bluetooth, WiFi, Webcam	MS OFFICE + LICENSED KASPERSKY ANTIVIRUS',
    },
    {
      name: "Curved Samsung C24F390 Monitor",
      category: "monitor",
      image: "/images/sumsungc22.jpg",
      price: 28000,
      countInStock: 20,
      brand: "sumsung",
      rating: 4.8,
      numReviews: 10,
      description:
        "Discover a truly immersive viewing experience with the Samsung monitor curved more deeply than any other. Wrapping around your field of vision the 1,800 R screen creates a wider field of view, enhances depth perception, and minimises peripheral distractions to draw you deeper in to your content. So whether it is an online movie, a favourite TV show, or a pulse-racing game, Samsung’s deeper screen curve will fully immerse you in all your multi-media content. By reducing blue light emissions — which stimulate the retina more than other colours — Eye Saver Mode reduces eye fatigue and provides a more comfortable viewing experience. Samsung’s Flicker Free technology minimises distracting screen flicker to let you work and play for longer in greater comfort.",
      specification:
        "Size (L x W x H cm): 54.7 x 20.6 x 41.8	Weight (kg): 3.3,	Main Material: pvc,	Display Size (in): 24.0	Processor : n/a, Megapixels: 1920.0	Operating, System: Windows,	Screen Technology: LED",
    },

    {
      name: "HP 290 G4 Microtower PC",
      category: "desktop",
      image: "/images/hp-microtower.jpg",
      price: 66999,
      countInStock: 10,
      brand: "tech",
      rating: 4.5,
      numReviews: 10,
      description:
        "Maximize your investment Take on your everyday work at an affordable price with the HP 290 MT. Get the reliable computing power you need while minimizing the total cost of ownership—now that’s a smart investment. Powered up processing Keep up with daily tasks with performance from a 10th Gen Intel® Core™ processor , optional NVIDIA® or AMD discrete graphics , up to 64 GB DDR4 memory , and slots for future growth. Expansion for the future Three bays and two full-height slots, including PCIe x16 and PCIe x1 slots, provide expandability for the future. Configurable USB ports , serial ports , and legacy ports help ensure broad compatibility with existing technology. Help keep data safe Help protect your investment and your data with firmware or discrete TPM, HP DriveLock , and a physical security lock. Additional security is provided by an optional intrusion sensor and an integrated cable lock system to secure your cabled devices. Ready for work The HP 290 MT provides a powerful PC with a double-fan design to accomplish your everyday tasks. Help secure the future of your business. PCs from HP make the most of Windows 10 Pro to protect you from today’s security threats and maximize management and productivity features for business. Get fast and easy connections with optional Gigabit WLAN featuring 802.11ac protocol and Bluetooth® 4.2 connectivity. Support two independent displays with VGA and HDMI connectivity, plug in several compatible USB devices, and utilize an optional serial port. Help keep unauthorized users from accessing data on your primary drive. Prevent your primary drive from running without entering a password using HP DriveLock. Spend less time and get right to the updates you need with HP Support Assistant. Help secure your PC with a physical security lock, an intrusion sensor, and an integrated accessory cable lock to secure your cabled mouse and keyboard on the HP 290 MT. The optional high-efficiency power supply and molded-pulp packaging keep sustainability in mind.",
      specification:
        'Operating Systems Windows 10 Pro Processor family 10th Generation Intel® Core™ i3 processor Processor Intel® Core™ i3-10100 with Intel® UHD Graphics 630 (3.6 GHz base frequency, up to 4.3 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 4 cores) Chipset Intel® H470 Form factor Microtower Memory 4GB RAM Storage 1TB HDD Optical drive DVD Audio  Realtek ALC3601 codec, optional internal speaker, combo microphone/headphone jack Expansion slots 1 PCIe x1; 1 PCIe x16; 2 M.2 (1 M.2 slot for WLAN and 1 M.2 2242/2280 slot for storage.) Ports and Connectors Front:  1 headphone/microphone combo;  4 SuperSpeed USB 5Gbps signaling rate; 2 SuperSpeed USB 10Gbps signaling rate Rear: 1 HDMI; 1 line in; 1 line out; 1 power connector; 1 RJ-45; 1 serial; 1 VGA; 2 USB 2.0 Optional Ports: 1 4x serial; 1 parallel; 1 PS/2; 1 3-in-1 SD card reader Input devices HP USB wired keyboard ; HP USB wired optical mouse ; Communications LAN: Integrated 10/100/1000M GbE ; WLAN: Realtek 802.11a/b/g/n/ac (1x1) and Bluetooth® 4.2 Combo ; Drive Bays Two 3.5" (2.5") HDD Power 180 W internal power supply, up to 90% efficiency, active PFC Specifications KEY FEATURES Display: 18.5" Monitor Processor: 10th Generation Intel® Core™ i3-10100 Storage: 1TB HDD Memory: 4GB RAM OS: Windows 10 MS Office Keyboard + Mouse WHAT’S IN THE BOX',
    },

    {
      name: "HP Laptop Charger",
      category: "Pants",
      image: "/images/charger.jpg",
      price: 1200,
      countInStock: 10,
      rating: 4.0,
      numReviews: 10,
      brand: "fashion",
      description:
        "HP LAPTOP CHARGER/ADAPTER 19.5V,3.33A BLUE PIN This laptop power supply is engineered to deliver a strong charge to any compatible laptop. This unit gives you surge protection, over-current protection, voltage protection and over-temperature protection to keep your laptop operating and charging at the correct voltage. Laptop charger adapters may get damaged over time. However, you need not to worry as Toshiba brings you the best high quality laptop charger adapter replacements. These adapters have been engineered to offer the best premium performance. Built to safeguard your laptop against damage, this charger will not let you down. PERFORMANCE, SAFETY, RELIABILITY - All of our product lines are put through rigorous quality control procedures to ensure safe, reliable operation for years to come. We guarantee our products will charge your device as efficiently as the charger, or any other replacement. In addition, our products are in compliance with top industry standards, and include numerous safety mechanisms, including protection against short circuiting, overvoltage, overcurrent, and internal overheating.",
      specification:
        "HP Laptop Charger	450 G4 Laptop, 19.5v 3.33a,	Equivalent to 65w AC Adapter,	SKU: HP246EA17E88FNAFAMZ Weight (kg): 0.5,	Main Material: PVC",
    },

    {
      name: "AntiTheft Backpack Bag ",
      category: "bag",
      image: "/images/joystar3.jpg",
      price: 850,
      countInStock: 10,
      rating: 4.8,
      numReviews: 10,
      brand: "backpack",
      description:
        "PACK EVERYTHING FOR YOUR TRIP: Anti-theft Business Laptop Backpack is designed with USB charging port that offers the convenience of charging your mobile on the go. It is the perfect backpack for easy carrying of valuables and belongings while heading to business meeting, school, weekend getaways, shopping, outdoor activities, hiking, camping, etc. MULTI-FUNCTION ANTI-THEFT BACKPACK:This amazingly designed backpack has an anti-theft design with a hidden zipper which makes you far away from theft and protects your wallet, laptop, phone and other valuables. An ideal choice for kids and adults who demands convenience during travelling whilst ensuring the utmost safety of their belongings.LARGE CAPACITY MULTI-COMPARTMENT BAG: Featuring a judicial selection of style and functionality, the offered backpack has multiple storage compartments which can be used for hassle-free and organized storage of laptops, mobile phone, charger, clothes, pens, keys, bottles, books, documents, umbrella, etc. MADE TO LAST: We know the importance of quality. This Anti-theft Business Backpack is made of durable nylon and oxford fabric for dust-proof and water-proof nature so you can ensure that your belongings are safe even in rain and tight spaces. Besides, it also features an outer selection of 600D fabric and 6MM anti-collision sponge layer for safety. CARRY ANYWHERE, EVERYWHERE: No matter whether you count yourself among school or college-going youth or a daily commuter, this amazingly designed backpack is convenient for business, school, weekend getaways, travelling and all sorts of outdoor activities. A must-have for hikers, travelers, photographers, bikers, and adventure-lovers.",
      specification:
        "Integrated USB charging port, hidden zipper closures,	Water repellent fabric,	Weight balance & luggage strap,Interior slot pockets & Interior compartment Advanced storage design, SKU: FA113EA03YBEVNAFAMZ, Model: ATB,	Size (L x W x H cm): 46 x 31 x 15,	Weight (kg): 0.8,	Main Material: polyester,	Care Label: handle with care",
    },

    {
      name: "HP Elitebook 840",
      category: "laptop",
      image: "/images/hp-elite.jpg",
      price: 39000,
      countInStock: 10,
      rating: 4.8,
      numReviews: 10,
      brand: "hp",
      description:
        "The HP EliteBook 840 thin and light notebook is ultra-mobile in and out of the office. Work with confidence thanks to proven enterprise technologies, security, performance, and management features that will meet all your enterprise needs. Give your fast-paced business an edge with the world is most secure and manageable PCs. This Machine is an impressive Elite 840 with an elegant thin design, there is a perfect Elite solution for your business. Order for this HP EliteBook 840 online at Jumia Kenya and have it delivered straight at your doorstep. Portable Powerhouse: Combine high performance technology and long battery life with Intel Core i5 processors and a massive storage of 1TB HDD, this laptop has proven to be one of the best performer by HP. Drive performance with up to 8GB of DDR3 memory, and dual storage options for your most demanding business applications and fast access to data.Image result for Elitebook 840 power house Equipped for Productivity When it comes to power of connectivity, this becomes a must have laptop. Leave dongles behind with a drop-jaw Ethernet port, VGA port, and DisplayPort for key connections to all your devices. Stay connected with co-workers and customers with HP Connection Manager and optional Qualcomm Gobi 4G LTE. Great Audio Experience Watch all your favorite movies and listen to the latest tunes the way they were supposed to be heard with this HP Dual Speakers and Dolby Advanced Audio.  The thin, light, and stylish HP EliteBook 840 endures HP Total Test Process and passes rigorous MIL-STD 810G testing. Additionally, all the features it  expects including an expanded security portfolio and manageability tools to fulfill the needs for your business. Image result for Elitebook 840. Great Audio Experience: Watch all your favorite movies and listen to the latest tunes the way they were supposed to be heard with this HP Dual Speakers and Dolby Advanced Audio.  The way you experience your entertainment will never be the same again. Image result for dolby logo. Road Ready Never fear bumps and minor spills. The thin, light, and stylish HP EliteBook 840 endures HP Total Test Process and passes rigorous MIL-STD 810G testing. Additionally, all the features it  expects including an expanded security portfolio and manageability tools to fulfill the needs for your business. Image result for Elitebook 840",
      specification:
        'Display Size: 14" diagonal Graphics: Intel HD Graphics 4400Platform OS: win 10Processor Family: Intel Core i5 processor. Processor: intel Core i5 with Intel HD Graphics 4400 Chipset: Mobile Intel HM87 Environmental: Low halogen Storage Memory: 8 GB 1600 MHz DDR3L SDRAM Internal drive: 1000 GB HDD Networking 802.11n Bluetooth 4.0 Ports 2 USB 3.0 1 USB 3.0 charging 1 DisplayPort 1. VGA1 headphone/microphone combo 1 AC power 1 RJ-451 docking connector Expansion slots 1 multi-format digital media reader Audio HD audio with DTS Studio Sound  Integrated dual-microphone array2 integrated stereo speakers Camera 720p HD webcam Keyboard Spill-resistant keyboard with drain  Battery Power supply:45 W Smart AC adapter Battery type: HP Long Life 3-cell, 46 WHr Li-ion polymer',
    },

    // {
    //   name: "Lenovo Ideapad",
    //   category: "laptop",
    //   image: "/images/lenovo-ideapad.png",
    //   price: 79000,
    //   countInStock: 10,
    //   rating: 4.8,
    //   numReviews: 10,
    //   brand: "lenovo",
    //   description:
    //     "Engineered for long-lasting performance, the Lenovo IdeaPad 3 delivers powerful performance with Intel Core i5 Processors and integrated Intel UHD Graphics, in a laptop thats perfect for your everyday tasks, with features that you can depend on.Expect more from your entertainment - Dolby Audio™ delivers crystal-clear sound. Whether you’re watching a video, streaming music, or video-chatting, you’re sure to love what you hear on the IdeaPad 3.See more, do more - A narrow bezel on 2 sides makes for a clean design, and larger display, giving you more viewing area and less clutter. Privacy at your fingertips - Keep your privacy intact with a physical shutter for your webcam for peace of mind when you need it.",
    //   specification:
    //     'Processor: Intel Core i5-1035G1 Quad Core Processor Display: 14.0" FHD LED Backlit Anti-Glare Display Memory: 8GB (4GBOnBoard + 4GB DIMM) 2666MHz DDR4 RAM Internal storage: 512GB NVMe M.2 Solid State Drive Graphics: Integrated Intel UHD Graphics Optical Drive: None Audio: 2 x 1.5W SpeakersBattery life: Up to 9 Hours Wireless: 2 x 2 802.11AC Wi-Fi with Bluetooth 5.0 Webcam: 720P Camera with Privacy Shutter and Dual Array Microphones Product weight: 3.3 lbs Color: Platinum Grey',
    // },

    {
      name: "DELL XPS 1 7390",
      category: "laptop",
      image: "/images/dell-xps.png",
      price: 255000,
      countInStock: 10,
      rating: 4.8,
      numReviews: 10,
      brand: "dell",
      description:
        'Dell XPS 13 7390 2in1 Core i7-1065G7 16GB 512GB SSD 13.4″ Laptop is available in Nairobi Kenya, at Fgee Technology. Buy the Dell XPS 13 7390 2in1 Core i7-1065G7 16GB 512GB SSD 13.4″ Laptop at the best price. We deliver across Kenya and beyond!Dell makes affordable work notebooks for users who need a reliable machine for everyday tasks such as this Dell XPS 13 7390Get one today from our shops located on the Upper Ground floor and Mezzanine Floor, Revlon Plaza-Kimathi street in the CBD opposite Total Station.10th Generation Intel Core i7-1065G7 Processor (8MB Cache, up to 3.9 GHz)Operating System Windows 10 Pro 64-bit EnglishGraphics Card Intel Iris Plus GraphicsDisplay 13.4" 16:10 UHD+ WLED Touch Display (3840 x 2400)Memory 16GB 3733MHz LPDDR4x Memory OnboardHard Drive 512GB PCIe NVMe x4 Solid State Drive OnboardMicrosoft Office 30 Day TrialSecurity Software McAfee Small Business Security 12 Month SubscriptionWarranty ProSupport: Next Business Day Onsite, 1 Year ProSupport: 7x24 Technical Support, 1 Year Ports 2 Thunderbolt 3 (DisplayPort / power delivery (4 lanes of PCI Express Gen 3) 1 microSD card reader 1 3.5 mm headphone/microphone combo jack Camera Widescreen HD (720p) 2.25mm webcam',
      specification:
        'XPS 13 7390 2in1 Core i7-1065G7 16GB 512GB SSD 13.4" FHD+WLED Touch Intel Iris Plus/WLAN + BT Backlit Kb 4 Cell/ 10Home/ 1Yr Basic Onsite Service [centenario2005_109_blk_HOM] WHAT’S IN THE BOX laptop charger and manual SPECIFICATIONS Model: XPS-7390-2IN1-PLS4 Size (L x W x H cm): 8.91 x 12.85 x 0.72 inchesWeight (kg): 1.9Care Label: handle with care',
    },

    {
      name: "Acer Gateway",
      category: "laptop",
      image: "/images/acer.jpg",
      price: 60999,
      countInStock: 10,
      rating: 4.8,
      numReviews: 10,
      brand: "acer",
      description:
        "The 14.1-inch Gateway Ultra Slim Notebook features a 1080p screen that brings a crystal-clear picture for any and all of your tasks. The Intel Core i5 processor lets you ease through your daily tasks, paired with the Tuned by THX Audio lets you experience the theater level quality while in the convenience of your home.Windows 10 Home10th Gen Intel® Core™ i5-1035G1 Processor (1.0GHz, Up to 3.6GHz, 6M Cache)14.1” LCD IPS Display, (1920 x 1080)Tuned by THX™ Audio256 GB Solid State Drive16 GB Onboard RAMBuilt-in Fingerprint Scanner (Windows Hello)1MP Front-Facing CameraUp to 10 hours of battery lifeMicro SD Slot (Up to 512 GB) x 1HDMI Output x 1USB Type-C (Data transfer only) x 1USB 3.0 x 2Kensington Lock x 1Built-in Stereo Speakers x 2Bluetooth 5.1Built-in Microphone",
      specification:
        'Processor Brand Intel Processor Type Intel Core i5 Hard Drive Capacity 256 GB Manufacturer GPU Company Condition New Processor Speed 1 GHz Manufacturer Part Number GWTN141-4RG Wireless Technology Bluetooth RAM Memory 16 GB Operating System Windows 10 Model GWTN141-4RG Screen Size 14.1" Brand Gateway Features Fingerprint Reader WHAT’S IN THE BOX Gateway laptop Power Adapter. SPECIFICATIONS: Model: Gateway GWTN141-4GR Production Country: China Weight (kg): 1.59 Care Label: Handle with care',
    },

    {
      name: "HP EliteDesk Monitor",
      category: "desktop",
      image: "/images/hp-elite-desktop.jpg",
      price: 64999,
      countInStock: 10,
      rating: 4.8,
      numReviews: 10,
      brand: "hp",
      description:
        'The EliteDesk 800 G2 Small Form Factor Desktop Computer from HP is designed for business users who require powerful performance and high reliability in a small form factor. The EliteDesk 800 G2 is powered by a 3.2 GHz Intel Core i5-6500 Quad-Core processor which will allow users to run multiple applications simultaneously. If you need more power, the CPU can be overclocked to 4.0 GHz. The 4GB of 2133 MHz DDR4 SDRAM also helps the computer to run multiple applications simultaneously, as well as access frequently-used files and programs. The current memory configuration is one 4GB module with an additional three slots available for memory upgrades, making for a total of four 288-pin DIMM slots. With all 4 DIMM slots in use, this system supports 64GB of RAM, or 16GB per slot.For long-term storage of your files, a 500GB 7200 rpm SATA Hard Drive offers quick access to your data. If you want to add external storage drives or other peripherals, the EliteDesk 800 G2 features eight USB 3.0 Type-A ports, two USB 2.0 Type-A ports, two PS/2 ports, and one serial port. For users who wish to add additional components to the drive bays, there are 2 x 3.5" drive bays and 1 x 2.5" drive bay. The integrated Intel HD Graphics 530 delivers a sharp, clear picture while allowing for a wide range of monitors to be used via its 2 x DisplayPort and 1 x VGA port outputs. Whether you are listening to music, watching a movie, or playing a game, the integrated DTS Studio Sound and Realtek ALC221 codec output high definition audio and delivers higher fidelity than standard audio controllers. The EliteDesk 800 G2 Small Form Factor Desktop Computer includes a 19" LED Backlit Monitor, HP USB Business Slim keyboard, an HP USB 1000 dpi laser mouse, and a power cord.',
      specification:
        '3.2 GHz Intel Core i5-6500 Quad-Core 4GB of 2133 MHz DDR4 RAM Integrated Intel HD Graphics 530 500GB 7200 rpm SATA Hard Drive Slim SuperMulti DVD Burner 1 x Gigabit Ethernet Port 8 x USB 3.0, 2 x USB 2.0, 2 x PS/2 2 x DisplayPort & 1 x VGA USB Slim Wired Keyboard & Mouse Included Free DOS WHAT’S IN THE BOX 800 G2 Desktop CPU19" Monitor Keyboard and MousePower Cable SPECIFICATIONS Model: 800 G2 Weight (kg): 4.5',
    },
  ],
};
export default data;
