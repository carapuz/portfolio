// Vanilla JS for Lead 3D Environment & Character Artist Portfolio

// Language switcher state
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

const translations = {
  en: {
    // Nav
    "nav-home": "Home",
    "nav-showreels": "Showreels",
    "nav-renders": "Renders",
    "nav-studio": "3D Studio",
    "nav-about": "About",
    "nav-contact": "Contact",
    "nav-creatures": "Creatures",
    "nav-hard-surface": "Hard Surface",
    "nav-art-2d": "2D Art",
    "nav-about-cv": "About & CV",
    "nav-creatures-monsters": "Creatures & Monsters",
    "nav-hard-surface-props": "Hard Surface & Props",
    "nav-art-2d-icons": "2D Art & Icons",
    "nav-info-about": "Info & About",
    "nav-item-brain-boss": "Brain-boss Monster",
    "nav-item-finger-monster": "Finger Middle Monster",
    "nav-item-heavy-troll": "Subterranean Troll",
    "nav-item-cyber-mutant": "Cyber Mutant Soldier",
    "nav-item-mechanic": "Industrial Mechanic",
    "nav-item-mutated-mechanic": "Mutated Mechanic",
    "nav-item-antennas": "Antenna Arrays",
    "nav-item-weapons": "Sci-Fi Weapons",
    "nav-item-wooden-cart": "Old Wooden Cart",
    "nav-item-game-ready": "Game Ready Model",
    "nav-item-graphics-2d": "2D Graphics",
    "nav-item-icons-2d": "2D Icons Collection",
    "nav-item-about-me": "About Me",
    "nav-item-career-highlights": "Career Highlights",

    // Hero
    "hero-status": "AVAILABLE FOR REMOTE FREELANCE COMMISSIONS",
    "hero-role": "Lead 3D Environment & Character Artist",
    "hero-tagline": "Crafting high-density, performant virtual worlds and cinematic character assets for next-generation AAA game engines.",
    "hero-cta-reel": "View Showreel",
    "hero-cta-brief": "Transmit Brief",
    "hero-console-log-header": "DIAGNOSTIC TELEMETRY TRANSMISSION",
    "hero-log-1": "INITIALIZING 3D ART PORTFOLIO PRESENTATION...",
    "hero-log-2": "LOADING COMPACT SHADER PIPELINE & TEXTURE REPOSITORIES...",
    "hero-log-3": "COMMUNICATIONS ACTIVE: SECURE CLOUD GATEWAY RUNNING...",
    "hero-log-4": "PRODUCER CODEBUILD DETECTED: STATUS OK (V4.2)...",
    "hero-log-5": "COGNITIVE GRAPHICS INTERACTION MODULE ON...",
    "hero-scroll-ind": "SCROLL TO EXPLORE ARCHIVE",

    // Showreels
    "showreel-sub": "CINEMATIC FRAMES & GAMEPLAY FOOTAGE",
    "showreel-title": "Showcase Showreels",
    "showreel-stream-status": "NATIVE STREAM LINK: EMBEDDED VIA YOUTUBE (4K UHD SUPPORT)",
    "showreel-meta-role-lbl": "Project Production Role",
    "showreel-meta-year-lbl": "Production Timeline",
    "showreel-meta-res-lbl": "Showcase Resolution",
    "showreel-meta-dur-lbl": "Runtime Duration",
    "showreel-meta-soft-lbl": "Software Framework Stack",

    // Compare
    "compare-sub": "RENDER PASS CHANNEL EVALUATION",
    "compare-title": "Lighting & Pass Comparisons",
    "compare-desc": "Drag the interactive divider to scrub between raw occlusion/matte topology mesh and the fully lit, materials-loaded cinematic render assembly.",
    "compare-stats-1-lbl": "TARGET RESOLUTION",
    "compare-stats-1-val": "8K CINEMATIC NATIVE",
    "compare-stats-2-lbl": "LIGHTING RIG",
    "compare-stats-2-val": "DYNAMIC LUMEN GI",
    "compare-stats-3-lbl": "COMPILATION COST",
    "compare-stats-3-val": "45 MINS (SUB-PIXEL)",
    "compare-split-matte": "RAW AMBIENT OCCLUSION (GREYSCALE)",
    "compare-split-final": "CINEMATIC SPECULAR PBR ASSEMBLY (FINAL)",

    // Studio
    "studio-sub": "INTERACTIVE VIEWPORT SIMULATION",
    "studio-title": "Camera Orbit Studio",
    "studio-desc": "Manipulate custom shader layers and orbit preset positions in real-time. Simulates standard professional viewport configurations.",
    "studio-orbit-label": "Camera Orbit",
    "studio-preset-front": "Front-Left (15°)",
    "studio-preset-diag": "Diagonal (45°)",
    "studio-preset-side": "Side Profile (75°)",
    "studio-shader-title": "Active Rendering Channel",
    "studio-sh-pbr-title": "Finalized PBR Pass",
    "studio-sh-pbr-desc": "Lumen lighting, textures, shadows",
    "studio-sh-wire-title": "Wireframe Mesh",
    "studio-sh-wire-desc": "Poly density & topology loops",
    "studio-sh-metal-title": "Metallic Pass",
    "studio-sh-metal-desc": "Specular & conduction weight",
    "studio-sh-rough-title": "Roughness Map",
    "studio-sh-rough-desc": "Surface friction & micro-shadows",
    "studio-sh-notice": "Notice: Shaders are simulated in this browser interface. For full, real-time native raytracing interactions, refer to finalized project assemblies.",

    // Gallery
    "gallery-sub": "HIGH DENSITY STORAGE VAULT",
    "gallery-title": "Fine Art Gallery",
    "btn-gal-all": "All Assets",
    "btn-gal-env": "Environments",
    "btn-gal-char": "Characters",
    "btn-gal-props": "Hard Surface",

    // Gallery Cards
    "art-cyberpunk-cat": "ENVIRONMENT // REAL-TIME UE5",
    "art-cyberpunk-title": "Sector 9: Cyberpunk Rain",
    "art-cyberpunk-desc": "An immersive, high-density sci-fi street environment designed to test advanced raytracing reflections, dynamic emissive neon maps, and complex volumetric weather effects in Unreal Engine 5.",
    "art-cyberpunk-poly": "4.2M triangles (instanced)",
    "art-cyberpunk-renderer": "Lumen Raytracing (UE5)",
    "art-cyberpunk-textures": "4K PBR, UDIM workflow",
    "art-cyberpunk-time": "Real-time (60fps @ 4K)",

    "art-ancient-cat": "ENVIRONMENT // PROCEDURAL SCATTER",
    "art-ancient-title": "Overgrown Sanctuary",
    "art-ancient-desc": "An ancient ruins structure reclaimed by nature, exploring dense procedural foliage scatter, photogrammetry rock assets integration, and dramatic god-ray volumetric lighting passes.",
    "art-ancient-poly": "8.7M triangles (Nanite optimized)",
    "art-ancient-renderer": "Nanite & Path Tracer",
    "art-ancient-textures": "2K/4K PBR, Packed Atlases",
    "art-ancient-time": "3.5 mins / frame (Path Tracer)",

    "art-mecha-cat": "HARD SURFACE // ROBOTIC SCULPT",
    "art-mecha-title": "X-01 Heavy Assault Mecha",
    "art-mecha-desc": "A hard-surface character sculpt focusing on robotic articulation, mechanical joint clearance, hydraulic details, and realistic carbon-fiber and scratched-metal texturing.",
    "art-mecha-poly": "850,000 polygons",
    "art-mecha-renderer": "Marmoset Toolbag 4",
    "art-mecha-textures": "4 x 4K Texture Sets",
    "art-mecha-time": "45 seconds / frame",

    "art-cozy-cat": "STYLIZED // HAND-PAINTED SHADING",
    "art-cozy-title": "The Archivist's Cozy Study",
    "art-cozy-desc": "A stylized, cozy isometric model capturing a magical attic library. Focused on hand-painted PBR materials, warm ambient lighting layout, and high asset density modeling within a restricted grid.",
    "art-cozy-poly": "124,000 polygons",
    "art-cozy-renderer": "Cycles & Marmoset",
    "art-cozy-textures": "2K PBR, Stylized Hand-painted",
    "art-cozy-time": "12 mins / frame (Cycles 2048 samples)",

    // About
    "about-statement-header": "Artist Statement",
    "about-statement-text": "I am a passionate 3D artist with over 6 years of industry experience specializing in high-fidelity environment design, hard-surface modeling, and character sculpting. Utilizing industry-leading tools like Blender, ZBrush, Substance Painter, and Unreal Engine 5, I translate complex conceptual sketches into production-ready 3D assets optimized for cinematic films and AAA game engines.",
    "about-loc": "LOCATION: VANCOUVER, BC, CANADA",
    "about-commissions": "COMMISSIONS: DIRECT PORTAL OPEN",
    "about-sub": "PIPELINE STANDARDS",
    "about-prof-title": "Software Proficiency",
    "about-sh-notice": "Pipeline standards verified. Highly experienced with standard high-to-low poly baking, clean topology, UV layout optimization, and game asset integration workflows.",
    "about-career-sub": "CAREER TRACKS",
    "about-career-title": "Professional History",
    "job1-role": "Senior 3D Environment Artist",
    "job1-desc": "Leading a team of 4 environment artists on an unannounced AAA cyberpunk RPG. Sculpting modular assets, overseeing UDIM texture pipeline, and optimizing UE5 geometry.",
    "job2-role": "3D Asset Artist (Vehicles & Hard Surface)",
    "job2-desc": "Designed, modeled, and textured over 40+ high-fidelity mechanical vehicles and characters. Reduced bake and texturing turnaround by 25%.",
    "job3-role": "Junior 3D Generalist",
    "job3-desc": "Assisted in background modeling, procedural foliage scatter setup, rigging hard-surface mechanisms, and setting up multi-pass renders.",

    // Contact
    "contact-sub": "GET IN TOUCH",
    "contact-title": "Commission Inquiries",
    "contact-desc": "Are you looking to expand your team with high-density environmental environments or stylized props? I am currently open for remote contract work, freelance consulting commissions, and full-time senior technical production roles.",
    "contact-email-label": "DIRECT EMAIL",
    "contact-discord-label": "DISCORD HANDSHAKE",
    "contact-mailbox-status": "Direct mailbox monitored (Typical response < 24h)",
    "contact-form-name": "Your Name *",
    "contact-form-name-placeholder": "E.g., Elena Rostova",
    "contact-form-email": "Your Email *",
    "contact-form-email-placeholder": "E.g., elena@cyberstudio.io",
    "contact-form-type": "Project Type",
    "contact-form-budget": "Budget Allocation",
    "contact-form-message": "Creative Brief / Description *",
    "contact-form-message-placeholder": "Outline your pipeline challenges, target triangle count, poly budgets, software requirements, and key deliverable milestones...",
    "contact-form-submit": "Submit Creative Brief",
    "contact-console-ready": "[READY] CONSOLE STANDBY FOR OUTBOUND TRANSACTION...",
    "contact-console-fill": "FILL OUT ALL MANDATORY FIELD CAPSULES AND TRANSMIT",
    "opt-modular": "Modular Environment",
    "opt-hardsurface": "Hard-Surface Vehicle",
    "opt-stylized": "Stylized Asset Pack",
    "opt-cinematic": "Cinematic Compositing",
    "opt-other": "Other / Full-time Role",
    "opt-b1": "< $2,000 USD",
    "opt-b2": "$2,000 - $5,000 USD",
    "opt-b3": "$5,000 - $10,000 USD",
    "opt-b4": "$10,000+ USD / Retainer",

    // Lightbox
    "lightbox-spec-log": "SPECIFICATION LOG",
    "lightbox-poly-lbl": "Polygon Budget",
    "lightbox-soft-lbl": "Software Stack",
    "lightbox-renderer-lbl": "Primary Renderer",
    "lightbox-textures-lbl": "Textures Mapping",
    "lightbox-time-lbl": "Average Render Time",
    "lightbox-footer-note": "Asset compiled perfectly. All vertex maps, UV packs, and materials comply with cinematic production specifications.",

    // Footer
    "footer-status": "Available for remote freelance commissions",
    "footer-copyright": "© 2026. ALL RIGHTS RESERVED. BUNDLED FOR GITHUB PAGES."
  },
  pl: {
    // Nav
    "nav-home": "Start",
    "nav-showreels": "Wideo",
    "nav-renders": "Rendery",
    "nav-studio": "Studio 3D",
    "nav-about": "O mnie",
    "nav-contact": "Kontakt",
    "nav-creatures": "Stworzenia",
    "nav-hard-surface": "Twarde powierzchnie",
    "nav-art-2d": "Grafika 2D",
    "nav-about-cv": "O mnie & CV",
    "nav-creatures-monsters": "Stworzenia i potwory",
    "nav-hard-surface-props": "Twarde powierzchnie i rekwizyty",
    "nav-art-2d-icons": "Grafika 2D i ikony",
    "nav-info-about": "Informacje i O mnie",
    "nav-item-brain-boss": "Potwór Brain-boss",
    "nav-item-finger-monster": "Potwór Finger Middle",
    "nav-item-heavy-troll": "Podziemny Troll",
    "nav-item-cyber-mutant": "Żołnierz Cyber-Mutant",
    "nav-item-mechanic": "Robot Mechanik",
    "nav-item-mutated-mechanic": "Mutujący Mechanik",
    "nav-item-antennas": "Tablice Antenowe",
    "nav-item-weapons": "Broń Sci-Fi",
    "nav-item-wooden-cart": "Stary Drewniany Wózek",
    "nav-item-game-ready": "Model do Gry",
    "nav-item-graphics-2d": "Grafika 2D",
    "nav-item-icons-2d": "Kolekcja Ikon 2D",
    "nav-item-about-me": "O mnie",
    "nav-item-career-highlights": "Osiągnięcia zawodowe",

    // Hero
    "hero-status": "DOSTĘPNY DLA ZDALNYCH ZLECEŃ I KONTRAKTÓW",
    "hero-role": "Główny Artysta Środowisk i Postaci 3D",
    "hero-tagline": "Projektowanie wysokiej gęstości, zoptymalizowanych pod kątem wydajności światów wirtualnych i postaci na potrzeby silników AAA nowej generacji.",
    "hero-cta-reel": "Obejrzyj Wideo",
    "hero-cta-brief": "Prześlij Brief",
    "hero-console-log-header": "TRANSMISJA SYGNAŁU DIAGNOSTYCZNEGO",
    "hero-log-1": "INICJOWANIE PREZENTACJI PORTFOLIO 3D...",
    "hero-log-2": "ŁADOWANIE SHADERÓW PBR I KATALOGÓW TEKSTUR...",
    "hero-log-3": "POŁĄCZENIE AKTYWNE: BEZPIECZNA BRAMA CHMUROWA URUCHOMIONA...",
    "hero-log-4": "WYKRYTO KOD PRODUCENCKI: STATUS OK (V4.2)...",
    "hero-log-5": "MODUŁ INTERAKCJI GRAFIKI KOGNITYWNEJ WŁĄCZONY...",
    "hero-scroll-ind": "PRZEWIŃ, ABY ODKRYĆ ARCHIWUM",

    // Showreels
    "showreel-sub": "KADRY FILMOWE I ZAPISY ROZGRYWKI",
    "showreel-title": "Prezentacje Wideo",
    "showreel-stream-status": "LINK STRUMIENIA: OSADZONY PRZEZ YOUTUBE (JAKOŚĆ 4K UHD)",
    "showreel-meta-role-lbl": "Rola w Produkcji Projektu",
    "showreel-meta-year-lbl": "Oś Czasu Produkcji",
    "showreel-meta-res-lbl": "Rozdzielczość Prezentacji",
    "showreel-meta-dur-lbl": "Czas Trwania",
    "showreel-meta-soft-lbl": "Zestaw Oprogramowania",

    // Compare
    "compare-sub": "OCENA KANAŁÓW WYRENDEROWANYCH ZASOBÓW",
    "compare-title": "Porównanie Oświetlenia i Przejść",
    "compare-desc": "Przeciągnij interaktywny suwak, aby porównać surową siatkę topologii modelu z gotowym, oświetlonym renderem filmowym z nałożonymi materiałami.",
    "compare-stats-1-lbl": "ROZDZIELCZOŚĆ DOCELOWA",
    "compare-stats-1-val": "8K CINEMATIC NATIVE",
    "compare-stats-2-lbl": "SCHEMAT OŚWIETLENIA",
    "compare-stats-2-val": "DYNAMICZNY LUMEN GI",
    "compare-stats-3-lbl": "KOSZT KOMPILACJI",
    "compare-stats-3-val": "45 MIN (SUB-PIKSEL)",
    "compare-split-matte": "SUROWA GEOMETRIA (GREYSCALE)",
    "compare-split-final": "ZŁOŻENIE FILMOWE PBR (FINALNY RENDER)",

    // Studio
    "studio-sub": "SYMULACJA AKTYWNEGO WIDOKU PORTU",
    "studio-title": "Studio Obrotu Kamery",
    "studio-desc": "Zmieniaj niestandardowe warstwy shaderów i pozycje kamer w czasie rzeczywistym. Symuluje profesjonalne środowiska robocze.",
    "studio-orbit-label": "Obrót Kamery",
    "studio-preset-front": "Przód-Lewo (15°)",
    "studio-preset-diag": "Przekątna (45°)",
    "studio-preset-side": "Z boku (75°)",
    "studio-shader-title": "Aktywny Kanał Renderowania",
    "studio-sh-pbr-title": "Finalne Przejście PBR",
    "studio-sh-pbr-desc": "Oświetlenie Lumen, tekstury, cienie",
    "studio-sh-wire-title": "Siatka Wireframe",
    "studio-sh-wire-desc": "Gęstość wielokątów i pętle topologii",
    "studio-sh-metal-title": "Mapa Metaliczności",
    "studio-sh-metal-desc": "Waga odbić i przewodności",
    "studio-sh-rough-title": "Mapa Chropowatości",
    "studio-sh-rough-desc": "Tarcie powierzchniowe i mikrocienie",
    "studio-sh-notice": "Uwaga: Shadery są symulowane w tym interfejsie przeglądarki. Aby uzyskać pełną interakcję z natywnym śledzeniem promieni (raytracing), odnieś się do gotowych kompilacji projektów.",

    // Gallery
    "gallery-sub": "SKARBIEC ZASOBÓW WYSOKIEJ GĘSTOŚCI",
    "gallery-title": "Galeria Renderów",
    "btn-gal-all": "Wszystkie",
    "btn-gal-env": "Środowiska",
    "btn-gal-char": "Postacie",
    "btn-gal-props": "Hard Surface",

    // Gallery Cards
    "art-cyberpunk-cat": "ŚRODOWISKO // CZAS RZECZYWISTY UE5",
    "art-cyberpunk-title": "Sektor 9: Deszcz Cyberpunku",
    "art-cyberpunk-desc": "Imersyjne środowisko uliczne science-fiction o wysokiej gęstości, zaprojektowane do testowania zaawansowanych odbić raytracingu, emisyjnych map neonów i złożonych efektów pogodowych w Unreal Engine 5.",
    "art-cyberpunk-poly": "4.2M trójkątów (instancjonowane)",
    "art-cyberpunk-renderer": "Lumen Raytracing (UE5)",
    "art-cyberpunk-textures": "4K PBR, workflow UDIM",
    "art-cyberpunk-time": "Czas rzeczywisty (60fps przy 4K)",

    "art-ancient-cat": "ŚRODOWISKO // ROZPRASZANIE PROCEDURALNE",
    "art-ancient-title": "Zarośnięte Sanktuarium",
    "art-ancient-desc": "Starożytne ruiny odzyskane przez naturę, badające gęste proceduralne rozmieszczenie roślinności, integrację fotogrametrii skał i dramatyczne ujęcia oświetlenia wolumetrycznego typu god-rays.",
    "art-ancient-poly": "8.7M trójkątów (optymalizacja Nanite)",
    "art-ancient-renderer": "Nanite i Path Tracer",
    "art-ancient-textures": "Tekstury 2K/4K PBR, pakowane atlasy",
    "art-ancient-time": "3.5 min / klatkę (Path Tracer)",

    "art-mecha-cat": "HARD SURFACE // RZEŹBA ROBOTYCZNA",
    "art-mecha-title": "Ciężki Mecha Szturmowy X-01",
    "art-mecha-desc": "Model postaci hard-surface skupiający się na mechanicznej artykulacji elementów, luzach na stawach hydraulicznych, detalach i realistycznym teksturowaniu zarysowanego metalu i włókna węglowego.",
    "art-mecha-poly": "850,000 wielokątów",
    "art-mecha-renderer": "Marmoset Toolbag 4",
    "art-mecha-textures": "4 zestawy tekstur 4K",
    "art-mecha-time": "45 sekund / klatkę",

    "art-cozy-cat": "STYLIZOWANE // CIENIOWANIE HAND-PAINTED",
    "art-cozy-title": "Przytulny Gabinet Archiwisty",
    "art-cozy-desc": "Stylizowany, przytulny model izometryczny przedstawiający magiczną bibliotekę na poddaszu. Skupia się na ręcznie malowanych materiałach PBR, ciepłym oświetleniu i wysokiej gęstości detali na ograniczonej siatce.",
    "art-cozy-poly": "124,000 wielokątów",
    "art-cozy-renderer": "Cycles i Marmoset",
    "art-cozy-textures": "Tekstury 2K PBR, stylizowane, ręcznie malowane",
    "art-cozy-time": "12 min / klatkę (Cycles, 2048 próbek)",

    // About
    "about-statement-header": "Oświadczenie Artysty",
    "about-statement-text": "Jestem pasjonatem grafiki 3D z ponad 6-letnim doświadczeniem w branży, specjalizującym się w projektowaniu środowisk o wysokiej gęstości, modelowaniu twardych powierzchni (hard-surface) oraz rzeźbieniu postaci. Wykorzystując wiodące narzędzia takie jak Blender, ZBrush, Substance Painter i Unreal Engine 5, przekładam skomplikowane szkice koncepcyjne na gotowe do produkcji modele 3D, zoptymalizowane pod kątem filmów oraz silników gier AAA.",
    "about-loc": "LOKALIZACJA: VANCOUVER, BC, KANADA",
    "about-commissions": "ZLECENIA: BEZPOŚREDNI PORTAL OTWARTY",
    "about-sub": "STANDARDY PROCESU TWÓRCZEGO",
    "about-prof-title": "Biegłość w Oprogramowaniu",
    "about-sh-notice": "Standardy pipeline'u zweryfikowane. Bogate doświadczenie w wypiekaniu map high-to-low poly, czystej topologii, optymalizacji mapowania UV oraz integracji modeli z silnikami gier.",
    "about-career-sub": "ŚCIEŻKA ROZWOJU",
    "about-career-title": "Historia Zawodowa",
    "job1-role": "Starszy Artysta Środowisk 3D",
    "job1-desc": "Kierowanie 4-osobowym zespołem artystów środowiskowych przy niezapowiedzianym tytule AAA RPG w klimacie cyberpunk. Rzeźbienie modułowych modeli, nadzór nad pipeline'em tekstur UDIM oraz optymalizacja geometrii UE5.",
    "job2-role": "Artysta Modeli 3D (Pojazdy i Hard Surface)",
    "job2-desc": "Projektowanie, modelowanie i teksturowanie ponad 40 wysokiej klasy mechanicznych pojazdów i postaci. Skrócenie czasu wypiekania i teksturowania o 25%.",
    "job3-role": "Młodszy Generalista 3D",
    "job3-desc": "Asystowanie przy modelowaniu tła, proceduralnym rozmieszczaniu roślinności, riggingu twardych struktur mechanicznych oraz przygotowywaniu wieloetapowych renderów.",

    // Contact
    "contact-sub": "KONTAKT",
    "contact-title": "Komercyjna Współpraca",
    "contact-desc": "Chcesz poszerzyć swój zespół o bogate w detale środowiska lub stylizowane rekwizyty? Jestem obecnie otwarty na zdalną pracę kontraktową, zlecenia konsultacyjne typu freelance oraz stałe oferty pracy na stanowiskach technicznych seniora.",
    "contact-email-label": "BEZPOŚREDNI EMAIL",
    "contact-discord-label": "DISCORD",
    "contact-mailbox-status": "Skrzynka pocztowa monitorowana na bieżąco (Odpowiedź < 24h)",
    "contact-form-name": "Twoje Imię i Nazwisko *",
    "contact-form-name-placeholder": "Np. Joanna Kowalska",
    "contact-form-email": "Twój Adres Email *",
    "contact-form-email-placeholder": "Np. joanna@cyberstudio.io",
    "contact-form-type": "Typ Projektu",
    "contact-form-budget": "Przewidziany Budżet",
    "contact-form-message": "Brief Kreatywny / Opis Zlecenia *",
    "contact-form-message-placeholder": "Opisz wyzwania produkcyjne, docelowy budżet wielokątów, wymagania programowe oraz kluczowe kamienie milowe projektu...",
    "contact-form-submit": "Prześlij Brief Kreatywny",
    "contact-console-ready": "[GOTOWOŚĆ] KONSOLA OCZEKUJE NA TRANSAKCJĘ WYCHODZĄCĄ...",
    "contact-console-fill": "WYPEŁNIJ WSZYSTKIE WYMAGANE POLA I WYŚLIJ",
    "opt-modular": "Środowisko Modułowe",
    "opt-hardsurface": "Pojazd Hard-Surface",
    "opt-stylized": "Zestaw Stylizowanych Modeli",
    "opt-cinematic": "Kompozycja Filmowa",
    "opt-other": "Inne / Praca na pełny etat",
    "opt-b1": "< $2 000 USD",
    "opt-b2": "$2 000 - $5 000 USD",
    "opt-b3": "$5 000 - $10 000 USD",
    "opt-b4": "$10 000+ USD / Retainer",

    // Lightbox
    "lightbox-spec-log": "LOG SPECYFIKACJI TECHNICZNEJ",
    "lightbox-poly-lbl": "Budżet Wielokątów",
    "lightbox-soft-lbl": "Użyte Oprogramowanie",
    "lightbox-renderer-lbl": "Główny Renderer",
    "lightbox-textures-lbl": "Mapowanie Tekstur",
    "lightbox-time-lbl": "Średni Czas Renderu",
    "lightbox-footer-note": "Zasób skompilowany pomyślnie. Wszystkie mapy wierzchołków, mapowanie UV oraz materiały są w pełni zgodne ze specyfikacjami produkcji filmowej.",

    // Footer
    "footer-status": "Dostępny do zdalnych zleceń komercyjnych i kontraktów",
    "footer-copyright": "© 2026. WSZELKIE PRAWA ZASTRZEŻONE. BUNDLED DLA GITHUB PAGES."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLanguageSwitcher();
  initShowreel();
  initRenderPassSlider();
  initSandbox();
  initGallery();
  initContactForm();
  initRouter();
});

// 1. DYNAMIC NAVBAR SCROLL AND MOBILE MENU
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  // Change nav style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.remove('bg-transparent', 'border-transparent', 'py-5');
      navbar.classList.add('bg-[#080808]/90', 'backdrop-blur-md', 'border-white/5', 'py-3');
    } else {
      navbar.classList.add('bg-transparent', 'border-transparent', 'py-5');
      navbar.classList.remove('bg-[#080808]/90', 'backdrop-blur-md', 'border-white/5', 'py-3');
    }

    // Scroll spy for active link
    let activeId = 'home';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('text-white', 'bg-white/5', 'border-white/10');
        link.classList.remove('text-white/40', 'border-transparent');
      } else {
        link.classList.remove('text-white', 'bg-white/5', 'border-white/10');
        link.classList.add('text-white/40', 'border-transparent');
      }
    });
  });

  // Toggle mobile menu
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.innerHTML = `
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        `;
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = `
          <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        `;
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = `
          <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        `;
      });
    });
  }
}

// 2. LANGUAGE SWITCHER MODULE
function initLanguageSwitcher() {
  const btnEn = document.getElementById('lang-en');
  const btnPl = document.getElementById('lang-pl');
  const mBtnEn = document.getElementById('mobile-lang-en');
  const mBtnPl = document.getElementById('mobile-lang-pl');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    // 1. Update text elements having data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Handle input placeholders
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // 2. Handle specific placeholders that are defined as key-placeholder
    document.querySelectorAll('input, textarea').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        const placeholderKey = `${key}-placeholder`;
        if (translations[lang] && translations[lang][placeholderKey]) {
          el.placeholder = translations[lang][placeholderKey];
        }
      }
    });

    // 3. Update active classes on language buttons
    if (btnEn && btnPl) {
      if (lang === 'en') {
        btnEn.className = "px-2.5 py-1 rounded-sm font-mono text-[10px] tracking-wider uppercase transition-all duration-200 font-bold bg-white text-black cursor-pointer";
        btnPl.className = "px-2.5 py-1 rounded-sm font-mono text-[10px] tracking-wider uppercase transition-all duration-200 text-white/40 hover:text-white cursor-pointer";
      } else {
        btnPl.className = "px-2.5 py-1 rounded-sm font-mono text-[10px] tracking-wider uppercase transition-all duration-200 font-bold bg-white text-black cursor-pointer";
        btnEn.className = "px-2.5 py-1 rounded-sm font-mono text-[10px] tracking-wider uppercase transition-all duration-200 text-white/40 hover:text-white cursor-pointer";
      }
    }

    if (mBtnEn && mBtnPl) {
      if (lang === 'en') {
        mBtnEn.className = "flex-1 text-center font-mono text-[10px] tracking-widest uppercase bg-white text-black py-2.5 rounded-sm font-bold cursor-pointer";
        mBtnPl.className = "flex-1 text-center font-mono text-[10px] tracking-widest uppercase text-white/40 border border-white/5 bg-white/5 py-2.5 rounded-sm cursor-pointer";
      } else {
        mBtnPl.className = "flex-1 text-center font-mono text-[10px] tracking-widest uppercase bg-white text-black py-2.5 rounded-sm font-bold cursor-pointer";
        mBtnEn.className = "flex-1 text-center font-mono text-[10px] tracking-widest uppercase text-white/40 border border-white/5 bg-white/5 py-2.5 rounded-sm cursor-pointer";
      }
    }

    // 4. Dispatch dynamic language change event for showreels/galleries
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  }

  // Attach event listeners
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnPl) btnPl.addEventListener('click', () => setLanguage('pl'));
  if (mBtnEn) mBtnEn.addEventListener('click', () => setLanguage('en'));
  if (mBtnPl) mBtnPl.addEventListener('click', () => setLanguage('pl'));

  // Initialize Language State
  setLanguage(currentLang);
}

// 3. SHOWREEL VIDEO PLAYER & PLAYLIST SWITCHER
const showreelData = {
  'vfx-showreel': {
    title: {
      en: "VFX & Hard-Surface Cinematic Showreel",
      pl: "Demoreel filmowy VFX i modeli hard-surface"
    },
    videoUrl: "https://www.youtube.com/embed/R6MlUcmO1Mc?autoplay=1",
    description: {
      en: "A compilation of sci-fi spacecrafts, mechanical drones, and dynamic compositing passes. Highlighting rigid body simulations, camera tracking, and seamless live-action integration.",
      pl: "Kompilacja statków sci-fi, mechanicznych dronów i dynamicznych ujęć kompozytorskich. Prezentacja symulacji ciał sztywnych, trackingu kamer oraz integracji z nagraniami aktorskimi."
    },
    duration: "1:42",
    role: {
      en: "Lead Hard-Surface Modeling & Compositing",
      pl: "Główny modelarz hard-surface i kompozytor"
    },
    resolution: "4K UHD",
    year: "2026",
    software: "Blender, Houdini, Nuke, Substance Painter"
  },
  'character-cinematic': {
    title: {
      en: "Cinematic Character Design & Sculpting Reel",
      pl: "Demoreel projektowania i rzeźbienia postaci filmowych"
    },
    videoUrl: "https://www.youtube.com/embed/eRsGy_fS5h8?autoplay=1",
    description: {
      en: "Focusing on creature sculpting, photorealistic organic skin shading, hair particle grooming, and cloth simulation loops for fantasy and sci-fi characters.",
      pl: "Skupia się na rzeźbieniu stworzeń, fotorealistycznym cieniowaniu skóry organicznej, układaniu włosów oraz pętlach symulacji ubrań dla postaci fantasy i sci-fi."
    },
    duration: "2:15",
    role: {
      en: "Character Technical Director",
      pl: "Dyrektor techniczny postaci"
    },
    resolution: "1080p Cinematic",
    year: "2025",
    software: "ZBrush, Blender, Substance Painter, Marvelous Designer"
  },
  'stylized-worlds': {
    title: {
      en: "Stylized Lighting & Environment Showreel",
      pl: "Demoreel stylizowanego oświetlenia i środowisk"
    },
    videoUrl: "https://www.youtube.com/embed/Y-g0yJ9e398?autoplay=1",
    description: {
      en: "A creative collection of cozy interior models, whimsical vegetation, cartoon particle dynamics, and non-photorealistic rendering shader demonstrations.",
      pl: "Kreatywna kolekcja przytulnych wnętrz, fantazyjnej roślinności, kreskówkowej dynamiki cząsteczek i prezentacji niefotorealistycznych shaderów renderujących."
    },
    duration: "1:30",
    role: {
      en: "Environment Concept & Generalist",
      pl: "Projektant koncepcyjny środowisk i generalista"
    },
    resolution: "4K UHD",
    year: "2025",
    software: "Blender, Photoshop, Unity, Substance Painter"
  }
};

function initShowreel() {
  if (!document.getElementById('showreels')) return;
  const iframe = document.getElementById('showreel-iframe');
  const placeholder = document.getElementById('showreel-placeholder');
  const playBtn = document.getElementById('showreel-play-btn');
  const thumbnails = document.querySelectorAll('.showreel-thumb');
  
  // Metadata fields
  const metaTitle = document.getElementById('showreel-meta-title');
  const metaDesc = document.getElementById('showreel-meta-desc');
  const metaRole = document.getElementById('showreel-meta-role');
  const metaYear = document.getElementById('showreel-meta-year');
  const metaResolution = document.getElementById('showreel-meta-resolution');
  const metaDuration = document.getElementById('showreel-meta-duration');
  const metaSoftware = document.getElementById('showreel-meta-software');

  let activeVideoId = 'vfx-showreel';

  function updateMetadata(id) {
    const data = showreelData[id];
    if (!data) return;

    if (metaTitle) metaTitle.textContent = typeof data.title === 'object' ? data.title[currentLang] : data.title;
    if (metaDesc) metaDesc.textContent = typeof data.description === 'object' ? data.description[currentLang] : data.description;
    if (metaRole) metaRole.textContent = typeof data.role === 'object' ? data.role[currentLang] : data.role;
    if (metaYear) metaYear.textContent = data.year;
    if (metaResolution) metaResolution.textContent = data.resolution;
    if (metaDuration) metaDuration.textContent = data.duration;
    if (metaSoftware) metaSoftware.textContent = data.software;
  }

  // Handle Thumbnail clicks
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const id = thumb.getAttribute('data-id');
      if (!id || id === activeVideoId) return;

      activeVideoId = id;

      // Update active styling
      thumbnails.forEach(t => {
        t.classList.remove('border-white/30', 'bg-white/5');
        t.classList.add('border-white/5', 'bg-black/30');
      });
      thumb.classList.add('border-white/30', 'bg-white/5');
      thumb.classList.remove('border-white/5', 'bg-black/30');

      updateMetadata(id);

      // If already playing or user has started player, auto load iframe
      if (placeholder && placeholder.classList.contains('hidden')) {
        iframe.src = showreelData[id].videoUrl;
      }
    });
  });

  // Handle Play Button on overlay placeholder
  if (playBtn && placeholder && iframe) {
    playBtn.addEventListener('click', () => {
      placeholder.classList.add('hidden');
      iframe.classList.remove('hidden');
      iframe.src = showreelData[activeVideoId].videoUrl;
    });
  }

  // Reload metadata whenever language changes
  window.addEventListener('languageChanged', () => {
    updateMetadata(activeVideoId);
  });
}

// 4. INTERACTIVE COMPARE SLIDER (Matte vs Render)
function initRenderPassSlider() {
  const container = document.getElementById('slider-container');
  const handle = document.getElementById('slider-handle');
  const afterImg = document.getElementById('slider-after');

  if (!container || !handle || !afterImg) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let position = ((x - rect.left) / rect.width) * 100;

    // Constrain position between 0% and 100%
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    // Apply clips and left alignments
    handle.style.left = `${position}%`;
    afterImg.style.clipPath = `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`;
  }

  // Mouse / Touch Events
  const startDrag = (e) => {
    isDragging = true;
    e.preventDefault();
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const moveDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  };

  handle.addEventListener('mousedown', startDrag);
  handle.addEventListener('touchstart', startDrag, { passive: true });

  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchend', stopDrag);

  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('touchmove', moveDrag, { passive: true });

  // Initialize in the center
  setTimeout(() => {
    const rect = container.getBoundingClientRect();
    setSliderPosition(rect.left + rect.width / 2);
  }, 100);
}

// 5. 3D CAMERA ORBIT & MATERIAL PREVIEW SANDBOX
function initSandbox() {
  const shaderBtns = document.querySelectorAll('.shader-btn');
  const renderImg = document.getElementById('sandbox-render-img');
  const slider = document.getElementById('sandbox-rotate-slider');
  const angleDisplay = document.getElementById('sandbox-angle');
  const presetBtns = document.querySelectorAll('.orbit-preset-btn');
  const mockShaderOverlay = document.getElementById('mock-shader-overlay');

  if (!renderImg) return;

  let currentShader = 'pbr';
  let currentAngle = 45;

  // Shader effect styles mapping
  const shaderClasses = {
    'pbr': { filter: 'grayscale(0) brightness(1) contrast(1)', bg: 'bg-transparent' },
    'wire': { filter: 'grayscale(1) brightness(1.3) contrast(1.5)', bg: 'bg-sky-950/20 mix-blend-color-dodge border border-sky-500/20' },
    'metal': { filter: 'grayscale(1) brightness(0.9) contrast(1.3)', bg: 'bg-zinc-800/40 mix-blend-overlay' },
    'rough': { filter: 'grayscale(1) brightness(0.6) contrast(0.8)', bg: 'bg-zinc-900/60 mix-blend-multiply' }
  };

  function updateVisuals() {
    // 1. Update shader properties via CSS filter
    const config = shaderClasses[currentShader];
    renderImg.style.filter = config.filter;
    
    // 2. Mock a wireframe or pass overlay grid/color
    if (mockShaderOverlay) {
      mockShaderOverlay.className = `absolute inset-0 pointer-events-none transition-all duration-300 ${config.bg}`;
      
      if (currentShader === 'wire') {
        mockShaderOverlay.style.backgroundImage = 'radial-gradient(#ffffff0a 1px, transparent 1px)';
        mockShaderOverlay.style.backgroundSize = '12px 12px';
      } else {
        mockShaderOverlay.style.backgroundImage = 'none';
      }
    }

    // 3. Update rotation effect (simulated via scale, translate, skew)
    const scale = 1.05 + (Math.abs(currentAngle - 45) / 100) * 0.05;
    const translate = ((currentAngle - 45) / 15);
    renderImg.style.transform = `scale(${scale}) translateX(${translate}px)`;

    // Update angle text
    if (angleDisplay) {
      angleDisplay.textContent = `${currentAngle}°`;
    }
  }

  // Handle shader button clicks
  shaderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const shader = btn.getAttribute('data-shader');
      if (!shader) return;

      currentShader = shader;

      shaderBtns.forEach(b => {
        b.classList.remove('border-white/30', 'bg-white/5', 'text-white');
        b.classList.add('border-white/5', 'bg-white/[0.01]', 'text-white/40');
      });
      btn.classList.add('border-white/30', 'bg-white/5', 'text-white');
      btn.classList.remove('border-white/5', 'bg-white/[0.01]', 'text-white/40');

      updateVisuals();
    });
  });

  // Handle rotate slider drag
  if (slider) {
    slider.addEventListener('input', (e) => {
      currentAngle = parseInt(e.target.value);
      updateVisuals();
    });
  }

  // Handle Preset Camera Buttons
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const angle = btn.getAttribute('data-angle');
      if (!angle) return;

      currentAngle = parseInt(angle);
      if (slider) slider.value = currentAngle;

      presetBtns.forEach(b => {
        b.classList.remove('border-white/20', 'text-white');
        b.classList.add('border-white/5', 'text-white/40');
      });
      btn.classList.add('border-white/20', 'text-white');
      btn.classList.remove('border-white/5', 'text-white/40');

      updateVisuals();
    });
  });

  updateVisuals();
}

// 6. RENDER GALLERY FILTERS & LIGHTBOX
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxPoly = document.getElementById('lightbox-poly');
  const lightboxSoftware = document.getElementById('lightbox-software');
  const lightboxRenderer = document.getElementById('lightbox-renderer');
  const lightboxTextures = document.getElementById('lightbox-textures');
  const lightboxTime = document.getElementById('lightbox-time');
  const lightboxClose = document.getElementById('lightbox-close');

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      if (!filter) return;

      // Update button styles
      filterBtns.forEach(b => {
        b.classList.remove('bg-white', 'text-black');
        b.classList.add('bg-white/5', 'text-white/60', 'hover:text-white', 'hover:bg-white/10');
      });
      btn.classList.add('bg-white', 'text-black');
      btn.classList.remove('bg-white/5', 'text-white/60', 'hover:text-white', 'hover:bg-white/10');

      // Filter grid
      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox Viewer
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      const img = item.querySelector('img');
      
      if (!lightbox || !img) return;

      lightboxImg.src = img.src;

      // Localized text mappings with default fallback
      const keyTitle = `art-${id}-title`;
      const keyDesc = `art-${id}-desc`;
      const keyPoly = `art-${id}-poly`;
      const keyRenderer = `art-${id}-renderer`;
      const keyTextures = `art-${id}-textures`;
      const keyTime = `art-${id}-time`;

      const title = (translations[currentLang] && translations[currentLang][keyTitle]) || item.querySelector('.gallery-item-title')?.textContent || '';
      const desc = (translations[currentLang] && translations[currentLang][keyDesc]) || item.getAttribute('data-desc') || '';
      const poly = (translations[currentLang] && translations[currentLang][keyPoly]) || item.getAttribute('data-poly') || '';
      const software = item.getAttribute('data-software');
      const renderer = (translations[currentLang] && translations[currentLang][keyRenderer]) || item.getAttribute('data-renderer') || '';
      const textures = (translations[currentLang] && translations[currentLang][keyTextures]) || item.getAttribute('data-textures') || '';
      const renderTime = (translations[currentLang] && translations[currentLang][keyTime]) || item.getAttribute('data-time');

      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxDesc) lightboxDesc.textContent = desc;
      if (lightboxPoly) lightboxPoly.textContent = poly;
      if (lightboxSoftware) lightboxSoftware.textContent = software || '';
      if (lightboxRenderer) lightboxRenderer.textContent = renderer;
      if (lightboxTextures) lightboxTextures.textContent = textures;
      
      if (lightboxTime && renderTime) {
        lightboxTime.closest('div').classList.remove('hidden');
        lightboxTime.textContent = renderTime;
      } else if (lightboxTime) {
        lightboxTime.closest('div').classList.add('hidden');
      }

      lightbox.classList.remove('hidden', 'pointer-events-none');
    });
  });

  // Close Lightbox
  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.add('hidden', 'pointer-events-none');
    });

    // Close on overlay click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden', 'pointer-events-none');
      }
    });
  }
}

// 7. CONTACT FORM & SIMULATED TRANSMISSION CONSOLE
function initContactForm() {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('contact-submit-btn');
  const textConsole = document.getElementById('outbox-console');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = {
      timestamp: new Date().toISOString(),
      sender_name: formData.get('name'),
      sender_email: formData.get('email'),
      project_category: formData.get('category'),
      budget_allocation: formData.get('budget'),
      brief_description: formData.get('message')
    };

    // Form submission UI animation states
    const transmittingTxt = currentLang === 'pl' ? 'Wysyłanie pakietu...' : 'Transmitting Packet...';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `
        <svg class="animate-spin h-4 w-4 text-black mr-2 inline" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>${transmittingTxt}</span>
      `;
    }

    if (textConsole) {
      textConsole.innerHTML = `
<span class="text-white/60">[0.00] CONNECTING TO SMTP_RELAY: PORT 587 // SECURE SSL...</span>
<span class="text-amber-400 animate-pulse">[0.45] SERIALIZING OUTBOUND PAYLOAD BUFFER...</span>
<span class="text-amber-400 animate-pulse">[0.92] ENCRYPTING DATA PACKETS (AES-256)...</span>
      `;
    }

    // Simulate network transmission delay
    setTimeout(() => {
      if (btn) {
        const successTxt = currentLang === 'pl' ? 'Pakiet wysłany pomyślnie' : 'Packet Transmitted Successfully';
        btn.innerHTML = `
          <svg class="h-4 w-4 text-black mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>${successTxt}</span>
        `;
        btn.classList.remove('bg-white', 'hover:bg-zinc-200');
        btn.classList.add('bg-green-500', 'text-black');
      }

      if (textConsole) {
        const standbyTxt = currentLang === 'pl' 
          ? '[GOTOWE] OCZEKUJ NA BEZPOŚREDNIĄ ODPOWIEDŹ MAILOWĄ OD ARTYSTY' 
          : '[READY] STANDBY FOR DIRECT EMAIL FOLLOW-UP FROM THE ARTIST';

        textConsole.innerHTML = `
<span class="text-emerald-400">[0.00] CONNECTION RECOGNIZED: SECURE_POST_SUCCESS_OK</span>
<span class="text-emerald-400">[0.15] BUFFER FLUSHED: 100% SECURE HANDSHAKE COMPLETED</span>
<span class="text-sky-400">[0.32] LOCAL OUTBOX QUEUE RECORD STORED SUCCESSFULLY:</span>

<span class="text-white font-mono text-[10px] bg-white/5 p-2 rounded-sm block whitespace-pre-wrap">
${JSON.stringify(payload, null, 2)}
</span>

<span class="text-emerald-400 animate-pulse font-bold">${standbyTxt}</span>
        `;
      }

      // Reset form fields
      form.reset();

      // Reset button back to default state after 4 seconds
      setTimeout(() => {
        if (btn) {
          btn.disabled = false;
          const defaultBtnTxt = currentLang === 'pl' ? 'Prześlij Brief Kreatywny' : 'Submit Creative Brief';
          btn.innerHTML = `<span>${defaultBtnTxt}</span>`;
          btn.classList.add('bg-white', 'hover:bg-zinc-200');
          btn.classList.remove('bg-green-500', 'text-black');
        }
      }, 4000);

    }, 1500);
  });
}

// 8. MULTI-PAGE PORTFOLIO ROUTER & DETAILED PROJECT SHOWCASES
const projectsData = {
  'brain-boss': {
    category: { en: "Creatures", pl: "Stworzenia" },
    title: { en: "Brain-boss Monster", pl: "Potwór Brain-boss" },
    description: {
      en: "The Brain-boss Monster is a cinematic boss-tier model designed for high-end sci-fi/horror productions. Key features include highly detailed cranial tissue, a biological HUD membrane, mechanical ocular components, and custom-sculpted cybernetic augmentations. Perfect for close-up promotional and game-engine renders.",
      pl: "Brain-boss to model bossa klasy kinowej, zaprojektowany z myślą o produkcjach sci-fi oraz horrorach. Kluczowe cechy to wysoce szczegółowa tkanka czaszkowa, biologiczna membrana HUD, mechaniczne komponenty wzrokowe i ręcznie rzeźbione cybernetyczne ulepszenia."
    },
    images: [
      "./src/assets/images/brain_boss_monster_render_1784056695697.jpg",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/R6MlUcmO1Mc",
      "https://www.youtube.com/embed/eRsGy_fS5h8"
    ],
    specs: {
      poly: { en: "185,000 Triangles", pl: "185 000 trójkątów" },
      software: "ZBrush, Blender, Substance Painter, Marvelous Designer",
      textures: { en: "4K UDIMs, 3 Sets (PBR Metal/Rough)", pl: "4K UDIM, 3 zestawy (PBR Metal/Rough)" },
      renderer: "Cycles & Marmoset Toolbag"
    }
  },
  'finger-monster': {
    category: { en: "Creatures", pl: "Stworzenia" },
    title: { en: "Finger Middle Monster", pl: "Potwór Finger Middle" },
    description: {
      en: "A grotesque creature study exploring fused biological hand structures, skeletal extensions, and decay textures. Built for next-gen horror games, the skin utilizes advanced sub-surface scattering shaders to mimic real flesh permeability.",
      pl: "Groteskowe studium stworzenia badające zrośnięte struktury dłoni, szkieletowe przedłużenia i tekstury rozkładu. Zbudowana z myślą o horrorach nowej generacji, skóra wykorzystuje zaawansowane shadery SSS do naśladowania przepuszczalności prawdziwego ciała."
    },
    images: [
      "./src/assets/images/finger_middle_monster_render_1784056710098.jpg",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516116211223-48a12063836c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/R6MlUcmO1Mc",
      "https://www.youtube.com/embed/Y-g0yJ9e398"
    ],
    specs: {
      poly: { en: "240,000 Triangles", pl: "240 000 trójkątów" },
      software: "ZBrush, Substance Painter, Blender",
      textures: { en: "2 x 4K PBR Sets", pl: "2 zestawy 4K PBR" },
      renderer: "Marmoset Toolbag 4"
    }
  },
  'heavy-troll': {
    category: { en: "Creatures", pl: "Stworzenia" },
    title: { en: "Subterranean Heavy Troll", pl: "Podziemny Ciężki Troll" },
    description: {
      en: "A massive, cave-dwelling creature combining biological anatomy with petrified stone armor plates. High-density displacement maps provide incredibly sharp macro details along the spinal rock formations.",
      pl: "Masywne stworzenie jaskiniowe łączące biologiczną anatomię ze skamieniałymi kamiennymi płytami pancerza. Mapy dyslokacji o wysokiej gęstości zapewniają niezwykle ostre makrodetale wzdłuż kręgosłupa."
    },
    images: [
      "./src/assets/images/subterranean_heavy_troll_3d_1784056723422.jpg",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579783928621-7a13d66a6211?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [],
    specs: {
      poly: { en: "320,000 Triangles", pl: "320 000 trójkątów" },
      software: "ZBrush, Substance Painter, Maya",
      textures: { en: "4 x 4K UDIM Tiles", pl: "4 płytki 4K UDIM" },
      renderer: "Unreal Engine 5.4 Nanite"
    }
  },
  'cyber-mutant': {
    category: { en: "Creatures", pl: "Stworzenia" },
    title: { en: "Soldier - Cyber Mutant", pl: "Żołnierz Cyber-Mutant" },
    description: {
      en: "A shock combat troop model highlighting deep biomechanical synthesis. This character asset features complex high-pressure hydraulic cyber-joints merged cleanly with realistic organic musculature and cyber-optics.",
      pl: "Model żołnierza uderzeniowego podkreślający głęboką syntezę biomechaniczną. Ten zasób postaci zawiera złożone hydrauliczne cyber-stawy wysokiego ciśnienia połączone z realistyczną muskulaturą."
    },
    images: [
      "./src/assets/images/cyber_mutant_soldier_render_1784056738435.jpg",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/eRsGy_fS5h8"
    ],
    specs: {
      poly: { en: "145,000 Triangles", pl: "145 000 trójkątów" },
      software: "Blender, ZBrush, Marvelous Designer, Substance Painter",
      textures: { en: "3 x 4K PBR Sets", pl: "3 zestawy 4K PBR" },
      renderer: "Unreal Engine 5.4 Path Tracer"
    }
  },
  'mechanic': {
    category: { en: "Hard Surface", pl: "Twarde Powierzchnie" },
    title: { en: "Industrial Mechanic", pl: "Industrialny Robot Mechanik" },
    description: {
      en: "An advanced hard-surface robot designed for spacecraft maintenance. Features intricate wiring rigs, exposed power couplers, and custom decals focusing on realistic wear and mechanical friction marks.",
      pl: "Zaawansowany robot o twardych powierzchniach przeznaczony do konserwacji statków kosmicznych. Zawiera skomplikowane okablowanie, odsłonięte złącza zasilania i realistyczne ślady zużycia."
    },
    images: [
      "./src/assets/images/mecha_soldier_1784054708204.jpg",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [],
    specs: {
      poly: { en: "185,000 Polygons", pl: "185 000 wielokątów" },
      software: "Blender, Substance Painter, HardOps",
      textures: { en: "4 x 4K Material Sets", pl: "4 zestawy materiałów 4K" },
      renderer: "Cycles & Marmoset Toolbag"
    }
  },
  'mutated-mechanic': {
    category: { en: "Hard Surface", pl: "Twarde Powierzchnie" },
    title: { en: "Mutated Mechanic Concept", pl: "Koncept Mutującego Mechanika" },
    description: {
      en: "A conceptual piece depicting a starship technician undergoing rapid biological assimilation by an invasive alien crystal virus. Highly expressive concept combining sharp hard-surface plates with crystalline growths.",
      pl: "Element koncepcyjny przedstawiający technika statku gwiezdnego przechodzącego szybką biologiczną asymilację przez inwazyjny kryształowy wirus obcych. Łączy twarde płyty pancerza z kryształami."
    },
    images: [
      "./src/assets/images/mutated_mechanic_concept_art_1784056751081.jpg"
    ],
    videos: [],
    specs: {
      poly: { en: "Conceptual Sculpt (7.5M Polys)", pl: "Rzeźba Koncepcyjna (7.5M wielokątów)" },
      software: "ZBrush, Photoshop, Keyshot",
      textures: { en: "Vertex Painting & Procedural Shaders", pl: "Malowanie wierzchołków i shadery proceduralne" },
      renderer: "Keyshot 11"
    }
  },
  'antennas': {
    category: { en: "Hard Surface", pl: "Twarde Powierzchnie" },
    title: { en: "Sci-Fi Antenna Arrays", pl: "Tablice Antenowe Sci-Fi" },
    description: {
      en: "Deep-space communication relay antenna assets. Includes highly modular components (dishes, solar panels, sensor nodes, and wiring hubs) optimized for fast kitbashing in large-scale orbital space station scenes.",
      pl: "Zasoby anten komunikacyjnych do głębokiej przestrzeni kosmicznej. Zawiera wysoce modułowe komponenty (talerze, panele słoneczne) zoptymalizowane pod kątem szybkiego budowania scen stacji kosmicznych."
    },
    images: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/R6MlUcmO1Mc"
    ],
    specs: {
      poly: { en: "92,000 Polygons", pl: "92 000 wielokątów" },
      software: "Blender, Substance Painter, Unreal Engine 5",
      textures: { en: "2 x 4K Trim Sheets", pl: "2 arkusze tekstur 4K (Trim Sheets)" },
      renderer: "UE5 Nanite"
    }
  },
  'weapons': {
    category: { en: "Hard Surface", pl: "Twarde Powierzchnie" },
    title: { en: "Sci-Fi Heavy Carbines", pl: "Karabiny Energetyczne Sci-Fi" },
    description: {
      en: "A suite of futuristic weapon platforms including plasma carbines and heavy energy cell rifles. Features fully modeled internal mechanics, bolt carriers, and magazine assemblies ready for high-fidelity first-person reload animations.",
      pl: "Zestaw futurystycznej broni palnej, w tym karabinki plazmowe i ciężkie karabiny energetyczne. Posiada w pełni wymodelowane mechanizmy wewnętrzne i magazynki gotowe do animacji przeładowania FPS."
    },
    images: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [],
    specs: {
      poly: { en: "45,000 Triangles", pl: "45 000 trójkątów" },
      software: "Blender, Plasticity, Substance Painter",
      textures: { en: "1 x 4K Texture Set (PBR)", pl: "1 zestaw tekstur 4K (PBR)" },
      renderer: "Marmoset Toolbag 4"
    }
  },
  'wooden-cart': {
    category: { en: "Hard Surface", pl: "Twarde Powierzchnie" },
    title: { en: "Old Wooden Cart Asset Study", pl: "Wózek Drewniany - Studium Zasobu" },
    description: {
      en: "A photorealistic study of weathered medieval transportation props. Focuses on aged wood splintering, rusty steel bindings, dried mud accumulation, and structural splintering under heavy loads.",
      pl: "Fotorealistyczne studium średniowiecznych wozów. Skupia się na pękaniu starzejącego się drewna, zardzewiałych stalowych okuciach, nagromadzonym suchym błocie i pęknięciach strukturalnych."
    },
    images: [
      "https://images.unsplash.com/photo-1599740831144-53c290135327?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/R6MlUcmO1Mc",
      "https://www.youtube.com/embed/Y-g0yJ9e398"
    ],
    specs: {
      poly: { en: "18,000 Triangles", pl: "18 000 trójkątów" },
      software: "Blender, Substance Painter, ZBrush",
      textures: { en: "1 x 2K PBR Set", pl: "1 zestaw 2K PBR" },
      renderer: "Cycles & UE5 Substrate"
    }
  },
  'game-ready': {
    category: { en: "Hard Surface", pl: "Twarde Powierzchnie" },
    title: { en: "Game Ready Temple Pillar", pl: "Filar Świątyni - Model do Gry" },
    description: {
      en: "Architectural component study optimized for extreme low-draw-call rendering pipelines. It features custom lod hierarchies, tight lightmap UV channels, and baked tangent-space normal maps from an 8.5M high-poly master sculpt.",
      pl: "Studium komponentu architektonicznego zoptymalizowane pod kątem minimalnego zużycia zasobów procesora graficznego. Posiada niestandardowe hierarchie lodów oraz ciasno upakowane kanały UV dla oświetlenia."
    },
    images: [
      "./src/assets/images/ancient_temple_1784054697109.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [
      "https://www.youtube.com/embed/Y-g0yJ9e398"
    ],
    specs: {
      poly: { en: "4,500 Triangles", pl: "4 500 trójkątów" },
      software: "Blender, Substance Painter, ZBrush",
      textures: { en: "1 x 2K Packed PBR Set", pl: "1 zestaw skompaktowany 2K PBR" },
      renderer: "Marmoset Toolbag 4"
    }
  },
  'graphics-2d': {
    category: { en: "2D Art", pl: "Grafika 2D" },
    title: { en: "Matte Paintings & Environment Art", pl: "Malowidła Matowe i Grafika Środowiska" },
    description: {
      en: "A collection of 2D digital illustrations and matte background composites. Ranging from dense cyberpunk street blocks to ambient mechanical storage hubs, these backdrops are used directly in film layout setups.",
      pl: "Kolekcja cyfrowych ilustracji 2D i kompozycji tła typu matte painting. Od gęstych cyberpunkowych ulic po magazyny mechaniczne, tła te są używane bezpośrednio w scenografii filmowej."
    },
    images: [
      "./src/assets/images/cyberpunk_street_1784054685596.jpg",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579783928621-7a13d66a6211?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516116211223-48a12063836c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ],
    videos: [],
    specs: {
      poly: { en: "2D Vector & Raster Layers", pl: "Dwuwarstwowe grafiki rastrowe i wektorowe" },
      software: "Adobe Photoshop, Clip Studio Paint",
      textures: { en: "Non-applicable (Digital Illustration)", pl: "Nie dotyczy (Ilustracja cyfrowa)" },
      renderer: "Photoshop Canvas Engine"
    }
  },
  'icons-2d': {
    category: { en: "2D Art", pl: "Grafika 2D" },
    title: { en: "Interactive Spell & Skill Icons", pl: "Interaktywne Ikony Czarów i Umiejętności" },
    description: {
      en: "A comprehensive interface panel presenting a rich set of 2D ability icons custom-styled for dark fantasy and cyberpunk tactical RPGs. Select any slot below to load spell descriptions, cast limits, and PBR channel previews.",
      pl: "Kompleksowy panel interfejsu prezentujący bogaty zestaw ikon umiejętności 2D, dostosowanych do mrocznego fantasy oraz cyberpunkowych gier RPG. Wybierz dowolne gniazdo poniżej, aby załadować szczegóły."
    },
    images: [],
    videos: [],
    specs: {
      poly: { en: "24 Unique Vector Designs", pl: "24 unikalne projekty wektorowe" },
      software: "Adobe Illustrator, Photoshop, Figma",
      textures: { en: "Exported in 512px png with custom alpha channels", pl: "Eksport w formacie PNG 512px z kanałem alfa" },
      renderer: "Raster Canvas Export"
    }
  }
};

window.changeProjectMedia = function(projectId, type, src, thumbnailIndex) {
  const viewport = document.getElementById(`showcase-viewport-${projectId}`);
  if (!viewport) return;

  if (type === 'image') {
    viewport.innerHTML = `
      <img src="${src}" alt="Showcase view" referrerpolicy="no-referrer" class="w-full h-full object-contain transition-all duration-300" />
    `;
  } else if (type === 'video') {
    viewport.innerHTML = `
      <iframe src="${src}" class="absolute inset-0 w-full h-full border-0 rounded-sm" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  }

  // Update active thumbnail borders
  const thumbsContainer = document.getElementById(`thumbnails-${projectId}`);
  if (thumbsContainer) {
    const buttons = thumbsContainer.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      if (i === thumbnailIndex) {
        buttons[i].classList.add('border-white', 'scale-105');
        buttons[i].classList.remove('border-white/10');
      } else {
        buttons[i].classList.remove('border-white', 'scale-105');
        buttons[i].classList.add('border-white/10');
      }
    }
  }
};

function renderAllProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  let html = '';
  
  Object.keys(projectsData).forEach(projectId => {
    const project = projectsData[projectId];
    
    // Assemble initial preview media
    let initialType = 'image';
    let initialSrc = '';
    
    if (project.images && project.images.length > 0) {
      initialType = 'image';
      initialSrc = project.images[0];
    } else if (project.videos && project.videos.length > 0) {
      initialType = 'video';
      initialSrc = project.videos[0];
    }

    // Build interactive thumbnail row
    let thumbsHTML = '';
    let totalThumbs = 0;

    if ((project.images && project.images.length > 0) || (project.videos && project.videos.length > 0)) {
      thumbsHTML += `<div id="thumbnails-${projectId}" class="flex flex-wrap gap-2 pt-2">`;
      
      // Images thumbnails
      if (project.images) {
        project.images.forEach((img, idx) => {
          const isActive = (idx === 0);
          thumbsHTML += `
            <button 
              onclick="changeProjectMedia('${projectId}', 'image', '${img}', ${totalThumbs})"
              class="w-14 h-9 border ${isActive ? 'border-white scale-105' : 'border-white/10'} hover:border-white/40 rounded-xs overflow-hidden bg-zinc-950 transition-all cursor-pointer focus:outline-none"
              title="View image ${idx + 1}"
            >
              <img src="${img}" alt="thumbnail" referrerpolicy="no-referrer" class="w-full h-full object-cover" />
            </button>
          `;
          totalThumbs++;
        });
      }

      // Videos thumbnails
      if (project.videos) {
        project.videos.forEach((video, idx) => {
          const isVideoActive = (project.images.length === 0 && idx === 0);
          thumbsHTML += `
            <button 
              onclick="changeProjectMedia('${projectId}', 'video', '${video}', ${totalThumbs})"
              class="w-14 h-9 border ${isVideoActive ? 'border-white scale-105' : 'border-white/10'} hover:border-white/40 rounded-xs overflow-hidden bg-black flex items-center justify-center transition-all cursor-pointer focus:outline-none"
              title="Play video presentation"
            >
              <svg class="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6V4z"/>
              </svg>
            </button>
          `;
          totalThumbs++;
        });
      }
      
      thumbsHTML += `</div>`;
    }

    // Interactive Media block (or empty if none)
    let mediaBlockHTML = '';
    if (initialSrc) {
      let mainMediaContent = '';
      if (initialType === 'image') {
        mainMediaContent = `
          <img src="${initialSrc}" alt="Showcase view" referrerpolicy="no-referrer" class="w-full h-full object-contain transition-all duration-300" />
        `;
      } else {
        mainMediaContent = `
          <iframe src="${initialSrc}" class="absolute inset-0 w-full h-full border-0 rounded-sm" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
      }

      mediaBlockHTML = `
        <div class="space-y-2">
          <div id="showcase-viewport-${projectId}" class="aspect-video w-full max-w-[720px] bg-zinc-950 border border-white/10 rounded-sm overflow-hidden relative shadow-2xl">
            ${mainMediaContent}
          </div>
          ${thumbsHTML}
        </div>
      `;
    }

    // Special custom layout for icons-2d
    let customIconsHTML = '';
    if (projectId === 'icons-2d') {
      customIconsHTML += `
        <div class="space-y-3 max-w-[720px]">
          <div class="space-y-0.5">
            <span class="font-mono text-[9px] tracking-widest text-white/30 uppercase block font-semibold">INTERACTIVE RPG ASSETS DECK</span>
            <p class="text-[9px] text-white/40 font-mono">Click any spell slot below to test HUD interactions.</p>
          </div>
          <div class="grid grid-cols-6 sm:grid-cols-8 gap-1" id="rpg-icons-deck">
      `;
      
      const iconColors = ['amber', 'emerald', 'sky', 'rose', 'indigo', 'purple', 'violet', 'cyan'];
      const spellNamesEn = [
        "Phoenix Strike", "Decay Burst", "Chronoshift", "Aegis Dome", "Shadow Step", "Static Discharge", "Blaze Nova", "Frost Spike",
        "Mana Siphon", "Iron Will", "Divine Ward", "Venom Spit", "Vortex Pull", "Wind Walk", "Earth Slam", "Holy Radiance",
        "Grave Grasp", "Spectral Blade", "Mind Flay", "Solar Flare", "Prism Beam", "Soul Feast", "Abyssal Rift", "Cataclysm"
      ];
      const spellNamesPl = [
        "Uderzenie Feniksa", "Rozbłysk Rozkładu", "Przesunięcie Czasu", "Kopuła Egidy", "Krok Cienia", "Wyładowanie Statyczne", "Rozbłysk Płomieni", "Kolce Mrozu",
        "Syfon Many", "Żelazna Wola", "Boska Osłona", "Plunięcie Jadem", "Przyciąganie Wiru", "Wiatr", "Trzęsienie Ziemi", "Święty Blask",
        "Uścisk Grobu", "Widmowe Ostrze", "Bicz Umysłu", "Rozbłysk Słoneczny", "Pryzmatyczny Promień", "Uczta Dusz", "Otchłań szczeliny", "Kataklizm"
      ];
      
      for (let i = 1; i <= 24; i++) {
        const color = iconColors[(i - 1) % iconColors.length];
        const enName = spellNamesEn[i - 1];
        const plName = spellNamesPl[i - 1];
        
        customIconsHTML += `
          <div 
            class="aspect-square rounded-sm border border-white/10 bg-zinc-900 flex items-center justify-center relative cursor-pointer group hover:border-white/40 hover:shadow-lg transition-all duration-300"
            onclick="selectRpgIcon(${i}, '${enName}', '${plName}', '${color}')"
          >
            <div class="absolute inset-0.5 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div class="w-7 h-7 rounded bg-black/60 border border-white/5 flex items-center justify-center transition-all group-hover:scale-105">
              <svg class="w-3.5 h-3.5 text-white/50 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        `;
      }
      
      customIconsHTML += `
          </div>
          
          <div class="p-3 bg-[#0a0a0a] border border-white/10 rounded-sm" id="rpg-icon-inspector">
            <div class="flex items-center gap-2 mb-1.5">
              <div class="w-8 h-8 rounded bg-amber-950/40 border border-amber-500/30 flex items-center justify-center transition-all duration-300" id="rpg-inspector-color-block">
                <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h5 class="font-sans text-xs text-white font-medium uppercase tracking-wider animate-pulse" id="rpg-inspector-title">Phoenix Strike</h5>
                <span class="font-mono text-[7px] text-white/40 uppercase tracking-widest block" id="rpg-inspector-subtitle">SLOT 01 // COST: 15 MANA // CAST: INSTANT</span>
              </div>
            </div>
            <p class="text-[9px] font-mono text-white/50 leading-relaxed" id="rpg-inspector-desc">
              Engulfs the target in solar flames, dealing heavy damage and applying a burn effect over 8 seconds.
            </p>
          </div>
        </div>
      `;
    }

    // 5. Build full section structure
    html += `
      <section id="project-${projectId}" class="py-12 lg:py-0 border-b border-white/5 bg-[#080808] relative scroll-mt-16 lg:h-screen lg:max-h-[700px] lg:min-h-[480px] flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8 w-full space-y-4">
          <!-- Title Header -->
          <div>
            <span class="font-mono text-[8px] tracking-[0.4em] text-white/40 uppercase block mb-1 font-semibold">
              ${project.category[currentLang]} // PIPELINE STAGE
            </span>
            <h2 class="text-lg sm:text-xl font-light tracking-widest text-white uppercase font-sans">
              ${project.title[currentLang]}
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
            <!-- Left Side: Media Showcase -->
            <div class="sm:col-span-8 space-y-3">
              ${mediaBlockHTML}
              ${projectId === 'icons-2d' ? customIconsHTML : ''}
            </div>

            <!-- Right Side: Description Text (Project Summary) -->
            <div class="sm:col-span-4 sm:pt-0 pt-2">
              <div class="p-5 bg-white/[0.01] border border-white/5 rounded-sm space-y-2">
                <span class="font-mono text-[8px] tracking-widest text-white/30 uppercase block font-semibold">PROJECT SUMMARY</span>
                <p class="text-[11px] font-mono text-white/60 leading-relaxed uppercase">
                  ${project.description[currentLang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
}

function initRouter() {
  // First, render all projects directly on the page
  renderAllProjects();

  function handleRoute() {
    const hash = window.location.hash || '';
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }

  window.addEventListener('hashchange', handleRoute);
  
  // Listen for language changes to re-render all project content dynamically
  window.addEventListener('languageChanged', () => {
    renderAllProjects();
  });

  handleRoute();
}

window.selectRpgIcon = function(slotNum, nameEn, namePl, colorName) {
  const title = document.getElementById('rpg-inspector-title');
  const subtitle = document.getElementById('rpg-inspector-subtitle');
  const desc = document.getElementById('rpg-inspector-desc');
  const colorBlock = document.getElementById('rpg-inspector-color-block');

  if (!title || !desc || !subtitle) return;

  const activeName = currentLang === 'pl' ? namePl : nameEn;
  title.textContent = activeName;
  
  subtitle.textContent = currentLang === 'pl' 
    ? `Gniazdo ${slotNum < 10 ? '0' : ''}${slotNum} // KOSZT CZARU: ${slotNum * 15} MANY // CZAS ODNOWIENIA: NATYCHMIAST`
    : `SLOT ${slotNum < 10 ? '0' : ''}${slotNum} // SPELL COST: ${slotNum * 15} MANA // CAST TIME: INSTANT`;

  const descriptionsEn = [
    "Engulfs the target in solar flames, dealing heavy damage and applying a burn effect over 8 seconds.",
    "Releases a pestilent cloud of poison, slow-poisoning all nearby targets with escalating decay metrics.",
    "Manipulates temporal mechanics to reverse damage taken in the last 4 seconds for immediate recovery.",
    "Generates a protective forcefield dome, mitigating 85% of incoming physical and laser attacks.",
    "Bypasses physical obstacles by stepping through shadow rifts, placing the artist directly behind target.",
    "Unleashes static electricity from biological cyberware, stunning up to 5 adjacent targets in series.",
    "Ignites a firestorm in a circular radius, leaving scorched earth that damages enemies stepping on it.",
    "Launches a sharp ice projectile that pierces shields and decreases movement speed on high impact.",
    "Extracts energy waves from the targets neural core to replenish active mana reserves instantaneously.",
    "Hardens internal alloy skeletons to resist knockback effects and heavy impact parameters.",
    "Creates a divine defensive sigil on selected allies, granting full crowd control immunity.",
    "Sprays corrosive acid, breaking down armor values and reducing projectile effectiveness.",
    "Creates a strong local vacuum that pulls all targets into a single point for efficient area damage.",
    "Wraps the artist in wind currents, raising evasion parameters and movement speed dramatically.",
    "Slams structural ground to trigger localized shockwaves, interrupting spellcasting parameters.",
    "Emits a localized white-light energy flare, healing allies and blinding enemy optics.",
    "Spawns skeletal grasps from decayed ground, rooting the target in place for 4 seconds.",
    "Conjures a temporary high-frequency light saber that ignores standard armor and parry values.",
    "Directly beams psychic static into the targets brain, disabling active spellcasting channels.",
    "Triggers an intense solar detonation, revealing stealth units and dealing area light damage.",
    "Focuses a prism beam on a single node, melting armor plates over a 5 second continuous hold.",
    "Feasts upon the spiritual residue of fallen targets, granting permanent shield stacks.",
    "Opens a pocket dimension rift to pull random items or trigger gravity disruptions.",
    "Triggers a localized cataclysmic earthquake, rendering all landscape components unstable."
  ];

  const descriptionsPl = [
    "Otacza cel słonecznymi płomieniami, zadając poważne obrażenia i nakładając efekt oparzenia trwający 8 sekund.",
    "Uwalnia trującą chmurę, zarażając wszystkie pobliskie cele ze stopniowo rosnącym współczynnikiem rozkładu.",
    "Manipuluje czasem, aby cofnąć obrażenia odniesione w ciągu ostatnich 4 sekund dla natychmiastowego uzdrowienia.",
    "Generuje ochronną kopułę pola siłowego, redukując 85% nadchodzących ataków fizycznych i laserowych.",
    "Omija fizyczne przeszkody, przechodząc przez szczeliny cienia, umieszczając artystę bezpośrednio za celem.",
    "Wyładowuje elektryczność statyczną z cybernetycznych wszczepów, paraliżując seryjnie do 5 sąsiednich celów.",
    "Wznieca burzę ognistą w promieniu kołowym, pozostawiając spaloną ziemię raniącą wrogów.",
    "Wystrzeliwuje ostry lodowy pocisk, który przebija tarcze i zmniejsza prędkość ruchu przy silnym uderzeniu.",
    "Pobiera fale energii z rdzenia neuronowego celu, aby natychmiast uzupełnić aktywne rezerwy many.",
    "Utwardza wewnętrzny szkielet ze stopu metali, aby oprzeć się efektom odrzutu i silnym uderzeniom.",
    "Tworzy boski znak obronny na sojusznikach, dając pełną niewrażliwość na kontrolę tłumu.",
    "Rozpyla żrący kwas, niszcząc pancerz i zmniejszając skuteczność pocisków przeciwnika.",
    "Tworzy silną lokalną próżnię, która przyciąga wszystkie cele do jednego punktu dla uderzenia obszarowego.",
    "Owija artystę prądami wiatru, dramatycznie zwiększając parametry uników i prędkość ruchu.",
    "Uderza w podłoże, wywołując lokalne wstrząsy i przerywając rzucanie zaklęć przez przeciwników.",
    "Emituje błysk jasnej energii leczący sojuszników i oślepiający optykę wroga.",
    "Sprawia, że z ziemi wyrastają kościane uściski, unieruchamiając cel w miejscu na 4 sekundy.",
    "Przywołuje tymczasowy miecz świetlny wysokiej częstotliwości, ignorujący standardowy pancerz i bloki.",
    "Wysyła szum psychiczny bezpośrednio do umysłu celu, wyłączając aktywne kanały rzucania czarów.",
    "Wyzala intensywną eksplozję słoneczną, ujawniając jednostki w ukryciu i zadając obrażenia obszarowe.",
    "Skupia promień pryzmatyczny na pojedynczym węźle, topiąc płyty pancerza w ciągu 5 sekund skupienia.",
    "Karmi się duchową pozostałością po pokonanych celach, dając stałe punkty tarczy ochronnej.",
    "Otwiera szczelinę kieszonkowego wymiaru, wywołując zakłócenia grawitacyjne i losowe efekty.",
    "Wyzala potężne, katastrofalne trzęsienie ziemi, czyniąc wszystkie elementy otoczenia niestabilnymi."
  ];

  desc.textContent = currentLang === 'pl' ? descriptionsPl[slotNum - 1] : descriptionsEn[slotNum - 1];

  if (colorBlock) {
    colorBlock.className = `w-12 h-12 rounded bg-${colorName}-950/40 border border-${colorName}-500/30 flex items-center justify-center transition-all duration-300`;
    const svg = colorBlock.querySelector('svg');
    if (svg) {
      svg.className = `w-6 h-6 text-${colorName}-400`;
    }
  }
};


