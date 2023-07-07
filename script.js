// Show only the section with the given id
function showSection(id) {
  // Get all content divs
  var sections = document.getElementsByClassName('content');

  // Hide all sections
  for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
  }

  // Show the selected section
  document.getElementById(id).style.display = 'block';
}

// Show the 'about' section by default when the page loads
window.onload = function() {
  showSection('about');
};