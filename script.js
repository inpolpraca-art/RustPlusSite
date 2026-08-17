// ========================================
// RUST+ WEBSITE
// ========================================


// Плавная прокрутка к возможностям
function scrollToFeatures() {

    const section = document.getElementById("features");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}


// Показываем уведомление
function showMessage() {

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// Анимация карточек при появлении
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(".feature-card").forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


// Изменяем статус сервера
function updateServerStatus() {

    const players = document.querySelector(".server-info strong");

    if (!players) {
        return;
    }

    const randomPlayers =
        Math.floor(Math.random() * 35) + 130;

    players.textContent =
        randomPlayers + " / 200";

}


// Обновляем отображение игроков
updateServerStatus();


// Каждые 10 секунд меняем количество игроков
setInterval(updateServerStatus, 10000);


// Эффект появления сайта
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});