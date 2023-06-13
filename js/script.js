// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// Input Budget/pcs
var budget = document.querySelector("#budget");

// Fungsi untuk memformat angka dengan menambahkan titik setiap tiga angka
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Budget diupdate secara realtime dengan memunculkan . sebelum 3 angka
if(budget === true) {
    budget.addEventListener("input", function () {
        // Menghapus semua karakter non-digit dari input
        var inputValue = this.value.replace(/\D/g, "");
    
        // Memformat input dengan menambahkan titik setiap tiga angka
        var formattedValue = formatNumber(inputValue);
    
        // Memasukkan nilai yang telah diformat kembali ke input
        this.value = formattedValue;
    })
}

// Animasi muncul dari kiri dan kanan
$(window).on("load", function () {
    $(".animasi-kiri").addClass("muncul");
    $(".animasi-kanan").addClass("muncul");
    $(".animasi-atas-bawah").addClass("muncul");
    $(".animasi-bawah-atas").addClass("muncul");
});

// Parallax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Animasi navigation bar
    if(wScroll > 0) {
        $(".navbar").addClass("scroll");
    } else if (wScroll == 0) {
        $(".navbar").removeClass("scroll");
    }

    // Mengecek apakah ada class tersebut
    if ($('.animasi-atas-bawah-per-item').length) {
        //animasi atas bawah per item
        if (wScroll > $(".animasi-atas-bawah-per-item").offset().top - 400) {
            $(".animasi-atas-bawah-per-item").each(function (i) {
                setTimeout(function () {
                $(".animasi-atas-bawah-per-item").eq(i).addClass("muncul");
              }, 300 * (i + 1));
            });
        }
    }

    // Mengecek apakah ada class tersebut
    if ($(".animasi-atas-bawah-keseluruhan-scroll-reasons").length) {
        if (wScroll > $(".animasi-atas-bawah-keseluruhan-scroll-reasons").offset().top - 400) {
            // animasi why choose us dari atas ke bawah secara keseluruhan
            $(".animasi-atas-bawah-keseluruhan-scroll-reasons").addClass("muncul");
        }
    }

    // Mengecek apakah ada class tersebut
    if ($(".animasi-atas-bawah-keseluruhan-scroll-clients").length) {
        if (wScroll > $(".animasi-atas-bawah-keseluruhan-scroll-clients").offset().top - 400) {
            // animasi our valuable client dari atas ke bawah secara keseluruhan
            $(".animasi-atas-bawah-keseluruhan-scroll-clients").addClass("muncul");
        }
    }
});
