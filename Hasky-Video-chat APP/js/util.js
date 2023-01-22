function hideSidebar(e) {
    console.log(e);
    const sidebarShowEle = document.getElementById("sidebar-expand-span");
    sidebarShowEle.style.display='none';
    const sidebarHidedEle = document.getElementById("sidebar-hide-span");
    sidebarHidedEle.style.display = 'block';
    const sidePanelEle = document.getElementById('members__container');
    sidePanelEle.classList.remove('sidebar-expand');
    sidePanelEle.classList.add('sidebar-hide');
    const participantesLabel = document.getElementById('participantes-label');
    participantesLabel.style.display='none';
    const sidebarHeaderEle = document.getElementById('members__header');
    sidebarHeaderEle.style.width = '70px';

}

function showSidebar(e) {
    console.log(e);
    const sidebarHeaderEle = document.getElementById('members__header');
    sidebarHeaderEle.style.width = '218px';
    const sidebarShowEle = document.getElementById("sidebar-expand-span");
    sidebarShowEle.style.display='block';
    const sidebarHidedEle = document.getElementById("sidebar-hide-span");
    sidebarHidedEle.style.display = 'none';
    const sidePanelEle = document.getElementById('members__container');
    sidePanelEle.classList.add('sidebar-expand');
    sidePanelEle.classList.remove('sidebar-hide');
    const participantesLabel = document.getElementById('participantes-label');
    participantesLabel.style.display='block';
    
}

document.getElementById("sidebar-expand-span").addEventListener("click", hideSidebar);

document.getElementById("sidebar-hide-span").addEventListener("click", showSidebar);

