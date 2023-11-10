function loadProfileImage(input) {
const profileImage = document.getElementById('profile-image');
const patoLabel = document.getElementById('pato-label');
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImage.src = e.target.result;
        patoLabel.style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }