// تسجيل الخروج
function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        alert('تم تسجيل الخروج بنجاح!');
        // يمكن إضافة كود لإعادة التوجيه إلى صفحة تسجيل الدخول
    }
}

// إضافة تفاعل للروابط
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل الروابط في القائمة الجانبية
    const links = document.querySelectorAll('.sidebar nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة الكلاس active من جميع الروابط
            links.forEach(l => l.classList.remove('active'));
            
            // إضافة الكلاس active للرابط المضغوط
            this.classList.add('active');
            
            // التمرير للقسم المطلوب
            const targetId = this.getAttribute('href');
            if (targetId !== '#home') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // تفاعل غرف الاجتماعات
    const rooms = document.querySelectorAll('.room:not(.add-room)');
    rooms.forEach(room => {
        room.addEventListener('click', function() {
            const roomName = this.querySelector('p').textContent;
            alert(`جاري فتح غرفة: ${roomName}`);
        });
    });

    // إضافة غرفة جديدة
    const addRoom = document.querySelector('.add-room');
    if (addRoom) {
        addRoom.addEventListener('click', function() {
            const roomName = prompt('أدخل اسم الغرفة الجديدة:');
            if (roomName) {
                alert(`تم إنشاء غرفة: ${roomName}`);
            }
        });
    }

    // زر بدء المكالمة
    const startVideoBtn = document.querySelector('.start-video');
    if (startVideoBtn) {
        startVideoBtn.addEventListener('click', function() {
            alert('جاري بدء مكالمة الفيديو...');
            this.textContent = 'جاري الاتصال...';
            setTimeout(() => {
                this.textContent = 'بدء المكالمة';
            }, 2000);
        });
    }

    // أزرار المنشورات
    const postButtons = document.querySelectorAll('.post-actions button');
    postButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.split(' ')[0];
            alert(`تم ${action}`);
        });
    });

    // زر إضافة منشور جديد
    const addPostBtn = document.querySelector('.add-post');
    if (addPostBtn) {
        addPostBtn.addEventListener('click', function() {
            const postContent = prompt('اكتب محتوى المنشور:');
            if (postContent) {
                alert('تم نشر المنشور بنجاح!');
            }
        });
    }

    // أزرار طلب الاستشارة
    const consultantButtons = document.querySelectorAll('.consultant-card button');
    consultantButtons.forEach(button => {
        button.addEventListener('click', function() {
            const consultantName = this.parentElement.querySelector('h4').textContent;
            alert(`تم إرسال طلب استشارة إلى ${consultantName}`);
        });
    });

    // تأثير hover للبطاقات
    const cards = document.querySelectorAll('.room, .consultant-card, .knowledge-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // رسالة ترحيب عند تحميل الصفحة
    console.log('مرحباً بك في Rekapp! 🎉');
});

// وظيفة لعرض الوقت الحالي
function displayCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ar-SA', {
        hour: '2-digit',
        minute: '2-digit'
    });
    return timeString;
}

// تحديث الوقت كل دقيقة (اختياري)
setInterval(() => {
    console.log('الوقت الحالي:', displayCurrentTime());
}, 60000);
