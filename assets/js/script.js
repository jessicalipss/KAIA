const brandToggle = document.getElementById('brandToggle');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarlabel = document.getElementById('brand-icon');
const content = document.querySelector('.content');
const collapse = new bootstrap.Collapse(sidebarMenu, { toggle: false });

let sidebarOpen = false;

brandToggle.addEventListener('click', () => {
    sidebarOpen = !sidebarOpen;

    if (sidebarOpen) {
        collapse.show();
        brandToggle.textContent = 'AIAK.';
    } else {
        collapse.hide();
        brandToggle.textContent = '.KAIA';
    }

    brandToggle.classList.toggle('rotated', sidebarOpen);
    brandToggle.classList.toggle('sidebar-opened', sidebarOpen);
    content.classList.toggle('shifted', sidebarOpen);
});




 