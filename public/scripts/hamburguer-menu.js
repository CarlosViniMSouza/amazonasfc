// document.getElementById('nav-toggle').onclick = function() {
//     document.getElementById("nav-content").classList.toggle("hidden");
// }

document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('hidden');
});

window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 600; // Set the breakpoint as per your requirements

    Alpine.data('isSmallScreen', function() {
        return isSmallScreen;
    });
});
