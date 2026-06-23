// ==========================================
//  MOBILE MENU TOGGLE
// ==========================================
(function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isOpen = false;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            isOpen = !isOpen;
            mobileMenu.classList.toggle('open', isOpen);
            
            // تغيير الأيقونة بين القائمة والإغلاق
            const icon = menuBtn.querySelector('i');
            if (isOpen) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // إغلاق القائمة عند الضغط على أي رابط في الموبايل
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                isOpen = false;
                const icon = menuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });

        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (isOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                mobileMenu.classList.remove('open');
                isOpen = false;
                const icon = menuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    }
})();

// ==========================================
//  SMOOTH SCROLL FOR ANCHOR LINKS (تحسين إضافي)
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
//  CONSOLE WELCOME (لمسة شخصية)
// ==========================================
console.log("%c🚀 سامي للمعلوماتية والحلول الرقمية", "font-size:20px; font-weight:bold; color:#10b981;");
console.log("%cFull-Stack Developer | UI/UX Designer", "font-size:14px; color:#94a3b8;");
console.log("%chttps://github.com/SamiDevelopers", "font-size:12px; color:#64748b;");
console.log("%c📱 تابعنا على فيسبوك: https://www.facebook.com/profile.php?id=61580529359263", "font-size:12px; color:#1877F2;");