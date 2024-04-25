function open3DObject() {
    var windowFeatures = 'width=800,height=600';
    var newWindow = window.open('3d_viewer.html', '3D Object Viewer', windowFeatures);
    if (newWindow == null || typeof(newWindow) == 'undefined') {
        alert('Please enable pop-ups for this site to view the 3D object.');
    }
}
