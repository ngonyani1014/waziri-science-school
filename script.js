document.addEventListener('DOMContentLoaded', function () {
    // 1. Kitendo cha kuonyesha na kuficha Password ukibonyeza Jicho
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // 2. Kudhibiti Modal ya Usajili (Register Popup)
    const openRegisterLink = document.getElementById('openRegisterLink');
    const registerModal = document.getElementById('register-modal');
    const closeRegisterBtn = document.getElementById('closeRegisterBtn');
    const resetPasswordLink = document.querySelector('.reset-link');

    if (openRegisterLink && registerModal) {
        openRegisterLink.addEventListener('click', function (e) {
            e.preventDefault();
            registerModal.style.display = 'flex';
        });
    }

    if (resetPasswordLink && registerModal) {
        resetPasswordLink.addEventListener('click', function (e) {
            e.preventDefault();
            alert("Tafadhali jisajili upya ili kuweka taarifa mpya na kupata Username na Password mpya.");
            registerModal.style.display = 'flex';
        });
    }

    if (closeRegisterBtn && registerModal) {
        closeRegisterBtn.addEventListener('click', function () {
            registerModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function (e) {
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    // 3. Ujumbe maalumu wa mafanikio kwenye usajili
    const registrationForm = document.getElementById('registration-form');
    const regSuccessMsg = document.getElementById('reg-success-msg');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            if (regSuccessMsg) {
                regSuccessMsg.style.color = '#28a745';
                regSuccessMsg.style.fontWeight = 'bold';
                regSuccessMsg.style.marginTop = '10px';
                regSuccessMsg.textContent = "You have been successfully registered in Waziri Science School";
            }

            setTimeout(function () {
                registrationForm.reset();
                if (regSuccessMsg) regSuccessMsg.textContent = '';
                if (registerModal) registerModal.style.display = 'none';
            }, 3500);
        });
    }

    // 4. Mfumo wa Login
    const mainLoginForm = document.getElementById('main-login-form');
    const authScreen = document.getElementById('auth-screen');
    const mainApp = document.getElementById('main-app');
    const errorMsg = document.getElementById('error-msg');

    if (mainLoginForm) {
        mainLoginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const usernameInput = document.getElementById('username').value.trim();
            const passInput = document.getElementById('password').value.trim();

            if (usernameInput !== "" && passInput !== "") {
                if (authScreen) authScreen.style.display = 'none';
                if (mainApp) mainApp.style.display = 'block';
            } else {
                if (errorMsg) {
                    errorMsg.textContent = "Tafadhali jaza Username na Password!";
                }
            }
        });
    }

    // 5. Kitendo cha Kutoka (Logout)
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            if (mainApp) mainApp.style.display = 'none';
            if (authScreen) authScreen.style.display = 'flex';
            if (mainLoginForm) mainLoginForm.reset();
        });
    }

    // 6. Sidebar Menu (Dashboard Toggle)
    const dashboardBtn = document.getElementById('dashboard-btn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    if (dashboardBtn && sidebar) {
        dashboardBtn.addEventListener('click', function () {
            sidebar.style.width = '280px';
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', function () {
            sidebar.style.width = '0';
        });
    }

    // 7. KUUNGANISHA DASHBOARD MENU NA SEHEMU HUSIKA KWENYE INDEX.HTML
    const sidebarLinks = document.querySelectorAll('#sidebar details ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const hrefAttr = this.getAttribute('href');
            
            // Kama inaelekeza kwenye sehemu fulani ndani ya ukurasa yenye alama ya #
            if (hrefAttr.startsWith('#')) {
                e.preventDefault();
                const targetId = hrefAttr.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    if (sidebar) sidebar.style.width = '0'; // Funga menyu pembeni kiotomatiki
                }
            } else {
                if (sidebar) sidebar.style.width = '0';
            }
        });
    });

    // 8. Mfumo wa Kubadili Lugha (Kiswahili / English)
    const translations = {
        sw: {
            auth_welcome: "Karibu",
            auth_subtitle: "Ingia kwenye Mfumo wa Waziri Science School",
            remember_me: " Nikumbuke",
            reset_pass: "Umesahau Nenosiri?",
            login_submit: "INGIA",
            not_registered: "Hujajisajili?",
            click_register: "Bofya hapa kujisajili",
            school_title: "Waziri Science School",
            logout_btn: "Toka",
            lang_label: "Lugha",
            dashboard_title: "Dashboard",
            phy_notes: "Physics Notes",
            math_notes: "Mathematics Notes",
            phy_papers: "Physics Past Papers",
            math_papers: "Mathematics Past Papers",
            phy_videos: "Physics Videos",
            math_videos: "Mathematics Videos",
            welcome_title: "Karibu sana Waziri Science School!",
            welcome_desc: "Hapa utapata Notes, Past Papers, na Video za masomo ya Physics na Mathematics kuanzia Form 1 hadi Form 6 kwa urahisi kabisa.",
            sec_phy_papers: "Mitihani ya Zamani ya Physics (PDF)",
            sec_math_papers: "Mitihani ya Zamani ya Mathematics (PDF)",
            contact_title: "Mawasiliano",
            phone_text: "Simu:"
        },
        en: {
            auth_welcome: "Welcome",
            auth_subtitle: "Log into Waziri Science School Portal",
            remember_me: " Remember me",
            reset_pass: "Reset Password?",
            login_submit: "LOGIN",
            not_registered: "Not Registered?",
            click_register: "Click here to register",
            school_title: "Waziri Science School",
            logout_btn: "Logout",
            lang_label: "Language",
            dashboard_title: "Dashboard",
            phy_notes: "Physics Notes",
            math_notes: "Mathematics Notes",
            phy_papers: "Physics Past Papers",
            math_papers: "Mathematics Past Papers",
            phy_videos: "Physics Videos",
            math_videos: "Mathematics Videos",
            welcome_title: "Welcome to Waziri Science School!",
            welcome_desc: "Here you can easily access Notes, Past Papers, and Videos for Physics and Mathematics from Form 1 to Form 6.",
            sec_phy_papers: "Physics Past Papers (PDF)",
            sec_math_papers: "Mathematics Past Papers (PDF)",
            contact_title: "Contact Us",
            phone_text: "Phone:"
        }
    };

    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    const langSwBtn = document.getElementById('lang-sw');
    const langEnBtn = document.getElementById('lang-en');

    if (langSwBtn) {
        langSwBtn.addEventListener('click', function (e) {
            e.preventDefault();
            changeLanguage('sw');
        });
    }

    if (langEnBtn) {
        langEnBtn.addEventListener('click', function (e) {
            e.preventDefault();
            changeLanguage('en');
        });
    }

    // 9. Kuzuia Download na Right-Click kwenye PDF na Ukurasa
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
            e.preventDefault();
            alert("Kitendo hiki kimezuiwa kwenye mfumo huu.");
        }
    });
});

// Kitendo cha kufungua na kuficha mada ndogo (Toggle Sections)
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}
    // Kufunga sidebar mtumiaji akibonyeza link ya video kwenye dashboard
    const sidebarVideoLinks = document.querySelectorAll('#sidebar details details ul li a');
    sidebarVideoLinks.forEach(link => {
        link.addEventListener('click', function () {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.style.width = '0'; // Inajificha pembeni baada ya kugusa video husika
            }
        });
    });
    // Kufunga Sidebar kiotomatiki mtumiaji akibonyeza link yoyote ndani ya Dashboard Menu
    const allSidebarLinks = document.querySelectorAll('#sidebar a');
    allSidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Ruhusu tu isifunike kama ni kitufe cha kufunga (close-btn) ambacho tayari kinafanya kazi
            if (this.id !== 'close-btn') {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) {
                    sidebar.style.width = '0'; // Inaficha sidebar pembeni
                }
            }
        });
    });

    // Ili kuhakikisha hata zile link za ndani ya subtopics (kama video topics) zikibonyezwa sidebar inajificha
    const allTopicLinks = document.querySelectorAll('#sidebar ul li a');
    allTopicLinks.forEach(link => {
        link.addEventListener('click', function () {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.style.width = '0'; // Inaficha sidebar pembeni
            }
        });
    });
        // 8. Mfumo wa Kubadili Lugha (Kiswahili / English)
    const translations = {
        sw: {
            auth_welcome: "Karibu",
            auth_subtitle: "Ingia kwenye Mfumo wa Waziri Science School",
            remember_me: " Nikumbuke",
            reset_pass: "Umesahau Nenosiri?",
            login_submit: "INGIA",
            not_registered: "Hujajisajili?",
            click_register: "Bofya hapa kujisajili",
            school_title: "Waziri Science School",
            logout_btn: "Toka",
            lang_label: "Lugha",
            dashboard_title: "Dashboard",
            phy_notes: "Physics Notes",
            math_notes: "Mathematics Notes",
            phy_papers: "Physics Past Papers",
            math_papers: "Mathematics Past Papers",
            phy_videos: "Physics Videos",
            math_videos: "Mathematics Videos",
            welcome_title: "Karibu sana Waziri Science School!",
            welcome_desc: "Hapa utapata Notes, Past Papers, na Video za masomo ya Physics na Mathematics kuanzia Form 1 hadi Form 6 kwa urahisi kabisa.",
            sec_phy_papers: "Mitihani ya Zamani ya Physics (PDF)",
            sec_math_papers: "Mitihani ya Zamani ya Mathematics (PDF)",
            contact_title: "Mawasiliano",
            phone_text: "Simu:",
            whatsapp_text: "WhatsApp:",
            email_text: "Barua pepe:",
            website_text: "Tovuti:",
            footer_rights: "© 2026 Waziri Science School. Haki zote zimehifadhiwa.",
            footer_author: "Imeandaliwa na Mwl. Waziri Rajabu Ngonyani"
        },
        en: {
            auth_welcome: "Welcome",
            auth_subtitle: "Log into Waziri Science School Portal",
            remember_me: " Remember me",
            reset_pass: "Reset Password?",
            login_submit: "LOGIN",
            not_registered: "Not Registered?",
            click_register: "Click here to register",
            school_title: "Waziri Science School",
            logout_btn: "Logout",
            lang_label: "Language",
            dashboard_title: "Dashboard",
            phy_notes: "Physics Notes",
            math_notes: "Mathematics Notes",
            phy_papers: "Physics Past Papers",
            math_papers: "Mathematics Past Papers",
            phy_videos: "Physics Videos",
            math_videos: "Mathematics Videos",
            welcome_title: "Welcome to Waziri Science School!",
            welcome_desc: "Here you can easily access Notes, Past Papers, and Videos for Physics and Mathematics from Form 1 to Form 6.",
            sec_phy_papers: "Physics Past Papers (PDF)",
            sec_math_papers: "Mathematics Past Papers (PDF)",
            contact_title: "Contact Us",
            phone_text: "Phone:",
            whatsapp_text: "WhatsApp:",
            email_text: "Email:",
            website_text: "Website:",
            footer_rights: "© 2026 Waziri Science School. All rights reserved.",
            footer_author: "Prepared by Tchr. Waziri Rajabu Ngonyani"
        }
    };
// Function ya ku-toggle section yoyote kwa kubofya kitufe chake (Inatumika na Physics na Math)
function toggleSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
        if (targetSection.style.display === "block") {
            targetSection.style.display = "none";
        } else {
            targetSection.style.display = "block";
        }
    }
}

// Inaficha section zote za physics na math ikibonyezwa sehemu yoyote nje
document.addEventListener('click', function(event) {
    const clickedBtn = event.target.closest("button");
    
    // Orodha ya section zote za Physics na Math
    const sections = [
        'form1-physics-section', 'form2-physics-section', 'form3-physics-section', 
        'form4-physics-section', 'form5-physics-section', 'form6-physics-section',
        'form1-math-section', 'form2-math-section', 'form3-math-section', 
        'form4-math-section', 'form5-math-section', 'form6-math-section'
    ];

    sections.forEach(secId => {
        const secElement = document.getElementById(secId);
        if (secElement && secElement.style.display === "block") {
            if (!secElement.contains(event.target) && (!clickedBtn || !clickedBtn.getAttribute('onclick')?.includes(secId))) {
                secElement.style.display = "none";
            }
        }
    });
});